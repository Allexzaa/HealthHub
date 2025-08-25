'use client'

import { Card } from '@/components/shared/Card'
import { Heart } from 'lucide-react'

export function HealthMetrics() {
  const vitals = [
    { label: "Blood Pressure", value: "120/80 mmHg", status: "Normal", trend: "stable", lastUpdated: "2024-01-15" },
    { label: "Heart Rate", value: "72 bpm", status: "Normal", trend: "stable", lastUpdated: "2024-01-15" },
    { label: "Temperature", value: "98.6°F", status: "Normal", trend: "stable", lastUpdated: "2024-01-15" },
    { label: "Weight", value: "165 lbs", status: "Normal", trend: "decreasing", lastUpdated: "2024-01-10" },
    { label: "BMI", value: "22.8", status: "Normal", trend: "stable", lastUpdated: "2024-01-10" },
    { label: "Cholesterol", value: "195 mg/dL", status: "Borderline", trend: "increasing", lastUpdated: "2024-01-10" }
  ]

  const getTrendIcon = (trend) => {
    switch (trend) {
      case 'increasing': return '↗️'
      case 'decreasing': return '↘️'
      case 'stable': return '➡️'
      default: return '➡️'
    }
  }

  return (
    <Card className="p-6">
      <div className="flex items-center gap-3 mb-6">
        <Heart className="w-6 h-6 text-red-500" />
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
          Latest Vitals & Metrics
        </h2>
      </div>
      <div className="space-y-4">
        {vitals.map((vital, index) => (
          <div key={index} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
            <div>
              <span className="text-sm font-medium text-gray-900 dark:text-white">{vital.label}</span>
              <p className="text-xs text-gray-500 dark:text-gray-400">Updated {vital.lastUpdated}</p>
            </div>
            <div className="text-right">
              <div className="flex items-center gap-2">
                <span className="text-sm font-bold text-gray-900 dark:text-white">{vital.value}</span>
                <span className="text-lg">{getTrendIcon(vital.trend)}</span>
              </div>
              <div className={`text-xs px-2 py-1 rounded-full ${
                vital.status === 'Normal' ? 'text-green-600 bg-green-100 dark:bg-green-900/20 dark:text-green-400' :
                vital.status === 'Borderline' ? 'text-yellow-600 bg-yellow-100 dark:bg-yellow-900/20 dark:text-yellow-400' :
                'text-red-600 bg-red-100 dark:bg-red-900/20 dark:text-red-400'
              }`}>
                {vital.status}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  )
}