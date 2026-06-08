'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { useI18n } from '@/lib/i18n/context'
import LanguageSwitcher from './LanguageSwitcher'

export default function SiteHeader() {
  const [open, setOpen] = useState(false)
  const { t } = useI18n()

  // Close menu on hash-route changes (basic UX for anchor links)
  useEffect(() => {
    const onHashChange = () => setOpen(false)
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  return (
    <>
      {/* Backdrop overlay - closes menu on tap */}
      {open && (
        <div
          className="fixed inset-0 top-16 z-40 bg-black/0 sm:hidden"
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />
      )}

      <header className="sticky top-0 z-50 border-b border-amber-200/20 bg-black/30 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/image.png"
              alt="Kumbhathon Logo"
              width={40}
              height={40}
              className="h-10 w-auto"
            />
          </Link>

          <nav className="hidden items-center gap-8 text-sm text-stone-700 sm:flex">
            <Link href="/" className="hover:text-orange-700">
              {t('header.home')}
            </Link>
            <Link href="/about-us" className="hover:text-orange-700">
              {t('header.aboutUs')}
            </Link>
            <Link href="/news-and-alerts" className="hover:text-orange-700">
              {t('header.newsAlerts')}
            </Link>
            <Link href="/authorities" className="hover:text-orange-700">
              {t('header.authorities')}
            </Link>
          </nav>

          {/* Desktop controls */}
          <div className="hidden items-center gap-4 sm:flex">
            <LanguageSwitcher />
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-full border border-amber-200 bg-white/70 p-2 text-stone-700 shadow-sm hover:bg-white focus:outline-none focus:ring-2 focus:ring-orange-600 focus:ring-offset-2 sm:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M18.3 5.71 12 12l6.3 6.29-1.41 1.42L10.59 13.4 4.3 19.71 2.89 18.29 9.18 12 2.89 5.71 4.3 4.29l6.29 6.3 6.3-6.3z" />
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M3 6h18v2H3V6zm0 5h18v2H3v-2zm0 5h18v2H3v-2z" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu panel - slides down from header */}
        <div
          className={`absolute left-0 right-0 top-16 origin-top transition-all duration-300 ease-in-out sm:hidden ${
            open
              ? 'visible opacity-100'
              : 'invisible opacity-0 -translate-y-2'
          }`}
          data-menu-open={open}
        >
          <div className="border-b border-amber-200/60 bg-white/95 backdrop-blur shadow-lg">
            <div className="mx-auto max-w-6xl px-4 py-3 sm:px-6">
              <div className="space-y-1 text-sm text-stone-700">
                <Link
                  className="block rounded-lg px-3 py-2 font-medium hover:bg-orange-50 hover:text-orange-700 transition-colors"
                  href="/"
                  onClick={() => setOpen(false)}
                >
                  {t('header.home')}
                </Link>
                <Link
                  className="block rounded-lg px-3 py-2 font-medium hover:bg-orange-50 hover:text-orange-700 transition-colors"
                  href="/about-us"
                  onClick={() => setOpen(false)}
                >
                  {t('header.aboutUs')}
                </Link>
                <Link
                  className="block rounded-lg px-3 py-2 font-medium hover:bg-orange-50 hover:text-orange-700 transition-colors"
                  href="/news-and-alerts"
                  onClick={() => setOpen(false)}
                >
                  {t('header.newsAlerts')}
                </Link>
                <Link
                  className="block rounded-lg px-3 py-2 font-medium hover:bg-orange-50 hover:text-orange-700 transition-colors"
                  href="/authorities"
                  onClick={() => setOpen(false)}
                >
                  {t('header.authorities')}
                </Link>
              </div>

              <div className="mt-3 pt-3 border-t border-amber-200/40 space-y-3">
                <LanguageSwitcher />
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
