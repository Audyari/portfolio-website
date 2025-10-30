// app/api/admin/auth/route.ts
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json()

    console.log('Login attempt:', { email, providedPassword: password })
    console.log('Expected:', { 
      expectedEmail: process.env.ADMIN_EMAIL, 
      expectedPassword: process.env.ADMIN_PASSWORD 
    })

    // Simple credential check
    if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
      const response = NextResponse.json({ 
        success: true,
        user: {
          id: '1',
          email: email,
          name: 'Admin',
          role: 'admin'
        }
      })

      // Set session cookie
      response.cookies.set('admin-auth', 'authenticated', {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        maxAge: 60 * 60 * 24 // 24 hours
      })

      console.log('Login successful')
      return response
    } else {
      console.log('Login failed: invalid credentials')
      return NextResponse.json(
        { error: 'Invalid credentials' },
        { status: 401 }
      )
    }
  } catch (error) {
    console.error('Login error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}