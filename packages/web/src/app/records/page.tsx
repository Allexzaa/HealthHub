'use client'

import { useState } from 'react'
import { Card } from '@/components/shared/Card'
import { FileText, Download, Upload, Calendar, User, Heart, Search, Filter, Eye, Share2, Printer, Star, Clock, AlertCircle, CheckCircle2, Stethoscope, Brain, Activity, Pill, X, ChevronDown, ChevronRight } from 'lucide-react'

export default function HealthRecords() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedRecord, setSelectedRecord] = useState(null)
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const [expandedCategories, setExpandedCategories] = useState(['recent'])

  const records = [
    {
      id: 1,
      title: "Annual Physical Exam",
      date: "2024-01-15",
      doctor: "Dr. Sarah Smith",
      facility: "Metro General Hospital",
      type: "General Checkup",
      category: "checkups",
      status: "Complete",
      fileSize: "2.3 MB",
      fileType: "PDF",
      priority: "normal",
      summary: "Comprehensive annual physical examination including blood work, vital signs assessment, and preventive care screening.",
      findings: ["Blood pressure normal", "Cholesterol slightly elevated", "BMI within normal range"],
      nextSteps: ["Follow up in 6 months", "Monitor cholesterol levels"],
      attachments: 3,
      shared: true
    },
    {
      id: 2,
      title: "Blood Test Results - Comprehensive Panel",
      date: "2024-01-10",
      doctor: "Lab Services",
      facility: "Quest Diagnostics",
      type: "Laboratory",
      category: "lab-results",
      status: "Complete",
      fileSize: "1.8 MB",
      fileType: "PDF",
      priority: "high",
      summary: "Complete blood count, lipid panel, liver function tests, and glucose levels.",
      findings: ["White blood cell count normal", "Glucose: 95 mg/dL (normal)", "LDL cholesterol: 145 mg/dL (borderline high)"],
      nextSteps: ["Dietary counseling recommended", "Retest in 3 months"],
      attachments: 2,
      shared: false
    },
    {
      id: 3,
      title: "Cardiology Consultation",
      date: "2023-12-20",
      doctor: "Dr. Michael Johnson",
      facility: "Heart Care Specialists",
      type: "Specialist",
      category: "specialist-reports",
      status: "Complete",
      fileSize: "3.1 MB",
      fileType: "PDF",
      priority: "normal",
      summary: "Cardiac evaluation including ECG, echocardiogram, and stress testing for chest pain investigation.",
      findings: ["ECG shows normal sinus rhythm", "Echocardiogram reveals normal heart function", "Stress test negative for ischemia"],
      nextSteps: ["Continue current medications", "Annual follow-up recommended"],
      attachments: 5,
      shared: true
    },
    {
      id: 4,
      title: "X-Ray Report - Chest",
      date: "2023-11-15",
      doctor: "Dr. Amanda Rodriguez",
      facility: "Radiology Associates",
      type: "Imaging",
      category: "imaging",
      status: "Complete",
      fileSize: "12.4 MB",
      fileType: "DICOM",
      priority: "normal",
      summary: "Chest X-ray performed to investigate persistent cough and rule out pneumonia.",
      findings: ["Clear lung fields", "Heart size normal", "No acute pulmonary findings"],
      nextSteps: ["No further imaging needed", "Continue symptomatic treatment"],
      attachments: 4,
      shared: false
    },
    {
      id: 5,
      title: "Dermatology Biopsy Results",
      date: "2023-10-08",
      doctor: "Dr. Patricia Lee",
      facility: "Skin Health Clinic",
      type: "Pathology",
      category: "specialist-reports",
      status: "Complete",
      fileSize: "1.2 MB",
      fileType: "PDF",
      priority: "normal",
      summary: "Skin biopsy results for suspicious mole removed from left shoulder.",
      findings: ["Benign nevus", "No malignant cells detected", "Complete excision achieved"],
      nextSteps: ["Annual skin check recommended", "Monitor for new lesions"],
      attachments: 2,
      shared: true
    },
    {
      id: 6,
      title: "MRI Brain Scan",
      date: "2023-09-22",
      doctor: "Dr. Robert Kim",
      facility: "Advanced Imaging Center",
      type: "Imaging",
      category: "imaging",
      status: "Complete",
      fileSize: "45.8 MB",
      fileType: "DICOM",
      priority: "high",
      summary: "Brain MRI to investigate recurring headaches and rule out structural abnormalities.",
      findings: ["No evidence of mass lesions", "Normal brain structure", "Mild age-related changes"],
      nextSteps: ["Neurologist follow-up", "Consider migraine management"],
      attachments: 8,
      shared: false
    },
    {
      id: 7,
      title: "Vaccination Record Update",
      date: "2024-01-20",
      doctor: "Nurse Jennifer Brown",
      facility: "Metro General Hospital",
      type: "Immunization",
      category: "immunizations",
      status: "Complete",
      fileSize: "0.5 MB",
      fileType: "PDF",
      priority: "normal",
      summary: "Annual flu vaccine and COVID-19 booster administered.",
      findings: ["No adverse reactions", "Immunity updated"],
      nextSteps: ["Next flu vaccine due in 12 months"],
      attachments: 1,
      shared: false
    }
  ]

  const categories = [
    { id: 'all', name: 'All Records', count: records.length, icon: FileText },
    { id: 'recent', name: 'Recent (30 days)', count: 2, icon: Clock },
    { id: 'checkups', name: 'General Checkups', count: 1, icon: Stethoscope },
    { id: 'lab-results', name: 'Lab Results', count: 1, icon: Activity },
    { id: 'imaging', name: 'Imaging & Scans', count: 2, icon: Brain },
    { id: 'specialist-reports', name: 'Specialist Reports', count: 2, icon: User },
    { id: 'immunizations', name: 'Immunizations', count: 1, icon: Pill }
  ]

  const vitals = [
    { label: "Blood Pressure", value: "120/80 mmHg", status: "Normal", trend: "stable", lastUpdated: "2024-01-15" },
    { label: "Heart Rate", value: "72 bpm", status: "Normal", trend: "stable", lastUpdated: "2024-01-15" },
    { label: "Temperature", value: "98.6°F", status: "Normal", trend: "stable", lastUpdated: "2024-01-15" },
    { label: "Weight", value: "165 lbs", status: "Normal", trend: "decreasing", lastUpdated: "2024-01-10" },
    { label: "BMI", value: "22.8", status: "Normal", trend: "stable", lastUpdated: "2024-01-10" },
    { label: "Cholesterol", value: "195 mg/dL", status: "Borderline", trend: "increasing", lastUpdated: "2024-01-10" }
  ]

  const filteredRecords = records.filter(record => {
    const matchesSearch = record.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         record.doctor.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         record.facility.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || 
                           record.category === selectedCategory ||
                           (selectedCategory === 'recent' && new Date(record.date) > new Date(Date.now() - 30 * 24 * 60 * 60 * 1000))
    return matchesSearch && matchesCategory
  })

  const toggleCategory = (categoryId) => {
    if (expandedCategories.includes(categoryId)) {
      setExpandedCategories(expandedCategories.filter(id => id !== categoryId))
    } else {
      setExpandedCategories([...expandedCategories, categoryId])
    }
  }

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high': return 'text-red-600 bg-red-50 dark:bg-red-900/20 dark:text-red-400'
      case 'normal': return 'text-green-600 bg-green-50 dark:bg-green-900/20 dark:text-green-400'
      default: return 'text-gray-600 bg-gray-50 dark:bg-gray-700 dark:text-gray-400'
    }
  }

  const getTrendIcon = (trend) => {
    switch (trend) {
      case 'increasing': return '↗️'
      case 'decreasing': return '↘️'
      case 'stable': return '➡️'
      default: return '➡️'
    }
  }

  return (
    <div className="p-6 space-y-6">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Health Records
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            {filteredRecords.length} of {records.length} records • Last updated: Jan 20, 2024
          </p>
        </div>
        <div className="flex gap-3">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors">
            <Upload className="w-4 h-4" />
            Upload Record
          </button>
          <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors">
            <Download className="w-4 h-4" />
            Export All
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
              placeholder="Search records, doctors, or facilities..."
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
                <option>All Dates</option>
                <option>Last 30 days</option>
                <option>Last 6 months</option>
                <option>Last year</option>
              </select>
              <select className="border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 bg-white dark:bg-gray-700 text-sm">
                <option>All Doctors</option>
                <option>Dr. Sarah Smith</option>
                <option>Dr. Michael Johnson</option>
                <option>Dr. Amanda Rodriguez</option>
              </select>
              <select className="border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 bg-white dark:bg-gray-700 text-sm">
                <option>All Facilities</option>
                <option>Metro General Hospital</option>
                <option>Heart Care Specialists</option>
                <option>Quest Diagnostics</option>
              </select>
              <select className="border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 bg-white dark:bg-gray-700 text-sm">
                <option>All Priorities</option>
                <option>High Priority</option>
                <option>Normal Priority</option>
              </select>
            </div>
          </div>
        )}
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Categories Sidebar */}
        <div className="lg:col-span-1">
          <Card className="p-4">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Categories
            </h2>
            <div className="space-y-2">
              {categories.map((category) => {
                const Icon = category.icon
                const isActive = selectedCategory === category.id
                return (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`w-full flex items-center justify-between p-3 rounded-lg transition-colors text-left ${
                      isActive
                        ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-700'
                        : 'hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Icon className={`w-4 h-4 ${isActive ? 'text-blue-600 dark:text-blue-400' : 'text-gray-500'}`} />
                      <span className="text-sm font-medium">{category.name}</span>
                    </div>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      isActive
                        ? 'bg-blue-100 dark:bg-blue-800 text-blue-700 dark:text-blue-300'
                        : 'bg-gray-100 dark:bg-gray-600 text-gray-600 dark:text-gray-400'
                    }`}>
                      {category.count}
                    </span>
                  </button>
                )
              })}
            </div>
          </Card>
        </div>

        {/* Records List */}
        <div className="lg:col-span-3">
          <Card className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                {categories.find(c => c.id === selectedCategory)?.name || 'Medical Records'}
              </h2>
              <div className="flex items-center gap-2">
                <select className="border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 bg-white dark:bg-gray-700 text-sm">
                  <option>Sort by Date</option>
                  <option>Sort by Doctor</option>
                  <option>Sort by Priority</option>
                  <option>Sort by Type</option>
                </select>
              </div>
            </div>

            {filteredRecords.length === 0 ? (
              <div className="text-center py-12">
                <FileText className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-500 dark:text-gray-400">No records found matching your criteria</p>
              </div>
            ) : (
              <div className="space-y-4">
                {filteredRecords.map((record) => (
                  <div key={record.id} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200 cursor-pointer group"
                       onClick={() => setSelectedRecord(record)}>
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-4 flex-1">
                        <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                          <FileText className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between">
                            <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                              {record.title}
                            </h3>
                            <div className="flex items-center gap-2 ml-4">
                              <span className={`text-xs px-2 py-1 rounded-full font-medium ${getPriorityColor(record.priority)}`}>
                                {record.priority === 'high' ? 'High Priority' : 'Normal'}
                              </span>
                              {record.shared && (
                                <Share2 className="w-4 h-4 text-green-500" title="Shared with providers" />
                              )}
                            </div>
                          </div>
                          
                          <div className="flex items-center gap-4 mt-2 text-sm text-gray-600 dark:text-gray-400">
                            <div className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              {new Date(record.date).toLocaleDateString()}
                            </div>
                            <div className="flex items-center gap-1">
                              <User className="w-4 h-4" />
                              {record.doctor}
                            </div>
                            <div className="flex items-center gap-1">
                              <FileText className="w-4 h-4" />
                              {record.fileSize}
                            </div>
                          </div>
                          
                          <div className="mt-2">
                            <span className="inline-block px-2 py-1 bg-gray-100 dark:bg-gray-700 text-xs rounded-full text-gray-700 dark:text-gray-300">
                              {record.type}
                            </span>
                            <span className="inline-block ml-2 px-2 py-1 bg-gray-100 dark:bg-gray-700 text-xs rounded-full text-gray-700 dark:text-gray-300">
                              {record.facility}
                            </span>
                          </div>
                          
                          <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 line-clamp-2">
                            {record.summary}
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2 ml-4">
                        <button className="p-2 text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-colors" title="View Details">
                          <Eye className="w-4 h-4" />
                        </button>
                        <button className="p-2 text-gray-400 hover:text-green-600 dark:hover:text-green-400 hover:bg-green-50 dark:hover:bg-green-900/20 rounded-lg transition-colors" title="Share">
                          <Share2 className="w-4 h-4" />
                        </button>
                        <button className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-colors" title="Download">
                          <Download className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </Card>
        </div>
      </div>

      {/* Latest Vitals & Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6">
          <div className="flex items-center gap-3 mb-6">
            <Heart className="w-6 h-6 text-red-500" />
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
              Latest Vitals & Metrics
            </h2>
          </div>
          <div className="space-y-4">
            {vitals.map((vital, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                <div>
                  <span className="text-sm font-medium text-gray-900 dark:text-white">{vital.label}</span>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Updated {vital.lastUpdated}</p>
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold text-gray-900 dark:text-white">{vital.value}</span>
                    <span className="text-lg">{getTrendIcon(vital.trend)}</span>
                  </div>
                  <div className={`text-xs px-2 py-1 rounded-full ${
                    vital.status === 'Normal' ? 'text-green-600 bg-green-100 dark:bg-green-900/20 dark:text-green-400' :
                    vital.status === 'Borderline' ? 'text-yellow-600 bg-yellow-100 dark:bg-yellow-900/20 dark:text-yellow-400' :
                    'text-red-600 bg-red-100 dark:bg-red-900/20 dark:text-red-400'
                  }`}>
                    {vital.status}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
            Quick Actions
          </h2>
          <div className="space-y-3">
            <button className="w-full flex items-center gap-3 px-4 py-3 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors">
              <Upload className="w-5 h-5" />
              <div className="text-left">
                <div className="font-medium">Request Medical Records</div>
                <div className="text-xs opacity-70">From healthcare providers</div>
              </div>
            </button>
            <button className="w-full flex items-center gap-3 px-4 py-3 bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-lg hover:bg-green-100 dark:hover:bg-green-900/50 transition-colors">
              <Share2 className="w-5 h-5" />
              <div className="text-left">
                <div className="font-medium">Share with Doctor</div>
                <div className="text-xs opacity-70">Grant access to records</div>
              </div>
            </button>
            <button className="w-full flex items-center gap-3 px-4 py-3 bg-purple-50 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-lg hover:bg-purple-100 dark:hover:bg-purple-900/50 transition-colors">
              <Printer className="w-5 h-5" />
              <div className="text-left">
                <div className="font-medium">Print Summary</div>
                <div className="text-xs opacity-70">Generate PDF report</div>
              </div>
            </button>
            <button className="w-full flex items-center gap-3 px-4 py-3 bg-orange-50 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 rounded-lg hover:bg-orange-100 dark:hover:bg-orange-900/50 transition-colors">
              <Star className="w-5 h-5" />
              <div className="text-left">
                <div className="font-medium">Request Second Opinion</div>
                <div className="text-xs opacity-70">Connect with specialists</div>
              </div>
            </button>
          </div>

          {/* Quick Stats */}
          <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
            <div className="grid grid-cols-2 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white">{records.length}</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">Total Records</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-green-600 dark:text-green-400">2</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">Shared Records</div>
              </div>
            </div>
          </div>
        </Card>
      </div>
      {/* Record Detail Modal */}
      {selectedRecord && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-gray-800 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden">
            <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                {selectedRecord.title}
              </h2>
              <button
                onClick={() => setSelectedRecord(null)}
                className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="p-6 overflow-y-auto max-h-[calc(90vh-200px)]">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Record Information */}
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Record Details</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-400">Date:</span>
                        <span className="font-medium text-gray-900 dark:text-white">{new Date(selectedRecord.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-400">Doctor:</span>
                        <span className="font-medium text-gray-900 dark:text-white">{selectedRecord.doctor}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-400">Facility:</span>
                        <span className="font-medium text-gray-900 dark:text-white">{selectedRecord.facility}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-400">Type:</span>
                        <span className="font-medium text-gray-900 dark:text-white">{selectedRecord.type}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-400">File Size:</span>
                        <span className="font-medium text-gray-900 dark:text-white">{selectedRecord.fileSize}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-400">Attachments:</span>
                        <span className="font-medium text-gray-900 dark:text-white">{selectedRecord.attachments} files</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Summary</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                      {selectedRecord.summary}
                    </p>
                  </div>
                </div>
                
                {/* Findings and Next Steps */}
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Key Findings</h4>
                    <ul className="space-y-2">
                      {selectedRecord.findings.map((finding, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm">
                          <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600 dark:text-gray-400">{finding}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Next Steps</h4>
                    <ul className="space-y-2">
                      {selectedRecord.nextSteps.map((step, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm">
                          <AlertCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600 dark:text-gray-400">{step}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              
              {/* Action Buttons */}
              <div className="flex gap-3 mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
                <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center justify-center gap-2 transition-colors">
                  <Download className="w-4 h-4" />
                  Download
                </button>
                <button className="flex-1 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg flex items-center justify-center gap-2 transition-colors">
                  <Share2 className="w-4 h-4" />
                  Share
                </button>
                <button className="flex-1 bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg flex items-center justify-center gap-2 transition-colors">
                  <Printer className="w-4 h-4" />
                  Print
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}