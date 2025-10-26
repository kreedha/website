import nodemailer from 'nodemailer';
import { COMPANY_INFO } from './constants';

// Email notification
export async function sendOrderEmail(orderDetails: any) {
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: parseInt(process.env.EMAIL_PORT || '587'),
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="text-align: center; margin-bottom: 20px;">
          <h1 style="color: #f0730b; margin: 0;">${COMPANY_INFO.name}</h1>
          <p style="color: #666; font-style: italic; margin: 5px 0;">${COMPANY_INFO.tagline}</p>
        </div>
        <h2 style="color: #f0730b;">New Order Received! 🎉</h2>
        <p><strong>Order Number:</strong> ${orderDetails.orderNumber}</p>
        <p><strong>Customer Name:</strong> ${orderDetails.customer.name}</p>
        <p><strong>Phone:</strong> ${orderDetails.customer.phone}</p>
        <p><strong>Email:</strong> ${orderDetails.customer.email}</p>
        <p><strong>Total Amount:</strong> ₹${orderDetails.totalAmount}</p>
        
        <h3>Delivery Address:</h3>
        <p>
          ${orderDetails.customer.address}<br>
          ${orderDetails.customer.city}, ${orderDetails.customer.state}<br>
          Pincode: ${orderDetails.customer.pincode}
        </p>
        
        <h3>Order Items:</h3>
        <ul>
          ${orderDetails.items.map((item: any) => `
            <li>${item.productName} - Qty: ${item.quantity} - ₹${item.price * item.quantity}</li>
          `).join('')}
        </ul>
        
        ${orderDetails.notes ? `<p><strong>Notes:</strong> ${orderDetails.notes}</p>` : ''}
        
        <p style="margin-top: 20px; color: #666;">
          Please login to your admin panel to manage this order.
        </p>
        
        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; font-size: 12px; color: #888;">
          <p style="margin: 5px 0;"><strong>${COMPANY_INFO.name}</strong> - ${COMPANY_INFO.tagline}</p>
          <p style="margin: 5px 0;">Proprietor: ${COMPANY_INFO.proprietor}</p>
          <p style="margin: 5px 0;">Contact: ${COMPANY_INFO.phones.join(', ')}</p>
          <p style="margin: 5px 0;">Email: ${COMPANY_INFO.supportEmail}</p>
          <p style="margin: 5px 0;">GST: ${COMPANY_INFO.gst} | UDYAM: ${COMPANY_INFO.udyam}</p>
        </div>
      </div>
    `;

    await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to: process.env.ADMIN_EMAIL,
      subject: `New Order: ${orderDetails.orderNumber}`,
      html: emailHtml,
    });

    return { success: true };
  } catch (error) {
    console.error('Email notification error:', error);
    return { success: false, error };
  }
}

// WhatsApp notification
export async function sendWhatsAppNotification(orderDetails: any) {
  try {
    if (!process.env.WHATSAPP_ACCESS_TOKEN || !process.env.WHATSAPP_API_URL) {
      console.log('WhatsApp not configured, skipping notification');
      return { success: false, message: 'WhatsApp not configured' };
    }

    const message = `
🛒 *${COMPANY_INFO.name} - New Order!*

Order: ${orderDetails.orderNumber}
Customer: ${orderDetails.customer.name}
Phone: ${orderDetails.customer.phone}
Amount: ₹${orderDetails.totalAmount}

Items:
${orderDetails.items.map((item: any) => `• ${item.productName} x${item.quantity}`).join('\n')}

Address: ${orderDetails.customer.address}, ${orderDetails.customer.city}, ${orderDetails.customer.state} - ${orderDetails.customer.pincode}

---
${COMPANY_INFO.name} - ${COMPANY_INFO.tagline}
    `.trim();

    const response = await fetch(process.env.WHATSAPP_API_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.WHATSAPP_ACCESS_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        messaging_product: 'whatsapp',
        to: process.env.WHATSAPP_PHONE_NUMBER,
        type: 'text',
        text: { body: message },
      }),
    });

    if (response.ok) {
      return { success: true };
    } else {
      return { success: false, error: await response.text() };
    }
  } catch (error) {
    console.error('WhatsApp notification error:', error);
    return { success: false, error };
  }
}
