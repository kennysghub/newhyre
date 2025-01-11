// Import necessary modules
const express = require('express');
const bodyParser = require('body-parser');
const sgMail = require('@sendgrid/mail');
require('dotenv').config();

// Initialize the Express app
const app = express();
const PORT = process.env.PORT || 5173;

// Configure SendGrid API
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// Middleware to parse JSON data
app.use(bodyParser.json());

// Define the route for sending emails
app.post('/send-email', async (req, res) => {
  // Destructure form data from the request body
  const { name, email, message } = req.body;

  // Validation: Ensure all fields are provided
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  // Create the email message
  const msg = {
    to: 'marketing@hyre-energy.com', // Recipient email
    from: 'marketing@hyre-energy.com', // Must match a verified email in SendGrid
    subject: `Contact Form Submission from ${name}`,
    text: `Message from ${name} (${email}):\n\n${message}`,
    html: `
      <p><strong>Message from:</strong> ${name} (${email})</p>
      <p>${message}</p>
    `,
  };

  try {
    // Attempt to send the email
    await sgMail.send(msg);
    return res.status(200).json({ success: 'Email sent successfully!' });
  } catch (error) {
    // Handle errors
    console.error('Error sending email:', error);
    return res.status(500).json({ error: 'Failed to send email. Please try again later.' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
