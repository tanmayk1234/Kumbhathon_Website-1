'use client'

import { useState } from 'react'
import NewsForm from './NewsForm'
import NewsList from './NewsList'

export default function AdminDashboardClient() {
  const [refreshNews, setRefreshNews] = useState(0)

  const handleNewsAdded = () => {
    setRefreshNews(prev => prev + 1)
  }

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-black text-stone-900 mb-2">
          News & Alerts Management
        </h1>
        <p className="text-stone-600">
          Create, manage, and delete news items and alerts for the Kumbhathon website
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1">
          <NewsForm onNewsAdded={handleNewsAdded} />
        </div>
        <div className="lg:col-span-2">
          <NewsList refreshTrigger={refreshNews} />
        </div>
      </div>
    </div>
  )
}
