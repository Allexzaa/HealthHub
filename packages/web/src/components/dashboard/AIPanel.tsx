'use client'

import { useState } from 'react'
import { Card } from '@/components/shared/Card'
import { Bot, Plus, MessageCircle, Clock, TrendingUp, Heart, Brain, Shield, Zap } from 'lucide-react'

interface AIAgent {
  id: string
  name: string
  type: string
  active: boolean
  lastActivity: string
  conversationSummary: string
  currentTracking: string
  icon: any
  color: string
  statusColor: string
}

export function AIPanel() {
  const [agents, setAgents] = useState<AIAgent[]>([
    { 
      id: '1', 
      name: 'Main Assistant', 
      type: 'main', 
      active: true,
      lastActivity: '2 min ago',
      conversationSummary: 'Discussed your blood pressure readings and upcoming appointment reminders.',
      currentTracking: 'Monitoring: Medication schedule, vital signs, appointment prep',
      icon: Bot,
      color: 'from-blue-500 to-blue-600',
      statusColor: 'bg-green-500'
    },
    { 
      id: '2', 
      name: 'Cardiologist Finder', 
      type: 'specialist', 
      active: false,
      lastActivity: '1 hour ago',
      conversationSummary: 'Found 3 cardiologists in your area accepting new patients.',
      currentTracking: 'Tracking: Heart health metrics, specialist availability',
      icon: Heart,
      color: 'from-red-500 to-red-600',
      statusColor: 'bg-yellow-500'
    },
    { 
      id: '3', 
      name: 'Insurance Helper', 
      type: 'insurance', 
      active: false,
      lastActivity: '3 hours ago',
      conversationSummary: 'Explained your coverage benefits and helped with claim submission.',
      currentTracking: 'Monitoring: Claims status, coverage limits, deductible progress',
      icon: Shield,
      color: 'from-green-500 to-green-600',
      statusColor: 'bg-blue-500'
    },
    { 
      id: '4', 
      name: 'Wellness Coach', 
      type: 'wellness', 
      active: true,
      lastActivity: '30 min ago',
      conversationSummary: 'Reviewed your exercise goals and suggested meditation routine.',
      currentTracking: 'Tracking: Fitness progress, stress levels, sleep quality',
      icon: Zap,
      color: 'from-purple-500 to-purple-600',
      statusColor: 'bg-green-500'
    },
    { 
      id: '5', 
      name: 'Mental Health Support', 
      type: 'mental', 
      active: false,
      lastActivity: '1 day ago',
      conversationSummary: 'Discussed mood patterns and provided coping strategies for stress.',
      currentTracking: 'Monitoring: Mood trends, anxiety levels, therapy session reminders',
      icon: Brain,
      color: 'from-pink-500 to-pink-600',
      statusColor: 'bg-gray-400'
    }
  ])

  const [activeAgent, setActiveAgent] = useState('1')

  const getActiveAgents = () => agents.filter(agent => agent.active)
  const getInactiveAgents = () => agents.filter(agent => !agent.active)

  return (
    <div className="space-y-6">
      <Card className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
            <Bot className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-lg font-semibold">AI Health Assistants</h3>
            <p className="text-sm opacity-90">{getActiveAgents().length} active agents monitoring your health</p>
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur rounded-lg p-4 mb-4">
          <p className="text-sm">
            🌅 Good morning! Your health metrics look stable today. Remember to take 
            your medication at 2 PM. You have an upcoming appointment with Dr. Smith 
            tomorrow at 10 AM.
          </p>
        </div>
      </Card>

      {/* Active Agents */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Active Agents</h4>
          <span className="text-sm text-gray-600 dark:text-gray-400">
            {getActiveAgents().length} agents working
          </span>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {getActiveAgents().map((agent) => (
            <Card key={agent.id} className="p-5 hover:shadow-lg transition-all duration-200 cursor-pointer border-l-4 border-l-green-500 bg-gradient-to-r from-green-50/30 to-white dark:from-green-900/10 dark:to-gray-800">
              <div className="space-y-4">
                {/* Header Section */}
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-4">
                    <div className={`w-14 h-14 bg-gradient-to-r ${agent.color} rounded-xl flex items-center justify-center relative shadow-lg`}>
                      <agent.icon className="w-7 h-7 text-white" />
                      <div className={`absolute -top-1 -right-1 w-5 h-5 ${agent.statusColor} rounded-full border-3 border-white shadow-sm`}>
                        <div className="w-full h-full bg-current rounded-full animate-pulse"></div>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h5 className="font-bold text-lg text-gray-900 dark:text-white mb-1">{agent.name}</h5>
                      <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                        <Clock className="w-4 h-4" />
                        <span>Active {agent.lastActivity}</span>
                        <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                        <span className="text-green-600 dark:text-green-400 font-medium">ONLINE</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Conversation Summary */}
                <div className="bg-white dark:bg-gray-700 rounded-lg p-4 border border-gray-100 dark:border-gray-600">
                  <h6 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Recent Conversation</h6>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    {agent.conversationSummary}
                  </p>
                </div>

                {/* Current Tracking */}
                <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 border border-blue-100 dark:border-blue-800">
                  <h6 className="text-sm font-semibold text-blue-700 dark:text-blue-300 mb-2">Currently Monitoring</h6>
                  <p className="text-sm text-blue-600 dark:text-blue-400">
                    {agent.currentTracking}
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-2">
                  <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2.5 rounded-lg text-sm font-medium flex items-center justify-center gap-2 transition-colors">
                    <MessageCircle className="w-4 h-4" />
                    Continue Chat
                  </button>
                  <button className="flex-1 bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 px-4 py-2.5 rounded-lg text-sm font-medium flex items-center justify-center gap-2 transition-colors">
                    <TrendingUp className="w-4 h-4" />
                    View Insights
                  </button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Available Agents */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Available Agents</h4>
          <span className="text-sm text-gray-600 dark:text-gray-400">
            {getInactiveAgents().length} agents available
          </span>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {getInactiveAgents().map((agent) => (
            <Card key={agent.id} className="p-5 hover:shadow-lg transition-all duration-200 cursor-pointer border-l-4 border-l-gray-300 dark:border-l-gray-600 bg-gradient-to-r from-gray-50/50 to-white dark:from-gray-800/50 dark:to-gray-800 hover:border-l-blue-400">
              <div className="space-y-4">
                {/* Header Section */}
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-4">
                    <div className={`w-14 h-14 bg-gradient-to-r ${agent.color} rounded-xl flex items-center justify-center relative shadow-lg opacity-60 hover:opacity-80 transition-opacity`}>
                      <agent.icon className="w-7 h-7 text-white" />
                      <div className={`absolute -top-1 -right-1 w-5 h-5 ${agent.statusColor} rounded-full border-3 border-white shadow-sm`}></div>
                    </div>
                    <div className="flex-1">
                      <h5 className="font-bold text-lg text-gray-900 dark:text-white mb-1">{agent.name}</h5>
                      <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                        <Clock className="w-4 h-4" />
                        <span>Last active {agent.lastActivity}</span>
                        <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                        <span className="text-gray-500 dark:text-gray-400 font-medium">STANDBY</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Last Conversation */}
                <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4 border border-gray-200 dark:border-gray-600">
                  <h6 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2">Last Conversation</h6>
                  <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                    {agent.conversationSummary}
                  </p>
                </div>

                {/* Capabilities */}
                <div className="bg-orange-50 dark:bg-orange-900/20 rounded-lg p-4 border border-orange-100 dark:border-orange-800">
                  <h6 className="text-sm font-semibold text-orange-700 dark:text-orange-300 mb-2">Capabilities</h6>
                  <p className="text-sm text-orange-600 dark:text-orange-400">
                    {agent.currentTracking}
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-2">
                  <button 
                    onClick={() => {
                      setAgents(agents.map(a => 
                        a.id === agent.id ? { ...a, active: true } : a
                      ))
                    }}
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2.5 rounded-lg text-sm font-medium flex items-center justify-center gap-2 transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                    Activate Agent
                  </button>
                  <button className="flex-1 bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 px-4 py-2.5 rounded-lg text-sm font-medium flex items-center justify-center gap-2 transition-colors">
                    <MessageCircle className="w-4 h-4" />
                    View History
                  </button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Add New Agent Card - Compact Style */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Create Custom Agent</h4>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {/* Quick Agent Templates */}
          <button className="bg-blue-50 hover:bg-blue-100 dark:bg-gray-800 dark:hover:bg-gray-700 p-3 rounded-lg transition-all duration-200 text-left group border border-transparent hover:border-blue-200 dark:hover:border-blue-600">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <Heart className="w-4 h-4 text-white" />
              </div>
              <div className="min-w-0 flex-1">
                <h5 className="font-medium text-sm text-blue-600 dark:text-white">Diabetes Tracker</h5>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  Blood sugar, diet, insulin monitoring
                </p>
              </div>
            </div>
          </button>

          <button className="bg-green-50 hover:bg-green-100 dark:bg-gray-800 dark:hover:bg-gray-700 p-3 rounded-lg transition-all duration-200 text-left group border border-transparent hover:border-green-200 dark:hover:border-green-600">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <Brain className="w-4 h-4 text-white" />
              </div>
              <div className="min-w-0 flex-1">
                <h5 className="font-medium text-sm text-green-600 dark:text-white">Therapy Assistant</h5>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  Session reminders, mood tracking
                </p>
              </div>
            </div>
          </button>

          <button className="bg-purple-50 hover:bg-purple-100 dark:bg-gray-800 dark:hover:bg-gray-700 p-3 rounded-lg transition-all duration-200 text-left group border border-transparent hover:border-purple-200 dark:hover:border-purple-600">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <Zap className="w-4 h-4 text-white" />
              </div>
              <div className="min-w-0 flex-1">
                <h5 className="font-medium text-sm text-purple-600 dark:text-white">Fitness Coach</h5>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  Workout plans, recovery tracking
                </p>
              </div>
            </div>
          </button>

          <button className="bg-orange-50 hover:bg-orange-100 dark:bg-gray-800 dark:hover:bg-gray-700 p-3 rounded-lg transition-all duration-200 text-left group border border-transparent hover:border-orange-200 dark:hover:border-orange-600">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <Shield className="w-4 h-4 text-white" />
              </div>
              <div className="min-w-0 flex-1">
                <h5 className="font-medium text-sm text-orange-600 dark:text-white">Chronic Care</h5>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  Long-term condition management
                </p>
              </div>
            </div>
          </button>
        </div>

        {/* Custom Agent Builder */}
        <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
          <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white p-3 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 text-sm font-medium">
            <Plus className="w-4 h-4" />
            Create Custom Agent
          </button>
          <p className="text-xs text-gray-500 dark:text-gray-400 text-center mt-2">
            Or build your own specialized health assistant
          </p>
        </div>

        {/* Quick Stats */}
        <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
            <span>Available templates: 12</span>
            <span>Custom agents created: 2</span>
          </div>
        </div>
      </div>
    </div>
  )
}