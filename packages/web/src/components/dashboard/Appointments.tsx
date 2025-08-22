'use client'

import { Card } from '@/components/shared/Card'
import { Calendar, Clock, MapPin } from 'lucide-react'

export function Appointments() {
  const appointments = [
    {
      id: 1,
      doctor: 'Dr. Sarah Smith',
      specialty: 'Cardiologist',
      date: 'Tomorrow',
      time: '10:00 AM',
      location: 'Central Medical Center',
      type: 'Follow-up'
    },
    {
      id: 2,
      doctor: 'Dr. Michael Johnson',
      specialty: 'General Practitioner',
      date: 'Friday',
      time: '2:30 PM',
      location: 'Community Health Clinic',
      type: 'Check-up'
    },
    {
      id: 3,
      doctor: 'Dr. Emily Davis',
      specialty: 'Dermatologist',
      date: 'Next Week',
      time: '11:00 AM',
      location: 'Skin Care Institute',
      type: 'Consultation'
    }
  ]

  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          Upcoming Appointments
        </h3>
        <button className="text-sm text-blue-600 hover:text-blue-700">
          View All
        </button>
      </div>

      <div className="space-y-4">
        {appointments.map((appointment) => (
          <div key={appointment.id} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h4 className="font-medium text-gray-900 dark:text-white">{appointment.doctor}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">{appointment.specialty}</p>
                <p className="text-xs text-blue-600 mt-1">{appointment.type}</p>
              </div>
              <span className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded">
                {appointment.date}
              </span>
            </div>
            
            <div className="mt-3 space-y-1">
              <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                <Clock className="w-4 h-4 mr-2" />
                {appointment.time}
              </div>
              <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                <MapPin className="w-4 h-4 mr-2" />
                {appointment.location}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6">
        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors">
          Book New Appointment
        </button>
      </div>
    </Card>
  )
}