'use client'

import { useState } from 'react'
import { Card } from '@/components/shared/Card'
import { Pill, Clock, Plus, Bell, Calendar, AlertTriangle, Search, Filter, Eye, Share2, Printer, Star, X, ChevronDown, Heart, Brain, Shield, Zap, User, FileText, CheckCircle2, AlertCircle, Settings, Phone, MapPin, Download, Edit, Activity } from 'lucide-react'

export default function Medications() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedMedication, setSelectedMedication] = useState(null)
  const [isFilterOpen, setIsFilterOpen] = useState(false)

  const medications = [
    {
      id: 1,
      name: "Lisinopril",
      genericName: "Lisinopril",
      brandName: "Prinivil, Zestril",
      dosage: "10mg",
      strength: "10mg tablets",
      frequency: "Once daily",
      timeOfDay: ["8:00 AM"],
      nextDose: "8:00 AM",
      remaining: 28,
      totalPills: 90,
      refillDate: "2024-02-15",
      prescribedDate: "2023-11-15",
      prescribedBy: "Dr. Sarah Smith",
      pharmacy: "CVS Pharmacy - Main St",
      pharmacyPhone: "(555) 123-4567",
      status: "Active",
      category: "cardiovascular",
      condition: "High Blood Pressure",
      instructions: "Take with or without food. Do not stop suddenly.",
      sideEffects: ["Dizziness", "Dry cough", "Fatigue", "Headache"],
      interactions: ["NSAIDs", "Potassium supplements", "Diuretics"],
      notes: "Monitor blood pressure weekly",
      cost: "$15.99",
      insurance: "Covered - $5 copay",
      priority: "high",
      refillsRemaining: 2,
      lastTaken: "2024-01-22 8:15 AM",
      adherence: 95
    },
    {
      id: 2,
      name: "Metformin",
      genericName: "Metformin HCl",
      brandName: "Glucophage",
      dosage: "500mg",
      strength: "500mg tablets",
      frequency: "Twice daily",
      timeOfDay: ["8:00 AM", "6:00 PM"],
      nextDose: "12:00 PM",
      remaining: 15,
      totalPills: 180,
      refillDate: "2024-01-30",
      prescribedDate: "2023-10-20",
      prescribedBy: "Dr. Michael Johnson",
      pharmacy: "Walgreens - Oak Avenue",
      pharmacyPhone: "(555) 987-6543",
      status: "Low Stock",
      category: "diabetes",
      condition: "Type 2 Diabetes",
      instructions: "Take with meals to reduce stomach upset. Swallow whole.",
      sideEffects: ["Nausea", "Diarrhea", "Metallic taste", "Decreased appetite"],
      interactions: ["Alcohol", "Contrast dye", "Certain antibiotics"],
      notes: "Check blood sugar levels regularly",
      cost: "$22.50",
      insurance: "Covered - $10 copay",
      priority: "high",
      refillsRemaining: 1,
      lastTaken: "2024-01-22 6:00 PM",
      adherence: 88
    },
    {
      id: 3,
      name: "Atorvastatin",
      genericName: "Atorvastatin Calcium",
      brandName: "Lipitor",
      dosage: "20mg",
      strength: "20mg tablets",
      frequency: "Once daily",
      timeOfDay: ["9:00 PM"],
      nextDose: "9:00 PM",
      remaining: 45,
      totalPills: 90,
      refillDate: "2024-03-01",
      prescribedDate: "2023-12-01",
      prescribedBy: "Dr. Sarah Smith",
      pharmacy: "CVS Pharmacy - Main St",
      pharmacyPhone: "(555) 123-4567",
      status: "Active",
      category: "cardiovascular",
      condition: "High Cholesterol",
      instructions: "Take at bedtime. Avoid grapefruit juice.",
      sideEffects: ["Muscle pain", "Headache", "Nausea", "Joint pain"],
      interactions: ["Grapefruit", "Certain antibiotics", "Antifungals"],
      notes: "Monitor liver function tests",
      cost: "$35.00",
      insurance: "Covered - $15 copay",
      priority: "normal",
      refillsRemaining: 3,
      lastTaken: "2024-01-21 9:05 PM",
      adherence: 92
    },
    {
      id: 4,
      name: "Vitamin D3",
      genericName: "Cholecalciferol",
      brandName: "Nature Made D3",
      dosage: "1000 IU",
      strength: "1000 IU softgels",
      frequency: "Once daily",
      timeOfDay: ["8:00 AM"],
      nextDose: "8:00 AM",
      remaining: 60,
      totalPills: 120,
      refillDate: "2024-04-15",
      prescribedDate: "2023-09-15",
      prescribedBy: "Dr. Amanda Rodriguez",
      pharmacy: "Target Pharmacy",
      pharmacyPhone: "(555) 456-7890",
      status: "Active",
      category: "supplements",
      condition: "Vitamin D Deficiency",
      instructions: "Take with food for better absorption.",
      sideEffects: ["Nausea (rare)", "Constipation (rare)"],
      interactions: ["Thiazide diuretics", "Calcium channel blockers"],
      notes: "Monitor vitamin D levels annually",
      cost: "$12.99",
      insurance: "Not covered - OTC",
      priority: "normal",
      refillsRemaining: 5,
      lastTaken: "2024-01-22 8:00 AM",
      adherence: 98
    },
    {
      id: 5,
      name: "Sertraline",
      genericName: "Sertraline HCl",
      brandName: "Zoloft",
      dosage: "50mg",
      strength: "50mg tablets",
      frequency: "Once daily",
      timeOfDay: ["7:00 AM"],
      nextDose: "7:00 AM",
      remaining: 22,
      totalPills: 90,
      refillDate: "2024-02-10",
      prescribedDate: "2023-11-01",
      prescribedBy: "Dr. Patricia Lee",
      pharmacy: "Rite Aid - Downtown",
      pharmacyPhone: "(555) 234-5678",
      status: "Active",
      category: "mental-health",
      condition: "Depression",
      instructions: "Take at the same time daily. Do not stop abruptly.",
      sideEffects: ["Nausea", "Insomnia", "Dizziness", "Sexual side effects"],
      interactions: ["MAOIs", "Blood thinners", "NSAIDs"],
      notes: "Monitor mood changes closely",
      cost: "$28.75",
      insurance: "Covered - $10 copay",
      priority: "high",
      refillsRemaining: 2,
      lastTaken: "2024-01-22 7:15 AM",
      adherence: 94
    }
  ]

  const categories = [
    { id: 'all', name: 'All Medications', count: medications.length, icon: Pill },
    { id: 'current', name: 'Current', count: medications.filter(m => m.status === 'Active' || m.status === 'Low Stock').length, icon: Clock },
    { id: 'cardiovascular', name: 'Cardiovascular', count: 2, icon: Heart },
    { id: 'diabetes', name: 'Diabetes', count: 1, icon: Activity },
    { id: 'mental-health', name: 'Mental Health', count: 1, icon: Brain },
    { id: 'supplements', name: 'Supplements', count: 1, icon: Star },
    { id: 'low-stock', name: 'Low Stock', count: medications.filter(m => m.remaining < 20).length, icon: AlertTriangle }
  ]

  const todaySchedule = [
    { id: 1, time: "7:00 AM", medication: "Sertraline 50mg", medId: 5, taken: true, takenAt: "7:15 AM" },
    { id: 2, time: "8:00 AM", medication: "Lisinopril 10mg", medId: 1, taken: true, takenAt: "8:15 AM" },
    { id: 3, time: "8:00 AM", medication: "Vitamin D3 1000 IU", medId: 4, taken: true, takenAt: "8:00 AM" },
    { id: 4, time: "8:00 AM", medication: "Metformin 500mg", medId: 2, taken: false, upcoming: true },
    { id: 5, time: "6:00 PM", medication: "Metformin 500mg", medId: 2, taken: false, upcoming: false },
    { id: 6, time: "9:00 PM", medication: "Atorvastatin 20mg", medId: 3, taken: false, upcoming: false }
  ]

  const filteredMedications = medications.filter(med => {
    const matchesSearch = med.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         med.condition.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         med.prescribedBy.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || 
                           med.category === selectedCategory ||
                           (selectedCategory === 'current' && (med.status === 'Active' || med.status === 'Low Stock')) ||
                           (selectedCategory === 'low-stock' && med.remaining < 20)
    return matchesSearch && matchesCategory
  })

  const getStatusColor = (status) => {
    switch (status) {
      case 'Active': return 'text-green-700 bg-green-100 dark:bg-green-900/20 dark:text-green-400'
      case 'Low Stock': return 'text-orange-700 bg-orange-100 dark:bg-orange-900/20 dark:text-orange-400'
      case 'Expired': return 'text-red-700 bg-red-100 dark:bg-red-900/20 dark:text-red-400'
      default: return 'text-gray-700 bg-gray-100 dark:bg-gray-700 dark:text-gray-400'
    }
  }

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high': return 'border-l-red-500 bg-red-50/30 dark:bg-red-900/10'
      case 'normal': return 'border-l-blue-500 bg-blue-50/30 dark:bg-blue-900/10'
      default: return 'border-l-gray-500 bg-gray-50/30 dark:bg-gray-900/10'
    }
  }

  const getAdherenceColor = (adherence) => {
    if (adherence >= 95) return 'text-green-600 bg-green-100 dark:bg-green-900/20'
    if (adherence >= 80) return 'text-yellow-600 bg-yellow-100 dark:bg-yellow-900/20'
    return 'text-red-600 bg-red-100 dark:bg-red-900/20'
  }

  return (
    <div className="p-6 space-y-6">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Medications
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            {filteredMedications.length} of {medications.length} medications • Next dose in 2 hours
          </p>
        </div>
        <div className="flex gap-3">
          <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors">
            <Phone className="w-4 h-4" />
            Call Pharmacy
          </button>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors">
            <Plus className="w-4 h-4" />
            Add Medication
          </button>
        </div>
      </div>

      {/* Search and Filter Bar */}
      <Card className="p-4">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search medications, conditions, or doctors..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="flex items-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            >
              <Filter className="w-4 h-4" />
              Filters
              <ChevronDown className={`w-4 h-4 transition-transform ${isFilterOpen ? 'rotate-180' : ''}`} />
            </button>
          </div>
        </div>

        {/* Filter Options */}
        {isFilterOpen && (
          <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <select className="border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 bg-white dark:bg-gray-700 text-sm">
                <option>All Status</option>
                <option>Active</option>
                <option>Low Stock</option>
                <option>Expired</option>
              </select>
              <select className="border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 bg-white dark:bg-gray-700 text-sm">
                <option>All Doctors</option>
                <option>Dr. Sarah Smith</option>
                <option>Dr. Michael Johnson</option>
                <option>Dr. Amanda Rodriguez</option>
              </select>
              <select className="border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 bg-white dark:bg-gray-700 text-sm">
                <option>All Pharmacies</option>
                <option>CVS Pharmacy</option>
                <option>Walgreens</option>
                <option>Target Pharmacy</option>
              </select>
              <select className="border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 bg-white dark:bg-gray-700 text-sm">
                <option>All Frequencies</option>
                <option>Once daily</option>
                <option>Twice daily</option>
                <option>As needed</option>
              </select>
            </div>
          </div>
        )}
      </Card>

      {/* Compact Categories Bar */}
      <Card className="p-4 mb-6 animate-in slide-in-from-top duration-300">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-sm font-semibold text-gray-900 dark:text-white">Categories</h3>
        </div>
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => {
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

      {/* Medications List */}
      <Card className="p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              {categories.find(c => c.id === selectedCategory)?.name || 'Medications'}
            </h2>
          </div>
          <div className="flex items-center gap-2">
            <select className="border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 bg-white dark:bg-gray-700 text-sm">
              <option>Sort by Name</option>
              <option>Sort by Next Dose</option>
              <option>Sort by Refill Date</option>
              <option>Sort by Priority</option>
            </select>
          </div>
        </div>

        {filteredMedications.length === 0 ? (
          <div className="text-center py-12">
            <Pill className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-500 dark:text-gray-400">No medications found matching your criteria</p>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredMedications.map((med) => (
              <div key={med.id} className={`border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200 cursor-pointer group border-l-4 ${getPriorityColor(med.priority)}`}
                   onClick={() => setSelectedMedication(med)}>
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-4 flex-1">
                        <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                          <Pill className="w-7 h-7 text-blue-600 dark:text-blue-400" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between mb-2">
                            <div>
                              <h3 className="font-bold text-lg text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                {med.name} {med.dosage}
                              </h3>
                              <p className="text-sm text-gray-600 dark:text-gray-400">
                                {med.brandName} • {med.condition}
                              </p>
                            </div>
                            <div className="flex items-center gap-2 ml-4">
                              <span className={`text-xs px-2 py-1 rounded-full font-medium ${getStatusColor(med.status)}`}>
                                {med.status}
                              </span>
                              <span className={`text-xs px-2 py-1 rounded-full font-medium ${getAdherenceColor(med.adherence)}`}>
                                {med.adherence}% adherence
                              </span>
                            </div>
                          </div>
                          
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-600 dark:text-gray-400 mb-3">
                            <div className="flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              <span className="font-medium">Next:</span> {med.nextDose}
                            </div>
                            <div className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              <span className="font-medium">Refill:</span> {new Date(med.refillDate).toLocaleDateString()}
                            </div>
                            <div className="flex items-center gap-1">
                              <User className="w-4 h-4" />
                              <span className="font-medium">Dr:</span> {med.prescribedBy.replace('Dr. ', '')}
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin className="w-4 h-4" />
                              <span className="font-medium">Pharmacy:</span> {med.pharmacy.split(' - ')[0]}
                            </div>
                          </div>
                          
                          <div className="flex items-center justify-between">
                            <div className="text-sm">
                              <span className="text-gray-600 dark:text-gray-400">Pills remaining: </span>
                              <span className={`font-bold ${
                                med.remaining < 20 ? 'text-orange-600' : 'text-gray-900 dark:text-white'
                              }`}>
                                {med.remaining} / {med.totalPills}
                              </span>
                            </div>
                            <div className="text-sm text-gray-600 dark:text-gray-400">
                              {med.refillsRemaining} refills remaining
                            </div>
                          </div>
                          
                          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 mt-2">
                            <div 
                              className={`h-3 rounded-full transition-all ${
                                med.remaining < 20 ? 'bg-orange-500' : 
                                med.remaining < 40 ? 'bg-yellow-500' : 'bg-green-500'
                              }`}
                              style={{ width: `${Math.min((med.remaining / med.totalPills) * 100, 100)}%` }}
                            ></div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2 ml-4">
                        <button className="p-2 text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-colors" title="View Details">
                          <Eye className="w-4 h-4" />
                        </button>
                        <button className="p-2 text-gray-400 hover:text-green-600 dark:hover:text-green-400 hover:bg-green-50 dark:hover:bg-green-900/20 rounded-lg transition-colors" title="Edit">
                          <Edit className="w-4 h-4" />
                        </button>
                        {med.remaining < 20 && (
                          <AlertTriangle className="w-5 h-5 text-orange-500" title="Low Stock" />
                        )}
                      </div>
                    </div>
                </div>
              ))}
            </div>
          )}
        </Card>
      </div>

      {/* Today's Schedule & Reminders */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6">
          <div className="flex items-center gap-3 mb-6">
            <Clock className="w-6 h-6 text-blue-500" />
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
              Today's Schedule
            </h2>
          </div>
          <div className="space-y-3">
            {todaySchedule.map((item) => (
              <div key={item.id} className={`flex items-center justify-between p-4 rounded-lg transition-all ${
                item.taken 
                  ? 'bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-700'
                  : item.upcoming 
                    ? 'bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-700 ring-2 ring-blue-200 dark:ring-blue-700'
                    : 'bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700'
              }`}>
                <div className="flex items-center gap-3">
                  <div className={`w-4 h-4 rounded-full ${
                    item.taken ? 'bg-green-500' : 
                    item.upcoming ? 'bg-blue-500 animate-pulse' : 'bg-gray-300 dark:bg-gray-600'
                  }`}></div>
                  <div>
                    <div className="text-sm font-bold text-gray-900 dark:text-white">{item.time}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">{item.medication}</div>
                    {item.taken && item.takenAt && (
                      <div className="text-xs text-green-600 dark:text-green-400">Taken at {item.takenAt}</div>
                    )}
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  {item.taken ? (
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                  ) : (
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1.5 rounded-lg text-xs font-medium transition-colors">
                      Mark Taken
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
          
          {/* Schedule Summary */}
          <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-lg font-bold text-green-600">{todaySchedule.filter(s => s.taken).length}</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">Taken</div>
              </div>
              <div>
                <div className="text-lg font-bold text-blue-600">{todaySchedule.filter(s => s.upcoming).length}</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">Upcoming</div>
              </div>
              <div>
                <div className="text-lg font-bold text-gray-600">{todaySchedule.filter(s => !s.taken && !s.upcoming).length}</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">Pending</div>
              </div>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-3 mb-6">
            <Bell className="w-6 h-6 text-orange-500" />
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
              Alerts & Reminders
            </h2>
          </div>
          <div className="space-y-4">
            <div className="p-4 bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-700 rounded-lg">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-red-600 mt-0.5" />
                <div className="flex-1">
                  <div className="font-semibold text-red-800 dark:text-red-300 mb-1">Critical: Refill Needed</div>
                  <p className="text-sm text-red-700 dark:text-red-400 mb-2">
                    Metformin expires in 8 days. Only 15 pills remaining.
                  </p>
                  <button className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded text-xs font-medium">
                    Order Refill
                  </button>
                </div>
              </div>
            </div>
            
            <div className="p-4 bg-orange-50 dark:bg-orange-900/30 border border-orange-200 dark:border-orange-700 rounded-lg">
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-orange-600 mt-0.5" />
                <div className="flex-1">
                  <div className="font-semibold text-orange-800 dark:text-orange-300 mb-1">Upcoming Dose</div>
                  <p className="text-sm text-orange-700 dark:text-orange-400 mb-2">
                    Metformin 500mg in 2 hours (8:00 AM)
                  </p>
                  <button className="bg-orange-600 hover:bg-orange-700 text-white px-3 py-1 rounded text-xs font-medium">
                    Set Reminder
                  </button>
                </div>
              </div>
            </div>
            
            <div className="p-4 bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-700 rounded-lg">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-blue-600 mt-0.5" />
                <div className="flex-1">
                  <div className="font-semibold text-blue-800 dark:text-blue-300 mb-1">Interaction Warning</div>
                  <p className="text-sm text-blue-700 dark:text-blue-400 mb-2">
                    Avoid grapefruit with Atorvastatin
                  </p>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded text-xs font-medium">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Quick Actions */}
          <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
            <div className="space-y-2">
              <button className="w-full flex items-center gap-3 px-4 py-2 bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors text-sm">
                <Settings className="w-4 h-4" />
                Notification Settings
              </button>
              <button className="w-full flex items-center gap-3 px-4 py-2 bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors text-sm">
                <Download className="w-4 h-4" />
                Export Medication List
              </button>
            </div>
          </div>
        </Card>
      </div>
      {/* Medication Detail Modal */}
      {selectedMedication && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-gray-800 rounded-lg max-w-5xl w-full max-h-[90vh] overflow-hidden">
            <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                {selectedMedication.name} - Detailed Information
              </h2>
              <button
                onClick={() => setSelectedMedication(null)}
                className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="p-6 overflow-y-auto max-h-[calc(90vh-200px)]">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Basic Information */}
                <div className="lg:col-span-2 space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Medication Details</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-3">
                        <div>
                          <label className="text-sm font-medium text-gray-600 dark:text-gray-400">Generic Name</label>
                          <p className="text-gray-900 dark:text-white font-medium">{selectedMedication.genericName}</p>
                        </div>
                        <div>
                          <label className="text-sm font-medium text-gray-600 dark:text-gray-400">Brand Name</label>
                          <p className="text-gray-900 dark:text-white font-medium">{selectedMedication.brandName}</p>
                        </div>
                        <div>
                          <label className="text-sm font-medium text-gray-600 dark:text-gray-400">Strength</label>
                          <p className="text-gray-900 dark:text-white font-medium">{selectedMedication.strength}</p>
                        </div>
                        <div>
                          <label className="text-sm font-medium text-gray-600 dark:text-gray-400">Condition</label>
                          <p className="text-gray-900 dark:text-white font-medium">{selectedMedication.condition}</p>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div>
                          <label className="text-sm font-medium text-gray-600 dark:text-gray-400">Prescribed By</label>
                          <p className="text-gray-900 dark:text-white font-medium">{selectedMedication.prescribedBy}</p>
                        </div>
                        <div>
                          <label className="text-sm font-medium text-gray-600 dark:text-gray-400">Prescribed Date</label>
                          <p className="text-gray-900 dark:text-white font-medium">{new Date(selectedMedication.prescribedDate).toLocaleDateString()}</p>
                        </div>
                        <div>
                          <label className="text-sm font-medium text-gray-600 dark:text-gray-400">Cost</label>
                          <p className="text-gray-900 dark:text-white font-medium">{selectedMedication.cost} ({selectedMedication.insurance})</p>
                        </div>
                        <div>
                          <label className="text-sm font-medium text-gray-600 dark:text-gray-400">Adherence Rate</label>
                          <p className="text-gray-900 dark:text-white font-medium">{selectedMedication.adherence}%</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Instructions</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg">
                      {selectedMedication.instructions}
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Common Side Effects</h4>
                      <ul className="space-y-2">
                        {selectedMedication.sideEffects.map((effect, index) => (
                          <li key={index} className="flex items-start gap-2 text-sm">
                            <AlertCircle className="w-4 h-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-600 dark:text-gray-400">{effect}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Drug Interactions</h4>
                      <ul className="space-y-2">
                        {selectedMedication.interactions.map((interaction, index) => (
                          <li key={index} className="flex items-start gap-2 text-sm">
                            <AlertTriangle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-600 dark:text-gray-400">{interaction}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                
                {/* Pharmacy & Schedule Info */}
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Pharmacy Information</h4>
                    <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg space-y-3">
                      <div>
                        <label className="text-sm font-medium text-gray-600 dark:text-gray-400">Pharmacy</label>
                        <p className="text-gray-900 dark:text-white font-medium">{selectedMedication.pharmacy}</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-600 dark:text-gray-400">Phone</label>
                        <p className="text-gray-900 dark:text-white font-medium">{selectedMedication.pharmacyPhone}</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-600 dark:text-gray-400">Refills Remaining</label>
                        <p className="text-gray-900 dark:text-white font-medium">{selectedMedication.refillsRemaining}</p>
                      </div>
                      <button className="w-full bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                        Call Pharmacy
                      </button>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Schedule</h4>
                    <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg space-y-3">
                      <div>
                        <label className="text-sm font-medium text-gray-600 dark:text-gray-400">Frequency</label>
                        <p className="text-gray-900 dark:text-white font-medium">{selectedMedication.frequency}</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-600 dark:text-gray-400">Times</label>
                        <div className="space-y-1">
                          {selectedMedication.timeOfDay.map((time, index) => (
                            <p key={index} className="text-gray-900 dark:text-white font-medium">{time}</p>
                          ))}
                        </div>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-600 dark:text-gray-400">Last Taken</label>
                        <p className="text-gray-900 dark:text-white font-medium">{selectedMedication.lastTaken}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Stock Status</h4>
                    <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-gray-600 dark:text-gray-400">Pills Remaining</span>
                        <span className="font-bold text-gray-900 dark:text-white">{selectedMedication.remaining}</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-3 mb-3">
                        <div 
                          className={`h-3 rounded-full ${
                            selectedMedication.remaining < 20 ? 'bg-red-500' : 
                            selectedMedication.remaining < 40 ? 'bg-yellow-500' : 'bg-green-500'
                          }`}
                          style={{ width: `${Math.min((selectedMedication.remaining / selectedMedication.totalPills) * 100, 100)}%` }}
                        ></div>
                      </div>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mb-3">
                        Next refill due: {new Date(selectedMedication.refillDate).toLocaleDateString()}
                      </p>
                      <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                        Order Refill
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Additional Notes */}
              {selectedMedication.notes && (
                <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Additional Notes</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm bg-yellow-50 dark:bg-yellow-900/20 p-3 rounded-lg">
                    {selectedMedication.notes}
                  </p>
                </div>
              )}
              
              {/* Action Buttons */}
              <div className="flex gap-3 mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
                <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center justify-center gap-2 transition-colors">
                  <Edit className="w-4 h-4" />
                  Edit Medication
                </button>
                <button className="flex-1 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg flex items-center justify-center gap-2 transition-colors">
                  <Share2 className="w-4 h-4" />
                  Share with Doctor
                </button>
                <button className="flex-1 bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg flex items-center justify-center gap-2 transition-colors">
                  <Printer className="w-4 h-4" />
                  Print Info
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}