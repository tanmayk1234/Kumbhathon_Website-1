'use client'

import { FormEvent, useState } from 'react'

interface NewsFormProps {
  onNewsAdded?: () => void
}

const LOCATIONS = [
  'All Locations',
  'Main Ghat',
  'North Entrance',
  'South Entrance',
  'East Entrance',
  'West Entrance',
  'Information Center',
  'Medical Station',
  'Registration Desk'
]

const CATEGORIES = [
  'Alert',
  'Update',
  'Event',
  'Safety',
  'Registration',
  'Announcement'
]

const URGENCY_LEVELS = ['Low', 'Medium', 'High', 'Critical']

export default function NewsForm({ onNewsAdded }: NewsFormProps) {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError('')
    setSuccess('')
    setLoading(true)

    const formData = new FormData(e.currentTarget)
    const title = formData.get('title') as string
    const description = formData.get('description') as string
    const location = formData.get('location') as string
    const category = formData.get('category') as string
    const urgency = formData.get('urgency') as string
    const content = formData.get('content') as string
    const author = formData.get('author') as string

    try {
      const response = await fetch('/api/admin/news', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title,
          description,
          location,
          category,
          urgency,
          content,
          author
        })
      })

      if (!response.ok) {
        const data = await response.json()
        throw new Error(data.error || 'Failed to create news')
      }

      setSuccess('News posted successfully!')
      ;(e.target as HTMLFormElement).reset()
      onNewsAdded?.()

      setTimeout(() => setSuccess(''), 3000)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="bg-white rounded-lg shadow p-6 border border-stone-200">
      <h2 className="text-2xl font-black text-stone-900 mb-6">Post News & Alert</h2>

      {error && (
        <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
          {error}
        </div>
      )}

      {success && (
        <div className="mb-4 p-4 bg-green-50 border border-green-200 rounded-lg text-green-700">
          {success}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold text-stone-700 mb-2">
              Title *
            </label>
            <input
              type="text"
              name="title"
              required
              placeholder="e.g., Crowd Management at Main Ghat"
              className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-stone-700 mb-2">
              Short Description *
            </label>
            <input
              type="text"
              name="description"
              required
              placeholder="Brief one-line summary"
              className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-stone-700 mb-2">
              Location *
            </label>
            <select
              name="location"
              required
              className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            >
              <option value="">Select a location</option>
              {LOCATIONS.map(loc => (
                <option key={loc} value={loc}>{loc}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold text-stone-700 mb-2">
              Category *
            </label>
            <select
              name="category"
              required
              className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            >
              <option value="">Select a category</option>
              {CATEGORIES.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold text-stone-700 mb-2">
              Urgency Level *
            </label>
            <select
              name="urgency"
              required
              className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            >
              <option value="">Select urgency level</option>
              {URGENCY_LEVELS.map(level => (
                <option key={level} value={level}>{level}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold text-stone-700 mb-2">
              Posted By *
            </label>
            <input
              type="text"
              name="author"
              required
              placeholder="Your name or admin ID"
              className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-stone-700 mb-2">
            Full Content/Details *
          </label>
          <textarea
            name="content"
            required
            rows={6}
            placeholder="Detailed information about the news or alert..."
            className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 resize-vertical"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-orange-600 hover:bg-orange-700 disabled:bg-orange-400 text-white font-bold py-3 rounded-lg transition-colors duration-200"
        >
          {loading ? 'Posting...' : 'Post News & Alert'}
        </button>
      </form>
    </div>
  )
}
