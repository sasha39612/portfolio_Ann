import { sendEmail } from '../../lib/mailer.utils';
import { NextRequest } from 'next/server';

export async function POST(req: NextRequest) {
  const formData = await req.formData();
  const name = formData.get('name') as string | null;
  const email = formData.get('email') as string | null;
  const message = formData.get('message') as string | null;
  const token = formData.get('token') as string | null;

  try {
    const result = await sendEmail({
      name,
      email,
      message,
      token,
    });
    return Response.json({ result }, { status: 200 });
  } catch (error) {
    return Response.json({ error: error }, { status: 500 });
  }
}
