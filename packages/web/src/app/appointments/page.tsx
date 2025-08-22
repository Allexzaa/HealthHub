import { Card } from '@/components/shared/Card'
import { Calendar, Clock, MapPin, User, Plus, Video, Phone } from 'lucide-react'

export default function Appointments() {
  const upcomingAppointments = [
    {
      id: 1,
      doctor: "Dr. Sarah Smith",
      specialty: "Cardiologist",
      date: "2024-01-25",
      time: "10:00 AM",
      duration: "30 min",
      location: "Central Medical Center",
      type: "In-Person",
      status: "Confirmed",
      reason: "Annual heart checkup"
    },
    {
      id: 2,
      doctor: "Dr. Michael Johnson",
      specialty: "General Practitioner",
      date: "2024-01-28",
      time: "2:30 PM",
      duration: "45 min",
      location: "Telehealth",
      type: "Video Call",
      status: "Confirmed",
      reason: "Follow-up consultation"
    },
    {
      id: 3,
      doctor: "Dr. Emily Davis",
      specialty: "Dermatologist",
      date: "2024-02-02",
      time: "11:00 AM",
      duration: "20 min",
      location: "Skin Care Institute",
      type: "In-Person",
      status: "Pending",
      reason: "Skin lesion examination"
    }
  ]

  const pastAppointments = [
    {
      id: 4,
      doctor: "Dr. Robert Wilson",
      specialty: "Orthopedist",
      date: "2024-01-15",
      time: "3:00 PM",
      location: "Sports Medicine Clinic",
      type: "In-Person",
      status: "Completed"
    },
    {
      id: 5,
      doctor: "Dr. Lisa Brown",
      specialty: "Ophthalmologist",
      date: "2024-01-10",
      time: "9:00 AM",
      location: "Eye Care Center",
      type: "In-Person",
      status: "Completed"
    }
  ]

  const availableSlots = [
    { date: "2024-01-26", time: "9:00 AM", doctor: "Dr. Thompson" },
    { date: "2024-01-26", time: "11:30 AM", doctor: "Dr. Anderson" },
    { date: "2024-01-27", time: "2:00 PM", doctor: "Dr. Martinez" },
    { date: "2024-01-29", time: "10:30 AM", doctor: "Dr. Lee" }
  ]

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Appointments
        </h1>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2">
          <Plus className="w-4 h-4" />
          Book Appointment
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <Card className="p-6">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
              Upcoming Appointments
            </h2>
            <div className="space-y-4">
              {upcomingAppointments.map((appointment) => (
                <div key={appointment.id} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                        <User className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 dark:text-white">{appointment.doctor}</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{appointment.specialty}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">{appointment.reason}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        appointment.status === 'Confirmed' 
                          ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-300'
                          : 'bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-300'
                      }`}>
                        {appointment.status}
                      </span>
                      {appointment.type === 'Video Call' && (
                        <Video className="w-4 h-4 text-blue-500" />
                      )}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-600 dark:text-gray-400">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {appointment.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {appointment.time}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {appointment.location}
                    </div>
                    <div className="text-sm font-medium text-gray-900 dark:text-white">
                      {appointment.duration}
                    </div>
                  </div>

                  <div className="flex gap-2 mt-4">
                    {appointment.type === 'Video Call' ? (
                      <button className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded text-sm flex items-center gap-1">
                        <Video className="w-4 h-4" />
                        Join Call
                      </button>
                    ) : (
                      <button className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded text-sm">
                        View Details
                      </button>
                    )}
                    <button className="border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-3 py-1 rounded text-sm hover:bg-gray-50 dark:hover:bg-gray-800">
                      Reschedule
                    </button>
                    <button className="border border-red-300 text-red-700 dark:text-red-400 px-3 py-1 rounded text-sm hover:bg-red-50 dark:hover:bg-red-900">
                      Cancel
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
              Past Appointments
            </h2>
            <div className="space-y-4">
              {pastAppointments.map((appointment) => (
                <div key={appointment.id} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 opacity-75">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center">
                        <User className="w-5 h-5 text-gray-500" />
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900 dark:text-white">{appointment.doctor}</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{appointment.specialty}</p>
                      </div>
                    </div>
                    <div className="text-right text-sm text-gray-600 dark:text-gray-400">
                      <div>{appointment.date}</div>
                      <div>{appointment.time}</div>
                    </div>
                  </div>
                  <div className="mt-3 flex gap-2">
                    <button className="text-blue-600 text-sm hover:underline">
                      View Summary
                    </button>
                    <button className="text-blue-600 text-sm hover:underline">
                      Download Records
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        <div className="space-y-6">
          <Card className="p-6">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Available Slots
            </h2>
            <div className="space-y-3">
              {availableSlots.map((slot, index) => (
                <div key={index} className="border border-gray-200 dark:border-gray-700 rounded-lg p-3 hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer transition-colors">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm font-medium text-gray-900 dark:text-white">{slot.time}</div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">{slot.date}</div>
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-500">{slot.doctor}</div>
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg text-sm">
              View All Available
            </button>
          </Card>

          <Card className="p-6">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Quick Actions
            </h2>
            <div className="space-y-3">
              <button className="w-full text-left px-4 py-3 bg-blue-50 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-800 transition-colors flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                Book New Appointment
              </button>
              <button className="w-full text-left px-4 py-3 bg-green-50 dark:bg-green-900 text-green-700 dark:text-green-300 rounded-lg hover:bg-green-100 dark:hover:bg-green-800 transition-colors flex items-center gap-2">
                <Phone className="w-4 h-4" />
                Call Doctor's Office
              </button>
              <button className="w-full text-left px-4 py-3 bg-purple-50 dark:bg-purple-900 text-purple-700 dark:text-purple-300 rounded-lg hover:bg-purple-100 dark:hover:bg-purple-800 transition-colors flex items-center gap-2">
                <Clock className="w-4 h-4" />
                View Calendar
              </button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}