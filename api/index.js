const nodemailer = require('nodemailer');
const express = require('express');
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

// Create an Express application
const app = express();

// Define a route
app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

// Define a route to send email
app.post('/send-email', (req, res) => {
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

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


// const nodemailer = require('nodemailer');
// const express = require('express');
// // Create a transporter object using your Zoho email credentials
// const transporter = nodemailer.createTransport({
//     host: 'smtppro.zoho.in',
//     secure: true,
//     port: 465,
//     auth: {
//       user: 'admin@globalplugin.com',
//       pass: 'rGF9k6D3NAaH'
//     },
//   });

// // Create an express app
// const app = express();

// // Define a route to send email
// app.post('/send-email', (req, res) => {
//   // Email content
//   const mailOptions = {
//     from: 'your-email@example.com', // Sender's email address
//     to: 'recipient-email@example.com', // Recipient's email address
//     subject: 'Hello from Node.js', // Email subject
//     text: 'This is a test email sent from Node.js with Nodemailer.', // Email text
//   };

//   // Send the email
//   transporter.sendMail(mailOptions, (error, info) => {
//     if (error) {
//       console.error('Error sending email:', error);
//       res.status(500).send('Error sending email');
//     } else {
//       console.log('Email sent:', info.response);
//       res.send('Email sent successfully');
//     }
//   });
// });

// // Start the server
// app.listen(3000, () => {
//   console.log('Server is running on port 3000');
// });