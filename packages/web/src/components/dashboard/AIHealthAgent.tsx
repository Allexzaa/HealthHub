'use client'

import { useState, useEffect } from 'react'
import { Card } from '@/components/shared/Card'
import { 
  Bot, Brain, Heart, Activity, TrendingUp, TrendingDown, AlertTriangle, 
  CheckCircle, Shield, Zap, MessageCircle, Calendar, Pill, Users,
  Target, Award, Sparkles, Eye, ArrowRight, Clock, Bell, X, Send,
  ThermometerSun, Droplets, Scale, Moon, Sun, Smile, Frown, 
  Battery, Wifi, ChevronRight, Star, Globe, BookOpen, Phone, FileText
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
  const [selectedFeature, setSelectedFeature] = useState<string | null>(null)
  const [showMetrics, setShowMetrics] = useState<string | null>(null)
  const [showHistory, setShowHistory] = useState<string | null>(null)
  const [showInsights, setShowInsights] = useState<string | null>(null)
  
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

  const [chatHistory, setChatHistory] = useState<{[key: string]: Array<{sender: 'user' | 'ai', message: string, timestamp: string}>}>({
    'main': [
      { sender: 'ai', message: 'Good morning! I\'ve analyzed your recent health data. Your overall health score is 85/100 - that\'s excellent! I notice your blood pressure has increased slightly. Would you like some personalized recommendations?', timestamp: '9:15 AM' },
      { sender: 'user', message: 'Yes, what do you recommend for my blood pressure?', timestamp: '9:16 AM' },
      { sender: 'ai', message: 'Based on your patterns, I suggest: 1) Reduce sodium to <2300mg daily, 2) Add 15 minutes of walking after meals, 3) Try deep breathing exercises. I can help you track these changes. Shall I set up monitoring reminders?', timestamp: '9:17 AM' }
    ]
  })

  const healthcareFeatures = [
    { id: 'health-tracking', name: 'Health Tracking', icon: Activity, description: 'Log and monitor vitals, symptoms, and health metrics' },
    { id: 'appointments', name: 'Appointments', icon: Calendar, description: 'Schedule and manage medical appointments' },
    { id: 'medications', name: 'Medications', icon: Pill, description: 'Track medications and set reminders' },
    { id: 'specialists', name: 'Find Specialists', icon: Heart, description: 'Find and connect with healthcare specialists' },
    { id: 'insurance', name: 'Insurance Help', icon: Shield, description: 'Navigate insurance coverage and claims' },
    { id: 'wellness', name: 'Wellness Coach', icon: Zap, description: 'Fitness, nutrition, and lifestyle guidance' },
    { id: 'mental-health', name: 'Mental Health', icon: Brain, description: 'Mental health support and mood tracking' },
    { id: 'records', name: 'Medical Records', icon: FileText, description: 'Organize and access your medical records' }
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
    
    const chatKey = selectedFeature || 'main'
    const newMessage = {
      sender: 'user' as const,
      message: chatMessage,
      timestamp: 'Just now'
    }
    
    setChatHistory(prev => ({
      ...prev,
      [chatKey]: [...(prev[chatKey] || []), newMessage]
    }))
    setChatMessage('')
    
    // Simulate AI response
    setTimeout(() => {
      const aiResponse = {
        sender: 'ai' as const,
        message: getAIResponse(chatMessage),
        timestamp: 'Just now'
      }
      
      setChatHistory(prev => ({
        ...prev,
        [chatKey]: [...(prev[chatKey] || []), aiResponse]
      }))
    }, 1000)
  }

  const getAIResponse = (message: string) => {
    const lowerMessage = message.toLowerCase()
    if (lowerMessage.includes('appointment') || lowerMessage.includes('schedule')) {
      return 'I can help you schedule an appointment. Would you like me to show available doctors in your area or help you book with a specific provider?'
    }
    if (lowerMessage.includes('medication') || lowerMessage.includes('pill')) {
      return 'I can assist with medication management. Would you like to set up reminders, track adherence, or get information about your prescriptions?'
    }
    if (lowerMessage.includes('blood pressure') || lowerMessage.includes('bp')) {
      return 'I can help you track your blood pressure. Your recent reading of 128/82 is slightly elevated. Would you like me to set up regular monitoring or help you find lifestyle recommendations?'
    }
    if (lowerMessage.includes('stress') || lowerMessage.includes('anxiety')) {
      return 'I understand stress management is important. Based on your current stress levels, I recommend trying our guided meditation or connecting with a mental health professional. Would you like me to suggest some immediate stress-relief techniques?'
    }
    if (lowerMessage.includes('weight') || lowerMessage.includes('diet')) {
      return 'Great progress on your weight management! You\'ve lost 0.8kg this month. I can help you create a personalized nutrition plan or connect you with a dietitian. What specific nutrition goals would you like to work on?'
    }
    return 'Thank you for sharing that information. I\'m here to help with your health needs. You can ask me about appointments, medications, health tracking, mental health support, or any other health-related questions.'
  }

  const handleFeatureSelect = (featureId: string) => {
    setSelectedFeature(featureId)
    const feature = healthcareFeatures.find(f => f.id === featureId)
    if (feature && !chatHistory[featureId]) {
      const aiMessage = {
        sender: 'ai' as const,
        message: `I'm now ready to help you with ${feature.name}. ${feature.description}. What would you like to do?`,
        timestamp: 'Just now'
      }
      setChatHistory(prev => ({
        ...prev,
        [featureId]: [aiMessage]
      }))
    }
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

      {/* Enhanced Chat Modal with Healthcare Features */}
      {showChat && (
        <div className="fixed inset-0 z-50 p-4">
          {/* Enhanced backdrop with liquid effects */}
          <div className="absolute inset-0 bg-black/30 backdrop-blur-sm">
            {/* Floating liquid blobs in background */}
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-blue-400/10 to-indigo-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-gradient-to-br from-indigo-400/10 to-purple-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1.5s'}}></div>
          </div>
          
          <div className="relative flex items-center justify-center min-h-full">
            <div className="relative max-w-6xl w-full max-h-[85vh] overflow-hidden rounded-2xl">
              {/* Glassmorphism modal background */}
              <div className="absolute inset-0 backdrop-blur-2xl bg-white/10 dark:bg-white/5 border border-white/20 dark:border-white/10"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-blue-500/5"></div>
              
              {/* Modal content */}
              <div className="relative flex h-full backdrop-blur-xl bg-white/80 dark:bg-gray-900/80">
                {/* Left Sidebar - Healthcare Features with Glassmorphism */}
                <div className="w-72 backdrop-blur-md bg-white/20 dark:bg-black/20 border-r border-white/30 dark:border-white/10 flex flex-col">
                  <div className="p-4 border-b border-white/20 dark:border-white/10">
                    <h4 className="font-semibold text-gray-900 dark:text-white">Healthcare Features</h4>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">Choose specialized assistance</p>
                  </div>
                  <div className="flex-1 overflow-y-auto p-2">
                    {healthcareFeatures.map((feature) => (
                      <button
                        key={feature.id}
                        onClick={() => handleFeatureSelect(feature.id)}
                        className={`w-full text-left p-3 rounded-lg mb-2 transition-all duration-200 backdrop-blur-sm ${
                          selectedFeature === feature.id
                            ? 'bg-blue-200/40 dark:bg-blue-900/40 border border-blue-300/50 dark:border-blue-700/50'
                            : 'hover:bg-white/30 dark:hover:bg-white/10 border border-transparent hover:border-white/20'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                            selectedFeature === feature.id
                              ? 'bg-blue-500 text-white'
                              : 'bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400'
                          }`}>
                            <feature.icon className="w-5 h-5" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-gray-900 dark:text-white truncate">{feature.name}</p>
                            <p className="text-xs text-gray-500 dark:text-gray-400 truncate">{feature.description}</p>
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Right Side - Chat with Glassmorphism */}
                <div className="flex-1 flex flex-col backdrop-blur-sm bg-white/10 dark:bg-black/10">
                  <div className="flex items-center justify-between p-4 border-b border-white/20 dark:border-white/10 backdrop-blur-sm bg-white/30 dark:bg-black/20">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center">
                        <Bot className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">AI Health Agent</h3>
                        {selectedFeature && (
                          <p className="text-sm text-blue-600 dark:text-blue-400">
                            {healthcareFeatures.find(f => f.id === selectedFeature)?.name} Mode
                          </p>
                        )}
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                          <span className="text-xs text-green-600 dark:text-green-400">Online & Analyzing</span>
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={() => {
                        setShowChat(false)
                        setSelectedFeature(null)
                      }}
                      className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                  
                  <div className="flex-1 p-4 overflow-y-auto">
                    {/* Quick Action Buttons for selected features */}
                    {selectedFeature && (
                      <div className="mb-4 flex gap-2 flex-wrap">
                        <button 
                          onClick={() => setShowMetrics(selectedFeature)}
                          className="px-3 py-1.5 text-xs bg-blue-100/60 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 rounded-full backdrop-blur-sm border border-blue-200/50 dark:border-blue-700/50 hover:bg-blue-200/60 dark:hover:bg-blue-900/60 transition-colors"
                        >
                          View Metrics
                        </button>
                        <button 
                          onClick={() => setShowHistory(selectedFeature)}
                          className="px-3 py-1.5 text-xs bg-green-100/60 dark:bg-green-900/40 text-green-700 dark:text-green-300 rounded-full backdrop-blur-sm border border-green-200/50 dark:border-green-700/50 hover:bg-green-200/60 dark:hover:bg-green-900/60 transition-colors"
                        >
                          View History
                        </button>
                        <button 
                          onClick={() => setShowInsights(selectedFeature)}
                          className="px-3 py-1.5 text-xs bg-purple-100/60 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300 rounded-full backdrop-blur-sm border border-purple-200/50 dark:border-purple-700/50 hover:bg-purple-200/60 dark:hover:bg-purple-900/60 transition-colors"
                        >
                          Get Insights
                        </button>
                      </div>
                    )}

                    <div className="space-y-4">
                      {(chatHistory[selectedFeature || 'main'] || []).map((msg, index) => (
                        <div key={index} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                          <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg backdrop-blur-sm border ${
                            msg.sender === 'user' 
                              ? 'bg-blue-500/80 text-white border-blue-400/50' 
                              : 'bg-white/60 dark:bg-gray-800/60 text-gray-900 dark:text-white border-white/40 dark:border-gray-600/40'
                          }`}>
                            <p className="text-sm">{msg.message}</p>
                            <p className={`text-xs mt-1 ${
                              msg.sender === 'user' ? 'text-blue-100' : 'text-gray-500 dark:text-gray-400'
                            }`}>
                              {msg.timestamp}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="p-4 border-t border-white/20 dark:border-white/10 backdrop-blur-md bg-white/20 dark:bg-black/20">
                    <div className="flex gap-2">
                      <input
                        type="text"
                        value={chatMessage}
                        onChange={(e) => setChatMessage(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                        placeholder="Ask about your health, symptoms, medications, or wellness goals..."
                        className="flex-1 px-3 py-2 backdrop-blur-sm bg-white/40 dark:bg-black/30 border border-white/30 dark:border-white/20 rounded-lg focus:ring-2 focus:ring-blue-400/50 focus:border-blue-400/50 text-gray-900 dark:text-white placeholder-gray-600 dark:placeholder-gray-400"
                      />
                      <button
                        onClick={handleSendMessage}
                        className="relative overflow-hidden bg-gradient-to-r from-blue-500/80 to-indigo-600/80 hover:from-blue-600/90 hover:to-indigo-700/90 backdrop-blur-sm text-white px-4 py-2 rounded-lg transition-all duration-200 flex items-center gap-2 border border-blue-400/30 group"
                      >
                        {/* Button shine effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500"></div>
                        <Send className="w-4 h-4 relative z-10" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Metrics Modal */}
      {showMetrics && (
        <div className="fixed inset-0 z-50 p-4">
          <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" onClick={() => setShowMetrics(null)}></div>
          <div className="relative flex items-center justify-center min-h-full">
            <div className="relative w-full max-w-2xl backdrop-blur-xl bg-white/90 dark:bg-gray-900/90 rounded-2xl border border-white/20 dark:border-white/10 shadow-2xl">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {healthcareFeatures.find(f => f.id === showMetrics)?.name} Metrics
                  </h3>
                  <button onClick={() => setShowMetrics(null)} className="text-gray-400 hover:text-gray-600">
                    <X className="w-5 h-5" />
                  </button>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 backdrop-blur-sm bg-blue-100/60 dark:bg-blue-900/40 rounded-lg">
                    <h4 className="font-medium text-blue-900 dark:text-blue-100">Success Rate</h4>
                    <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">94%</p>
                  </div>
                  <div className="p-4 backdrop-blur-sm bg-green-100/60 dark:bg-green-900/40 rounded-lg">
                    <h4 className="font-medium text-green-900 dark:text-green-100">Usage</h4>
                    <p className="text-2xl font-bold text-green-600 dark:text-green-400">247 times</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* History Modal */}
      {showHistory && (
        <div className="fixed inset-0 z-50 p-4">
          <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" onClick={() => setShowHistory(null)}></div>
          <div className="relative flex items-center justify-center min-h-full">
            <div className="relative w-full max-w-2xl backdrop-blur-xl bg-white/90 dark:bg-gray-900/90 rounded-2xl border border-white/20 dark:border-white/10 shadow-2xl">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {healthcareFeatures.find(f => f.id === showHistory)?.name} History
                  </h3>
                  <button onClick={() => setShowHistory(null)} className="text-gray-400 hover:text-gray-600">
                    <X className="w-5 h-5" />
                  </button>
                </div>
                <div className="space-y-3">
                  <div className="p-3 backdrop-blur-sm bg-gray-100/60 dark:bg-gray-800/60 rounded-lg">
                    <p className="text-sm text-gray-900 dark:text-white">Blood pressure logged: 125/82 mmHg</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">2 hours ago</p>
                  </div>
                  <div className="p-3 backdrop-blur-sm bg-gray-100/60 dark:bg-gray-800/60 rounded-lg">
                    <p className="text-sm text-gray-900 dark:text-white">Medication reminder set for 2 PM</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">4 hours ago</p>
                  </div>
                  <div className="p-3 backdrop-blur-sm bg-gray-100/60 dark:bg-gray-800/60 rounded-lg">
                    <p className="text-sm text-gray-900 dark:text-white">Wellness goal updated: Daily steps target reached</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Yesterday</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Insights Modal */}
      {showInsights && (
        <div className="fixed inset-0 z-50 p-4">
          <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" onClick={() => setShowInsights(null)}></div>
          <div className="relative flex items-center justify-center min-h-full">
            <div className="relative w-full max-w-2xl backdrop-blur-xl bg-white/90 dark:bg-gray-900/90 rounded-2xl border border-white/20 dark:border-white/10 shadow-2xl">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {healthcareFeatures.find(f => f.id === showInsights)?.name} Insights
                  </h3>
                  <button onClick={() => setShowInsights(null)} className="text-gray-400 hover:text-gray-600">
                    <X className="w-5 h-5" />
                  </button>
                </div>
                <div className="space-y-4">
                  <div className="p-4 backdrop-blur-sm bg-blue-50/60 dark:bg-blue-900/20 rounded-lg border border-blue-200/50 dark:border-blue-700/50">
                    <h4 className="font-medium text-blue-900 dark:text-blue-100 mb-2">Key Insight</h4>
                    <p className="text-sm text-blue-800 dark:text-blue-200">Your health metrics show consistent improvement. The AI detected a positive correlation between your meditation practice and stress reduction.</p>
                  </div>
                  <div className="p-4 backdrop-blur-sm bg-green-50/60 dark:bg-green-900/20 rounded-lg border border-green-200/50 dark:border-green-700/50">
                    <h4 className="font-medium text-green-900 dark:text-green-100 mb-2">Recommendation</h4>
                    <p className="text-sm text-green-800 dark:text-green-200">Continue your current wellness routine. Your medication adherence is excellent at 95%. Consider adding light cardio exercise for blood pressure management.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}