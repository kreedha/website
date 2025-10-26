# ✅ Makhana Store - Complete Setup Checklist

Use this checklist to ensure everything is set up correctly!

---

## 📋 Pre-Setup Checklist

- [ ] Node.js 18+ installed
- [ ] Git installed (for deployment)
- [ ] Code editor installed (VS Code recommended)
- [ ] Modern web browser (Chrome/Firefox/Edge)

---

## 🔧 Initial Setup

### Step 1: Install Dependencies
- [ ] Opened terminal in project folder
- [ ] Ran `npm install`
- [ ] All packages installed successfully
- [ ] No error messages

### Step 2: MongoDB Setup
- [ ] Created MongoDB Atlas account
- [ ] Created free cluster
- [ ] Created database user
- [ ] Whitelisted IP (0.0.0.0/0)
- [ ] Copied connection string
- [ ] Replaced `<password>` with actual password
- [ ] Added database name to connection string

### Step 3: Email Setup
- [ ] Have Gmail account
- [ ] Enabled 2-Step Verification
- [ ] Generated App Password
- [ ] Copied 16-character password
- [ ] Saved password securely

### Step 4: Environment Variables
- [ ] Created `.env` file in root folder
- [ ] Copied content from `.env.example`
- [ ] Added MongoDB connection string
- [ ] Set JWT_SECRET (32+ characters)
- [ ] Set ADMIN_EMAIL
- [ ] Set ADMIN_PASSWORD
- [ ] Added Gmail credentials
- [ ] Set NEXT_PUBLIC_SITE_URL

---

## 🚀 First Run

### Step 5: Start Development Server
- [ ] Ran `npm run dev`
- [ ] Server started without errors
- [ ] Opened http://localhost:3000
- [ ] Homepage loads correctly
- [ ] No console errors

### Step 6: Add Sample Data (Optional)
- [ ] Ran `npm run seed`
- [ ] 8 products added successfully
- [ ] Products visible on homepage
- [ ] Products page shows all items

---

## 🔐 Admin Panel Testing

### Step 7: Admin Login
- [ ] Went to http://localhost:3000/admin/login
- [ ] Entered admin email from .env
- [ ] Entered admin password from .env
- [ ] Successfully logged in
- [ ] Redirected to dashboard

### Step 8: Dashboard Check
- [ ] Dashboard loads correctly
- [ ] Statistics display (may be 0 initially)
- [ ] No error messages
- [ ] Navigation menu works

### Step 9: Product Management
- [ ] Clicked "Products" in admin menu
- [ ] Products list displays
- [ ] Clicked "Add Product"
- [ ] Modal opens correctly
- [ ] Filled in product details:
  - [ ] Name
  - [ ] Description
  - [ ] Price
  - [ ] Category
  - [ ] Weight
  - [ ] Stock
  - [ ] Image URL
- [ ] Clicked "Create Product"
- [ ] Product created successfully
- [ ] Product appears in list
- [ ] Tested "Edit" button
- [ ] Tested "Delete" button

### Step 10: Order Management
- [ ] Clicked "Orders" in admin menu
- [ ] Orders page loads
- [ ] Status filters work
- [ ] (Will be empty until first order)

---

## 🛍️ Customer Flow Testing

### Step 11: Homepage
- [ ] Homepage loads correctly
- [ ] Hero section displays
- [ ] Featured products show (if any)
- [ ] Features section visible
- [ ] Footer displays correctly

### Step 12: Product Browsing
- [ ] Clicked "Products" in navbar
- [ ] All products display
- [ ] Category filters work
- [ ] Product cards show correctly
- [ ] Images load properly
- [ ] Prices display correctly

### Step 13: Product Details
- [ ] Clicked on a product
- [ ] Product detail page loads
- [ ] All images display
- [ ] Description shows
- [ ] Price and stock visible
- [ ] Quantity selector works
- [ ] "Add to Cart" button works

### Step 14: Shopping Cart
- [ ] Added product to cart
- [ ] Toast notification appears
- [ ] Cart icon shows count
- [ ] Clicked cart icon
- [ ] Cart page loads
- [ ] Product displays correctly
- [ ] Quantity +/- buttons work
- [ ] Remove button works
- [ ] Total calculates correctly

### Step 15: Checkout Process
- [ ] Clicked "Proceed to Checkout"
- [ ] Checkout page loads
- [ ] Order summary displays
- [ ] Filled in customer details:
  - [ ] Name
  - [ ] Email
  - [ ] Phone
  - [ ] Address
  - [ ] City
  - [ ] State
  - [ ] Pincode
- [ ] Added order notes (optional)
- [ ] Clicked "Place Order"
- [ ] Order submitted successfully

### Step 16: Order Confirmation
- [ ] Redirected to success page
- [ ] Order number displays
- [ ] Success message shows
- [ ] Cart is now empty

---

## 📧 Notification Testing

### Step 17: Email Notification
- [ ] Checked admin email inbox
- [ ] Order notification received
- [ ] Email contains:
  - [ ] Order number
  - [ ] Customer details
  - [ ] Delivery address
  - [ ] Order items
  - [ ] Total amount
- [ ] Email formatted correctly

### Step 18: Admin Order View
- [ ] Logged into admin panel
- [ ] Clicked "Orders"
- [ ] New order appears in list
- [ ] Clicked eye icon to view details
- [ ] Order details modal opens
- [ ] All information correct
- [ ] Tested status update buttons
- [ ] Status changed successfully

