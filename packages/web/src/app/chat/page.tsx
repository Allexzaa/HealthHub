'use client'

import { useState } from 'react'
import { Card } from '@/components/shared/Card'
import { Bot, Send, Mic, Paperclip, MoreVertical, Shield, User, Stethoscope, Pill, Brain, Phone, Video, Clock, Lock, CheckCircle, Online, Users, Search, Plus, X, FileText } from 'lucide-react'

export default function SecureChat() {
  const [selectedSecureChat, setSelectedSecureChat] = useState('dr-smith')
  const [secureMessage, setSecureMessage] = useState('')
  
  // Healthcare Personnel for Secure Chat
  const healthcarePersonnel = [
    {
      id: 'dr-smith',
      name: 'Dr. Sarah Smith',
      title: 'Cardiologist',
      specialty: 'Cardiology',
      status: 'online',
      avatar: '👩‍⚕️',
      lastSeen: 'Active now',
      hospital: 'Central Medical Center',
      verified: true,
      unreadCount: 2
    },
    {
      id: 'dr-johnson',
      name: 'Dr. Michael Johnson', 
      title: 'General Practitioner',
      specialty: 'Family Medicine',
      status: 'online',
      avatar: '👨‍⚕️',
      lastSeen: 'Active 5 min ago',
      hospital: 'Community Health Center',
      verified: true,
      unreadCount: 0
    },
    {
      id: 'nurse-wilson',
      name: 'Jennifer Wilson',
      title: 'Registered Nurse',
      specialty: 'Patient Care Coordinator',
      status: 'away',
      avatar: '👩‍⚕️',
      lastSeen: 'Away - Back at 2:00 PM',
      hospital: 'Central Medical Center',
      verified: true,
      unreadCount: 1
    },
    {
      id: 'pharmacist-lee',
      name: 'David Lee',
      title: 'Clinical Pharmacist',
      specialty: 'Medication Management',
      status: 'online',
      avatar: '👨‍⚕️',
      lastSeen: 'Active now',
      hospital: 'HealthPlus Pharmacy',
      verified: true,
      unreadCount: 0
    },
    {
      id: 'therapist-brown',
      name: 'Dr. Lisa Brown',
      title: 'Mental Health Therapist',
      specialty: 'Clinical Psychology',
      status: 'offline',
      avatar: '👩‍⚕️',
      lastSeen: 'Last seen yesterday',
      hospital: 'Wellness Mental Health Center',
      verified: true,
      unreadCount: 0
    }
  ]

  // Secure Chat History
  const secureChats = {
    'dr-smith': [
      {
        id: 1,
        type: 'provider',
        message: "Hello! I've reviewed your recent cardiac test results. Your EKG shows normal sinus rhythm, which is great news. How have you been feeling since our last appointment?",
        timestamp: '10:30 AM',
        sender: 'Dr. Sarah Smith',
        encrypted: true,
        attachments: [{ type: 'pdf', name: 'EKG_Results_Jan2024.pdf' }]
      },
      {
        id: 2,
        type: 'user',
        message: "Thank you for the update! I've been feeling much better. The chest discomfort has decreased significantly since starting the new medication.",
        timestamp: '10:35 AM',
        encrypted: true
      },
      {
        id: 3,
        type: 'provider',
        message: "Excellent progress! Continue with the current medication regimen. I'd like to schedule a follow-up in 6 weeks to monitor your response. Also, please continue the light exercise routine we discussed.",
        timestamp: '10:37 AM',
        sender: 'Dr. Sarah Smith',
        encrypted: true
      },
      {
        id: 4,
        type: 'user',
        message: "Sounds good. Should I continue taking the medication at the same time each day?",
        timestamp: '11:42 AM',
        encrypted: true,
        status: 'delivered'
      },
      {
        id: 5,
        type: 'provider',
        message: "Yes, consistency is key. Take it with breakfast every morning. If you experience any side effects or have concerns, don't hesitate to message me here or call the office.",
        timestamp: '11:45 AM',
        sender: 'Dr. Sarah Smith',
        encrypted: true,
        status: 'unread'
      }
    ],
    'dr-johnson': [
      {
        id: 1,
        type: 'provider',
        message: "Hi! I wanted to follow up on your annual physical exam results. Overall, everything looks good. Your blood work shows normal levels across the board.",
        timestamp: 'Yesterday 3:20 PM',
        sender: 'Dr. Michael Johnson',
        encrypted: true
      },
      {
        id: 2,
        type: 'user',
        message: "That's great to hear! Thank you for the quick turnaround on the results.",
        timestamp: 'Yesterday 3:25 PM',
        encrypted: true
      }
    ],
    'nurse-wilson': [
      {
        id: 1,
        type: 'provider',
        message: "Reminder: You have an appointment with Dr. Smith tomorrow at 2:30 PM. Please arrive 15 minutes early for check-in. Let me know if you need to reschedule.",
        timestamp: 'Today 9:15 AM',
        sender: 'Jennifer Wilson',
        encrypted: true,
        status: 'unread'
      }
    ],
    'pharmacist-lee': [
      {
        id: 1,
        type: 'provider',
        message: "Your prescription refill is ready for pickup. We've also prepared a medication adherence guide as discussed. The pharmacy is open until 9 PM today.",
        timestamp: 'Yesterday 4:30 PM',
        sender: 'David Lee',
        encrypted: true
      }
    ],
    'therapist-brown': [
      {
        id: 1,
        type: 'provider',
        message: "Thank you for attending our session yesterday. I've prepared some mindfulness exercises for you to try this week. How are you feeling about the techniques we discussed?",
        timestamp: '2 days ago',
        sender: 'Dr. Lisa Brown',
        encrypted: true
      }
    ]
  }

  // Handler functions

  const handleSendSecureMessage = () => {
    if (secureMessage.trim()) {
      // Handle secure message sending to healthcare provider
      console.log('Secure message sent to:', selectedSecureChat, secureMessage)
      setSecureMessage('')
    }
  }

  const getStatusColor = (status) => {
    switch (status) {
      case 'online': return 'bg-green-500'
      case 'away': return 'bg-yellow-500'
      case 'offline': return 'bg-gray-500'
      default: return 'bg-gray-500'
    }
  }

  const getSelectedProvider = () => {
    return healthcarePersonnel.find(p => p.id === selectedSecureChat)
  }

  const getCurrentSecureMessages = () => {
    return secureChats[selectedSecureChat] || []
  }

  return (
    <div className="p-6 h-[calc(100vh-120px)]">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Secure Chat
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            End-to-end encrypted communication with your healthcare providers
          </p>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 px-3 py-2 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-lg">
            <Shield className="w-4 h-4" />
            <span className="text-sm font-medium">Secure & Encrypted</span>
          </div>
          {healthcarePersonnel.reduce((total, person) => total + person.unreadCount, 0) > 0 && (
            <div className="flex items-center gap-2 px-3 py-2 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 rounded-lg">
              <span className="text-sm font-medium">
                {healthcarePersonnel.reduce((total, person) => total + person.unreadCount, 0)} unread messages
              </span>
            </div>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 h-full">
        <div className="lg:col-span-3">
          <Card className="h-full flex flex-col">
            {/* Secure Chat Interface */}
            <div className="p-4 border-b border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center relative">
                    <User className="w-5 h-5 text-green-600 dark:text-green-400" />
                    <div className={`absolute -bottom-1 -right-1 w-4 h-4 ${getStatusColor(getSelectedProvider()?.status)} rounded-full border-2 border-white dark:border-gray-800`}></div>
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold text-gray-900 dark:text-white">{getSelectedProvider()?.name}</h3>
                      {getSelectedProvider()?.verified && (
                        <CheckCircle className="w-4 h-4 text-blue-500" title="Verified Healthcare Provider" />
                      )}
                    </div>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{getSelectedProvider()?.title} • {getSelectedProvider()?.lastSeen}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1 px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-xs">
                    <Lock className="w-3 h-3" />
                    End-to-End Encrypted
                  </div>
                  <button className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700" title="Start Video Call">
                    <Video className="w-5 h-5" />
                  </button>
                  <button className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700" title="Start Phone Call">
                    <Phone className="w-5 h-5" />
                  </button>
                  <button className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300" title="More Options">
                    <MoreVertical className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {getCurrentSecureMessages().map((message) => (
                <div key={message.id} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[70%] ${message.type === 'user' 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white'
                  } rounded-lg p-3 relative`}>
                    {message.type === 'provider' && (
                      <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400 mb-1">
                        <User className="w-3 h-3" />
                        {message.sender}
                        {message.encrypted && <Lock className="w-3 h-3 text-green-500" />}
                      </div>
                    )}
                    <p className="text-sm">{message.message}</p>
                    {message.attachments && (
                      <div className="mt-2 space-y-1">
                        {message.attachments.map((attachment, index) => (
                          <div key={index} className="flex items-center gap-2 p-2 bg-white/20 rounded text-xs cursor-pointer hover:bg-white/30 transition-colors">
                            <FileText className="w-3 h-3" />
                            {attachment.name}
                          </div>
                        ))}
                      </div>
                    )}
                    <div className="flex items-center justify-between mt-1">
                      <p className="text-xs opacity-70">{message.timestamp}</p>
                      {message.type === 'user' && message.status && (
                        <div className="flex items-center gap-1">
                          {message.status === 'delivered' && <CheckCircle className="w-3 h-3 opacity-70" />}
                          {message.status === 'unread' && <div className="w-2 h-2 bg-blue-400 rounded-full"></div>}
                        </div>
                      )}
                    </div>
                    {message.encrypted && message.type === 'user' && (
                      <div className="absolute -bottom-1 -right-1">
                        <Lock className="w-3 h-3 text-green-500 bg-white dark:bg-gray-800 rounded-full p-0.5" />
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 border-t border-gray-200 dark:border-gray-700">
              <div className="mb-2 flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                <Lock className="w-3 h-3 text-green-500" />
                Messages are end-to-end encrypted and fully secure
              </div>
              <div className="flex items-center gap-2">
                <div className="flex-1 relative">
                  <input
                    type="text"
                    value={secureMessage}
                    onChange={(e) => setSecureMessage(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSendSecureMessage()}
                    placeholder="Type your secure message..."
                    className="w-full px-4 py-3 pr-20 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                  />
                  <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex gap-1">
                    <button className="p-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300" title="Attach File">
                      <Paperclip className="w-4 h-4" />
                    </button>
                    <button className="p-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300" title="Voice Message">
                      <Mic className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                <button 
                  onClick={handleSendSecureMessage}
                  className="bg-green-600 hover:bg-green-700 text-white p-3 rounded-lg transition-colors"
                  title="Send Message"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </div>
          </Card>
        </div>

        <div className="space-y-6">
          {/* Healthcare Providers Sidebar */}
          <Card className="p-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-gray-900 dark:text-white">Healthcare Providers</h3>
              <div className="text-xs text-gray-500 dark:text-gray-400">
                {healthcarePersonnel.filter(p => p.status === 'online').length} online
              </div>
            </div>
            <div className="space-y-2">
              {healthcarePersonnel.map((provider) => (
                <button
                  key={provider.id}
                  onClick={() => setSelectedSecureChat(provider.id)}
                  className={`w-full text-left p-3 rounded-lg transition-colors ${
                    selectedSecureChat === provider.id
                      ? 'bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-700'
                      : 'hover:bg-gray-50 dark:hover:bg-gray-700'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <div className="w-8 h-8 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center text-sm">
                        {provider.avatar}
                      </div>
                      <div className={`absolute -bottom-1 -right-1 w-3 h-3 ${getStatusColor(provider.status)} rounded-full border-2 border-white dark:border-gray-800`}></div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1">
                        <p className="text-sm font-medium text-gray-900 dark:text-white truncate">{provider.name}</p>
                        {provider.verified && <CheckCircle className="w-3 h-3 text-blue-500 flex-shrink-0" />}
                      </div>
                      <p className="text-xs text-gray-500 dark:text-gray-400 truncate">{provider.specialty}</p>
                      <p className="text-xs text-gray-400 dark:text-gray-500 truncate">{provider.hospital}</p>
                    </div>
                    {provider.unreadCount > 0 && (
                      <div className="w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                        {provider.unreadCount}
                      </div>
                    )}
                  </div>
                </button>
              ))}
            </div>
          </Card>

          {/* Security Features */}
          <Card className="p-4">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Security Features</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 p-2 bg-green-50 dark:bg-green-900/30 rounded-lg">
                <Lock className="w-4 h-4 text-green-600 dark:text-green-400" />
                <div>
                  <p className="text-xs font-medium text-green-900 dark:text-green-300">End-to-End Encrypted</p>
                  <p className="text-xs text-green-700 dark:text-green-400">Only you and provider can read</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-2 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
                <Shield className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <div>
                  <p className="text-xs font-medium text-blue-900 dark:text-blue-300">Secure Messaging</p>
                  <p className="text-xs text-blue-700 dark:text-blue-400">Healthcare privacy protected</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-2 bg-purple-50 dark:bg-purple-900/30 rounded-lg">
                <CheckCircle className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                <div>
                  <p className="text-xs font-medium text-purple-900 dark:text-purple-300">Verified Providers</p>
                  <p className="text-xs text-purple-700 dark:text-purple-400">Licensed healthcare professionals</p>
                </div>
              </div>
            </div>
          </Card>

          {/* Quick Actions */}
          <Card className="p-4">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Quick Actions</h3>
            <div className="space-y-2">
              <button className="w-full text-left px-3 py-2 text-sm bg-green-50 dark:bg-green-900 text-green-700 dark:text-green-300 rounded-lg hover:bg-green-100 dark:hover:bg-green-800 flex items-center gap-2 transition-colors">
                <Video className="w-4 h-4" />
                Schedule Video Call
              </button>
              <button className="w-full text-left px-3 py-2 text-sm bg-blue-50 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-800 flex items-center gap-2 transition-colors">
                <FileText className="w-4 h-4" />
                Share Medical Records
              </button>
              <button className="w-full text-left px-3 py-2 text-sm bg-purple-50 dark:bg-purple-900 text-purple-700 dark:text-purple-300 rounded-lg hover:bg-purple-100 dark:hover:bg-purple-800 flex items-center gap-2 transition-colors">
                <Users className="w-4 h-4" />
                Add New Provider
              </button>
              <button className="w-full text-left px-3 py-2 text-sm bg-orange-50 dark:bg-orange-900 text-orange-700 dark:text-orange-300 rounded-lg hover:bg-orange-100 dark:hover:bg-orange-800 flex items-center gap-2 transition-colors">
                <Plus className="w-4 h-4" />
                Emergency Contact
              </button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}