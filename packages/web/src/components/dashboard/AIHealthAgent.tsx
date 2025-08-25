'use client'

import { useState, useEffect } from 'react'
import { Card } from '@/components/shared/Card'
import { 
  Bot, Brain, Heart, Activity, TrendingUp, TrendingDown, AlertTriangle, 
  CheckCircle, Shield, Zap, MessageCircle, Calendar, Pill, Users,
  Target, Award, Sparkles, Eye, ArrowRight, Clock, Bell, X, Send,
  ThermometerSun, Droplets, Scale, Moon, Sun, Smile, Frown, 
  Battery, Wifi, ChevronRight, Star, Globe, BookOpen, Phone
} from 'lucide-react'

interface HealthMetric {
  id: string
  name: string
  value: string | number
  unit: string
  status: 'excellent' | 'good' | 'warning' | 'critical'
  trend: 'up' | 'down' | 'stable'
  change: string
  icon: any
  color: string
}

interface HealthInsight {
  id: string
  type: 'improvement' | 'warning' | 'achievement' | 'recommendation'
  title: string
  description: string
  priority: 'high' | 'medium' | 'low'
  actionable: boolean
  action?: string
}

interface WellnessGoal {
  id: string
  title: string
  progress: number
  target: string
  category: 'fitness' | 'nutrition' | 'mental' | 'medical'
  icon: any
  color: string
}

