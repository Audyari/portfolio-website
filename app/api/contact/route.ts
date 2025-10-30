import { NextResponse } from 'next/server';
import { sql } from '@vercel/postgres';
import { headers } from 'next/headers';

export async function POST(request: Request) {
  try {
    const headersList = await headers(); // TAMBAH 'await' di sini
    const body = await request.json();

    // Validasi
    if (!body.name || !body.email || !body.message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: 'Please enter a valid email address' },
        { status: 400 }
      );
    }

    if (body.message.length < 10) {
      return NextResponse.json(
        { error: 'Message must be at least 10 characters long' },
        { status: 400 }
      );
    }

    // Save to Vercel Postgres
    const result = await sql`
      INSERT INTO contact_messages (name, email, message, ip_address, user_agent)
      VALUES (${body.name}, ${body.email}, ${body.message}, ${headersList.get('x-forwarded-for')}, ${headersList.get('user-agent')})
      RETURNING *
    `;

    console.log('Message saved to Vercel Postgres:', result.rows[0]);

    return NextResponse.json(
      { 
        message: "Thank you for your message! I'll get back to you soon.",
        data: {
          id: result.rows[0].id,
          name: body.name,
          email: body.email
        }
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error saving to database:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}