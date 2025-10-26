# Kreedha - Company Information

## Business Details

**Company Name:** Kreedha  
**Tagline:** From Farm to Soul  
**Proprietor:** Ramayan Chaudhary

## Registration Numbers

- **GST Registration:** 10AHFPC9774P1ZZ
- **UDYAM Registration:** UDYAM-BR-38-0053959
- **PAN Card:** AHFPC9774P

## Contact Information

### Phone Numbers
- Primary: +91 9681540009
- Secondary: +91 9988557609

### Email Addresses
- Support: info@kreedha.com
- Alternative: ranjeetchaudhary765@yahoo.com

### Website
- www.kreedha.com

## Where This Information is Used

### 1. Website Footer (`components/Footer.tsx`)
- Displays both phone numbers
- Shows both email addresses
- Includes proprietor name
- Shows GST, UDYAM, and PAN registration numbers

### 2. Email Notifications (`lib/notifications.ts`)
- Company branding in email header
- Registration details in email footer
- Contact information for customer reference

### 3. WhatsApp Notifications (`lib/notifications.ts`)
- Company name in notification header
- Tagline in notification footer

### 4. Constants File (`lib/constants.ts`)
- Centralized company information
- Easy to update across the entire application
- Used by notification system and other components

## Environment Variables

Make sure these are set in `.env.local`:

```env
# Admin Credentials
ADMIN_EMAIL=admin@kreedha.com
ADMIN_PASSWORD=admin123

# Email Configuration
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=info.kreedha@gmail.com
EMAIL_PASSWORD=rzxaderfkrqkoayc
EMAIL_FROM=info.kreedha@gmail.com

# WhatsApp Configuration (optional)
WHATSAPP_PHONE_NUMBER=+919681540009
```

## Notes

- All company information is centralized in `lib/constants.ts`
- To update company details, modify the constants file and the changes will reflect across the application
- Registration numbers are displayed in the website footer for transparency and legal compliance
- Email notifications include full company branding and contact information