export function AIHealthAgent() {
  const [isExpanded, setIsExpanded] = useState(false)
  const [showChat, setShowChat] = useState(false)
  const [activeTab, setActiveTab] = useState('overview')
  const [chatMessage, setChatMessage] = useState('')
  const [currentTime, setCurrentTime] = useState(new Date())
  const [healthScore, setHealthScore] = useState(85)
  
  // Update time every minute
  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 60000)
    return () => clearInterval(timer)
  }, [])

  const currentMetrics: HealthMetric[] = [
    {
      id: 'bp',
      name: 'Blood Pressure',
      value: '125/82',
      unit: 'mmHg',
      status: 'warning',
      trend: 'up',
      change: '+3 from last week',
      icon: Heart,
      color: 'text-orange-500'
    },
    {
      id: 'heart_rate',
      name: 'Resting Heart Rate',
      value: 68,
      unit: 'bpm',
      status: 'good',
      trend: 'stable',
      change: 'Normal range',
      icon: Activity,
      color: 'text-green-500'
    },
    {
      id: 'weight',
      name: 'Weight',
      value: 72.3,
      unit: 'kg',
      status: 'excellent',
      trend: 'down',
      change: '-0.8kg this month',
      icon: Scale,
      color: 'text-blue-500'
    },
    {
      id: 'sleep',
      name: 'Sleep Quality',
      value: 7.2,
      unit: '/10',
      status: 'good',
      trend: 'up',
      change: 'Improving',
      icon: Moon,
      color: 'text-purple-500'
    },
    {
      id: 'stress',
      name: 'Stress Level',
      value: 'Low',
      unit: '',
      status: 'excellent',
      trend: 'down',
      change: 'Better than usual',
      icon: Brain,
      color: 'text-indigo-500'
    },
    {
      id: 'hydration',
      name: 'Hydration',
      value: 85,
      unit: '%',
      status: 'good',
      trend: 'stable',
      change: '2.1L today',
      icon: Droplets,
      color: 'text-cyan-500'
    }
  ]

  const insights: HealthInsight[] = [
    {
      id: '1',
      type: 'warning',
      title: 'Blood Pressure Trend',
      description: 'Your BP has increased slightly over the past week. Consider reducing sodium intake and increasing physical activity.',
      priority: 'high',
      actionable: true,
      action: 'Schedule BP check'
    },
    {
      id: '2',
      type: 'achievement',
      title: 'Weight Loss Goal',
      description: 'Congratulations! You\'ve lost 0.8kg this month, staying on track with your health goals.',
      priority: 'medium',
      actionable: false
    },
    {
      id: '3',
      type: 'recommendation',
      title: 'Sleep Optimization',
      description: 'Your sleep quality has improved. Try maintaining your current bedtime routine for continued benefits.',
      priority: 'medium',
      actionable: true,
      action: 'View sleep tips'
    },
    {
      id: '4',
      type: 'improvement',
      title: 'Stress Management',
      description: 'Your stress levels are lower than usual. The meditation sessions seem to be helping.',
      priority: 'low',
      actionable: false
    }
  ]

  const wellnessGoals: WellnessGoal[] = [
    {
      id: '1',
      title: 'Daily Steps',
      progress: 78,
      target: '10,000 steps',
      category: 'fitness',
      icon: Activity,
      color: 'text-green-500'
    },
    {
      id: '2',
      title: 'Water Intake',
      progress: 85,
      target: '2.5L water',
      category: 'nutrition',
      icon: Droplets,
      color: 'text-blue-500'
    },
    {
      id: '3',
      title: 'Meditation',
      progress: 100,
      target: '10 min daily',
      category: 'mental',
      icon: Brain,
      color: 'text-purple-500'
    },
    {
      id: '4',
      title: 'Medication',
      progress: 95,
      target: '100% adherence',
      category: 'medical',
      icon: Pill,
      color: 'text-orange-500'
    }
  ]

  const chatHistory = [
    { sender: 'ai', message: 'Good morning! I\'ve analyzed your recent health data. Your overall health score is 85/100 - that\'s excellent! I notice your blood pressure has increased slightly. Would you like some personalized recommendations?', timestamp: '9:15 AM' },
    { sender: 'user', message: 'Yes, what do you recommend for my blood pressure?', timestamp: '9:16 AM' },
    { sender: 'ai', message: 'Based on your patterns, I suggest: 1) Reduce sodium to <2300mg daily, 2) Add 15 minutes of walking after meals, 3) Try deep breathing exercises. I can help you track these changes. Shall I set up monitoring reminders?', timestamp: '9:17 AM' }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'excellent': return 'text-green-600 bg-green-100 dark:bg-green-900/20'
      case 'good': return 'text-blue-600 bg-blue-100 dark:bg-blue-900/20'
      case 'warning': return 'text-orange-600 bg-orange-100 dark:bg-orange-900/20'
      case 'critical': return 'text-red-600 bg-red-100 dark:bg-red-900/20'
      default: return 'text-gray-600 bg-gray-100 dark:bg-gray-900/20'
    }
  }

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up': return <TrendingUp className="w-4 h-4 text-green-500" />
      case 'down': return <TrendingDown className="w-4 h-4 text-red-500" />
      default: return <div className="w-4 h-4 rounded-full bg-gray-400" />
    }
  }

  const handleSendMessage = () => {
    if (!chatMessage.trim()) return
    // Simulate sending message (in real app, this would connect to AI service)
    setChatMessage('')
  }

  const getGreeting = () => {
    const hour = currentTime.getHours()
    if (hour < 12) return '🌅 Good morning'
    if (hour < 17) return '🌤️ Good afternoon' 
    return '🌙 Good evening'
  }

  const getHealthScoreColor = (score: number) => {
    if (score >= 85) return 'text-green-600'
    if (score >= 70) return 'text-blue-600'
    if (score >= 50) return 'text-orange-600'
    return 'text-red-600'
  }

  return (
    <div className="space-y-4">
      {/* Main AI Health Agent Card */}
      <Card className="relative overflow-hidden">
        {/* Animated background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-indigo-50/30 to-purple-50/50 dark:from-blue-900/10 dark:via-indigo-900/10 dark:to-purple-900/10">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-indigo-500/20 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-br from-purple-400/15 to-pink-500/15 rounded-full blur-xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>

        <div className="relative p-6">
          {/* Header */}
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 flex items-center justify-center shadow-lg">
                  <Bot className="w-8 h-8 text-white drop-shadow-sm" />
                  <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center shadow-md">
                    <Wifi className="w-3 h-3 text-white" />
                  </div>
                </div>
                <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full animate-pulse shadow-sm"></div>
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                  AI Health Agent
                  <Sparkles className="w-5 h-5 text-yellow-500 animate-pulse" />
                </h2>
                <p className="text-sm text-gray-600 dark:text-gray-400">Your personal health companion & advisor</p>
                <div className="flex items-center gap-3 mt-2">
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-ping"></div>
                    <span className="text-xs text-green-600 dark:text-green-400 font-medium">Active</span>
                  </div>
                  <div className="text-xs text-gray-500">•</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">Last analysis: 2 min ago</div>
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="mb-2">
                <span className="text-xs text-gray-500 dark:text-gray-400">Health Score</span>
                <div className="flex items-center gap-2">
                  <span className={`text-2xl font-bold ${getHealthScoreColor(healthScore)}`}>{healthScore}</span>
                  <div className="flex flex-col items-center">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center text-white text-xs font-bold shadow-lg">
                      {healthScore}
                    </div>
                    <span className="text-xs text-green-600 dark:text-green-400 font-medium mt-1">Excellent</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* AI Status & Summary */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl p-4 mb-6 border border-blue-200/50 dark:border-blue-700/50">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center shadow-md">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-gray-800 dark:text-gray-200 font-medium mb-2">
                  {getGreeting()}! I've been monitoring your health data continuously.
                </p>
                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                  Your health metrics show good overall stability. I've detected a slight increase in blood pressure that needs attention. 
                  Your weight loss progress is excellent, and stress levels are well-managed. Ready to dive deeper into your health insights?
                </p>
                <div className="flex items-center gap-4 mt-3">
                  <div className="flex items-center gap-1 text-xs bg-green-200/60 dark:bg-green-900/40 text-green-700 dark:text-green-300 px-2 py-1 rounded-full">
                    <CheckCircle className="w-3 h-3" />
                    <span>5 Goals on track</span>
                  </div>
                  <div className="flex items-center gap-1 text-xs bg-orange-200/60 dark:bg-orange-900/40 text-orange-700 dark:text-orange-300 px-2 py-1 rounded-full">
                    <AlertTriangle className="w-3 h-3" />
                    <span>1 Alert</span>
                  </div>
                  <div className="flex items-center gap-1 text-xs bg-blue-200/60 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 px-2 py-1 rounded-full">
                    <Target className="w-3 h-3" />
                    <span>3 Recommendations</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Metrics Overview */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            {currentMetrics.slice(0, 3).map((metric) => {
              const Icon = metric.icon
              return (
                <div key={metric.id} className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-lg p-3 border border-gray-200/50 dark:border-gray-700/50">
                  <div className="flex items-center gap-2 mb-2">
                    <Icon className={`w-4 h-4 ${metric.color}`} />
                    <span className="text-xs text-gray-600 dark:text-gray-400">{metric.name}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-gray-900 dark:text-white">{metric.value}</span>
                    <div className="flex items-center gap-1">
                      {getTrendIcon(metric.trend)}
                      <span className={`text-xs px-2 py-0.5 rounded-full ${getStatusColor(metric.status)}`}>
                        {metric.status}
                      </span>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3">
            <button
              onClick={() => setShowChat(true)}
              className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-4 py-3 rounded-xl font-medium transition-all duration-200 flex items-center justify-center gap-2 shadow-lg shadow-blue-500/25"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Chat with Agent</span>
            </button>
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 px-4 py-3 rounded-xl font-medium transition-all duration-200 flex items-center gap-2"
            >
              <Eye className="w-5 h-5" />
              <span>View Details</span>
              <ChevronRight className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-90' : ''}`} />
            </button>
          </div>
        </div>
      </Card>

      {/* Expanded Details */}
      {isExpanded && (
        <Card className="p-6">
          {/* Tab Navigation */}
          <div className="flex gap-1 mb-6 bg-gray-100 dark:bg-gray-800 p-1 rounded-xl">
            {[
              { id: 'overview', name: 'Health Overview', icon: Activity },
              { id: 'insights', name: 'AI Insights', icon: Brain },
              { id: 'goals', name: 'Wellness Goals', icon: Target },
              { id: 'therapy', name: 'Mental Health', icon: Heart }
            ].map(tab => {
              const Icon = tab.icon
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-1 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center justify-center gap-2 ${
                    activeTab === tab.id
                      ? 'bg-white dark:bg-gray-700 text-blue-600 dark:text-blue-400 shadow-sm'
                      : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{tab.name}</span>
                </button>
              )
            })}
          </div>

          {/* Tab Content */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Comprehensive Health Metrics</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {currentMetrics.map((metric) => {
                  const Icon = metric.icon
                  return (
                    <div key={metric.id} className="bg-white dark:bg-gray-800 rounded-xl p-4 border border-gray-200 dark:border-gray-700">
                      <div className="flex items-center gap-3 mb-3">
                        <div className={`w-10 h-10 rounded-lg bg-gray-100 dark:bg-gray-700 flex items-center justify-center ${metric.color}`}>
                          <Icon className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900 dark:text-white">{metric.name}</h4>
                          <p className="text-sm text-gray-500 dark:text-gray-400">{metric.change}</p>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-xl font-bold text-gray-900 dark:text-white">
                          {metric.value} <span className="text-sm text-gray-500 font-normal">{metric.unit}</span>
                        </span>
                        <div className="flex items-center gap-2">
                          {getTrendIcon(metric.trend)}
                          <span className={`text-xs px-2 py-1 rounded-full ${getStatusColor(metric.status)}`}>
                            {metric.status}
                          </span>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          )}

          {activeTab === 'insights' && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">AI-Generated Health Insights</h3>
              {insights.map((insight) => (
                <div key={insight.id} className={`p-4 rounded-xl border-l-4 ${
                  insight.type === 'warning' ? 'bg-orange-50 dark:bg-orange-900/20 border-orange-500' :
                  insight.type === 'achievement' ? 'bg-green-50 dark:bg-green-900/20 border-green-500' :
                  insight.type === 'recommendation' ? 'bg-blue-50 dark:bg-blue-900/20 border-blue-500' :
                  'bg-purple-50 dark:bg-purple-900/20 border-purple-500'
                }`}>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h4 className="font-medium text-gray-900 dark:text-white">{insight.title}</h4>
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          insight.priority === 'high' ? 'bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300' :
                          insight.priority === 'medium' ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/40 dark:text-yellow-300' :
                          'bg-gray-100 text-gray-700 dark:bg-gray-900/40 dark:text-gray-300'
                        }`}>
                          {insight.priority}
                        </span>
                      </div>
                      <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">{insight.description}</p>
                      {insight.actionable && (
                        <button className="text-sm text-blue-600 dark:text-blue-400 font-medium hover:underline">
                          {insight.action} →
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'goals' && (
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Wellness Goals Progress</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {wellnessGoals.map((goal) => {
                  const Icon = goal.icon
                  return (
                    <div key={goal.id} className="bg-white dark:bg-gray-800 rounded-xl p-4 border border-gray-200 dark:border-gray-700">
                      <div className="flex items-center gap-3 mb-3">
                        <div className={`w-10 h-10 rounded-lg bg-gray-100 dark:bg-gray-700 flex items-center justify-center ${goal.color}`}>
                          <Icon className="w-5 h-5" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium text-gray-900 dark:text-white">{goal.title}</h4>
                          <p className="text-sm text-gray-500 dark:text-gray-400">Target: {goal.target}</p>
                        </div>
                        <span className="text-lg font-bold text-gray-900 dark:text-white">{goal.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full transition-all duration-500 ${
                            goal.progress >= 90 ? 'bg-green-500' : 
                            goal.progress >= 70 ? 'bg-blue-500' : 
                            goal.progress >= 50 ? 'bg-yellow-500' : 'bg-red-500'
                          }`}
                          style={{ width: `${goal.progress}%` }}
                        />
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          )}

          {activeTab === 'therapy' && (
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Mental Health & Therapy Support</h3>
              
              {/* Mood Tracking */}
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl p-6 border border-purple-200/50 dark:border-purple-700/50">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center">
                    <Smile className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white">Today's Mood Check</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">How are you feeling right now?</p>
                  </div>
                </div>
                <div className="flex gap-3 mb-4">
                  {['😊', '😌', '😐', '😔', '😰'].map((emoji, index) => (
                    <button key={index} className="w-12 h-12 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-purple-300 dark:hover:border-purple-600 flex items-center justify-center text-xl transition-colors">
                      {emoji}
                    </button>
                  ))}
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">Current mood trend: <span className="font-medium text-green-600">Improving</span></p>
              </div>

              {/* Therapy Features */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white dark:bg-gray-800 rounded-xl p-4 border border-gray-200 dark:border-gray-700">
                  <div className="flex items-center gap-3 mb-3">
                    <BookOpen className="w-6 h-6 text-blue-500" />
                    <h4 className="font-medium text-gray-900 dark:text-white">Guided Meditation</h4>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">Daily 10-minute sessions available</p>
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                    Start Session
                  </button>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-xl p-4 border border-gray-200 dark:border-gray-700">
                  <div className="flex items-center gap-3 mb-3">
                    <Users className="w-6 h-6 text-green-500" />
                    <h4 className="font-medium text-gray-900 dark:text-white">Therapy Sessions</h4>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">Connect with licensed therapists</p>
                  <button className="w-full bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                    Book Session
                  </button>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-xl p-4 border border-gray-200 dark:border-gray-700">
                  <div className="flex items-center gap-3 mb-3">
                    <Phone className="w-6 h-6 text-red-500" />
                    <h4 className="font-medium text-gray-900 dark:text-white">Crisis Support</h4>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">24/7 mental health helpline</p>
                  <button className="w-full bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                    Get Help Now
                  </button>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-xl p-4 border border-gray-200 dark:border-gray-700">
                  <div className="flex items-center gap-3 mb-3">
                    <Globe className="w-6 h-6 text-purple-500" />
                    <h4 className="font-medium text-gray-900 dark:text-white">Support Groups</h4>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">Join community discussions</p>
                  <button className="w-full bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                    Join Community
                  </button>
                </div>
              </div>
            </div>
          )}
        </Card>
      )}

      {/* Chat Modal */}
      {showChat && (
        <div className="fixed inset-0 z-50 p-4">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setShowChat(false)} />
          <div className="relative flex items-center justify-center min-h-full">
            <div className="w-full max-w-4xl h-[80vh] bg-white dark:bg-gray-900 rounded-2xl shadow-2xl overflow-hidden">
              {/* Chat Header */}
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
                      <Bot className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">AI Health Agent</h3>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                        <span className="text-sm text-blue-100">Online • Ready to help</span>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => setShowChat(false)}
                    className="p-2 text-white/80 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Chat Messages */}
              <div className="flex-1 p-4 overflow-y-auto bg-gray-50 dark:bg-gray-800" style={{ height: 'calc(80vh - 140px)' }}>
                <div className="space-y-4">
                  {chatHistory.map((msg, index) => (
                    <div key={index} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                      <div className={`max-w-md px-4 py-3 rounded-2xl ${
                        msg.sender === 'user' 
                          ? 'bg-blue-600 text-white' 
                          : 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm'
                      }`}>
                        <p className="text-sm">{msg.message}</p>
                        <p className={`text-xs mt-2 ${
                          msg.sender === 'user' ? 'text-blue-100' : 'text-gray-500 dark:text-gray-400'
                        }`}>
                          {msg.timestamp}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Chat Input */}
              <div className="p-4 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
                <div className="flex gap-3">
                  <input
                    type="text"
                    value={chatMessage}
                    onChange={(e) => setChatMessage(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    placeholder="Ask me about your health, symptoms, or wellness goals..."
                    className="flex-1 px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                  />
                  <button
                    onClick={handleSendMessage}
                    className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-6 py-3 rounded-xl font-medium transition-all duration-200 flex items-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}