'use client'

import { Card } from '@/components/shared/Card'
import { Bell, AlertTriangle, Clock, AlertCircle, Settings, Download } from 'lucide-react'

export function AlertsReminders() {
  const alerts = [
    {
      id: 1,
      type: 'critical',
      icon: AlertTriangle,
      title: 'Critical: Refill Needed',
      message: 'Metformin expires in 8 days. Only 15 pills remaining.',
      actionText: 'Order Refill',
      color: 'red'
    },
    {
      id: 2,
      type: 'reminder',
      icon: Clock,
      title: 'Upcoming Dose',
      message: 'Metformin 500mg in 2 hours (8:00 AM)',
      actionText: 'Set Reminder',
      color: 'orange'
    },
    {
      id: 3,
      type: 'warning',
      icon: AlertCircle,
      title: 'Interaction Warning',
      message: 'Avoid grapefruit with Atorvastatin',
      actionText: 'Learn More',
      color: 'blue'
    }
  ]

  const getAlertStyles = (color) => {
    switch (color) {
      case 'red':
        return {
          container: 'bg-red-50 dark:bg-red-900/30 border-red-200 dark:border-red-700',
          title: 'text-red-800 dark:text-red-300',
          message: 'text-red-700 dark:text-red-400',
          icon: 'text-red-600',
          button: 'bg-red-600 hover:bg-red-700'
        }
      case 'orange':
        return {
          container: 'bg-orange-50 dark:bg-orange-900/30 border-orange-200 dark:border-orange-700',
          title: 'text-orange-800 dark:text-orange-300',
          message: 'text-orange-700 dark:text-orange-400',
          icon: 'text-orange-600',
          button: 'bg-orange-600 hover:bg-orange-700'
        }
      case 'blue':
        return {
          container: 'bg-blue-50 dark:bg-blue-900/30 border-blue-200 dark:border-blue-700',
          title: 'text-blue-800 dark:text-blue-300',
          message: 'text-blue-700 dark:text-blue-400',
          icon: 'text-blue-600',
          button: 'bg-blue-600 hover:bg-blue-700'
        }
      default:
        return {
          container: 'bg-gray-50 dark:bg-gray-900/30 border-gray-200 dark:border-gray-700',
          title: 'text-gray-800 dark:text-gray-300',
          message: 'text-gray-700 dark:text-gray-400',
          icon: 'text-gray-600',
          button: 'bg-gray-600 hover:bg-gray-700'
        }
    }
  }

  return (
    <Card className="p-6">
      <div className="flex items-center gap-3 mb-6">
        <Bell className="w-6 h-6 text-orange-500" />
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
          Alerts & Reminders
        </h2>
      </div>
      
      <div className="space-y-4">
        {alerts.map((alert) => {
          const Icon = alert.icon
          const styles = getAlertStyles(alert.color)
          
          return (
            <div key={alert.id} className={`p-4 border rounded-lg ${styles.container}`}>
              <div className="flex items-start gap-3">
                <Icon className={`w-5 h-5 mt-0.5 ${styles.icon}`} />
                <div className="flex-1">
                  <div className={`font-semibold mb-1 ${styles.title}`}>{alert.title}</div>
                  <p className={`text-sm mb-2 ${styles.message}`}>
                    {alert.message}
                  </p>
                  <button className={`${styles.button} text-white px-3 py-1 rounded text-xs font-medium transition-colors`}>
                    {alert.actionText}
                  </button>
                </div>
              </div>
            </div>
          )
        })}
      </div>
      
      {/* Quick Actions */}
      <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
        <div className="space-y-2">
          <button className="w-full flex items-center gap-3 px-4 py-2 bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors text-sm">
            <Settings className="w-4 h-4" />
            Notification Settings
          </button>
          <button className="w-full flex items-center gap-3 px-4 py-2 bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors text-sm">
            <Download className="w-4 h-4" />
            Export Medication List
          </button>
        </div>
      </div>
    </Card>
  )
}