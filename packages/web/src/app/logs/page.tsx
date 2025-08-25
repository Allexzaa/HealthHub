'use client'

import { useState } from 'react'
import { Card } from '@/components/shared/Card'
import { 
  Activity, Plus, Calendar, TrendingUp, Heart, Thermometer, Scale, Zap, 
  Clock, Filter, Download, Upload, Search, AlertTriangle, CheckCircle,
  Droplets, Brain, Moon, Apple, Pill, Stethoscope, Eye, Target,
  BarChart3, PieChart, LineChart, Edit, Trash2, Share2, Bell, Users,
  Grid3X3, List
} from 'lucide-react'

export default function HealthLogs() {
  const [selectedDateRange, setSelectedDateRange] = useState('7days')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [viewMode, setViewMode] = useState('list') // list, chart, calendar
  const [logsViewMode, setLogsViewMode] = useState('list') // list or tile

  // Comprehensive health logs with multiple categories
  const healthLogs = [
    {
      id: 1,
      category: 'vitals',
      type: 'Blood Pressure',
      value: '125/82 mmHg',
      normalRange: '120/80',
      status: 'normal',
      timestamp: '2024-01-22 08:30 AM',
      notes: 'Measured after morning routine',
      icon: Heart,
      color: 'text-red-500',
      trend: 'stable'
    },
    {
      id: 2,
      category: 'symptoms',
      type: 'Headache',
      value: 'Mild (3/10)',
      normalRange: '0/10',
      status: 'minor',
      timestamp: '2024-01-22 07:15 AM',
      notes: 'Started after waking up, lasted 2 hours',
      icon: Brain,
      color: 'text-orange-500',
      trend: 'improving'
    },
    {
      id: 3,
      category: 'vitals',
      type: 'Weight',
      value: '165.2 lbs',
      normalRange: '160-170 lbs',
      status: 'normal',
      timestamp: '2024-01-22 06:45 AM',
      notes: 'Morning weight after bathroom',
      icon: Scale,
      color: 'text-blue-500',
      trend: 'decreasing'
    },
    {
      id: 4,
      category: 'vitals',
      type: 'Body Temperature',
      value: '98.6°F',
      normalRange: '98.6°F',
      status: 'normal',
      timestamp: '2024-01-21 10:30 PM',
      notes: 'Oral temperature',
      icon: Thermometer,
      color: 'text-green-500',
      trend: 'stable'
    },
    {
      id: 5,
      category: 'activity',
      type: 'Exercise',
      value: '45 min walk',
      normalRange: '30+ min',
      status: 'good',
      timestamp: '2024-01-21 06:00 PM',
      notes: '2.3 miles, moderate pace',
      icon: Zap,
      color: 'text-purple-500',
      trend: 'improving'
    },
    {
      id: 6,
      category: 'nutrition',
      type: 'Water Intake',
      value: '64 oz',
      normalRange: '64+ oz',
      status: 'good',
      timestamp: '2024-01-21 08:00 PM',
      notes: 'Daily hydration goal met',
      icon: Droplets,
      color: 'text-cyan-500',
      trend: 'stable'
    },
    {
      id: 7,
      category: 'sleep',
      type: 'Sleep Duration',
      value: '7h 45m',
      normalRange: '7-9h',
      status: 'good',
      timestamp: '2024-01-21 06:30 AM',
      notes: 'Good quality sleep, 2 brief interruptions',
      icon: Moon,
      color: 'text-indigo-500',
      trend: 'improving'
    },
    {
      id: 8,
      category: 'medication',
      type: 'Lisinopril',
      value: '10mg taken',
      normalRange: '10mg daily',
      status: 'taken',
      timestamp: '2024-01-21 08:00 AM',
      notes: 'Taken with breakfast',
      icon: Pill,
      color: 'text-pink-500',
      trend: 'consistent'
    },
    {
      id: 9,
      category: 'mental',
      type: 'Mood Rating',
      value: '7/10 - Good',
      normalRange: '6-8/10',
      status: 'good',
      timestamp: '2024-01-22 09:00 AM',
      notes: 'Feeling positive and energetic today. Had a good nights sleep.',
      icon: Brain,
      color: 'text-purple-500',
      trend: 'improving'
    },
    {
      id: 10,
      category: 'mental',
      type: 'Anxiety Level',
      value: '3/10 - Low',
      normalRange: '0-4/10',
      status: 'good',
      timestamp: '2024-01-22 08:45 AM',
      notes: 'Minimal anxiety, feeling calm and focused.',
      icon: Brain,
      color: 'text-blue-500',
      trend: 'stable'
    },
    {
      id: 11,
      category: 'mental',
      type: 'Stress Level',
      value: '4/10 - Moderate',
      normalRange: '0-5/10',
      status: 'normal',
      timestamp: '2024-01-21 07:30 PM',
      notes: 'Work deadline approaching, manageable stress level.',
      icon: Brain,
      color: 'text-orange-500',
      trend: 'stable'
    },
    {
      id: 12,
      category: 'mental',
      type: 'Energy Level',
      value: '8/10 - High',
      normalRange: '6-8/10',
      status: 'good',
      timestamp: '2024-01-21 02:00 PM',
      notes: 'Great energy after lunch, productive afternoon.',
      icon: Zap,
      color: 'text-green-500',
      trend: 'improving'
    },
    {
      id: 13,
      category: 'mental',
      type: 'Depression Screen',
      value: 'PHQ-2: 2/6 - Low',
      normalRange: '0-2/6',
      status: 'normal',
      timestamp: '2024-01-20 10:00 AM',
      notes: 'Weekly mental health check-in. Feeling stable.',
      icon: Heart,
      color: 'text-pink-500',
      trend: 'stable'
    },
    {
      id: 14,
      category: 'mental',
      type: 'Meditation Session',
      value: '15 minutes',
      normalRange: '10+ min/day',
      status: 'good',
      timestamp: '2024-01-21 06:00 AM',
      notes: 'Morning mindfulness meditation. Focused on breathing.',
      icon: Brain,
      color: 'text-indigo-500',
      trend: 'consistent'
    },
    {
      id: 15,
      category: 'mental',
      type: 'Social Interaction',
      value: 'Good - 3 hours',
      normalRange: '2+ hours/day',
      status: 'good',
      timestamp: '2024-01-21 08:00 PM',
      notes: 'Quality time with family and friends. Video call with sister.',
      icon: Heart,
      color: 'text-cyan-500',
      trend: 'improving'
    }
  ]

  // Health metrics summary for dashboard cards
  const todayMetrics = [
    { 
      label: 'Logs Recorded', 
      value: '12', 
      change: '+3 from yesterday', 
      trend: 'up',
      icon: Activity,
      color: 'bg-blue-500'
    },
    { 
      label: 'Avg Heart Rate', 
      value: '72 bpm', 
      change: 'Within normal range', 
      trend: 'stable',
      icon: Heart,
      color: 'bg-red-500'
    },
    { 
      label: 'Steps Today', 
      value: '8,542', 
      change: '+15% vs last week', 
      trend: 'up',
      icon: Zap,
      color: 'bg-green-500'
    },
    { 
      label: 'Sleep Quality', 
      value: '85%', 
      change: 'Excellent quality', 
      trend: 'up',
      icon: Moon,
      color: 'bg-purple-500'
    },
    { 
      label: 'Mental Wellness', 
      value: '7.2/10', 
      change: 'Above average mood', 
      trend: 'up',
      icon: Brain,
      color: 'bg-pink-500'
    },
    { 
      label: 'Stress Level', 
      value: '4/10', 
      change: 'Manageable levels', 
      trend: 'stable',
      icon: AlertTriangle,
      color: 'bg-orange-500'
    }
  ]

  // Categories for filtering
  const logCategories = [
    { id: 'all', name: 'All Categories', count: healthLogs.length, icon: Activity, color: 'bg-gray-100 text-gray-600' },
    { id: 'vitals', name: 'Vital Signs', count: 4, icon: Heart, color: 'bg-red-100 text-red-600' },
    { id: 'symptoms', name: 'Symptoms', count: 1, icon: AlertTriangle, color: 'bg-orange-100 text-orange-600' },
    { id: 'medication', name: 'Medications', count: 1, icon: Pill, color: 'bg-blue-100 text-blue-600' },
    { id: 'activity', name: 'Physical Activity', count: 1, icon: Zap, color: 'bg-green-100 text-green-600' },
    { id: 'nutrition', name: 'Nutrition', count: 1, icon: Apple, color: 'bg-yellow-100 text-yellow-600' },
    { id: 'sleep', name: 'Sleep', count: 1, icon: Moon, color: 'bg-purple-100 text-purple-600' },
    { id: 'mental', name: 'Mental Health', count: 7, icon: Brain, color: 'bg-pink-100 text-pink-600' }
  ]

  // Filter logs based on selected category
  const filteredLogs = selectedCategory === 'all' 
    ? healthLogs 
    : healthLogs.filter(log => log.category === selectedCategory)

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'normal':
      case 'good':
      case 'taken':
        return 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-300'
      case 'minor':
        return 'bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-300'
      case 'critical':
        return 'bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-300'
      default:
        return 'bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-300'
    }
  }

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'improving':
      case 'up':
        return <TrendingUp className="w-3 h-3 text-green-500" />
      case 'declining':
      case 'down':
        return <TrendingUp className="w-3 h-3 text-red-500 rotate-180" />
      default:
        return <div className="w-3 h-3 bg-gray-400 rounded-full" />
    }
  }

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Health Logs
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            Track and monitor your health data over time
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <button className="border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 flex items-center gap-2">
            <Upload className="w-4 h-4" />
            Import Data
          </button>
          <button className="border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 flex items-center gap-2">
            <Download className="w-4 h-4" />
            Export
          </button>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2">
            <Plus className="w-4 h-4" />
            New Log Entry
          </button>
        </div>
      </div>

      {/* Metrics Dashboard */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
        {todayMetrics.map((metric, index) => (
          <Card key={index} className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className={`w-12 h-12 ${metric.color} rounded-lg flex items-center justify-center`}>
                <metric.icon className="w-6 h-6 text-white" />
              </div>
              {getTrendIcon(metric.trend)}
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">
                {metric.label}
              </h3>
              <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                {metric.value}
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-500">
                {metric.change}
              </p>
            </div>
          </Card>
        ))}
      </div>

      {/* Filters and Controls */}
      <Card className="p-6">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search logs..."
                className="pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white w-64"
              />
            </div>
            <select 
              value={selectedDateRange} 
              onChange={(e) => setSelectedDateRange(e.target.value)}
              className="border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 bg-white dark:bg-gray-700"
            >
              <option value="today">Today</option>
              <option value="7days">Last 7 days</option>
              <option value="30days">Last 30 days</option>
              <option value="90days">Last 3 months</option>
              <option value="custom">Custom range</option>
            </select>
            <button className="border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-3 py-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 flex items-center gap-2">
              <Filter className="w-4 h-4" />
              Advanced Filters
            </button>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600 dark:text-gray-400">View:</span>
            <div className="flex border border-gray-300 dark:border-gray-600 rounded-lg overflow-hidden">
              <button 
                onClick={() => setViewMode('list')}
                className={`px-3 py-2 text-sm ${viewMode === 'list' ? 'bg-blue-600 text-white' : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300'}`}
              >
                List
              </button>
              <button 
                onClick={() => setViewMode('chart')}
                className={`px-3 py-2 text-sm ${viewMode === 'chart' ? 'bg-blue-600 text-white' : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300'}`}
              >
                Charts
              </button>
              <button 
                onClick={() => setViewMode('calendar')}
                className={`px-3 py-2 text-sm ${viewMode === 'calendar' ? 'bg-blue-600 text-white' : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300'}`}
              >
                Calendar
              </button>
            </div>
          </div>
        </div>
      </Card>

      {/* Compact Categories Bar */}
      <Card className="p-4 mb-6 animate-in slide-in-from-top duration-300">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-sm font-semibold text-gray-900 dark:text-white">Categories</h3>
        </div>
        <div className="flex flex-wrap gap-2">
          {logCategories.map((category) => {
            const Icon = category.icon
            const isActive = selectedCategory === category.id
            return (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-colors text-sm ${
                  isActive
                    ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-700'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-blue-600 dark:text-blue-400' : 'text-gray-500'}`} />
                <span className="font-medium">{category.name}</span>
                <span className={`text-xs px-1.5 py-0.5 rounded-full ${
                  isActive
                    ? 'bg-blue-200 dark:bg-blue-800 text-blue-800 dark:text-blue-200'
                    : 'bg-gray-200 dark:bg-gray-600 text-gray-600 dark:text-gray-400'
                }`}>
                  {category.count}
                </span>
              </button>
            )
          })}
        </div>
      </Card>

      {/* Main Content Area */}
      {viewMode === 'list' && (
        <Card className="p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                Health Entries ({filteredLogs.length})
              </h2>
            </div>
            <div className="flex items-center gap-2">
              {/* Logs View Mode Toggle */}
              <div className="flex border border-gray-300 dark:border-gray-600 rounded-lg overflow-hidden mr-3">
                <button
                  onClick={() => setLogsViewMode('list')}
                  className={`p-2 transition-colors ${logsViewMode === 'list'
                    ? 'bg-blue-600 text-white'
                    : 'bg-white dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-600'
                    }`}
                  title="List view"
                >
                  <List className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setLogsViewMode('tile')}
                  className={`p-2 transition-colors ${logsViewMode === 'tile'
                    ? 'bg-blue-600 text-white'
                    : 'bg-white dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-600'
                    }`}
                  title="Tile view"
                >
                  <Grid3X3 className="w-4 h-4" />
                </button>
              </div>
              <button className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
                <Bell className="w-5 h-5" />
              </button>
              <button className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
                <Share2 className="w-5 h-5" />
              </button>
            </div>
          </div>

{logsViewMode === 'list' ? (
                <div className="space-y-4">
                  {filteredLogs.map((log) => (
                    <div key={log.id} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center flex-shrink-0">
                          <log.icon className={`w-6 h-6 ${log.color}`} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between mb-2">
                            <div>
                              <h3 className="font-semibold text-gray-900 dark:text-white">{log.type}</h3>
                              <p className="text-sm text-gray-600 dark:text-gray-400">
                                Normal range: {log.normalRange}
                              </p>
                            </div>
                            <div className="flex items-center gap-2">
                              {getTrendIcon(log.trend)}
                              <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(log.status)}`}>
                                {log.status}
                              </span>
                            </div>
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-3">
                            <div>
                              <span className="text-sm font-medium text-gray-900 dark:text-white">Value:</span>
                              <p className="text-lg font-bold text-blue-600 dark:text-blue-400">{log.value}</p>
                            </div>
                            <div>
                              <span className="text-sm font-medium text-gray-900 dark:text-white">Time:</span>
                              <p className="text-sm text-gray-600 dark:text-gray-400">{log.timestamp}</p>
                            </div>
                            <div>
                              <span className="text-sm font-medium text-gray-900 dark:text-white">Trend:</span>
                              <p className="text-sm text-gray-600 dark:text-gray-400 capitalize">{log.trend}</p>
                            </div>
                          </div>
                          {log.notes && (
                            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-3 mb-3">
                              <span className="text-sm font-medium text-gray-900 dark:text-white">Notes:</span>
                              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{log.notes}</p>
                            </div>
                          )}
                          <div className="flex items-center gap-2">
                            <button className="text-blue-600 hover:text-blue-700 text-sm flex items-center gap-1">
                              <Edit className="w-4 h-4" />
                              Edit
                            </button>
                            <button className="text-red-600 hover:text-red-700 text-sm flex items-center gap-1">
                              <Trash2 className="w-4 h-4" />
                              Delete
                            </button>
                            <button className="text-gray-600 hover:text-gray-700 text-sm flex items-center gap-1">
                              <Share2 className="w-4 h-4" />
                              Share with doctor
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
          ) : (
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {filteredLogs.map((log) => (
                    <div key={log.id} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200 flex flex-col h-full">
                      {/* Header */}
                      <div className="flex items-center justify-between mb-3">
                        <div className="w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                          <log.icon className={`w-5 h-5 ${log.color}`} />
                        </div>
                        <div className="flex items-center gap-2">
                          {getTrendIcon(log.trend)}
                          <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(log.status)}`}>
                            {log.status}
                          </span>
                        </div>
                      </div>
                      
                      {/* Title */}
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                        {log.type}
                      </h3>
                      
                      {/* Value */}
                      <div className="mb-3">
                        <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">{log.value}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">Normal: {log.normalRange}</p>
                      </div>
                      
                      {/* Time & Trend */}
                      <div className="text-xs text-gray-600 dark:text-gray-400 mb-3">
                        <p>{log.timestamp}</p>
                        <p className="capitalize">Trend: {log.trend}</p>
                      </div>
                      
                      {/* Notes */}
                      {log.notes && (
                        <div className="flex-1 mb-3">
                          <p className="text-xs text-gray-600 dark:text-gray-400 line-clamp-3">{log.notes}</p>
                        </div>
                      )}
                      
                      {/* Actions */}
                      <div className="flex items-center justify-between pt-2 border-t border-gray-200 dark:border-gray-700">
                        <button className="text-blue-600 hover:text-blue-700 text-xs flex items-center gap-1">
                          <Edit className="w-3 h-3" />
                          Edit
                        </button>
                        <button className="text-red-600 hover:text-red-700 text-xs flex items-center gap-1">
                          <Trash2 className="w-3 h-3" />
                          Delete
                        </button>
                        <button className="text-gray-600 hover:text-gray-700 text-xs flex items-center gap-1">
                          <Share2 className="w-3 h-3" />
                          Share
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
            </div>
          )}

          {filteredLogs.length === 0 && (
            <div className="text-center py-12">
              <Activity className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">No logs found</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Start tracking your health by adding your first log entry.
              </p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 mx-auto">
                <Plus className="w-4 h-4" />
                Add First Entry
              </button>
            </div>
          )}
        </Card>
      )}

      {viewMode === 'chart' && (
        <Card className="p-6">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
            Health Trends & Analytics
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <button className="flex items-center gap-2 p-4 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800">
              <LineChart className="w-5 h-5 text-blue-500" />
              <span>Trend Analysis</span>
            </button>
            <button className="flex items-center gap-2 p-4 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800">
              <BarChart3 className="w-5 h-5 text-green-500" />
              <span>Compare Metrics</span>
            </button>
            <button className="flex items-center gap-2 p-4 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800">
              <PieChart className="w-5 h-5 text-purple-500" />
              <span>Distribution</span>
            </button>
          </div>
          <div className="bg-gray-100 dark:bg-gray-800 rounded-lg h-64 flex items-center justify-center">
            <p className="text-gray-500 dark:text-gray-400">Chart visualization would be displayed here</p>
          </div>
        </Card>
      )}

      {viewMode === 'calendar' && (
        <Card className="p-6">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
            Calendar View
          </h2>
          <div className="bg-gray-100 dark:bg-gray-800 rounded-lg h-96 flex items-center justify-center">
            <p className="text-gray-500 dark:text-gray-400">Calendar view would be displayed here</p>
          </div>
        </Card>
      )}
    </div>
  )
}