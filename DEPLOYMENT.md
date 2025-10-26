# Complete Deployment Guide for Vercel + MongoDB

This guide will walk you through deploying your Makhana eCommerce store to Vercel with MongoDB Atlas.

## Prerequisites Checklist

- [ ] Node.js 18+ installed
- [ ] Git installed
- [ ] GitHub/GitLab/Bitbucket account
- [ ] Vercel account (free)
- [ ] MongoDB Atlas account (free)
- [ ] Gmail account (for notifications)

## Part 1: Set Up MongoDB Atlas

### Step 1: Create MongoDB Account

1. Visit [https://www.mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)
2. Click "Try Free" or "Sign In"
3. Create account or sign in with Google

### Step 2: Create a Cluster

1. Click "Build a Database"
2. Choose **FREE** tier (M0 Sandbox)
3. Select a cloud provider (AWS recommended)
4. Choose a region closest to your target audience
5. Cluster Name: `makhana-cluster` (or any name)
6. Click "Create"

### Step 3: Create Database User

1. Under "Security" → "Database Access"
2. Click "Add New Database User"
3. Authentication Method: Password
4. Username: `makhana-admin` (or any username)
5. Password: Generate a secure password (save it!)
6. Database User Privileges: "Read and write to any database"
7. Click "Add User"

### Step 4: Configure Network Access

1. Under "Security" → "Network Access"
2. Click "Add IP Address"
3. Click "Allow Access from Anywhere" (0.0.0.0/0)
   - This is required for Vercel deployment
4. Click "Confirm"

### Step 5: Get Connection String

1. Go to "Database" → "Connect"
2. Click "Connect your application"
3. Driver: Node.js, Version: 5.5 or later
4. Copy the connection string
5. It looks like: `mongodb+srv://username:<password>@cluster.mongodb.net/?retryWrites=true&w=majority`
6. Replace `<password>` with your actual password
7. Add database name: `mongodb+srv://username:password@cluster.mongodb.net/makhana-store?retryWrites=true&w=majority`

**Save this connection string - you'll need it for Vercel!**

## Part 2: Set Up Email Notifications

### Step 1: Enable Gmail App Password

1. Go to [https://myaccount.google.com](https://myaccount.google.com)
2. Click "Security"
3. Enable "2-Step Verification" if not already enabled
4. Go back to Security → "2-Step Verification"
5. Scroll down to "App passwords"
6. Select app: "Mail"
7. Select device: "Other" → Enter "Makhana Store"
8. Click "Generate"
9. Copy the 16-character password (save it!)

**Note**: This is NOT your regular Gmail password!

## Part 3: Prepare Your Code for Deployment

### Step 1: Initialize Git Repository

```bash
# Navigate to your project folder
cd "c:\Users\Ravi\Desktop\makhana website"

# Initialize git
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit - Makhana eCommerce Store"
```

### Step 2: Create GitHub Repository

1. Go to [https://github.com/new](https://github.com/new)
2. Repository name: `makhana-store`
3. Description: "Makhana eCommerce Website"
4. Choose "Public" or "Private"
5. Do NOT initialize with README (we already have one)
6. Click "Create repository"

### Step 3: Push Code to GitHub

```bash
# Add remote repository (replace with your URL)
git remote add origin https://github.com/YOUR_USERNAME/makhana-store.git

# Push code
git branch -M main
git push -u origin main
```

## Part 4: Deploy to Vercel

### Step 1: Create Vercel Account

1. Go to [https://vercel.com/signup](https://vercel.com/signup)
2. Sign up with GitHub (recommended)
3. Authorize Vercel to access your repositories

### Step 2: Import Project

1. Click "Add New..." → "Project"
2. Find your `makhana-store` repository
3. Click "Import"

### Step 3: Configure Project

1. **Framework Preset**: Next.js (auto-detected)
2. **Root Directory**: `./` (leave as is)
3. **Build Command**: `npm run build` (default)
4. **Output Directory**: `.next` (default)
5. **Install Command**: `npm install` (default)

### Step 4: Add Environment Variables

Click "Environment Variables" and add these one by one:

#### Required Variables:

1. **MONGODB_URI**
   - Value: Your MongoDB connection string from Part 1
   - Example: `mongodb+srv://username:password@cluster.mongodb.net/makhana-store?retryWrites=true&w=majority`

2. **JWT_SECRET**
   - Value: Generate a random string (32+ characters)
   - Example: `makhana-super-secret-jwt-key-2024-production`
   - Or generate online: [https://randomkeygen.com/](https://randomkeygen.com/)

3. **ADMIN_EMAIL**
   - Value: Your admin email
   - Example: `admin@yourdomain.com`

4. **ADMIN_PASSWORD**
   - Value: Choose a strong password
   - Example: `Admin@2024!Secure`

5. **EMAIL_HOST**
   - Value: `smtp.gmail.com`

6. **EMAIL_PORT**
   - Value: `587`

7. **EMAIL_USER**
   - Value: Your Gmail address
   - Example: `youremail@gmail.com`

8. **EMAIL_PASSWORD**
   - Value: The 16-character App Password from Part 2
   - Example: `abcd efgh ijkl mnop` (no spaces)

9. **EMAIL_FROM**
   - Value: Same as EMAIL_USER
   - Example: `youremail@gmail.com`

10. **NEXT_PUBLIC_SITE_URL**
    - Value: Leave empty for now (we'll update after deployment)
    - Or use: `https://your-project-name.vercel.app`

#### Optional Variables (for WhatsApp):

11. **WHATSAPP_PHONE_NUMBER**
    - Value: Your WhatsApp number with country code
    - Example: `+919876543210`

12. **WHATSAPP_API_URL**
    - Value: Your WhatsApp Business API URL
    - Example: `https://graph.facebook.com/v17.0/PHONE_ID/messages`

13. **WHATSAPP_ACCESS_TOKEN**
    - Value: Your WhatsApp access token

### Step 5: Deploy

1. Click "Deploy"
2. Wait 2-3 minutes for build to complete
3. You'll see "Congratulations!" when done
4. Click "Visit" to see your live site

### Step 6: Update Site URL

1. Copy your Vercel URL (e.g., `https://makhana-store.vercel.app`)
2. Go to Project Settings → Environment Variables
3. Find `NEXT_PUBLIC_SITE_URL`
4. Update with your Vercel URL
5. Redeploy: Deployments → Click "..." → "Redeploy"

## Part 5: Post-Deployment Setup

### Step 1: Test Your Website

1. Visit your Vercel URL
2. Browse the homepage
3. Check if products load (will be empty initially)
4. Test cart functionality

### Step 2: Access Admin Panel

1. Go to `https://your-site.vercel.app/admin/login`
2. Email: Use your `ADMIN_EMAIL`
3. Password: Use your `ADMIN_PASSWORD`
4. Click "Sign In"

### Step 3: Add Your First Product

1. In admin panel, click "Products"
2. Click "Add Product"
3. Fill in details:
   - **Name**: Premium Roasted Makhana
   - **Description**: Crispy and healthy fox nuts, roasted to perfection
   - **Price**: 299
   - **Original Price**: 399 (optional, for discount)
   - **Category**: Plain
   - **Weight**: 250g
   - **Stock**: 100
   - **Image URL**: Use a free image hosting service:
     - Upload to [Imgur](https://imgur.com)
     - Or use [ImgBB](https://imgbb.com)
     - Or use [Cloudinary](https://cloudinary.com)
   - **Featured**: Check this box
4. Click "Create Product"

### Step 4: Test Order Flow

1. Go to homepage
2. Add product to cart
3. Go to cart
4. Proceed to checkout
5. Fill in test customer details
6. Place order
7. Check if you receive email notification
8. Check admin panel → Orders

## Part 6: Custom Domain (Optional)

### Step 1: Purchase Domain

1. Buy domain from:
   - [Namecheap](https://www.namecheap.com)
   - [GoDaddy](https://www.godaddy.com)
   - [Google Domains](https://domains.google)

### Step 2: Add Domain to Vercel

1. In Vercel project, go to "Settings" → "Domains"
2. Enter your domain (e.g., `makhanastore.com`)
3. Click "Add"

### Step 3: Configure DNS

Vercel will show you DNS records to add:

**For root domain (makhanastore.com):**
- Type: A
- Name: @
- Value: 76.76.21.21

**For www subdomain:**
- Type: CNAME
- Name: www
- Value: cname.vercel-dns.com

### Step 4: Update DNS in Domain Registrar

1. Go to your domain registrar's DNS settings
2. Add the A and CNAME records from Vercel
3. Save changes
4. Wait 24-48 hours for DNS propagation

### Step 5: Update Environment Variable

1. Update `NEXT_PUBLIC_SITE_URL` to your custom domain
2. Redeploy

## Troubleshooting

### Build Failed

**Error**: "Module not found"
- Solution: Check if all dependencies are in `package.json`
- Run `npm install` locally first

**Error**: "Environment variable not found"
- Solution: Verify all environment variables are set in Vercel

### MongoDB Connection Failed

**Error**: "MongoServerError: bad auth"
- Solution: Check username and password in connection string
- Ensure special characters in password are URL-encoded

**Error**: "Connection timeout"
- Solution: Check Network Access in MongoDB Atlas
- Ensure 0.0.0.0/0 is allowed

### Email Not Sending

**Error**: "Invalid login"
- Solution: Use App Password, not regular Gmail password
- Ensure 2FA is enabled on Gmail

**Error**: "Connection refused"
- Solution: Check EMAIL_HOST and EMAIL_PORT
- For Gmail: smtp.gmail.com:587

### Admin Login Not Working

**Error**: "Invalid credentials"
- Solution: Check ADMIN_EMAIL and ADMIN_PASSWORD in Vercel
- Try clearing browser cache

### Images Not Loading

**Error**: "Invalid src prop"
- Solution: Add image domain to `next.config.mjs`
- Or use Vercel's image optimization

## Maintenance

### Update Environment Variables

1. Go to Vercel project → Settings → Environment Variables
2. Edit the variable
3. Redeploy for changes to take effect

### Update Code

```bash
# Make changes to your code
git add .
git commit -m "Your commit message"
git push origin main
```

Vercel will automatically deploy the new version!

### Monitor Deployments

1. Go to Vercel dashboard
2. Click on your project
3. View "Deployments" tab
4. Check logs for any errors

### Database Backup

1. In MongoDB Atlas, go to "Clusters"
2. Click "..." → "Create Backup"
3. Or use automated backups (paid feature)

## Cost Breakdown

### Free Tier Limits:

**Vercel Free:**
- Unlimited deployments
- 100 GB bandwidth/month
- Automatic HTTPS
- Perfect for small to medium traffic

**MongoDB Atlas Free (M0):**
- 512 MB storage
- Shared RAM
- Suitable for ~1000 products and orders

**Gmail:**
- Free for personal use
- 500 emails/day limit

### When to Upgrade:

- **Vercel Pro** ($20/month): More bandwidth, better performance
- **MongoDB M2** ($9/month): 2 GB storage, dedicated RAM
- **Email Service** (SendGrid, etc.): Higher limits, better deliverability

## Security Checklist

- [ ] Changed default admin password
- [ ] Used strong JWT_SECRET
- [ ] Enabled 2FA on all accounts
- [ ] Never committed `.env` to Git
- [ ] Regularly update dependencies
- [ ] Monitor MongoDB access logs
- [ ] Use HTTPS (automatic with Vercel)

## Next Steps

1. ✅ Add more products
2. ✅ Customize design and colors
3. ✅ Add your logo
4. ✅ Set up custom domain
5. ✅ Configure WhatsApp notifications
6. ✅ Add Google Analytics
7. ✅ Set up payment gateway (future)
8. ✅ Add customer reviews (future)

---

## Support Resources

- **Vercel Docs**: [https://vercel.com/docs](https://vercel.com/docs)
- **MongoDB Docs**: [https://docs.mongodb.com](https://docs.mongodb.com)
- **Next.js Docs**: [https://nextjs.org/docs](https://nextjs.org/docs)

---

**Congratulations! Your Makhana store is now live! 🎉**
