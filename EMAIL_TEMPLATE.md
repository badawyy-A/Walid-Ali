# EmailJS Template Configuration

## 📧 How to Set Up Your Email Template

Go to your EmailJS dashboard and update your template with this content:

---

## **Subject Line:**
```
New Contact Form Submission from {{from_name}}
```

---

## **Email Body (Content):**

```html
<!DOCTYPE html>
<html>
<head>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
        }
        .container {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            background-color: #f9f9f9;
        }
        .header {
            background-color: #2d4a2e;
            color: white;
            padding: 20px;
            text-align: center;
            border-radius: 5px 5px 0 0;
        }
        .content {
            background-color: white;
            padding: 30px;
            border-radius: 0 0 5px 5px;
        }
        .field {
            margin-bottom: 20px;
            padding: 15px;
            background-color: #f5f5f5;
            border-left: 4px solid #2d4a2e;
            border-radius: 3px;
        }
        .field-label {
            font-weight: bold;
            color: #2d4a2e;
            font-size: 12px;
            text-transform: uppercase;
            margin-bottom: 5px;
        }
        .field-value {
            font-size: 16px;
            color: #333;
        }
        .message-box {
            background-color: #f9f9f9;
            padding: 20px;
            border-radius: 5px;
            border: 1px solid #ddd;
            margin-top: 10px;
        }
        .footer {
            text-align: center;
            margin-top: 20px;
            padding-top: 20px;
            border-top: 1px solid #ddd;
            color: #666;
            font-size: 12px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h2>📬 New Contact Form Submission</h2>
        </div>
        
        <div class="content">
            <p>You have received a new message from your portfolio contact form:</p>
            
            <div class="field">
                <div class="field-label">👤 Name</div>
                <div class="field-value">{{from_name}}</div>
            </div>
            
            <div class="field">
                <div class="field-label">📧 Email Address</div>
                <div class="field-value">{{from_email}}</div>
            </div>
            
            <div class="field">
                <div class="field-label">📱 Phone Number</div>
                <div class="field-value">{{phone}}</div>
            </div>
            
            <div class="field">
                <div class="field-label">🎨 Service of Interest</div>
                <div class="field-value">{{service}}</div>
            </div>
            
            <div class="field">
                <div class="field-label">⏰ Timeline</div>
                <div class="field-value">{{timeline}}</div>
            </div>
            
            <div class="field">
                <div class="field-label">💬 Project Details</div>
                <div class="message-box">{{message}}</div>
            </div>
            
            <div class="footer">
                <p>This message was sent from your portfolio website contact form.</p>
                <p>Reply directly to <strong>{{from_email}}</strong> to respond to this inquiry.</p>
            </div>
        </div>
    </div>
</body>
</html>
```

---

## **Alternative: Simple Text Version**

If you prefer a simpler text-based email, use this:

### Subject:
```
New Contact Form Submission from {{from_name}}
```

### Body:
```
═══════════════════════════════════════
📬 NEW CONTACT FORM SUBMISSION
═══════════════════════════════════════

👤 NAME:
{{from_name}}

📧 EMAIL:
{{from_email}}

📱 PHONE:
{{phone}}

🎨 SERVICE OF INTEREST:
{{service}}

⏰ TIMELINE:
{{timeline}}

💬 PROJECT DETAILS:
───────────────────────────────────────
{{message}}
───────────────────────────────────────

═══════════════════════════════════════
This message was sent from your portfolio website.
Reply to: {{from_email}}
═══════════════════════════════════════
```

---

## 🔧 How to Apply This Template:

1. Go to [EmailJS Dashboard](https://dashboard.emailjs.com/)
2. Click on **"Email Templates"**
3. Select your template: `template_1dd0w73`
4. Click **"Edit"**
5. **Copy and paste** one of the templates above (HTML or Text version)
6. Click **"Save"**
7. **Test** by clicking "Test It" button in EmailJS

---

## ✅ Template Variables Used:

Make sure these variables are in your template:
- `{{from_name}}` - Client's name
- `{{from_email}}` - Client's email
- `{{phone}}` - Client's phone number
- `{{service}}` - Service they're interested in
- `{{timeline}}` - Project timeline
- `{{message}}` - Project details/message

---

## 📧 Reply-To Configuration (Optional but Recommended):

In your EmailJS template settings:
1. Go to **"Settings"** tab
2. Set **"Reply To"** field to: `{{from_email}}`
3. This allows you to reply directly to the client

---

## 🎨 Customize:

Feel free to modify:
- Colors (change `#2d4a2e` to your brand color)
- Fonts
- Layout
- Add your logo
- Add social media links

---

**Your current configuration:**
- Service ID: `service_vd9dtd8`
- Template ID: `template_1dd0w73`
- Your Email: `foxbadawi622@gmail.com`

All set! Test your form now! 🚀
