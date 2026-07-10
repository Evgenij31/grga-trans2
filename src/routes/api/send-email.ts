import { createServerFn } from "@tanstack/react-start";
import nodemailer from "nodemailer";

export const sendEmailServerFn = createServerFn({ method: "POST" })
  .inputValidator((data: { name: string; email: string; message: string }) => data)
  .handler(async ({ data }) => {
    const { name, email, message } = data;

    try {
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT),
        secure: process.env.SMTP_PORT === "465",
        auth: {
          // Fallback to local EMAIL_USER if PROD_EMAIL_USER isn't set yet
          user: process.env.PROD_EMAIL_USER || process.env.EMAIL_USER,
          pass: process.env.PROD_EMAIL_PASS || process.env.EMAIL_PASS,
        },
      });

      await transporter.sendMail({
        from: `"${name}" <${email}>`,
        to: "your-receiving-email@example.com", // Set your actual email to view incoming mock tests
        subject: `New Contact Form Submission from ${name}`,
        text: message,
        html: `
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong> ${message}</p>
        `,
      });

      return { success: true };
    } catch (error) {
      console.error("Email send failure on server:", error);
      throw new Error("Failed to send email");
    }
  });
