import { AIPanel } from '@/components/dashboard/AIPanel'
import { HealthMetrics } from '@/components/dashboard/HealthMetrics'
import { QuickActions } from '@/components/dashboard/QuickActions'
import { Appointments } from '@/components/dashboard/Appointments'

export default function Dashboard() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Dashboard
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Welcome back! Here's your health overview.
        </p>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className="xl:col-span-2">
          <AIPanel />
        </div>
        <div className="space-y-6">
          <HealthMetrics />
          <Appointments />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6">
        <QuickActions />
      </div>
    </div>
  )
}