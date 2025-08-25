'use client'

import { Card } from '@/components/shared/Card'
import { Plus, Calendar, Pill, FileText, Phone, Activity, Heart, Brain } from 'lucide-react'

// Concise version for sidebar placement
export function QuickActions() {
  const actions = [
    { name: 'Log Health', icon: Plus, color: 'bg-blue-500', href: '/logs/new' },
    { name: 'Book Appointment', icon: Calendar, color: 'bg-green-500', href: '/appointments/book' },
    { name: 'Medications', icon: Pill, color: 'bg-purple-500', href: '/medications' },
    { name: 'Records', icon: FileText, color: 'bg-orange-500', href: '/records' },
    { name: 'Heart Health', icon: Heart, color: 'bg-red-500', href: '/logs?category=vitals' },
    { name: 'Mental Health', icon: Brain, color: 'bg-pink-500', href: '/logs?category=mental' }
  ]

  const emergencyAction = {
    name: 'Emergency',
    icon: Phone,
    href: '/emergency'
  }

  return (
    <Card className="p-4">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
          Quick Actions
        </h3>
        <span className="text-xs text-gray-500 dark:text-gray-400">8 today</span>
      </div>

      {/* Compact Grid Actions */}
      <div className="grid grid-cols-3 gap-2 mb-3">
        {actions.map((action) => (
          <button
            key={action.name}
            className="group bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 p-2 rounded-lg transition-all duration-200 border border-gray-100 dark:border-gray-700 hover:border-gray-200 dark:hover:border-gray-600 hover:shadow-sm"
          >
            <div className="flex flex-col items-center gap-1">
              <div className={`w-7 h-7 ${action.color} hover:${action.color.replace('bg-', 'bg-').replace('-500', '-600')} rounded-lg flex items-center justify-center transition-colors`}>
                <action.icon className="w-3.5 h-3.5 text-white" />
              </div>
              <span className="text-xs font-medium text-gray-700 dark:text-gray-300 text-center leading-tight">
                {action.name}
              </span>
            </div>
          </button>
        ))}
      </div>

      {/* Emergency Button */}
      <button className="w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-3 py-2 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 text-xs font-medium shadow-sm hover:shadow-md">
        <emergencyAction.icon className="w-3.5 h-3.5" />
        {emergencyAction.name}
      </button>
    </Card>
  )
}