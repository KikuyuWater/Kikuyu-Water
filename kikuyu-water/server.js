const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Configure email transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER || 'your-email@gmail.com',
    pass: process.env.EMAIL_PASSWORD || 'your-app-password'
  }
});

// Test email connection
transporter.verify((error, success) => {
  if (error) {
    console.log('Email configuration error:', error);
  } else {
    console.log('Email service ready');
  }
});

// Contact form endpoint
app.post('/api/contact-us', async (req, res) => {
  try {
    const { name, email, phone, department, meter, subject, message, recipient_email } = req.body;

    // Validate required fields
    if (!name || !email || !subject || !message || !recipient_email) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Create email content
    const emailContent = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Department:</strong> ${department}</p>
      <p><strong>Customer Account Number:</strong> ${meter || 'Not provided'}</p>
      <p><strong>Subject:</strong> ${subject}</p>
      <hr>
      <h3>Message:</h3>
      <p>${message.replace(/\n/g, '<br>')}</p>
    `;

    // Send email to department
    const departmentMailOptions = {
      from: process.env.EMAIL_USER || 'noreply@kikuyuwater.co.ke',
      to: recipient_email,
      subject: `New Customer Inquiry: ${subject}`,
      html: emailContent,
      replyTo: email
    };

    // Send confirmation email to user
    const userMailOptions = {
      from: process.env.EMAIL_USER || 'noreply@kikuyuwater.co.ke',
      to: email,
      subject: 'We Received Your Message - Kikuyu Water',
      html: `
        <h2>Thank you for contacting Kikuyu Water Company</h2>
        <p>Dear ${name},</p>
        <p>We have received your message and it has been forwarded to our ${department} department.</p>
        <p>Our team will get back to you as soon as possible.</p>
        <hr>
        <h3>Your Message Summary:</h3>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong> ${message.replace(/\n/g, '<br>')}</p>
        <hr>
        <p>Best regards,<br>Kikuyu Water Company Ltd</p>
      `
    };

    // Send both emails
    await Promise.all([
      transporter.sendMail(departmentMailOptions),
      transporter.sendMail(userMailOptions)
    ]);

    res.status(200).json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Failed to send email', details: error.message });
  }
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'Server is running' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
