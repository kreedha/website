# Kreedha - From Farm to Soul

A full-stack eCommerce website for selling premium Makhana (Fox Nuts) with Cash on Delivery support, built with Next.js, MongoDB, and TailwindCSS.

## Features

### Customer Features
- 🏠 **Beautiful Homepage** - Hero section with featured products
- 🛍️ **Product Catalog** - Browse products by category
- 🔍 **Product Details** - Detailed product pages with image gallery
- 🛒 **Shopping Cart** - Add/remove items, update quantities
- 💳 **Checkout** - Simple checkout process with COD
- 📱 **Fully Responsive** - Works perfectly on all devices

### Admin Features
- 🔐 **Secure Login** - JWT-based authentication
- 📊 **Dashboard** - Overview of products, orders, and revenue
- 📦 **Product Management** - Add, edit, delete products
- 📋 **Order Management** - View and update order status
- 📧 **Email Notifications** - Automatic email alerts for new orders
- 💬 **WhatsApp Notifications** - Optional WhatsApp alerts

## Tech Stack

- **Frontend**: Next.js 14, React, TailwindCSS
- **Backend**: Next.js API Routes
- **Database**: MongoDB with Mongoose
- **State Management**: Zustand
- **Authentication**: JWT
- **Notifications**: Nodemailer, WhatsApp Business API
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js 18+ installed
- MongoDB Atlas account (or local MongoDB)
- Email account for notifications (Gmail recommended)
- WhatsApp Business API (optional)

### Installation

1. **Clone or download the project**

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**

Create a `.env` file in the root directory:

```env
# MongoDB Connection
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/kreedha-store?retryWrites=true&w=majority

# JWT Secret (generate a random string)
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production

# Admin Credentials
ADMIN_EMAIL=admin@kreedha.com
ADMIN_PASSWORD=admin123

# Email Configuration
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password
EMAIL_FROM=your-email@gmail.com

# WhatsApp Configuration (optional)
WHATSAPP_PHONE_NUMBER=+919876543210
WHATSAPP_API_URL=https://graph.facebook.com/v17.0/YOUR_PHONE_NUMBER_ID/messages
WHATSAPP_ACCESS_TOKEN=your-whatsapp-access-token

# Site URL
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

4. **Run the development server**
```bash
npm run dev
```

5. **Open your browser**
Navigate to `http://localhost:3000`

## Deployment to Vercel

### Step 1: Prepare Your Project

1. Make sure all your code is committed to a Git repository (GitHub, GitLab, or Bitbucket)

2. Push your code:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin YOUR_REPOSITORY_URL
git push -u origin main
```

### Step 2: Set Up MongoDB Atlas

1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a free account or sign in
3. Create a new cluster (Free tier is sufficient)
4. Click "Connect" → "Connect your application"
5. Copy the connection string
6. Replace `<password>` with your database password
7. Replace `<dbname>` with `makhana-store`

### Step 3: Set Up Email (Gmail)

1. Go to your Google Account settings
2. Enable 2-Factor Authentication
3. Generate an App Password:
   - Go to Security → 2-Step Verification → App passwords
   - Select "Mail" and "Other (Custom name)"
   - Copy the generated password
4. Use this app password in your `.env` file

### Step 4: Deploy to Vercel

1. Go to [Vercel](https://vercel.com)
2. Sign up or log in with your Git provider
3. Click "Add New Project"
4. Import your repository
5. Configure your project:
   - **Framework Preset**: Next.js
   - **Root Directory**: ./
   - **Build Command**: `npm run build`
   - **Output Directory**: .next

6. Add Environment Variables:
   Click "Environment Variables" and add all variables from your `.env` file:
   - `MONGODB_URI`
   - `JWT_SECRET`
   - `ADMIN_EMAIL`
   - `ADMIN_PASSWORD`
   - `EMAIL_HOST`
   - `EMAIL_PORT`
   - `EMAIL_USER`
   - `EMAIL_PASSWORD`
   - `EMAIL_FROM`
   - `NEXT_PUBLIC_SITE_URL` (use your Vercel URL)
   - WhatsApp variables (if using)

7. Click "Deploy"

8. Wait for deployment to complete (usually 2-3 minutes)

9. Your site will be live at `https://your-project-name.vercel.app`

### Step 5: Configure Custom Domain (Optional)

1. In Vercel dashboard, go to your project
2. Click "Settings" → "Domains"
3. Add your custom domain
4. Follow the DNS configuration instructions
5. Update `NEXT_PUBLIC_SITE_URL` in environment variables

### Step 6: Test Your Deployment

1. Visit your deployed site
2. Browse products
3. Add items to cart
4. Complete a test order
5. Log in to admin panel at `/admin/login`
6. Check if email notifications are working

## Admin Panel Access

- **URL**: `https://your-site.com/admin/login`
- **Email**: Use the email from `ADMIN_EMAIL` env variable
- **Password**: Use the password from `ADMIN_PASSWORD` env variable

**Important**: Change the default admin credentials after first login!

## Adding Products

1. Log in to the admin panel
2. Go to "Products"
3. Click "Add Product"
4. Fill in product details:
   - Name
   - Description
   - Price and Original Price (for discounts)
   - Category (Plain, Flavored, Premium, Gift Pack)
   - Weight (e.g., 250g, 500g, 1kg)
   - Stock quantity
   - Image URLs (use image hosting services like Cloudinary, ImgBB, or Imgur)
   - Featured checkbox (to show on homepage)
5. Click "Create Product"

## Managing Orders

1. Log in to the admin panel
2. Go to "Orders"
3. View all orders with customer details
4. Click the eye icon to view full order details
5. Update order status:
   - Pending → Confirmed → Processing → Shipped → Delivered
   - Or mark as Cancelled if needed

## Email Notifications

When a new order is placed:
- Admin receives an email with order details
- Customer information and delivery address included
- WhatsApp notification sent (if configured)

## Troubleshooting

### MongoDB Connection Issues
- Verify your connection string is correct
- Check if your IP is whitelisted in MongoDB Atlas
- Ensure database user has read/write permissions

### Email Not Sending
- Verify Gmail App Password is correct
- Check if 2FA is enabled on your Google account
- Ensure EMAIL_USER and EMAIL_PASSWORD are set correctly

### Build Errors on Vercel
- Check build logs in Vercel dashboard
- Ensure all dependencies are in package.json
- Verify environment variables are set correctly

### Admin Login Not Working
- Check if ADMIN_EMAIL and ADMIN_PASSWORD are set
- Clear browser cache and try again
- Check browser console for errors

## Project Structure

```
makhana-website/
├── app/
│   ├── api/              # API routes
│   ├── admin/            # Admin panel pages
│   ├── products/         # Product pages
│   ├── cart/             # Cart page
│   ├── checkout/         # Checkout page
│   └── order-success/    # Order confirmation
├── components/           # Reusable components
├── lib/                  # Utility functions
├── models/               # MongoDB models
├── store/                # Zustand store
└── public/               # Static assets
```

## Security Notes

- Change default admin credentials immediately
- Use strong JWT_SECRET (random 32+ character string)
- Never commit `.env` file to Git
- Use HTTPS in production (Vercel provides this automatically)
- Regularly update dependencies

## Support

For issues or questions:
1. Check the troubleshooting section
2. Review Vercel deployment logs
3. Check MongoDB Atlas logs
4. Verify all environment variables are set correctly

## License

This project is open source and available for personal and commercial use.

---

Built with ❤️ using Next.js and MongoDB
