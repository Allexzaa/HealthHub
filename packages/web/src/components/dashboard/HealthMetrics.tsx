'use client'

import { Card } from '@/components/shared/Card'
import { Heart, Activity, Droplets, TrendingUp } from 'lucide-react'

export function HealthMetrics() {
  const metrics = [
    {
      name: 'Heart Rate',
      value: '72 bpm',
      icon: Heart,
      color: 'text-red-500',
      bgColor: 'bg-red-50',
      trend: '+2%'
    },
    {
      name: 'Blood Pressure',
      value: '120/80',
      icon: Activity,
      color: 'text-green-500',
      bgColor: 'bg-green-50',
      trend: 'Normal'
    },
    {
      name: 'Blood Sugar',
      value: '95 mg/dL',
      icon: Droplets,
      color: 'text-blue-500',
      bgColor: 'bg-blue-50',
      trend: '-5%'
    },
    {
      name: 'Weight',
      value: '165 lbs',
      icon: TrendingUp,
      color: 'text-purple-500',
      bgColor: 'bg-purple-50',
      trend: '-2 lbs'
    }
  ]

  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          Health Metrics
        </h3>
        <button className="text-sm text-blue-600 hover:text-blue-700">
          View All
        </button>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {metrics.map((metric) => (
          <div key={metric.name} className="text-center">
            <div className={`w-12 h-12 ${metric.bgColor} dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-2`}>
              <metric.icon className={`w-6 h-6 ${metric.color}`} />
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">{metric.name}</p>
            <p className="text-lg font-semibold text-gray-900 dark:text-white">{metric.value}</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">{metric.trend}</p>
          </div>
        ))}
      </div>

      <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
        <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
          Last updated: 2 minutes ago
        </p>
      </div>
    </Card>
  )
}