import { AIHealthAgent } from '@/components/dashboard/AIHealthAgent'
import { HealthMetrics } from '@/components/dashboard/HealthMetrics'
import { QuickActions } from '@/components/dashboard/QuickActions'
import { Appointments } from '@/components/dashboard/Appointments'
import { AlertsReminders } from '@/components/dashboard/AlertsReminders'

export default function Dashboard() {
  return (
    <div className="p-6 space-y-6">
      {/* Page Header - Simplified */}
      <div className="mb-2">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          Health Dashboard
        </h1>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
          Welcome back! Here's your comprehensive health overview.
        </p>
      </div>

      {/* Featured AI Health Agent - Full Width */}
      <AIHealthAgent />

      {/* Main Content - Reorganized for better focus */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - Quick Actions & Alerts */}
        <div className="lg:col-span-1 space-y-4">
          <QuickActions />
          <AlertsReminders />
        </div>
        
        {/* Right Column - Health Data & Appointments */}
        <div className="lg:col-span-2 grid grid-cols-1 xl:grid-cols-2 gap-4">
          <HealthMetrics />
          <Appointments />
        </div>
      </div>
    </div>
  )
}