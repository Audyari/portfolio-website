// components/SearchFilter.tsx
'use client'

import { useState } from 'react'

interface SearchFilterProps {
  filters: {
    search: string
    status: string
  }
  onFilterChange: (filters: any) => void
}

export default function SearchFilter({ filters, onFilterChange }: SearchFilterProps) {
  const [localFilters, setLocalFilters] = useState(filters)

  const handleSearchChange = (value: string) => {
    const newFilters = { ...localFilters, search: value }
    setLocalFilters(newFilters)
    onFilterChange(newFilters)
  }

  const handleStatusChange = (value: string) => {
    const newFilters = { ...localFilters, status: value }
    setLocalFilters(newFilters)
    onFilterChange(newFilters)
  }

  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <div className="flex-1">
        <input
          type="text"
          placeholder="Search by name, email, or message..."
          value={localFilters.search}
          onChange={(e) => handleSearchChange(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>
      
      <div className="sm:w-48">
        <select
          value={localFilters.status}
          onChange={(e) => handleStatusChange(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
        >
          <option value="all">All Status</option>
          <option value="new">New</option>
          <option value="read">Read</option>
          <option value="replied">Replied</option>
          <option value="archived">Archived</option>
        </select>
      </div>
    </div>
  )
}