// app/api/admin/check-auth/route.ts
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  try {
    const authCookie = request.cookies.get('admin-auth')
    const isAuthenticated = authCookie?.value === 'authenticated'

    console.log('Auth check:', { 
      hasCookie: !!authCookie,
      cookieValue: authCookie?.value,
      isAuthenticated 
    })

    if (isAuthenticated) {
      return NextResponse.json({
        user: {
          id: '1',
          email: process.env.ADMIN_EMAIL,
          name: 'Admin',
          role: 'admin'
        }
      })
    }

    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  } catch (error) {
    console.error('Auth check error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}