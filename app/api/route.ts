import { google } from "googleapis";
import nodemailer from "nodemailer";
import { type NextRequest, NextResponse } from 'next/server'

const oauth2Client = new google.auth.OAuth2(
  process.env.NEXT_PUBLIC_CLIENT_ID,
  process.env.NEXT_PUBLIC_CLIENT_SECRET,
  "https://developers.google.com/oauthplayground", // Your redirect URI
);

oauth2Client.setCredentials({
  refresh_token: process.env.NEXT_PUBLIC_REFRESH_TOKEN,
});

export async function POST(
  req: NextRequest,
) {
  const {
    name,
    email,
    message,
  }: { name: string; email: string; message: string } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Missing required fields" });
  }

  try {
    const accessToken = await oauth2Client.getAccessToken();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: process.env.NEXT_PUBLIC_EMAIL_USERNAME,
        clientId: process.env.NEXT_PUBLIC_CLIENT_ID,
        clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
        refreshToken: process.env.NEXT_PUBLIC_REFRESH_TOKEN,
        accessToken: accessToken.token,
      },
    });

    const mailOptions = {
      from: process.env.NEXT_PUBLIC_EMAIL_USERNAME,
      to: process.env.NEXT_PUBLIC_PERSONAL_EMAIL,
      subject: `Website activity from ${email}`,
      html: `<p>Name: ${name}</p><p>Email: ${email}</p><p>Message: ${message}</p>`,
    };

    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully!");
    return NextResponse.json({ message: "Email sent successfully!" });
  } catch (error: any) {
    console.error("Error sending email:", error.response || error.message);
    return NextResponse.json({ error: "Failed to send email" }, {status: 500});
  }
}
