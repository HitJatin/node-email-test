const nodemailer = require('nodemailer');
const express = require('express');

// Create a transporter object using your Zoho email credentials



// Create a transporter object using your Zoho email credentials
const transporter = nodemailer.createTransport({
  host: 'smtppro.zoho.in',
  secure: true,
  port: 465,
  auth: {
    user: 'admin@globalplugin.com',
    pass: 'rGF9k6D3NAaH'
  },
});

// Email content
const mailOptions = {
  from: 'admin@globalplugin.com', // Sender's email address
  to: 'mdatif@evolvedigitas.com', // Recipient's email address
  subject: 'Hello from Node.js', // Email subject
  text: 'This is a test email sent from Node.js with Nodemailer.', // Email text
};

// Send the email
// Create a post route to send mail
const app = express(); // Define app
app.post('/send-mail', (req, res) => {
  // Email content
  const mailOptions = {
    from: 'admin@globalplugin.com', // Sender's email address
    to: 'mdatif@evolvedigitas.com', // Recipient's email address
    subject: 'Hello from Node.js', // Email subject
    text: 'This is a test email sent from Node.js with Nodemailer.', // Email text
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      res.status(500).send('Error sending email');
    } else {
      console.log('Email sent:', info.response);
      res.send('Email sent successfully');
    }
  });
});