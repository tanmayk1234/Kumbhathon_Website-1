import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { I18nProvider } from '@/lib/i18n/context'
import enTranslations from '@/public/locales/en/common.json'
import mrTranslations from '@/public/locales/mr/common.json'

export const metadata: Metadata = {
  title: 'Kumbh Mela 2027',
  description: 'Official portal for Nashik Kumbh Mela 2027 — news, updates, and information.',
}

const translations = {
  en: enTranslations,
  mr: mrTranslations,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <I18nProvider initialLocale="en" translations={translations}>
          {children}
        </I18nProvider>
        <Analytics />
      </body>
    </html>
  )
}