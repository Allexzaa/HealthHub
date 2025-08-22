'use client'

import { Card } from '@/components/shared/Card'
import { Plus, Calendar, Pill, FileText, Phone, Activity, Heart, Brain, Users, ArrowRight } from 'lucide-react'

export function QuickActions() {
  const primaryActions = [
    {
      name: 'Log Health Data',
      description: 'Record symptoms, vitals',
      icon: Plus,
      color: 'bg-blue-500 hover:bg-blue-600',
      textColor: 'text-blue-600',
      bgColor: 'bg-blue-50 hover:bg-blue-100',
      href: '/logs/new'
    },
    {
      name: 'Book Appointment',
      description: 'Schedule with doctors',
      icon: Calendar,
      color: 'bg-green-500 hover:bg-green-600',
      textColor: 'text-green-600',
      bgColor: 'bg-green-50 hover:bg-green-100',
      href: '/appointments/book'
    },
    {
      name: 'Medications',
      description: 'View schedule, refills',
      icon: Pill,
      color: 'bg-purple-500 hover:bg-purple-600',
      textColor: 'text-purple-600',
      bgColor: 'bg-purple-50 hover:bg-purple-100',
      href: '/medications'
    },
    {
      name: 'Health Records',
      description: 'Access medical files',
      icon: FileText,
      color: 'bg-orange-500 hover:bg-orange-600',
      textColor: 'text-orange-600',
      bgColor: 'bg-orange-50 hover:bg-orange-100',
      href: '/records'
    }
  ]

  const secondaryActions = [
    {
      name: 'Mental Health',
      icon: Brain,
      textColor: 'text-pink-600',
      bgColor: 'bg-pink-50 hover:bg-pink-100',
      href: '/logs?category=mental'
    },
    {
      name: 'Heart Health',
      icon: Heart,
      textColor: 'text-red-600',
      bgColor: 'bg-red-50 hover:bg-red-100',
      href: '/logs?category=vitals'
    },
    {
      name: 'Exercise',
      icon: Activity,
      textColor: 'text-green-600',
      bgColor: 'bg-green-50 hover:bg-green-100',
      href: '/logs?category=activity'
    },
    {
      name: 'Community',
      icon: Users,
      textColor: 'text-indigo-600',
      bgColor: 'bg-indigo-50 hover:bg-indigo-100',
      href: '/forum'
    }
  ]

  const emergencyAction = {
    name: 'Emergency Contact',
    description: 'Call healthcare providers',
    icon: Phone,
    href: '/emergency'
  }

  return (
    <Card className="p-4 bg-gradient-to-br from-white to-gray-50/50 dark:from-gray-800 dark:to-gray-900/50 shadow-lg border-0">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white">
          Quick Actions
        </h3>
        <button className="text-xs text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 flex items-center gap-1 transition-colors">
          Customize
          <ArrowRight className="w-3 h-3" />
        </button>
      </div>

      {/* Primary Actions - Modern Grid */}
      <div className="grid grid-cols-4 gap-2 mb-4">
        {primaryActions.map((action) => (
          <button
            key={action.name}
            className="group bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 p-3 rounded-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:border-gray-200 dark:hover:border-gray-600 hover:shadow-md hover:scale-105"
          >
            <div className="flex flex-col items-center gap-2">
              <div className={`w-10 h-10 ${action.color} rounded-xl flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow`}>
                <action.icon className="w-5 h-5 text-white" />
              </div>
              <div className="text-center">
                <h4 className={`font-semibold text-xs ${action.textColor} dark:text-white leading-tight`}>
                  {action.name}
                </h4>
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Secondary Actions - Pills */}
      <div className="mb-4">
        <div className="flex gap-1.5 overflow-x-auto pb-1">
          {secondaryActions.map((action) => (
            <button
              key={action.name}
              className={`${action.bgColor} dark:bg-gray-800 dark:hover:bg-gray-700 px-3 py-1.5 rounded-full transition-all duration-200 flex items-center gap-1.5 whitespace-nowrap text-xs border border-transparent hover:border-gray-200 dark:hover:border-gray-600 hover:shadow-sm`}
            >
              <action.icon className={`w-3.5 h-3.5 ${action.textColor} dark:text-gray-400`} />
              <span className={`${action.textColor} dark:text-gray-300 font-medium`}>
                {action.name}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Emergency & Stats Row */}
      <div className="flex items-center gap-3">
        <button className="flex-1 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-4 py-2 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 text-xs font-semibold shadow-sm hover:shadow-md">
          <emergencyAction.icon className="w-4 h-4" />
          Emergency
        </button>
        <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400">
          <span className="flex items-center gap-1">
            <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
            8 today
          </span>
          <span className="flex items-center gap-1">
            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
            2h ago
          </span>
        </div>
      </div>
    </Card>
  )
}