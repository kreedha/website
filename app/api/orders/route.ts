import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Order from '@/models/Order';
import Product from '@/models/Product';
import { sendOrderEmail, sendWhatsAppNotification } from '@/lib/notifications';

export async function POST(request: NextRequest) {
  try {
    await connectDB();
    
    const body = await request.json();
    const { items, customer, notes } = body;
    
    // Validate items and calculate total
    let totalAmount = 0;
    const orderItems = [];
    
    for (const item of items) {
      const product = await Product.findById(item._id);
      
      if (!product) {
        return NextResponse.json(
          { success: false, error: `Product ${item.name} not found` },
          { status: 404 }
        );
      }
      
      if (product.stock < item.quantity) {
        return NextResponse.json(
          { success: false, error: `Insufficient stock for ${product.name}` },
          { status: 400 }
        );
      }
      
      totalAmount += product.price * item.quantity;
      
      orderItems.push({
        product: product._id,
        productName: product.name,
        productImage: product.images[0],
        quantity: item.quantity,
        price: product.price,
      });
      
      // Update stock
      product.stock -= item.quantity;
      await product.save();
    }
    
    // Generate order number
    const orderNumber = `ORD${Date.now()}`;
    
    // Create order
    const order = await Order.create({
      orderNumber,
      items: orderItems,
      customer,
      totalAmount,
      paymentMethod: 'COD',
      status: 'Pending',
      notes,
    });
    
    // Send notifications
    const orderDetails = {
      orderNumber,
      items: orderItems,
      customer,
      totalAmount,
      notes,
    };
    
    // Send email notification (non-blocking)
    sendOrderEmail(orderDetails).catch(console.error);
    
    // Send WhatsApp notification (non-blocking)
    sendWhatsAppNotification(orderDetails).catch(console.error);
    
    return NextResponse.json({
      success: true,
      order: {
        orderNumber,
        totalAmount,
        status: order.status,
      },
    });
  } catch (error: any) {
    console.error('Order creation error:', error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
