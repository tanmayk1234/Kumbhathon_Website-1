'use client'

import Link from 'next/link'
import SiteFooter from '@/components/SiteFooter'
import SiteHeader from '@/components/SiteHeader'
import NewsHeadlines from '@/components/NewsHeadlines'
import { useI18n } from '@/lib/i18n/context'

function FeatureCard({
  title,
  description,
  icon,
}: {
  title: string
  description: string
  icon: React.ReactNode
}) {
  return (
    <div className="rounded-2xl border border-orange-200/70 bg-white/90 p-5 shadow-sm">
      <div className="flex items-start gap-4">
        <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-orange-50 text-orange-700">
          {icon}
        </div>
        <div>
          <div className="text-sm font-semibold text-stone-900">{title}</div>
          <p className="mt-1 text-sm leading-6 text-stone-600">{description}</p>
        </div>
      </div>
    </div>
  )
}

export default function HomePage() {
  const { t } = useI18n()

  return (
    <div className="min-h-screen bg-amber-50">
      <SiteHeader />

      <main id="home">
        {/* Hero with Background */}
        <section className="relative h-[calc(100vh-64px)] overflow-hidden">
          {/* Background Image - Replace with your image URL */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            data-bg-image="kumbh-hero"
          />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-linear-to-b from-black/30 via-black/20 to-black/10" />
          
          {/* Fallback gradient if image doesn't load */}
          <div className="absolute inset-0 bg-linear-to-b from-amber-900 via-orange-800 to-amber-700 opacity-60" />

          {/* Content */}
          <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-4 text-center sm:px-6">
            <div className="mx-auto max-w-3xl space-y-4">
              <h1 className="text-balance text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                {t('home.heroTitle')}
              </h1>
              
              <p className="text-xl font-bold text-orange-100 sm:text-2xl">
                {t('home.heroSubtitle')}
              </p>

              <p className="mx-auto max-w-2xl text-pretty text-sm leading-7 text-white sm:text-base">
                {t('home.heroDescription')}
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col items-center justify-center gap-3 pt-2 sm:flex-row sm:pt-4">
                <Link
                  href="/#about"
                  className="inline-flex items-center justify-center rounded-full border-2 border-white bg-white/10 px-6 py-3 text-sm font-bold text-white shadow-lg hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent transition-all duration-200 backdrop-blur"
                >
                  {t('home.learnMore')}
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* What is Kumbhamela Section */}
        <section className="relative bg-white py-20 sm:py-28">
          <div className="mx-auto max-w-3xl px-4 sm:px-6">
            {/* Main Card */}
            <div className="space-y-12">
              {/* Header */}
              <div className="text-center space-y-3">
                <h2 id="about" className="text-4xl font-black text-stone-900 sm:text-5xl">
                  {t('home.whatIsKumbhTitle')}
                </h2>
                <p className="text-lg font-semibold text-orange-600 tracking-wide">
                  {t('home.whatIsKumbhSubtitle')}
                </p>
              </div>

              {/* Main Description */}
              <p className="text-lg leading-8 text-stone-700 text-center">
                {t('home.kumbhDescription')}
              </p>

              {/* Two Column Stats */}
              <div className="grid gap-8 sm:grid-cols-2 py-4">
                {/* Stat 1 */}
                <div className="text-center">
                  <div className="text-4xl font-black text-orange-600 mb-2">{t('home.every12YearsTitle')}</div>
                  <p className="text-stone-700 leading-relaxed">
                    {t('home.every12YearsDesc')}
                  </p>
                </div>

                {/* Stat 2 */}
                <div className="text-center">
                  <div className="text-4xl font-black text-orange-600 mb-2">{t('home.infiniteImpactTitle')}</div>
                  <p className="text-stone-700 leading-relaxed">
                    {t('home.infiniteImpactDesc')}
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Feature cards */}
        <section className="relative bg-linear-to-b from-stone-50 to-white py-20 sm:py-32">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            {/* Section Header */}
            <div className="mb-16 text-center">
              <h2 className="text-4xl font-black text-stone-900 sm:text-5xl">
                {t('home.features.title')}
              </h2>
              <p className="mt-4 text-lg text-stone-600 max-w-2xl mx-auto">
                {t('home.features.description')}
              </p>
            </div>

            <div className="grid gap-8 md:gap-10 sm:grid-cols-2 lg:grid-cols-3">
              {/* Card 1 */}
              <div className="group relative">
                <div className="absolute inset-0 bg-linear-to-br from-orange-100 to-amber-100 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative rounded-2xl border border-stone-200 bg-white p-8 shadow-sm hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                  {/* Icon + Heading */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-orange-100 text-orange-600 shrink-0">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <circle cx="12" cy="8" r="3" />
                        <path d="M12 14c-3 0-4.5 1.5-4.5 3.5v2.5h9v-2.5c0-2-1.5-3.5-4.5-3.5z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-black text-stone-900">
                      {t('home.features.card1Title')}
                    </h3>
                  </div>
                  
                  {/* Description */}
                  <p className="text-base leading-7 text-stone-600 grow">
                    {t('home.features.card1Desc')}
                  </p>
                </div>
              </div>

              {/* Card 2 - Real-Time Updates */}
              <div className="group relative">
                <div className="absolute inset-0 bg-linear-to-br from-orange-100 to-amber-100 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative rounded-2xl border border-stone-200 bg-white p-8 shadow-sm hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                  {/* Icon + Heading */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-orange-100 text-orange-600 shrink-0">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M4 4h16v12H4z" />
                        <path d="M4 4l8-2 8 2" />
                        <path d="M8 16v2M12 16v2M16 16v2" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-black text-stone-900">
                      {t('home.features.card2Title')}
                    </h3>
                  </div>
                  
                  {/* Description */}
                  <p className="text-base leading-7 text-stone-600 grow">
                    {t('home.features.card2Desc')}
                  </p>
                </div>
              </div>

              {/* Card 3 - Safety & Support */}
              <div className="group relative">
                <div className="absolute inset-0 bg-linear-to-br from-orange-100 to-amber-100 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative rounded-2xl border border-stone-200 bg-white p-8 shadow-sm hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                  {/* Icon + Heading */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-orange-100 text-orange-600 shrink-0">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M12 2L4 5v7c0 7 8 9 8 9s8-2 8-9V5l-8-3z" />
                        <path d="M10 13l2 2 4-4" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-black text-stone-900">
                      {t('home.features.card3Title')}
                    </h3>
                  </div>
                  
                  {/* Description */}
                  <p className="text-base leading-7 text-stone-600 grow">
                    {t('home.features.card3Desc')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* News & Alerts Section */}
        <NewsHeadlines />
      </main>

      <SiteFooter />
    </div>
  )
}
