# EmailJS Setup Guide for Contact Form

Your contact form is now configured to send emails using EmailJS! Follow these steps to complete the setup:

## 📧 Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click **"Sign Up"** and create a free account
3. Verify your email address

## 🔧 Step 2: Add Email Service

1. In your EmailJS dashboard, go to **"Email Services"**
2. Click **"Add New Service"**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the instructions to connect your email
5. **Copy the Service ID** (you'll need this later)

## 📝 Step 3: Create Email Template

1. Go to **"Email Templates"** in the dashboard
2. Click **"Create New Template"**
3. Use this template content:

```
Subject: New Contact Form Submission from {{from_name}}

From: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
Service of Interest: {{service}}
Timeline: {{timeline}}

Message:
{{message}}

---
This message was sent from your portfolio contact form.
```

4. **Copy the Template ID**

## 🔑 Step 4: Get Your Public Key

1. Go to **"Account"** → **"General"**
2. Find your **Public Key** (also called API Key)
3. **Copy the Public Key**

## ⚙️ Step 5: Update Your Code

Open `/src/components/Contact.js` and replace these values:

```javascript
const serviceID = 'YOUR_SERVICE_ID';      // Replace with your Service ID
const templateID = 'YOUR_TEMPLATE_ID';    // Replace with your Template ID
const publicKey = 'YOUR_PUBLIC_KEY';      // Replace with your Public Key
```

Also update your email address:
```javascript
to_email: 'your-email@example.com'        // Replace with YOUR actual email
```

## ✅ Step 6: Test Your Form

1. Save all changes
2. Run your development server: `npm start`
3. Fill out the contact form and submit
4. Check your email inbox!

## 📊 Free Plan Limits

- **200 emails per month** (free)
- If you need more, you can upgrade to a paid plan

## 🔒 Security Note

The public key is safe to expose in your frontend code. EmailJS is designed for this use case.

## 🆘 Troubleshooting

If emails aren't sending:
1. Check browser console for errors
2. Verify all IDs and keys are correct
3. Make sure your email service is connected properly in EmailJS dashboard
4. Check EmailJS dashboard for error logs

## 📧 Alternative: Direct Email Link

If you prefer a simpler solution without EmailJS, you can use a mailto link:

```javascript
const handleSubmit = (e) => {
  e.preventDefault();
  const subject = `Contact from ${formData.name}`;
  const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0APhone: ${formData.phone}%0D%0AService: ${formData.service}%0D%0ATimeline: ${formData.timeline}%0D%0A%0D%0AMessage:%0D%0A${formData.details}`;
  window.location.href = `mailto:your-email@example.com?subject=${subject}&body=${body}`;
};
```

---

**Need help?** Check EmailJS documentation: https://www.emailjs.com/docs/
