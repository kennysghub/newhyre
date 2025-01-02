// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs
import dotenv from 'dotenv';
import sgMail from '@sendgrid/mail';

dotenv.config();

console.log('API Key:', process.env.SENDGRID_API_KEY);
//sgMail.setApiKey(process.env.SENDGRID_API_KEY);
sgMail.setApiKey('8QS5vWUFRr2bWyenFtycIQ.pbNz9OpAfk6NQsFEx8bcBUgvQgWtDWNexwSOtAY7reY');
const msg = {
  to: 'marketing@hyre-energy.com',
  from: 'marketing@hyre-energy.com',
  subject: 'Sending with SendGrid is Fun',
  text: 'and easy to do anywhere, even with Node.js',
  html: '<strong>and easy to do anywhere, even with Node.js</strong>',
};

sgMail
  .send(msg)
  .then(() => {
    console.log('Email sent successfully');
  })
  .catch((error) => {
    console.error('Error sending email:', error);
  });
