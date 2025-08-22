import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const { to, businessName, phone } = await req.json();

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    // 📧 Welcome / Activation email (with your earlier template)
    await transporter.sendMail({
      from: `"Bajgo Team" <${process.env.GMAIL_USER}>`,
      to,
      subject: "Welcome to Bajgo - Account Activation",
      text: `
Thank you for signing up with Bajgo!

Your account details:
- Business Name: ${businessName}
- Email: ${to}
- Phone: ${phone}

Your account is being reviewed and will be activated within 2 hours. 
You will receive another email once your account is activated.

If you have any questions, please contact our support team.

Best regards,
The Bajgo Team
      `.trim(),
      html: `
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
  <h2 style="color: #d02228;">Welcome to Bajgo!</h2>
  
  <p>Thank you for signing up with Bajgo!</p>
  
  <h3>Your account details:</h3>
  <ul>
    <li><strong>Business Name:</strong> ${businessName}</li>
    <li><strong>Email:</strong> ${to}</li>
    <li><strong>Phone:</strong> ${phone}</li>
  </ul>
  
  <p>Your account is being reviewed and will be activated within 2 hours.</p>
  <p>You will receive another email once your account is activated.</p>
  
  <p>If you have any questions, please contact our support team.</p>
  
  <p>Best regards,<br>The Bajgo Team</p>
</div>
      `.trim(),
    });

    // 📧 Notify Admin (plain text)
    await transporter.sendMail({
      from: `"Bajgo Signup" <${process.env.GMAIL_USER}>`,
      to: process.env.ADMIN_EMAIL || process.env.GMAIL_USER,
      subject: "New Vendor Signup - Needs Activation",
      text: `
New vendor signup:
- Business: ${businessName}
- Email: ${to}
- Phone: ${phone}

Please activate this account within 2 hours.
      `.trim(),
    });

    return NextResponse.json({ message: "Signup processed successfully" }, { status: 200 });
} catch (error: unknown) {
    if (error instanceof Error) {
      console.error("Error processing signup:", error.message);
      return NextResponse.json(
        { message: "Error processing signup", error: error.message },
        { status: 500 }
      );
    }

    console.error("Unexpected error:", error);
    return NextResponse.json(
      { message: "Unexpected error occurred" },
      { status: 500 }
    );
  }
}