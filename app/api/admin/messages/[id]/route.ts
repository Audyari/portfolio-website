// app/api/admin/messages/[id]/route.ts
import { NextRequest, NextResponse } from 'next/server'
import { sql } from '@vercel/postgres'

// Helper function untuk check auth
function checkAuth(request: NextRequest) {
  const authCookie = request.cookies.get('admin-auth')
  return authCookie?.value === 'authenticated'
}

// GET single message
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> } // ✅ Update: params sekarang Promise
) {
  try {
    // Check authentication
    if (!checkAuth(request)) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { id } = await params // ✅ Await params
    const result = await sql`
      SELECT id, name, email, message, ip_address, user_agent, status, created_at
      FROM contact_messages 
      WHERE id = ${id}
    `

    if (result.rows.length === 0) {
      return NextResponse.json({ error: 'Message not found' }, { status: 404 })
    }

    return NextResponse.json({ message: result.rows[0] })
  } catch (error) {
    console.error('Error fetching message:', error)
    return NextResponse.json(
      { error: 'Internal server error' }, 
      { status: 500 }
    )
  }
}

// UPDATE message status
export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> } // ✅ Update: params sekarang Promise
) {
  try {
    // Check authentication
    if (!checkAuth(request)) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { id } = await params // ✅ Await params
    const { status } = await request.json()

    if (!status || !['new', 'read', 'replied', 'archived'].includes(status)) {
      return NextResponse.json({ error: 'Invalid status' }, { status: 400 })
    }

    const result = await sql`
      UPDATE contact_messages 
      SET status = ${status}
      WHERE id = ${id}
      RETURNING id, name, email, message, ip_address, user_agent, status, created_at
    `

    if (result.rows.length === 0) {
      return NextResponse.json({ error: 'Message not found' }, { status: 404 })
    }

    return NextResponse.json({ message: result.rows[0] })
  } catch (error) {
    console.error('Error updating message:', error)
    return NextResponse.json(
      { error: 'Internal server error' }, 
      { status: 500 }
    )
  }
}

// DELETE message
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> } // ✅ Update: params sekarang Promise
) {
  try {
    // Check authentication
    if (!checkAuth(request)) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { id } = await params // ✅ Await params
    const result = await sql`
      DELETE FROM contact_messages 
      WHERE id = ${id}
      RETURNING id
    `

    if (result.rows.length === 0) {
      return NextResponse.json({ error: 'Message not found' }, { status: 404 })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error deleting message:', error)
    return NextResponse.json(
      { error: 'Internal server error' }, 
      { status: 500 }
    )
  }
}