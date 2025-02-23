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
  name: FormDataEntryValue | null | string;
  email: FormDataEntryValue | null | string;
  message: FormDataEntryValue | null | string;
  token: null | string;
}) {
  const ACCESS_TOKEN = await OAuth2_client.getAccessToken();

  if (!ACCESS_TOKEN.token) {
    console.error('Failed to obtain access token');
    return { error: 'Failed to obtain access token' };
  }

  // Prepare ReCAPTCHA verification
  if (!SECRET_KEY_RECAPTCHA) {
    throw new Error('❌ SECRET_KEY_RECAPTCHA is not defined');
  }

  if (!token) {
    console.error('❌ ReCaptcha token is missing');
    return { error: 'ReCaptcha token is missing' };
  }

  const bodyParams = new URLSearchParams();
  bodyParams.append('secret', SECRET_KEY_RECAPTCHA);
  bodyParams.append('response', token);

  try {
    const response = await fetch(
      'https://www.google.com/recaptcha/api/siteverify',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: bodyParams,
      },
    );

    if (!response.ok) {
      throw new Error(`Failed to verify ReCAPTCHA: ${response.statusText}`);
    }

    const result = await response.json();

    if (!result.success) {
      console.error('❌ Failed to verify!', result['error-codes']);
      return {
        error: '❌ Failed to verify!',
        result: `ReCAPTCHA verification failed: ${result['error-codes']}`,
      };
    }

    console.log('✅ Verify ReCaptcha successfully');
  } catch (error) {
    console.error('❌ ReCAPTCHA Request Failed:', error);
    return { error: 'ReCAPTCHA verification request failed' };
  }

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
  try {
    await transporter.verify();
    console.log('✅ SMTP Connected Successfully');
  } catch (error) {
    console.error('❌ SMTP Connection Error:', error);
    return { error: 'SMTP Connection Failed' };
  }
  try {
    const sendResult = await transporter.sendMail({
      from: EMAIL_USERNAME,
      to: PERSONAL_EMAIL,
      subject: `Response on mailer app from: ${email}`,
      html: `<h2>From ${name}</h2><p>${message}</p>`,
    });

    return { success: 'Email sent successfully', result: sendResult };
  } catch (error) {
    console.error('❌ Email Sending Error:', error);
    return error;
  }
}
