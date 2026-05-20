import AdminHeader from '@/components/AdminHeader'
import AdminFooter from '@/components/AdminFooter'

export default function DashboardLoading() {
  return (
    <>
      <AdminHeader />
      <main className="dashboard-main min-h-[calc(100vh-140px)] bg-[#f8f9fa] flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-orange-200 border-t-orange-600 rounded-full animate-spin"></div>
          <p className="text-stone-600 font-medium animate-pulse">Loading dashboard data...</p>
        </div>
      </main>
      <AdminFooter />
    </>
  )
}
