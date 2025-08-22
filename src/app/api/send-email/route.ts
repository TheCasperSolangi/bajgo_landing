import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const { to, from, subject, text, html } = await req.json();

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD, // Must be an App Password
      },
    });

    // 📧 Send email with both text + HTML template
    await transporter.sendMail({
      from: `"Contact Form" <${process.env.GMAIL_USER}>`,
      to,                 // Receiver (you: hello@storeforge.com)
      replyTo: from,      // User’s email so you can reply directly
      subject,
      text: text.trim(),
      html: `
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 16px; background: #fff; border: 1px solid #eee; border-radius: 8px;">
  <h2 style="color: #d02228; margin-bottom: 12px;">New Contact Form Submission</h2>

  <p><strong>Name:</strong> ${html.match(/<p><strong>Name:<\/strong>(.*?)<\/p>/)?.[1] || "N/A"}</p>
  <p><strong>Email:</strong> ${html.match(/<p><strong>Email:<\/strong>(.*?)<\/p>/)?.[1] || "N/A"}</p>
  <p><strong>Company:</strong> ${html.match(/<p><strong>Company:<\/strong>(.*?)<\/p>/)?.[1] || "Not provided"}</p>

  <h3 style="margin-top: 20px;">Message:</h3>
  <div style="white-space: pre-line; color: #333; line-height: 1.6;">
    ${html.match(/<p><strong>Message:<\/strong><\/p><p>([\s\S]*)<\/p>/)?.[1] || ""}
  </div>

  <hr style="margin: 24px 0; border: none; border-top: 1px solid #eee;" />
  <p style="font-size: 12px; color: #888;">This email was sent via the StoreForge contact form.</p>
</div>
      `.trim(),
    });

    return NextResponse.json({ message: "Email sent successfully" }, { status: 200 });
} catch (error) {
  const err = error as Error;
  console.error("Error sending email:", err.message);
  return NextResponse.json(
    { message: "Error sending email", error: err.message },
    { status: 500 }
  );
}}