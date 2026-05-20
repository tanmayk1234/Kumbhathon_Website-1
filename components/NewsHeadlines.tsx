'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useI18n } from '@/lib/i18n/context'

interface NewsItem {
  id: string
  title: string
  urgency: string
  createdAt: string
}

export default function NewsHeadlines() {
  const { t } = useI18n()
  const [news, setNews] = useState<NewsItem[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchNews()
    // Set up polling for real-time updates every 30 seconds
    const interval = setInterval(fetchNews, 30000)
    return () => clearInterval(interval)
  }, [])

  async function fetchNews() {
    try {
      const response = await fetch('/api/admin/news')
      if (response.ok) {
        const data = await response.json()
        // Show only latest 5 headlines
        setNews(Array.isArray(data) ? data.slice(0, 5) : [])
      }
    } catch (error) {
      console.error('Failed to fetch news:', error)
    } finally {
      setLoading(false)
    }
  }

  const URGENCY_COLORS: Record<string, string> = {
    'Low': 'text-blue-600',
    'Medium': 'text-yellow-600',
    'High': 'text-orange-600',
    'Critical': 'text-red-600'
  }

  return (
    <section className="py-12 bg-white border-t border-stone-200">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-10">
          <h2 className="text-3xl font-black text-stone-900 mb-2">
            {t('news.title')}
          </h2>
          <p className="text-stone-600">
            {t('news.stayConnected')}
          </p>
        </div>

        {/* Headlines List */}
        {loading ? (
          <div className="text-center py-8">
            <p className="text-stone-600">{t('news.loadingHeadlines')}</p>
          </div>
        ) : news.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-stone-600">{t('news.noHeadlines')}</p>
          </div>
        ) : (
          <div className="space-y-3 mb-8">
            {news.map((item) => (
              <div key={item.id} className="flex items-center justify-between p-4 rounded-lg hover:bg-stone-50 transition-colors group border border-stone-100">
                <div className="flex-grow min-w-0">
                  <h3 className="text-lg font-semibold text-stone-900 group-hover:text-orange-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-stone-500 mt-1">
                    {new Date(item.createdAt).toLocaleDateString('en-IN', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric',
                      hour: '2-digit',
                      minute: '2-digit'
                    })}
                  </p>
                </div>
                <span className={`flex-shrink-0 ml-4 px-3 py-1 text-xs font-semibold rounded whitespace-nowrap ${
                  item.urgency === 'Critical' ? 'bg-red-100 text-red-700' :
                  item.urgency === 'High' ? 'bg-orange-100 text-orange-700' :
                  item.urgency === 'Medium' ? 'bg-yellow-100 text-yellow-700' :
                  'bg-blue-100 text-blue-700'
                }`}>
                  {t('news.urgency.' + item.urgency) !== 'news.urgency.' + item.urgency ? t('news.urgency.' + item.urgency) : item.urgency}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* View All Link */}
        <div className="text-center">
          <Link
            href="/news-and-alerts"
            className="inline-block px-6 py-2 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded transition-colors text-sm"
          >
            {t('news.viewAllNewsAlerts')}
          </Link>
        </div>
      </div>
    </section>
  )
}
