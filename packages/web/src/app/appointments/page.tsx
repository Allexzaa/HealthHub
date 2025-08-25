'use client'

import { useState } from 'react'
import { Card } from '@/components/shared/Card'
import { Calendar, Clock, MapPin, User, Plus, Video, Phone, X, Check, AlertTriangle, Download, FileText, Edit, Trash2 } from 'lucide-react'

export default function Appointments() {
  const [selectedAppointment, setSelectedAppointment] = useState(null)
  const [showBookingModal, setShowBookingModal] = useState(false)
  const [showRescheduleModal, setShowRescheduleModal] = useState(null)
  const [showCancelModal, setShowCancelModal] = useState(null)
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

  const [appointments, setAppointments] = useState(upcomingAppointments)
  const [bookingForm, setBookingForm] = useState({
    doctor: '',
    specialty: '',
    date: '',
    time: '',
    reason: '',
    type: 'In-Person'
  })

  // Handler functions
  const handleJoinCall = (appointmentId) => {
    const appointment = appointments.find(a => a.id === appointmentId)
    if (appointment?.type === 'Video Call') {
      alert(`Joining video call with ${appointment.doctor}...\n\nIn a real app, this would open the video call interface.`)
      // In real app: window.open(appointment.meetingUrl, '_blank')
    }
  }

  const handleViewDetails = (appointment) => {
    setSelectedAppointment(appointment)
  }

  const handleReschedule = (appointmentId) => {
    setShowRescheduleModal(appointmentId)
  }

  const handleCancelAppointment = (appointmentId) => {
    setShowCancelModal(appointmentId)
  }

  const confirmCancel = (appointmentId) => {
    setAppointments(appointments.filter(apt => apt.id !== appointmentId))
    setShowCancelModal(null)
    alert('Appointment cancelled successfully!')
  }

  const handleBookAppointment = () => {
    if (bookingForm.doctor && bookingForm.date && bookingForm.time && bookingForm.reason) {
      const newAppointment = {
        id: Math.max(...appointments.map(a => a.id)) + 1,
        doctor: bookingForm.doctor,
        specialty: bookingForm.specialty,
        date: bookingForm.date,
        time: bookingForm.time,
        duration: "30 min",
        location: bookingForm.type === 'Video Call' ? 'Telehealth' : 'Medical Center',
        type: bookingForm.type,
        status: "Confirmed",
        reason: bookingForm.reason
      }
      setAppointments([...appointments, newAppointment])
      setBookingForm({ doctor: '', specialty: '', date: '', time: '', reason: '', type: 'In-Person' })
      setShowBookingModal(false)
      alert('Appointment booked successfully!')
    } else {
      alert('Please fill in all required fields.')
    }
  }

  const handleDownloadRecords = (appointmentId) => {
    alert(`Downloading medical records for appointment #${appointmentId}...\n\nIn a real app, this would download the PDF file.`)
  }

  const handleViewSummary = (appointmentId) => {
    alert(`Viewing appointment summary for #${appointmentId}...\n\nIn a real app, this would show detailed appointment notes and outcomes.`)
  }

  const handleCallOffice = () => {
    alert("Calling doctor's office...\n\nIn a real app, this would initiate a phone call or show contact information.")
  }

  const handleViewCalendar = () => {
    alert("Opening calendar view...\n\nIn a real app, this would show a full calendar interface with all appointments.")
  }

  const bookSlot = (slot) => {
    setBookingForm({
      ...bookingForm,
      doctor: slot.doctor,
      date: slot.date,
      time: slot.time
    })
    setShowBookingModal(true)
  }

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Appointments
        </h1>
        <button 
          onClick={() => setShowBookingModal(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
        >
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
                      <button 
                        onClick={() => handleJoinCall(appointment.id)}
                        className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded text-sm flex items-center gap-1 transition-colors"
                      >
                        <Video className="w-4 h-4" />
                        Join Call
                      </button>
                    ) : (
                      <button 
                        onClick={() => handleViewDetails(appointment)}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded text-sm transition-colors"
                      >
                        View Details
                      </button>
                    )}
                    <button 
                      onClick={() => handleReschedule(appointment.id)}
                      className="border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-3 py-1 rounded text-sm hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                    >
                      Reschedule
                    </button>
                    <button 
                      onClick={() => handleCancelAppointment(appointment.id)}
                      className="border border-red-300 text-red-700 dark:text-red-400 px-3 py-1 rounded text-sm hover:bg-red-50 dark:hover:bg-red-900 transition-colors"
                    >
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
                    <button 
                      onClick={() => handleViewSummary(appointment.id)}
                      className="text-blue-600 text-sm hover:underline transition-colors"
                    >
                      View Summary
                    </button>
                    <button 
                      onClick={() => handleDownloadRecords(appointment.id)}
                      className="text-blue-600 text-sm hover:underline transition-colors"
                    >
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
                <div 
                  key={index} 
                  onClick={() => bookSlot(slot)}
                  className="border border-gray-200 dark:border-gray-700 rounded-lg p-3 hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer transition-colors hover:border-blue-300 dark:hover:border-blue-600"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm font-medium text-gray-900 dark:text-white">{slot.time}</div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">{slot.date}</div>
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-500">{slot.doctor}</div>
                  </div>
                  <div className="text-xs text-blue-600 dark:text-blue-400 mt-1">Click to book</div>
                </div>
              ))}
            </div>
            <button 
              onClick={() => setShowBookingModal(true)}
              className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg text-sm transition-colors"
            >
              View All Available
            </button>
          </Card>

          <Card className="p-6">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Quick Actions
            </h2>
            <div className="space-y-3">
              <button 
                onClick={() => setShowBookingModal(true)}
                className="w-full text-left px-4 py-3 bg-blue-50 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-800 transition-colors flex items-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                Book New Appointment
              </button>
              <button 
                onClick={handleCallOffice}
                className="w-full text-left px-4 py-3 bg-green-50 dark:bg-green-900 text-green-700 dark:text-green-300 rounded-lg hover:bg-green-100 dark:hover:bg-green-800 transition-colors flex items-center gap-2"
              >
                <Phone className="w-4 h-4" />
                Call Doctor's Office
              </button>
              <button 
                onClick={handleViewCalendar}
                className="w-full text-left px-4 py-3 bg-purple-50 dark:bg-purple-900 text-purple-700 dark:text-purple-300 rounded-lg hover:bg-purple-100 dark:hover:bg-purple-800 transition-colors flex items-center gap-2"
              >
                <Clock className="w-4 h-4" />
                View Calendar
              </button>
            </div>
          </Card>
        </div>
      </div>

      {/* Booking Modal */}
      {showBookingModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-gray-800 rounded-lg max-w-md w-full max-h-[80vh] overflow-hidden">
            <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Book New Appointment
              </h3>
              <button
                onClick={() => setShowBookingModal(false)}
                className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Doctor *
                </label>
                <input
                  type="text"
                  value={bookingForm.doctor}
                  onChange={(e) => setBookingForm({...bookingForm, doctor: e.target.value})}
                  placeholder="e.g., Dr. Smith"
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Specialty
                </label>
                <input
                  type="text"
                  value={bookingForm.specialty}
                  onChange={(e) => setBookingForm({...bookingForm, specialty: e.target.value})}
                  placeholder="e.g., Cardiologist"
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Date *
                  </label>
                  <input
                    type="date"
                    value={bookingForm.date}
                    onChange={(e) => setBookingForm({...bookingForm, date: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Time *
                  </label>
                  <input
                    type="time"
                    value={bookingForm.time}
                    onChange={(e) => setBookingForm({...bookingForm, time: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Appointment Type
                </label>
                <select
                  value={bookingForm.type}
                  onChange={(e) => setBookingForm({...bookingForm, type: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                >
                  <option value="In-Person">In-Person</option>
                  <option value="Video Call">Video Call</option>
                  <option value="Phone Call">Phone Call</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Reason for Visit *
                </label>
                <textarea
                  value={bookingForm.reason}
                  onChange={(e) => setBookingForm({...bookingForm, reason: e.target.value})}
                  placeholder="Describe the reason for your appointment..."
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                />
              </div>
            </div>
            
            <div className="p-4 border-t border-gray-200 dark:border-gray-700 flex gap-3">
              <button
                onClick={() => setShowBookingModal(false)}
                className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleBookAppointment}
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
              >
                Book Appointment
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Appointment Details Modal */}
      {selectedAppointment && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-gray-800 rounded-lg max-w-lg w-full max-h-[80vh] overflow-hidden">
            <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Appointment Details
              </h3>
              <button
                onClick={() => setSelectedAppointment(null)}
                className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="p-6">
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                    <User className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">{selectedAppointment.doctor}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{selectedAppointment.specialty}</p>
                  </div>
                </div>
                
                <div className="border-t border-gray-200 dark:border-gray-700 pt-4 space-y-3">
                  <div className="flex items-center gap-3">
                    <Calendar className="w-4 h-4 text-gray-500" />
                    <div>
                      <span className="text-sm text-gray-600 dark:text-gray-400">Date: </span>
                      <span className="font-medium text-gray-900 dark:text-white">{selectedAppointment.date}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Clock className="w-4 h-4 text-gray-500" />
                    <div>
                      <span className="text-sm text-gray-600 dark:text-gray-400">Time: </span>
                      <span className="font-medium text-gray-900 dark:text-white">{selectedAppointment.time}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <MapPin className="w-4 h-4 text-gray-500" />
                    <div>
                      <span className="text-sm text-gray-600 dark:text-gray-400">Location: </span>
                      <span className="font-medium text-gray-900 dark:text-white">{selectedAppointment.location}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Video className="w-4 h-4 text-gray-500" />
                    <div>
                      <span className="text-sm text-gray-600 dark:text-gray-400">Type: </span>
                      <span className="font-medium text-gray-900 dark:text-white">{selectedAppointment.type}</span>
                    </div>
                  </div>
                  
                  <div>
                    <span className="text-sm text-gray-600 dark:text-gray-400">Reason: </span>
                    <p className="font-medium text-gray-900 dark:text-white mt-1">{selectedAppointment.reason}</p>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-600 dark:text-gray-400">Status: </span>
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      selectedAppointment.status === 'Confirmed' 
                        ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-300'
                        : 'bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-300'
                    }`}>
                      {selectedAppointment.status}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-4 border-t border-gray-200 dark:border-gray-700">
              <button
                onClick={() => setSelectedAppointment(null)}
                className="w-full bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Cancel Confirmation Modal */}
      {showCancelModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-gray-800 rounded-lg max-w-sm w-full">
            <div className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-red-100 dark:bg-red-900 rounded-full flex items-center justify-center">
                  <AlertTriangle className="w-6 h-6 text-red-600 dark:text-red-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Cancel Appointment</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">This action cannot be undone.</p>
                </div>
              </div>
              
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-6">
                Are you sure you want to cancel this appointment? You may need to reschedule if needed.
              </p>
              
              <div className="flex gap-3">
                <button
                  onClick={() => setShowCancelModal(null)}
                  className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                >
                  Keep Appointment
                </button>
                <button
                  onClick={() => confirmCancel(showCancelModal)}
                  className="flex-1 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-colors"
                >
                  Yes, Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Reschedule Modal (Simple Alert for now) */}
      {showRescheduleModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-gray-800 rounded-lg max-w-sm w-full">
            <div className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                  <Edit className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Reschedule Appointment</h3>
                </div>
              </div>
              
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-6">
                Reschedule functionality would open a calendar picker here. For now, this is a placeholder.
              </p>
              
              <button
                onClick={() => {
                  setShowRescheduleModal(null)
                  alert('Reschedule functionality coming soon!')
                }}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}