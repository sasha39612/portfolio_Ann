import nodemailer from 'nodemailer';
import { google } from 'googleapis';

const {
  EMAIL_USERNAME,
  PERSONAL_EMAIL,
  CLIENT_ID,
  CLIENT_SECRET,
  REFRESH_TOKEN,
  SECRET_KEY_RECAPTCHA,
} = process.env;

const OAuth2 = google.auth.OAuth2;
const OAuth2_client = new OAuth2(CLIENT_ID, CLIENT_SECRET);
OAuth2_client.setCredentials({ refresh_token: REFRESH_TOKEN });

export async function sendEmail({
  name,
  email,
  message,
  token,
}: {
  name: string | null;
  email: string | null;
  message: string | null;
  token: string | null;
}) {
  try {
    const ACCESS_TOKEN = await OAuth2_client.getAccessToken();

    if (!ACCESS_TOKEN.token) {
      throw new Error('Failed to obtain access token');
    }

    if (!SECRET_KEY_RECAPTCHA) {
      throw new Error('SECRET_KEY_RECAPTCHA is not defined');
    }

    if (!token) {
      throw new Error('ReCaptcha token is missing');
    }

    // Validate ReCAPTCHA token
    const recaptchaResponse = await fetch(
      'https://www.google.com/recaptcha/api/siteverify',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type',
        },
        body: new URLSearchParams({
          secret: SECRET_KEY_RECAPTCHA,
          response: token,
        }),
      },
    );

    const recaptchaResult = await recaptchaResponse.json();
    if (!recaptchaResult.success) {
      throw new Error(
        `ReCAPTCHA verification failed: ${recaptchaResult['error-codes']}`,
      );
    }

    console.log('ReCAPTCHA verified successfully');

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        type: 'OAuth2',
        user: EMAIL_USERNAME,
        clientId: CLIENT_ID,
        clientSecret: CLIENT_SECRET,
        refreshToken: REFRESH_TOKEN,
        accessToken: ACCESS_TOKEN.token,
      },
    });

    await transporter.verify();
    console.log('SMTP connected successfully');

    const sendResult = await transporter.sendMail({
      from: EMAIL_USERNAME,
      to: PERSONAL_EMAIL,
      subject: `Response from: ${email}`,
      html: `<h2>From: ${name}</h2><p>${message}</p>`,
    });

    return { success: 'Email sent successfully', result: sendResult };
  } catch (error: unknown) {
    if (error instanceof Error) {
      // Now you can safely access error.message
      console.error('Error sending email:', error.message);
      return { error: error.message };
    }
    // Handle unexpected error types
    console.error('Unknown error occurred');
    return { error: 'An unknown error occurred' };
  }
}
