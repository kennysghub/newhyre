import { EmailClient } from "@azure/communication-email";

const connectionString =
  "endpoint=https://hyre-comm-service.unitedstates.communication.azure.com/;accesskey=4uUDcjePiRAHrDL82kvww7ohKzYgoqgNZcVLxoZl7sglM8vuC5OdJQQJ99BAACULyCpM03X4AAAAAZCS3xeU";
const client = new EmailClient(connectionString);

async function main() {
  const emailMessage = {
    senderAddress: "DoNotReply@hyre-energy.com",
    content: {
      subject: "Hyre",
      plainText: "Testing.",
      html: `
      <html>
          <body>
              <h1>Hello world via email.</h1>
          </body>
      </html>`,
    },
    recipients: {
      to: [{ address: "blaviguer@gmail.com" }],
    },
  };

  try {
    const poller = await client.beginSend(emailMessage);
    const result = await poller.pollUntilDone();
    console.log("Email sent successfully:", result);
  } catch (error) {
    console.error("Error sending email:", error);
  }
}

main();
