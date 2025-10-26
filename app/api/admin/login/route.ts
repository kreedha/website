import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Admin from '@/models/Admin';
import { comparePassword, generateToken, hashPassword } from '@/lib/auth';

export async function POST(request: NextRequest) {
  try {
    await connectDB();
    
    const { email, password } = await request.json();
    
    // Check if admin exists
    let admin = await Admin.findOne({ email: email.toLowerCase() });
    
    // If no admin exists and this is the default admin, create it
    if (!admin && email === process.env.ADMIN_EMAIL) {
      const hashedPassword = await hashPassword(process.env.ADMIN_PASSWORD || 'admin123');
      admin = await Admin.create({
        email: email.toLowerCase(),
        password: hashedPassword,
        name: 'Admin',
      });
    }
    
    if (!admin) {
      return NextResponse.json(
        { success: false, error: 'Invalid credentials' },
        { status: 401 }
      );
    }
    
    // Verify password
    const isValidPassword = await comparePassword(password, admin.password);
    
    if (!isValidPassword) {
      return NextResponse.json(
        { success: false, error: 'Invalid credentials' },
        { status: 401 }
      );
    }
    
    // Generate token
    const token = generateToken({ id: admin._id, email: admin.email });
    
    return NextResponse.json({
      success: true,
      token,
      admin: {
        id: admin._id,
        email: admin.email,
        name: admin.name,
      },
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
