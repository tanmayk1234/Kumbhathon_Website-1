import { redirect } from 'next/navigation'
import { isAuthenticated } from '@/lib/auth'
import AdminHeader from '@/components/AdminHeader'
import AdminFooter from '@/components/AdminFooter'
import AdminDashboardClient from '@/components/AdminDashboardClient'

export default async function AdminDashboard() {
  const authenticated = await isAuthenticated()
  if (!authenticated) {
    redirect('/admin/login')
  }

  return (
    <>
      <AdminHeader />
      <main className="dashboard-main">
        <AdminDashboardClient />
      </main>
      <AdminFooter />
    </>
  )
}