---

## 🎨 Responsive Design Testing

### Step 19: Mobile View
- [ ] Opened browser DevTools
- [ ] Switched to mobile view
- [ ] Homepage looks good
- [ ] Products page responsive
- [ ] Cart works on mobile
- [ ] Checkout form usable
- [ ] Admin panel accessible

### Step 20: Tablet View
- [ ] Switched to tablet view
- [ ] All pages display correctly
- [ ] Navigation works
- [ ] Forms are usable

---

## 🚀 Pre-Deployment Checklist

### Step 21: Code Preparation
- [ ] All features tested
- [ ] No console errors
- [ ] Removed test data (if needed)
- [ ] Updated admin credentials
- [ ] Verified .env is in .gitignore

### Step 22: Git Setup
- [ ] Ran `git init`
- [ ] Ran `git add .`
- [ ] Ran `git commit -m "Initial commit"`
- [ ] Created GitHub repository
- [ ] Added remote origin
- [ ] Pushed to GitHub

### Step 23: Vercel Preparation
- [ ] Created Vercel account
- [ ] Linked GitHub account
- [ ] Prepared environment variables
- [ ] Reviewed deployment settings

---

## 🌐 Deployment Checklist

### Step 24: Vercel Deployment
- [ ] Imported project to Vercel
- [ ] Added all environment variables
- [ ] Started deployment
- [ ] Deployment successful
- [ ] Visited live URL
- [ ] Site loads correctly

### Step 25: Production Testing
- [ ] Homepage works
- [ ] Products display
- [ ] Cart functions
- [ ] Checkout works
- [ ] Admin login works
- [ ] Can add products
- [ ] Can manage orders
- [ ] Email notifications work

### Step 26: Post-Deployment
- [ ] Updated NEXT_PUBLIC_SITE_URL
- [ ] Redeployed
- [ ] Tested complete flow again
- [ ] Shared site URL with team

---

## 🔒 Security Checklist

### Step 27: Security Review
- [ ] Changed default admin password
- [ ] Used strong JWT_SECRET
- [ ] .env not committed to Git
- [ ] HTTPS enabled (automatic with Vercel)
- [ ] MongoDB IP whitelist configured
- [ ] Email credentials secure
- [ ] Tested admin authentication

---

## 📊 Final Checks

### Step 28: Performance
- [ ] Pages load quickly
- [ ] Images optimized
- [ ] No console warnings
- [ ] Mobile performance good

### Step 29: Content
- [ ] Added real products
- [ ] Product images high quality
- [ ] Descriptions accurate
- [ ] Prices correct
- [ ] Stock quantities set

### Step 30: Business Ready
- [ ] Contact information updated
- [ ] Email notifications working
- [ ] Order workflow tested
- [ ] Admin trained on panel
- [ ] Customer support ready

---

## 🎉 Launch Checklist

### Final Steps Before Going Live
- [ ] All above items checked
- [ ] Backup plan in place
- [ ] Monitoring set up
- [ ] Support email ready
- [ ] Social media prepared
- [ ] Marketing materials ready

### Go Live!
- [ ] Announced launch
- [ ] Monitoring orders
- [ ] Responding to customers
- [ ] Processing orders promptly

---

## 📈 Post-Launch Checklist

### Week 1
- [ ] Monitor daily orders
- [ ] Check email notifications
- [ ] Update stock levels
- [ ] Respond to inquiries
- [ ] Fix any issues

### Monthly
- [ ] Review analytics
- [ ] Update products
- [ ] Backup database
- [ ] Update dependencies
- [ ] Review security

---

## 🆘 Troubleshooting Checklist

If something doesn't work:

- [ ] Checked browser console for errors
- [ ] Verified .env file exists and is correct
- [ ] Confirmed MongoDB connection
- [ ] Tested email credentials
- [ ] Cleared browser cache
- [ ] Restarted development server
- [ ] Checked Vercel deployment logs
- [ ] Reviewed error messages
- [ ] Consulted documentation
- [ ] Checked MongoDB Atlas status

---

## 📞 Support Resources

- [ ] Read README.md
- [ ] Reviewed DEPLOYMENT.md
- [ ] Checked SETUP_INSTRUCTIONS.txt
- [ ] Consulted Next.js docs
- [ ] Checked MongoDB docs
- [ ] Reviewed Vercel docs

---

## ✅ Completion Status

**Setup Progress**: ___/30 steps completed

**Deployment Progress**: ___/6 steps completed

**Security Progress**: ___/7 steps completed

**Launch Progress**: ___/6 steps completed

---

## 🎯 Quick Reference

### Important URLs
- **Local Site**: http://localhost:3000
- **Admin Panel**: http://localhost:3000/admin/login
- **Production**: https://your-site.vercel.app

### Important Commands
```bash
npm install          # Install dependencies
npm run dev          # Start development
npm run seed         # Add sample data
npm run build        # Build for production
```

### Important Files
- `.env` - Environment variables
- `README.md` - Documentation
- `DEPLOYMENT.md` - Deployment guide

---

**Last Updated**: Check this list regularly as you progress!

**Status**: 
- [ ] Setup Complete
- [ ] Testing Complete
- [ ] Deployed
- [ ] Live and Running

---

🎉 **Congratulations on completing your setup!**
