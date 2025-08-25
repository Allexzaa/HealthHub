import { AIPanel } from '@/components/dashboard/AIPanel'
import { AIHealthAgent } from '@/components/dashboard/AIHealthAgent'
import { HealthMetrics } from '@/components/dashboard/HealthMetrics'
import { QuickActions } from '@/components/dashboard/QuickActions'
import { Appointments } from '@/components/dashboard/Appointments'
import { AlertsReminders } from '@/components/dashboard/AlertsReminders'

export default function Dashboard() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Health Dashboard
          </h1>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
            Welcome back! Here's your health overview.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <div className="text-right">
            <p className="text-sm font-medium text-gray-900 dark:text-white">Health Score</p>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center">
                <span className="text-xs font-bold text-white">85</span>
              </div>
              <span className="text-xs text-green-600 dark:text-green-400">Good</span>
            </div>
          </div>
        </div>
      </div>

      {/* Featured AI Health Agent - Full Width */}
      <AIHealthAgent />

      {/* Main Content - Reorganized for better findability */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Left Column - Quick Actions & Alerts */}
        <div className="lg:col-span-1 space-y-4">
          <QuickActions />
          <AlertsReminders />
        </div>
        
        {/* Center - AI Assistants (Main Focus) */}
        <div className="lg:col-span-2">
          <AIPanel />
        </div>
        
        {/* Right Column - Health Data */}
        <div className="lg:col-span-1 space-y-4">
          <HealthMetrics />
          <Appointments />
        </div>
      </div>
    </div>
  )
}