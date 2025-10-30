// app/api/admin/route.ts
import { NextRequest, NextResponse } from 'next/server'
import { sql } from '@vercel/postgres'

export async function POST(request: NextRequest) {
  const { email, password, action } = await request.json()
  
  if (action === 'login') {
    // Login logic here
    const isEmailValid = email.toLowerCase() === process.env.ADMIN_EMAIL?.toLowerCase()
    const isPasswordValid = password === process.env.ADMIN_PASSWORD

    if (isEmailValid && isPasswordValid) {
      const response = NextResponse.json({ success: true })
      response.cookies.set('admin-auth', 'authenticated', {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        maxAge: 60 * 60 * 24 // 24 hours
      })
      return response
    } else {
      return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 })
    }
  }
  
  // ✅ TAMBAHKAN LOGOUT HANDLER
  if (action === 'logout') {
    const response = NextResponse.json({ success: true })
    // Clear auth cookie
    response.cookies.set('admin-auth', '', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 0 // Expire immediately
    })
    return response
  }
  
  return NextResponse.json({ error: 'Invalid action' }, { status: 400 })
}

export async function GET(request: NextRequest) {
  const url = new URL(request.url)
  const action = url.searchParams.get('action')
  
  if (action === 'check-auth') {
    // Check auth logic
    const isAuthenticated = request.cookies.get('admin-auth')?.value === 'authenticated'
    if (isAuthenticated) {
      return NextResponse.json({ authenticated: true })
    }
    return NextResponse.json({ authenticated: false }, { status: 401 })
  }
  
  if (action === 'messages') {
    // Get messages logic
    const isAuthenticated = request.cookies.get('admin-auth')?.value === 'authenticated'
    if (!isAuthenticated) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }
    
    const result = await sql`
      SELECT * FROM contact_messages ORDER BY created_at DESC
    `
    return NextResponse.json({ messages: result.rows })
  }
  
  return NextResponse.json({ error: 'Invalid action' }, { status: 400 })
}