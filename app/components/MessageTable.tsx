// components/MessageTable.tsx
'use client'

import { useState } from 'react'

interface Message {
  id: number
  name: string
  email: string
  message: string
  ip_address: string
  user_agent: string
  status: string
  created_at: string
}

interface MessageTableProps {
  messages: Message[]
  onStatusUpdate: (id: number, status: string) => void
  onDelete: (id: number) => void
}

export default function MessageTable({ messages, onStatusUpdate, onDelete }: MessageTableProps) {
  const [selectedMessage, setSelectedMessage] = useState<Message | null>(null)

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'new':
        return 'bg-blue-100 text-blue-800'
      case 'read':
        return 'bg-yellow-100 text-yellow-800'
      case 'replied':
        return 'bg-green-100 text-green-800'
      case 'archived':
        return 'bg-gray-100 text-gray-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('id-ID', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  const truncateText = (text: string, maxLength: number) => {
    if (text.length <= maxLength) return text
    return text.substring(0, maxLength) + '...'
  }

  if (messages.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-500">No messages found</p>
      </div>
    )
  }

  return (
    <>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Name
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Email
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Message
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Status
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Date
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {messages.map((message) => (
            <tr key={message.id} className="hover:bg-gray-50">
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm font-medium text-gray-900">{message.name}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">{message.email}</div>
              </td>
              <td className="px-6 py-4">
                <div className="text-sm text-gray-900 max-w-xs">
                  {truncateText(message.message, 100)}
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className={`inline-flex px-2 text-xs font-semibold rounded-full ${getStatusColor(message.status)}`}>
                  {message.status}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {formatDate(message.created_at)}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                <button
                  onClick={() => setSelectedMessage(message)}
                  className="text-indigo-600 hover:text-indigo-900"
                >
                  View
                </button>
                <select
                  value={message.status}
                  onChange={(e) => onStatusUpdate(message.id, e.target.value)}
                  className="text-sm border border-gray-300 rounded px-2 py-1"
                >
                  <option value="new">New</option>
                  <option value="read">Read</option>
                  <option value="replied">Replied</option>
                  <option value="archived">Archived</option>
                </select>
                <button
                  onClick={() => onDelete(message.id)}
                  className="text-red-600 hover:text-red-900"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Message Detail Modal */}
      {selectedMessage && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-lg font-semibold">Message Details</h3>
                <button
                  onClick={() => setSelectedMessage(null)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  ✕
                </button>
              </div>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Name</label>
                  <p className="mt-1 text-sm text-gray-900">{selectedMessage.name}</p>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700">Email</label>
                  <p className="mt-1 text-sm text-gray-900">{selectedMessage.email}</p>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700">Message</label>
                  <p className="mt-1 text-sm text-gray-900 whitespace-pre-wrap">
                    {selectedMessage.message}
                  </p>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">IP Address</label>
                    <p className="mt-1 text-sm text-gray-900">{selectedMessage.ip_address}</p>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Status</label>
                    <p className="mt-1 text-sm">
                      <span className={`inline-flex px-2 text-xs font-semibold rounded-full ${getStatusColor(selectedMessage.status)}`}>
                        {selectedMessage.status}
                      </span>
                    </p>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700">User Agent</label>
                  <p className="mt-1 text-sm text-gray-900">
                    {selectedMessage.user_agent}
                  </p>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700">Received</label>
                  <p className="mt-1 text-sm text-gray-900">
                    {formatDate(selectedMessage.created_at)}
                  </p>
                </div>
              </div>
              
              <div className="mt-6 flex justify-end space-x-3">
                <button
                  onClick={() => setSelectedMessage(null)}
                  className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200"
                >
                  Close
                </button>
                <a
                  href={`mailto:${selectedMessage.email}?subject=Re: Your message`}
                  className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700"
                >
                  Reply via Email
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}