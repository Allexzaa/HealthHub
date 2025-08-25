'use client'

import { useState } from 'react'
import { Card } from '@/components/shared/Card'
import { FileText, Download, Upload, Calendar, User, Heart, Search, Filter, Eye, Share2, Printer, Star, Clock, AlertCircle, CheckCircle2, Stethoscope, Brain, Activity, Pill, X, ChevronDown, ChevronRight, ArrowUpDown, TrendingUp, UserCheck, Building, ChevronLeft, Menu, EyeOff, Grid3X3, List } from 'lucide-react'

export default function HealthRecords() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedRecord, setSelectedRecord] = useState(null)
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const [expandedCategories, setExpandedCategories] = useState(['recent'])
  const [sortBy, setSortBy] = useState('date')
  const [sortOrder, setSortOrder] = useState('desc')
  const [showCategories, setShowCategories] = useState(true)
  const [showNavigation, setShowNavigation] = useState(true)
  const [viewMode, setViewMode] = useState('list')

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


  const filteredRecords = records.filter(record => {
    const matchesSearch = record.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         record.doctor.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         record.facility.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || 
                           record.category === selectedCategory ||
                           (selectedCategory === 'recent' && new Date(record.date) > new Date(Date.now() - 30 * 24 * 60 * 60 * 1000))
    return matchesSearch && matchesCategory
  })

  const sortedRecords = [...filteredRecords].sort((a, b) => {
    let comparison = 0
    
    switch (sortBy) {
      case 'date':
        comparison = new Date(a.date).getTime() - new Date(b.date).getTime()
        break
      case 'doctor':
        comparison = a.doctor.localeCompare(b.doctor)
        break
      case 'priority':
        const priorityOrder = { 'high': 3, 'normal': 2, 'low': 1 }
        comparison = (priorityOrder[a.priority] || 0) - (priorityOrder[b.priority] || 0)
        break
      case 'type':
        comparison = a.type.localeCompare(b.type)
        break
      case 'facility':
        comparison = a.facility.localeCompare(b.facility)
        break
      case 'size':
        const getSizeInMB = (sizeStr) => parseFloat(sizeStr.split(' ')[0])
        comparison = getSizeInMB(a.fileSize) - getSizeInMB(b.fileSize)
        break
      default:
        comparison = new Date(a.date).getTime() - new Date(b.date).getTime()
    }
    
    return sortOrder === 'desc' ? -comparison : comparison
  })

  const handleSort = (newSortBy) => {
    if (sortBy === newSortBy) {
      setSortOrder(sortOrder === 'desc' ? 'asc' : 'desc')
    } else {
      setSortBy(newSortBy)
      setSortOrder('desc')
    }
  }

  const sortingTiles = [
    { id: 'date', name: 'Date', icon: Calendar, description: 'Sort by record date' },
    { id: 'doctor', name: 'Doctor', icon: UserCheck, description: 'Sort by healthcare provider' },
    { id: 'priority', name: 'Priority', icon: TrendingUp, description: 'Sort by priority level' },
    { id: 'type', name: 'Type', icon: FileText, description: 'Sort by record type' },
    { id: 'facility', name: 'Facility', icon: Building, description: 'Sort by healthcare facility' },
    { id: 'size', name: 'File Size', icon: ArrowUpDown, description: 'Sort by file size' }
  ]

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


  return (
    <div className="p-6 space-y-6">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Health Records
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            {sortedRecords.length} of {records.length} records • Last updated: Jan 20, 2024
          </p>
        </div>
        {showNavigation && (
          <div className="flex gap-3 animate-in slide-in-from-right duration-300">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors">
              <Upload className="w-4 h-4" />
              Upload Record
            </button>
            <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors">
              <Download className="w-4 h-4" />
              Export All
            </button>
          </div>
        )}
      </div>

      {/* Search and Filter Bar */}
      {showNavigation && (
        <Card className="p-4 animate-in slide-in-from-top duration-300">
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
      )}

      {/* Compact Categories Bar */}
      {showCategories && (
        <Card className="p-4 mb-6 animate-in slide-in-from-top duration-300">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white">Categories</h3>
            <button
              onClick={() => setShowCategories(false)}
              className="p-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 rounded transition-colors"
              title="Hide categories"
            >
              <X className="w-4 h-4" />
            </button>
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
      )}

      {/* Records List */}
      <div className="transition-all duration-300">
        <Card className="p-6 relative">
          {/* Toggle Buttons */}
          <div className="absolute top-4 right-4 flex items-center gap-2 z-10">
            {!showCategories && (
              <button
                onClick={() => setShowCategories(true)}
                className="p-2 bg-blue-50 hover:bg-blue-100 dark:bg-blue-900/30 dark:hover:bg-blue-900/50 text-blue-600 dark:text-blue-400 rounded-lg transition-colors"
                title="Show categories"
              >
                <Menu className="w-4 h-4" />
              </button>
            )}
              <button
                onClick={() => setShowNavigation(!showNavigation)}
                className={`p-2 rounded-lg transition-colors ${
                  showNavigation 
                    ? 'bg-gray-50 hover:bg-gray-100 dark:bg-gray-700/50 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-400'
                    : 'bg-green-50 hover:bg-green-100 dark:bg-green-900/30 dark:hover:bg-green-900/50 text-green-600 dark:text-green-400'
                }`}
                title={showNavigation ? 'Hide navigation' : 'Show navigation'}
              >
                {showNavigation ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
            <div className="flex items-center justify-between mb-6 pr-20">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                {categories.find(c => c.id === selectedCategory)?.name || 'Medical Records'}
              </h2>
              {showNavigation && (
                <div className="flex items-center gap-2 animate-in slide-in-from-right duration-300">
                  {/* View Mode Toggle */}
                  <div className="flex border border-gray-300 dark:border-gray-600 rounded-lg overflow-hidden">
                    <button
                      onClick={() => setViewMode('list')}
                      className={`p-2 transition-colors ${viewMode === 'list'
                        ? 'bg-blue-600 text-white'
                        : 'bg-white dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-600'
                        }`}
                      title="List view"
                    >
                      <List className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => setViewMode('tile')}
                      className={`p-2 transition-colors ${viewMode === 'tile'
                        ? 'bg-blue-600 text-white'
                        : 'bg-white dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-600'
                        }`}
                      title="Tile view"
                    >
                      <Grid3X3 className="w-4 h-4" />
                    </button>
                  </div>
                  <select 
                    value={`${sortBy}-${sortOrder}`}
                    onChange={(e) => {
                      const [newSortBy, newSortOrder] = e.target.value.split('-')
                      setSortBy(newSortBy)
                      setSortOrder(newSortOrder)
                    }}
                    className="border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 bg-white dark:bg-gray-700 text-sm"
                  >
                    <option value="date-desc">Date: Newest First</option>
                    <option value="date-asc">Date: Oldest First</option>
                    <option value="doctor-asc">Doctor: A-Z</option>
                    <option value="doctor-desc">Doctor: Z-A</option>
                    <option value="priority-desc">Priority: High to Low</option>
                    <option value="priority-asc">Priority: Low to High</option>
                    <option value="type-asc">Type: A-Z</option>
                    <option value="type-desc">Type: Z-A</option>
                    <option value="facility-asc">Facility: A-Z</option>
                    <option value="facility-desc">Facility: Z-A</option>
                    <option value="size-desc">Size: Largest First</option>
                    <option value="size-asc">Size: Smallest First</option>
                  </select>
                </div>
              )}
            </div>

          {/* Sorting Tiles */}
          {showNavigation && (
            <div className="mb-6 animate-in slide-in-from-top duration-300">
              <div className="flex items-center gap-2 mb-3">
                <ArrowUpDown className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Quick Sort:</span>
                <span className="text-xs text-gray-500 dark:text-gray-400">Click to sort, click again to reverse</span>
              </div>
              <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-2">
                {sortingTiles.map((tile) => {
                  const Icon = tile.icon
                  const isActive = sortBy === tile.id
                  return (
                    <button
                      key={tile.id}
                      onClick={() => handleSort(tile.id)}
                      className={`p-3 rounded-lg border transition-all duration-200 text-center group ${
                        isActive
                          ? 'bg-blue-50 dark:bg-blue-900/30 border-blue-200 dark:border-blue-700 text-blue-700 dark:text-blue-300'
                          : 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
                      }`}
                      title={tile.description}
                    >
                      <div className="flex flex-col items-center gap-1.5">
                        <div className="relative">
                          <Icon className={`w-4 h-4 transition-colors ${
                            isActive ? 'text-blue-600 dark:text-blue-400' : 'text-gray-500 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-300'
                          }`} />
                          {isActive && (
                            <div className={`absolute -top-1 -right-1 w-2 h-2 rounded-full ${
                              sortOrder === 'desc' ? 'bg-blue-500' : 'bg-green-500'
                            }`}></div>
                          )}
                        </div>
                        <span className={`text-xs font-medium transition-colors ${
                          isActive ? 'text-blue-700 dark:text-blue-300' : 'text-gray-600 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-300'
                        }`}>
                          {tile.name}
                        </span>
                        {isActive && (
                          <div className={`text-xs font-medium ${
                            sortOrder === 'desc' ? 'text-blue-600 dark:text-blue-400' : 'text-green-600 dark:text-green-400'
                          }`}>
                            {sortOrder === 'desc' ? '↓' : '↑'}
                          </div>
                        )}
                      </div>
                    </button>
                  )
                })}
              </div>
            </div>
          )}

          {sortedRecords.length === 0 ? (
            <div className="text-center py-12">
              <FileText className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500 dark:text-gray-400">No records found matching your criteria</p>
            </div>
          ) : viewMode === 'list' ? (
            <div className="space-y-4">
                {sortedRecords.map((record) => (
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
                                <span className="text-xs px-2 py-1 rounded-full font-medium bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-400" title="Shared with providers">
                                  Shared
                                </span>
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
          ) : (
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {sortedRecords.map((record) => (
                  <div key={record.id} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200 cursor-pointer group"
                       onClick={() => setSelectedRecord(record)}>
                    <div className="flex flex-col h-full">
                      {/* Header */}
                      <div className="flex items-start justify-between mb-3">
                        <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                          <FileText className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                        </div>
                        <div className="flex items-center gap-1">
                          <span className={`text-xs px-2 py-1 rounded-full font-medium ${getPriorityColor(record.priority)}`}>
                            {record.priority === 'high' ? 'High' : 'Normal'}
                          </span>
                          {record.shared && (
                            <div className="w-2 h-2 bg-green-500 rounded-full" title="Shared with providers"></div>
                          )}
                        </div>
                      </div>
                      
                      {/* Title */}
                      <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-2 line-clamp-2">
                        {record.title}
                      </h3>
                      
                      {/* Meta Info */}
                      <div className="text-xs text-gray-600 dark:text-gray-400 space-y-1 mb-3">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {new Date(record.date).toLocaleDateString()}
                        </div>
                        <div className="flex items-center gap-1">
                          <User className="w-3 h-3" />
                          <span className="truncate">{record.doctor}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Building className="w-3 h-3" />
                          <span className="truncate">{record.facility}</span>
                        </div>
                      </div>
                      
                      {/* Tags */}
                      <div className="flex flex-wrap gap-1 mb-3">
                        <span className="inline-block px-2 py-1 bg-gray-100 dark:bg-gray-700 text-xs rounded-full text-gray-700 dark:text-gray-300">
                          {record.type}
                        </span>
                        <span className="inline-block px-2 py-1 bg-gray-100 dark:bg-gray-700 text-xs rounded-full text-gray-700 dark:text-gray-300">
                          {record.fileSize}
                        </span>
                      </div>
                      
                      {/* Summary */}
                      <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-3 flex-1">
                        {record.summary}
                      </p>
                      
                      {/* Actions */}
                      <div className="flex items-center justify-between mt-4 pt-3 border-t border-gray-200 dark:border-gray-700">
                        <div className="flex items-center gap-2">
                          <button className="p-1.5 text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded transition-colors" title="View Details">
                            <Eye className="w-3.5 h-3.5" />
                          </button>
                          <button className="p-1.5 text-gray-400 hover:text-green-600 dark:hover:text-green-400 hover:bg-green-50 dark:hover:bg-green-900/20 rounded transition-colors" title="Share">
                            <Share2 className="w-3.5 h-3.5" />
                          </button>
                          <button className="p-1.5 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 rounded transition-colors" title="Download">
                            <Download className="w-3.5 h-3.5" />
                          </button>
                        </div>
                        <span className="text-xs text-gray-500 dark:text-gray-400">
                          {record.attachments} files
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          )}
        </Card>
      </div>

      {/* Quick Actions */}
      <Card className="p-6">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
          Quick Actions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
          <button className="flex items-center gap-3 px-4 py-3 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors">
            <Upload className="w-5 h-5" />
            <div className="text-left">
              <div className="font-medium">Request Medical Records</div>
              <div className="text-xs opacity-70">From healthcare providers</div>
            </div>
          </button>
          <button className="flex items-center gap-3 px-4 py-3 bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-lg hover:bg-green-100 dark:hover:bg-green-900/50 transition-colors">
            <Share2 className="w-5 h-5" />
            <div className="text-left">
              <div className="font-medium">Share with Doctor</div>
              <div className="text-xs opacity-70">Grant access to records</div>
            </div>
          </button>
          <button className="flex items-center gap-3 px-4 py-3 bg-purple-50 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-lg hover:bg-purple-100 dark:hover:bg-purple-900/50 transition-colors">
            <Printer className="w-5 h-5" />
            <div className="text-left">
              <div className="font-medium">Print Summary</div>
              <div className="text-xs opacity-70">Generate PDF report</div>
            </div>
          </button>
          <button className="flex items-center gap-3 px-4 py-3 bg-orange-50 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 rounded-lg hover:bg-orange-100 dark:hover:bg-orange-900/50 transition-colors">
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