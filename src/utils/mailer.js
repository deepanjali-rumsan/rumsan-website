import nodemailer from "nodemailer";

async function contactForm(payload) {
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.NEXT_PUBLIC_SMTP_USER,
        pass: process.env.NEXT_PUBLIC_SMTP_PASS,
      },
    });

    const mailOptions = {
      from: "Rumsan",
      to: "deepanjali.nagarkoti@rumsan.net",
      subject: "Rumsan Website - Contact Form",
      html: `  
          <div style="max-width: 600px; width: 100%; background-color: #ffffff; border-radius: 10px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); padding: 20px; font-family: Arial, sans-serif; color: #333;">
            <h2 style="color: #2B7EC1; margin-bottom: 20px;">Get In Touch - Contact Form</h2>
            <div style="margin-bottom: 15px;">
              <h3 style="margin: 0; color: #555;">Full Name:</h3>
              <p style="margin: 5px 0; font-size: 16px;">${payload?.contactName}</p>
            </div>
            <div style="margin-bottom: 15px;">
              <h3 style="margin: 0; color: #555;">Email:</h3>
              <p style="margin: 5px 0; font-size: 16px;">${payload?.contactEmail}</p>
            </div>
            <div style="margin-bottom: 15px;">
              <h3 style="margin: 0; color: #555;">Message:</h3>
              <p style="margin: 5px 0; font-size: 16px;">${payload?.contactMessage}</p>
            </div>
          </div>
      `,
    };
    await transporter.sendMail(mailOptions);

    return "<p>Your Application Has Been Successfully Sent!</p>";
  } catch (error) {
    console.error("Error sending email:", error);
  }
}

export { contactForm };
