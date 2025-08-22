import { Card } from '@/components/shared/Card'
import { Bot, Send, Mic, Paperclip, MoreVertical } from 'lucide-react'

export default function AIChat() {
  const chatHistory = [
    {
      id: 1,
      type: 'bot',
      message: "Hello! I'm your AI health assistant. How can I help you today?",
      timestamp: '9:00 AM',
      agent: 'Main Assistant'
    },
    {
      id: 2,
      type: 'user',
      message: "I've been having some chest discomfort after exercise. Should I be concerned?",
      timestamp: '9:02 AM'
    },
    {
      id: 3,
      type: 'bot',
      message: "I understand your concern about chest discomfort during exercise. This could be related to several factors. Based on your recent health data, your heart rate and blood pressure are within normal ranges. However, any chest discomfort should be evaluated by a healthcare professional. Would you like me to help you schedule an appointment with Dr. Smith?",
      timestamp: '9:03 AM',
      agent: 'Main Assistant'
    },
    {
      id: 4,
      type: 'user',
      message: "Yes, that would be helpful. Can you check her availability?",
      timestamp: '9:05 AM'
    },
    {
      id: 5,
      type: 'bot',
      message: "I've checked Dr. Smith's schedule. She has availability tomorrow at 2:30 PM or Friday at 10:00 AM. Both are 30-minute consultation slots. Which would work better for you?",
      timestamp: '9:06 AM',
      agent: 'Main Assistant'
    }
  ]

  const activeAgents = [
    { name: 'Main Assistant', status: 'active', color: 'bg-green-500' },
    { name: 'Cardiologist AI', status: 'available', color: 'bg-blue-500' },
    { name: 'Nutrition Coach', status: 'available', color: 'bg-purple-500' },
    { name: 'Medication Helper', status: 'available', color: 'bg-orange-500' }
  ]

  return (
    <div className="p-6 h-[calc(100vh-120px)]">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          AI Health Chat
        </h1>
        <div className="flex items-center gap-2">
          <select className="border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 bg-white dark:bg-gray-700">
            <option>Main Assistant</option>
            <option>Cardiologist AI</option>
            <option>Nutrition Coach</option>
            <option>Medication Helper</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 h-full">
        <div className="lg:col-span-3">
          <Card className="h-full flex flex-col">
            <div className="p-4 border-b border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                    <Bot className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Main Assistant</h3>
                    <p className="text-xs text-green-600 dark:text-green-400">Online</p>
                  </div>
                </div>
                <button className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
                  <MoreVertical className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {chatHistory.map((message) => (
                <div key={message.id} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[70%] ${message.type === 'user' 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white'
                  } rounded-lg p-3`}>
                    {message.type === 'bot' && (
                      <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">
                        {message.agent}
                      </div>
                    )}
                    <p className="text-sm">{message.message}</p>
                    <p className="text-xs opacity-70 mt-1">{message.timestamp}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 border-t border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-2">
                <div className="flex-1 relative">
                  <input
                    type="text"
                    placeholder="Type your message..."
                    className="w-full px-4 py-3 pr-20 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                  />
                  <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex gap-1">
                    <button className="p-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
                      <Paperclip className="w-4 h-4" />
                    </button>
                    <button className="p-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
                      <Mic className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                <button className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-lg">
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </div>
          </Card>
        </div>

        <div className="space-y-6">
          <Card className="p-4">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">AI Agents</h3>
            <div className="space-y-3">
              {activeAgents.map((agent, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`w-3 h-3 rounded-full ${agent.color}`}></div>
                    <span className="text-sm text-gray-900 dark:text-white">{agent.name}</span>
                  </div>
                  <span className="text-xs text-gray-500 dark:text-gray-400">{agent.status}</span>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-4">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Quick Actions</h3>
            <div className="space-y-2">
              <button className="w-full text-left px-3 py-2 text-sm bg-blue-50 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-800">
                Symptom Checker
              </button>
              <button className="w-full text-left px-3 py-2 text-sm bg-green-50 dark:bg-green-900 text-green-700 dark:text-green-300 rounded-lg hover:bg-green-100 dark:hover:bg-green-800">
                Medication Info
              </button>
              <button className="w-full text-left px-3 py-2 text-sm bg-purple-50 dark:bg-purple-900 text-purple-700 dark:text-purple-300 rounded-lg hover:bg-purple-100 dark:hover:bg-purple-800">
                Health Tips
              </button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}