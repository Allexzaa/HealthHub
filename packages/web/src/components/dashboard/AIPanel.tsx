'use client'

import { useState } from 'react'
import { Card } from '@/components/shared/Card'
import { Bot, MessageCircle, AlertTriangle, X, Send, Activity, Calendar, Pill, Heart, Shield, Zap, Brain, FileText } from 'lucide-react'

export function AIPanel() {
  const [showMainChat, setShowMainChat] = useState(false)
  const [selectedFeature, setSelectedFeature] = useState<string | null>(null)
  const [chatMessage, setChatMessage] = useState('')
  const [showMetrics, setShowMetrics] = useState<string | null>(null)
  const [showHistory, setShowHistory] = useState<string | null>(null)
  const [showInsights, setShowInsights] = useState<string | null>(null)
  
  const [chatHistory, setChatHistory] = useState<{[key: string]: Array<{sender: 'user' | 'ai', message: string, timestamp: string}>}>({
    'main': [
      { sender: 'ai', message: 'Hello! I\'m your AI Health Assistant. I can help you with health tracking, appointment scheduling, medication reminders, and more. How can I assist you today?', timestamp: '2 hours ago' },
      { sender: 'user', message: 'I\'ve been feeling a bit dizzy lately and my blood pressure was 128/82.', timestamp: '2 hours ago' },
      { sender: 'ai', message: 'I understand your concern. A reading of 128/82 is slightly elevated. I recommend monitoring it closely and discussing this with your doctor. Would you like me to help schedule an appointment or set up blood pressure tracking?', timestamp: '2 hours ago' }
    ]
  })

  const features = [
    { id: 'health-tracking', name: 'Health Tracking', icon: Activity, description: 'Log and monitor vitals, symptoms, and health metrics' },
    { id: 'appointments', name: 'Appointments', icon: Calendar, description: 'Schedule and manage medical appointments' },
    { id: 'medications', name: 'Medications', icon: Pill, description: 'Track medications and set reminders' },
    { id: 'specialists', name: 'Find Specialists', icon: Heart, description: 'Find and connect with healthcare specialists' },
    { id: 'insurance', name: 'Insurance Help', icon: Shield, description: 'Navigate insurance coverage and claims' },
    { id: 'wellness', name: 'Wellness Coach', icon: Zap, description: 'Fitness, nutrition, and lifestyle guidance' },
    { id: 'mental-health', name: 'Mental Health', icon: Brain, description: 'Mental health support and mood tracking' },
    { id: 'records', name: 'Medical Records', icon: FileText, description: 'Organize and access your medical records' }
  ]

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
    return 'Thank you for sharing that information. I\'m here to help with your health needs. You can ask me about appointments, medications, health tracking, or any other health-related questions.'
  }

  const handleFeatureSelect = (featureId: string) => {
    setSelectedFeature(featureId)
    const feature = features.find(f => f.id === featureId)
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

  return (
    <div className="space-y-6">
      {/* Main AI Assistant with Liquid Glass */}
      <div className="relative p-6 rounded-xl overflow-hidden backdrop-blur-xl bg-white/10 dark:bg-white/5 border border-white/20 dark:border-white/10 shadow-2xl shadow-blue-500/10">
        {/* Liquid Glass Background Effects */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Animated liquid blobs */}
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-gradient-to-br from-blue-400/30 to-indigo-500/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-to-br from-indigo-400/20 to-purple-500/20 rounded-full blur-2xl animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-gradient-to-br from-cyan-400/15 to-blue-500/15 rounded-full blur-xl animate-pulse" style={{animationDelay: '2s'}}></div>
          
          {/* Floating particles */}
          <div className="absolute top-6 right-12 w-2 h-2 bg-blue-400/40 rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
          <div className="absolute bottom-8 left-8 w-1 h-1 bg-indigo-400/50 rounded-full animate-ping" style={{animationDelay: '1.5s'}}></div>
          <div className="absolute top-1/3 right-1/4 w-1.5 h-1.5 bg-cyan-400/60 rounded-full animate-ping" style={{animationDelay: '2.5s'}}></div>
          
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-indigo-50/30 dark:from-blue-900/20 dark:via-transparent dark:to-indigo-900/10"></div>
        </div>
        
        {/* Content overlay */}
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-4">
              <div className="relative w-16 h-16 rounded-full overflow-hidden">
                {/* Glassmorphism bot icon container */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-indigo-600/30 backdrop-blur-sm border border-white/30"></div>
                <div className="relative w-full h-full bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center shadow-xl shadow-blue-500/25">
                  <Bot className="w-8 h-8 text-white drop-shadow-sm" />
                  {/* Animated glow */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-indigo-500/20 animate-pulse rounded-full"></div>
                </div>
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-900 dark:text-white drop-shadow-sm">AI Health Assistant</h2>
                <p className="text-sm text-gray-700/80 dark:text-gray-300/90">Your personal healthcare companion</p>
                <div className="flex items-center gap-2 mt-1">
                  <div className="relative">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
                    <div className="absolute inset-0 w-2 h-2 bg-green-500 rounded-full"></div>
                  </div>
                  <span className="text-xs text-green-600 dark:text-green-400 font-medium">Online & Ready</span>
                </div>
              </div>
            </div>
            <div className="text-right">
              {/* Glassmorphism health score container */}
              <div className="relative backdrop-blur-md bg-white/20 dark:bg-white/10 rounded-xl px-4 py-3 border border-white/30 dark:border-white/20 shadow-lg shadow-white/10">
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-xl"></div>
                <div className="relative">
                  <p className="text-xs text-gray-600/80 dark:text-gray-400/90 font-medium">Health Score</p>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-lg font-bold text-green-600 dark:text-green-400 drop-shadow-sm">85</span>
                    <div className="relative">
                      <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                      <div className="absolute inset-0 w-3 h-3 bg-green-500 rounded-full shadow-sm"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Glassmorphism message container */}
          <div className="relative mb-4 rounded-xl overflow-hidden backdrop-blur-sm bg-white/30 dark:bg-white/10 border border-white/40 dark:border-white/20 shadow-lg shadow-blue-500/5">
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-blue-50/30 dark:from-white/5 dark:to-blue-900/20"></div>
            <div className="relative p-4">
              <p className="text-sm text-gray-800/90 dark:text-gray-200/90 mb-3 drop-shadow-sm">
                🌅 Good morning! Your health metrics look stable today. Remember to take your medication at 2 PM. 
                You have an upcoming appointment with Dr. Smith tomorrow at 10 AM.
              </p>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1 text-xs backdrop-blur-sm bg-amber-200/60 dark:bg-amber-900/40 text-amber-800 dark:text-amber-200 px-3 py-1.5 rounded-full border border-amber-300/50 dark:border-amber-700/50">
                  <AlertTriangle className="w-3 h-3" />
                  <span className="font-medium">1 Alert</span>
                </div>
                <div className="text-xs text-gray-600/80 dark:text-gray-400/90">• BP slightly elevated</div>
              </div>
            </div>
          </div>

          {/* Glassmorphism chat button */}
          <button 
            onClick={() => setShowMainChat(true)}
            className="relative w-full group overflow-hidden rounded-xl"
          >
            {/* Button background with glass effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/80 to-indigo-600/80 backdrop-blur-sm"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-indigo-700/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            {/* Animated shimmer effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
            
            {/* Button content */}
            <div className="relative px-4 py-3 flex items-center justify-center gap-2 text-white font-medium">
              <MessageCircle className="w-5 h-5 drop-shadow-sm" />
              <span className="drop-shadow-sm">Chat with AI Assistant</span>
            </div>
            
            {/* Floating particles on hover */}
            <div className="absolute top-2 right-4 w-1 h-1 bg-white/60 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-300" style={{animationDelay: '0.2s'}}></div>
            <div className="absolute bottom-3 left-8 w-0.5 h-0.5 bg-white/40 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-300" style={{animationDelay: '0.8s'}}></div>
          </button>
        </div>
      </div>

      {/* Main AI Chat Modal with Liquid Glass */}
      {showMainChat && (
        <div className="fixed inset-0 z-50 p-4">
          {/* Enhanced backdrop with liquid effects */}
          <div className="absolute inset-0 bg-black/30 backdrop-blur-sm">
            {/* Floating liquid blobs in background */}
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-blue-400/10 to-indigo-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-gradient-to-br from-indigo-400/10 to-purple-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1.5s'}}></div>
          </div>
          
          <div className="relative flex items-center justify-center min-h-full">
            <div className="relative max-w-4xl w-full max-h-[85vh] overflow-hidden rounded-2xl">
              {/* Glassmorphism modal background */}
              <div className="absolute inset-0 backdrop-blur-2xl bg-white/10 dark:bg-white/5 border border-white/20 dark:border-white/10"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-blue-500/5"></div>
              
              {/* Modal content */}
              <div className="relative flex h-full backdrop-blur-xl bg-white/80 dark:bg-gray-900/80">
                {/* Left Sidebar - Features with Glassmorphism */}
                <div className="w-64 backdrop-blur-md bg-white/20 dark:bg-black/20 border-r border-white/30 dark:border-white/10 flex flex-col">
                  <div className="p-4 border-b border-white/20 dark:border-white/10">
                    <h4 className="font-semibold text-gray-900 dark:text-white">AI Features</h4>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">Choose what you need help with</p>
                  </div>
                  <div className="flex-1 overflow-y-auto p-2">
                    {features.map((feature) => (
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
                          <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                            selectedFeature === feature.id
                              ? 'bg-blue-500 text-white'
                              : 'bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400'
                          }`}>
                            <feature.icon className="w-4 h-4" />
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
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center">
                        <Bot className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">AI Health Assistant</h3>
                        {selectedFeature && (
                          <p className="text-sm text-blue-600 dark:text-blue-400">
                            {features.find(f => f.id === selectedFeature)?.name} Mode
                          </p>
                        )}
                      </div>
                    </div>
                    <button
                      onClick={() => {
                        setShowMainChat(false)
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
                      <div className="mb-4 flex gap-2">
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
                        placeholder="Type your message..."
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
                    {features.find(f => f.id === showMetrics)?.name} Metrics
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
                    {features.find(f => f.id === showHistory)?.name} History
                  </h3>
                  <button onClick={() => setShowHistory(null)} className="text-gray-400 hover:text-gray-600">
                    <X className="w-5 h-5" />
                  </button>
                </div>
                <div className="space-y-3">
                  <div className="p-3 backdrop-blur-sm bg-gray-100/60 dark:bg-gray-800/60 rounded-lg">
                    <p className="text-sm text-gray-900 dark:text-white">Blood pressure logged: 128/82 mmHg</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">2 hours ago</p>
                  </div>
                  <div className="p-3 backdrop-blur-sm bg-gray-100/60 dark:bg-gray-800/60 rounded-lg">
                    <p className="text-sm text-gray-900 dark:text-white">Medication reminder set for 2 PM</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">4 hours ago</p>
                  </div>
                  <div className="p-3 backdrop-blur-sm bg-gray-100/60 dark:bg-gray-800/60 rounded-lg">
                    <p className="text-sm text-gray-900 dark:text-white">Appointment scheduled with Dr. Smith</p>
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
                    {features.find(f => f.id === showInsights)?.name} Insights
                  </h3>
                  <button onClick={() => setShowInsights(null)} className="text-gray-400 hover:text-gray-600">
                    <X className="w-5 h-5" />
                  </button>
                </div>
                <div className="space-y-4">
                  <div className="p-4 backdrop-blur-sm bg-blue-50/60 dark:bg-blue-900/20 rounded-lg border border-blue-200/50 dark:border-blue-700/50">
                    <h4 className="font-medium text-blue-900 dark:text-blue-100 mb-2">Key Insight</h4>
                    <p className="text-sm text-blue-800 dark:text-blue-200">Your blood pressure shows a slight upward trend. Consider reducing sodium intake and increasing physical activity.</p>
                  </div>
                  <div className="p-4 backdrop-blur-sm bg-green-50/60 dark:bg-green-900/20 rounded-lg border border-green-200/50 dark:border-green-700/50">
                    <h4 className="font-medium text-green-900 dark:text-green-100 mb-2">Recommendation</h4>
                    <p className="text-sm text-green-800 dark:text-green-200">Your medication adherence is excellent at 98%. Keep up the great work!</p>
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