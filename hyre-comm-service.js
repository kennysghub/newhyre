import express from "express";
import bodyParser from "body-parser";
import { EmailClient } from "@azure/communication-email";

const app = express();
const PORT = 3001;

// Middleware to parse JSON
app.use(bodyParser.json());

const connectionString =
  "endpoint=https://hyre-comm-service.unitedstates.communication.azure.com/;accesskey=4uUDcjePiRAHrDL82kvww7ohKzYgoqgNZcVLxoZl7sglM8vuC5OdJQQJ99BAACULyCpM03X4AAAAAZCS3xeU";
const client = new EmailClient(connectionString);

app.post("/send-email", async (req, res) => {
  const { firstName, lastName, email, phoneNumber, message } = req.body;

  const emailMessage = {
    senderAddress: "DoNotReply@hyre-energy.com",
    content: {
      subject: "New Contact Form Submission",
      plainText: `Name: ${firstName} ${lastName}\nEmail: ${email}\nPhone: ${phoneNumber}\nMessage: ${message}`,
      html: `
        <html>
          <body>
            <p><strong>Name:</strong> ${firstName} ${lastName}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phoneNumber}</p>
            <p><strong>Message:</strong> ${message}</p>
          </body>
        </html>
      `,
    },
    recipients: {
      to: [{ address: "knguyen@hyre-energy.com" }],
    },
  };

  try {
    const poller = await client.beginSend(emailMessage);
    await poller.pollUntilDone();
    res.status(200).send({ success: true, message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).send({ success: false, message: "Failed to send email" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

