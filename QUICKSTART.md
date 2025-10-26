# Quick Start Guide

Get your Makhana store running in 5 minutes!

## Step 1: Install Dependencies

```bash
npm install
```

## Step 2: Set Up Environment Variables

Create a `.env` file in the root directory and copy from `.env.example`:

```env
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
ADMIN_EMAIL=admin@makhana.com
ADMIN_PASSWORD=admin123
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your_email@gmail.com
EMAIL_PASSWORD=your_app_password
EMAIL_FROM=your_email@gmail.com
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### Quick Setup for Testing:

**MongoDB**: Use [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) free tier
**Email**: Use Gmail with [App Password](https://support.google.com/accounts/answer/185833)

## Step 3: Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Step 4: Access Admin Panel

1. Go to [http://localhost:3000/admin/login](http://localhost:3000/admin/login)
2. Login with credentials from `.env`:
   - Email: `admin@makhana.com`
   - Password: `admin123`

## Step 5: Add Products

1. In admin panel, click **Products** → **Add Product**
2. Fill in product details
3. For images, use free hosting:
   - [Imgur](https://imgur.com)
   - [ImgBB](https://imgbb.com)
   - Or any image URL

## Step 6: Test the Store

1. Go to homepage
2. Browse products
3. Add to cart
4. Complete checkout
5. Check admin panel for new order
6. Check email for notification

## Deploy to Vercel

```bash
# Push to GitHub
git init
git add .
git commit -m "Initial commit"
git push origin main

# Then deploy on Vercel
# Visit vercel.com and import your repository
```

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions.

## Common Commands

```bash
# Development
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

## Project Structure

```
├── app/
│   ├── page.tsx              # Homepage
│   ├── products/             # Product pages
│   ├── cart/                 # Shopping cart
│   ├── checkout/             # Checkout page
│   ├── admin/                # Admin panel
│   └── api/                  # API routes
├── components/               # React components
├── models/                   # Database models
├── lib/                      # Utilities
└── store/                    # State management
```

## Key Features

✅ Responsive design  
✅ Product catalog with categories  
✅ Shopping cart  
✅ Cash on Delivery checkout  
✅ Admin dashboard  
✅ Product management  
✅ Order management  
✅ Email notifications  
✅ WhatsApp notifications (optional)  

## Need Help?

- Check [README.md](./README.md) for full documentation
- See [DEPLOYMENT.md](./DEPLOYMENT.md) for deployment guide
- Review troubleshooting section in README

## Default Admin Credentials

⚠️ **Change these immediately after first login!**

- Email: Set in `.env` (ADMIN_EMAIL)
- Password: Set in `.env` (ADMIN_PASSWORD)

---

Happy selling! 🎉
