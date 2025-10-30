// app/api/admin/messages/route.ts
import { NextRequest, NextResponse } from 'next/server'
import { sql } from '@vercel/postgres'

export async function GET(request: NextRequest) {
  try {
    // Simple auth check
    const authCookie = request.cookies.get('admin-auth')
    if (!authCookie || authCookie.value !== 'authenticated') {
      console.log('Unauthorized access to messages')
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    console.log('Fetching messages from database...')
    
    // Try-catch untuk handle database errors
    let result
    try {
      result = await sql`
        SELECT id, name, email, message, ip_address, user_agent, status, created_at
        FROM contact_messages 
        ORDER BY created_at DESC
      `
      console.log(`Found ${result.rows.length} messages`)
    } catch (dbError) {
      console.error('Database error:', dbError)
      // Return empty array jika table belum ada atau error
      return NextResponse.json({ 
        messages: [] 
      })
    }

    return NextResponse.json({ 
      messages: result.rows 
    })

  } catch (error) {
    console.error('Error fetching messages:', error)
    return NextResponse.json(
      { error: 'Internal server error' }, 
      { status: 500 }
    )
  }
}