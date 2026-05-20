'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useI18n } from '@/lib/i18n/context'

export default function AboutUsSection() {
  const { t } = useI18n()
  return (
    <section className="bg-cover bg-center bg-fixed py-16 md:py-24 relative" style={{ backgroundImage: "url('/bg_about.png')" }}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/70 md:bg-white/65"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="text-5xl md:text-6xl font-black text-stone-900 mb-3">
            {t('aboutUs.title')}
          </h1>
          <p className="text-lg text-stone-600">
            {t('aboutUs.subtitle')}
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* The Spirit of Seva */}
            <div className="bg-white rounded-xl border-2 border-orange-200 p-8 shadow-sm">
              <h2 className="text-2xl font-black text-orange-700 mb-4">{t('aboutUs.sevaTitle')}</h2>
              <p className="text-stone-700 leading-relaxed">
                {t('aboutUs.sevaDescription')}
              </p>
              <p className="text-stone-600 text-sm mt-4 italic">
                {t('aboutUs.sevaQuote')}
              </p>
            </div>

            {/* Roles & Responsibilities */}
            <div className="bg-white rounded-xl border border-stone-200 p-8 shadow-sm">
              <h2 className="text-2xl font-black text-stone-900 mb-6">{t('aboutUs.rolesTitle')}</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-bold text-stone-900 mb-2">{t('aboutUs.crowdMgmtTitle')}</h3>
                  <p className="text-stone-600 text-sm">
                    {t('aboutUs.crowdMgmtDesc')}
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-stone-900 mb-2">{t('aboutUs.infoGuideTitle')}</h3>
                  <p className="text-stone-600 text-sm">
                    {t('aboutUs.infoGuideDesc')}
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-stone-900 mb-2">{t('aboutUs.medicalTitle')}</h3>
                  <p className="text-stone-600 text-sm">
                    {t('aboutUs.medicalDesc')}
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-stone-900 mb-2">{t('aboutUs.sanitationTitle')}</h3>
                  <p className="text-stone-600 text-sm">
                    {t('aboutUs.sanitationDesc')}
                  </p>
                </div>
              </div>
            </div>

            {/* Common FAQs */}
            <div className="bg-white rounded-xl border border-stone-200 p-8 shadow-sm">
              <h2 className="text-2xl font-black text-stone-900 mb-6">{t('aboutUs.faqTitle')}</h2>
              
              <div className="space-y-6">
                {/* FAQ 2 */}
                <div>
                  <h3 className="font-bold text-stone-900 mb-2">{t('aboutUs.faq2Q')}</h3>
                  <p className="text-stone-600 text-sm">
                    {t('aboutUs.faq2A')}
                  </p>
                </div>

                {/* FAQ 4 */}
                <div>
                  <h3 className="font-bold text-stone-900 mb-2">{t('aboutUs.faq4Q')}</h3>
                  <p className="text-stone-600 text-sm">
                    {t('aboutUs.faq4A')}
                  </p>
                </div>

                {/* FAQ 5 */}
                <div>
                  <h3 className="font-bold text-stone-900 mb-2">{t('aboutUs.faq5Q')}</h3>
                  <p className="text-stone-600 text-sm">
                    {t('aboutUs.faq5A')}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Join the Force CTA */}
            <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl border-2 border-orange-300 p-8 shadow-md text-center">
              <h3 className="text-xl font-black text-orange-900 mb-3">{t('aboutUs.joinForce')}</h3>
              <p className="text-sm text-orange-800 mb-6 leading-relaxed">
                {t('aboutUs.joinForceDesc')}
              </p>
              <Link
                href="/volunteer"
                className="inline-block w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg"
              >
                {t('aboutUs.registerNow')}
              </Link>
            </div>

            {/* Contact Details */}
            <div className="bg-white rounded-xl border border-stone-200 p-8 shadow-sm">
              <h3 className="text-lg font-black text-stone-900 mb-6">{t('aboutUs.contactDetailsTitle')}</h3>

              <div className="space-y-5">
                <div>
                  <p className="text-xs font-bold text-stone-600 uppercase tracking-wide mb-1">{t('aboutUs.phoneLabel')}</p>
                  <p className="text-lg font-bold text-stone-900">0253-2461909</p>
                </div>

                <div className="border-t border-stone-200 pt-5">
                  <p className="text-xs font-bold text-stone-600 uppercase tracking-wide mb-1">{t('aboutUs.emailLabel')}</p>
                  <p className="text-sm font-bold text-stone-900">kumbhmela.2027@mah.gov.in</p>
                </div>

                <div className="border-t border-stone-200 pt-5">
                  <p className="text-xs font-bold text-stone-600 uppercase tracking-wide mb-2">{t('aboutUs.addressLabel')}</p>
                  <p className="text-sm text-stone-700 leading-relaxed">
                    {t('footer.addressLine1')}<br/>
                    {t('footer.addressLine2')}<br/>
                    {t('footer.addressLine3')}
                  </p>
                </div>
              </div>
            </div>

            {/* Emergency Contacts */}
            <div className="bg-red-50 rounded-xl border border-red-200 p-8 shadow-sm">
              <h3 className="text-lg font-black text-red-900 mb-6">{t('aboutUs.emergencyTitle')}</h3>

              <div className="space-y-5">
                <div>
                  <p className="text-xs font-bold text-red-600 uppercase tracking-wide mb-1">{t('aboutUs.policeControl')}</p>
                  <p className="text-3xl font-black text-red-600">100</p>
                </div>

                <div className="border-t border-red-200 pt-5">
                  <p className="text-xs font-bold text-red-600 uppercase tracking-wide mb-1">{t('aboutUs.ambulance')}</p>
                  <p className="text-3xl font-black text-red-600">108</p>
                </div>

                <div className="border-t border-red-200 pt-5">
                  <p className="text-xs font-bold text-red-600 uppercase tracking-wide mb-1">{t('aboutUs.fire')}</p>
                  <p className="text-3xl font-black text-red-600">101</p>
                </div>
              </div>
            </div>

            {/* Quick Tips */}
            <div className="bg-blue-50 rounded-xl border border-blue-200 p-6 shadow-sm">
              <h3 className="text-lg font-black text-blue-900 mb-4">{t('aboutUs.quickTips')}</h3>
              <ul className="space-y-3 text-sm text-blue-800">
                <li className="flex gap-2">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span>{t('aboutUs.tip1')}</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span>{t('aboutUs.tip2')}</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span>{t('aboutUs.tip3')}</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span>{t('aboutUs.tip4')}</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span>{t('aboutUs.tip5')}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-orange-600 to-orange-500 rounded-xl p-10 text-center text-white shadow-lg">
          <h2 className="text-3xl font-black mb-3">{t('aboutUs.readyTitle')}</h2>
          <p className="text-lg mb-6 opacity-95">
            {t('aboutUs.readyDesc')}
          </p>
          <Link
            href="/volunteer"
            className="inline-block bg-white text-orange-600 font-bold py-3 px-8 rounded-lg hover:bg-orange-50 transition-colors duration-200"
          >
            {t('aboutUs.volunteerNow')}
          </Link>
        </div>
      </div>
    </section>
  )
}
