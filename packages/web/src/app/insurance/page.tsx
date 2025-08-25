'use client'

import { useState } from 'react'
import { Card } from '@/components/shared/Card'
import { Shield, FileText, DollarSign, Phone, CheckCircle, Clock, Search, Filter, Eye, Share2, Printer, Star, X, ChevronDown, Heart, Brain, Activity, Pill, User, MapPin, Download, Edit, AlertTriangle, CreditCard, Calendar, Building2, Users, Globe, HelpCircle, Settings, Smartphone, Mail } from 'lucide-react'

export default function Insurance() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedClaim, setSelectedClaim] = useState(null)
  const [selectedProvider, setSelectedProvider] = useState(null)
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const [activeTab, setActiveTab] = useState('overview')

  const insurancePlans = [
    {
      id: 1,
      name: 'HealthFirst Premium Plan',
      type: 'PPO',
      provider: 'HealthFirst Insurance',
      status: 'Active',
      effectiveDate: '2024-01-01',
      expirationDate: '2024-12-31',
      groupNumber: 'GRP-789456',
      policyNumber: 'HF-123456789',
      memberID: 'MEM-987654321',
      deductible: { individual: 1500, family: 3000, met: 450 },
      outOfPocketMax: { individual: 6000, family: 12000, met: 900 },
      monthlyPremium: 425.50,
      employerContribution: 320.00,
      employeeContribution: 105.50,
      coverageLevel: 'Employee + Spouse',
      network: 'National Network Plus'
    }
  ]

  const claims = [
    {
      id: 1,
      claimNumber: 'CLM-2024-001234',
      service: 'Annual Physical Exam',
      serviceCode: 'G0438',
      provider: 'Central Medical Center',
      providerNPI: '1234567890',
      date: '2024-01-15',
      submittedDate: '2024-01-16',
      processedDate: '2024-01-18',
      amount: 350.00,
      covered: 280.00,
      copay: 25.00,
      deductible: 45.00,
      patientResponsibility: 70.00,
      status: 'Approved',
      category: 'preventive',
      explanation: 'Preventive care - covered at 100% after copay',
      denialReason: null,
      appealDeadline: null,
      eob: true
    },
    {
      id: 2,
      claimNumber: 'CLM-2024-001235',
      service: 'Blood Work Panel - Comprehensive Metabolic',
      serviceCode: '80053',
      provider: 'Lab Services Inc',
      providerNPI: '9876543210',
      date: '2024-01-10',
      submittedDate: '2024-01-11',
      processedDate: '2024-01-13',
      amount: 180.00,
      covered: 144.00,
      copay: 0.00,
      deductible: 36.00,
      patientResponsibility: 36.00,
      status: 'Approved',
      category: 'diagnostic',
      explanation: 'Laboratory services - 80% coverage after deductible',
      denialReason: null,
      appealDeadline: null,
      eob: true
    },
    {
      id: 3,
      claimNumber: 'CLM-2024-001236',
      service: 'Prescription Medication - Lisinopril',
      serviceCode: 'NDC-12345',
      provider: 'Downtown Pharmacy',
      providerNPI: '5555555555',
      date: '2024-01-05',
      submittedDate: '2024-01-06',
      processedDate: null,
      amount: 85.00,
      covered: 68.00,
      copay: 10.00,
      deductible: 0.00,
      patientResponsibility: 17.00,
      status: 'Processing',
      category: 'pharmacy',
      explanation: 'Generic medication - Tier 1 formulary',
      denialReason: null,
      appealDeadline: null,
      eob: false
    },
    {
      id: 4,
      claimNumber: 'CLM-2024-001237',
      service: 'Cardiology Consultation',
      serviceCode: '99243',
      provider: 'Heart Care Specialists',
      providerNPI: '1111222233',
      date: '2023-12-20',
      submittedDate: '2023-12-21',
      processedDate: '2023-12-28',
      amount: 450.00,
      covered: 315.00,
      copay: 50.00,
      deductible: 85.00,
      patientResponsibility: 135.00,
      status: 'Approved',
      category: 'specialist',
      explanation: 'Specialist consultation - 70% coverage after copay and deductible',
      denialReason: null,
      appealDeadline: null,
      eob: true
    },
    {
      id: 5,
      claimNumber: 'CLM-2024-001238',
      service: 'MRI Brain Scan with Contrast',
      serviceCode: '70553',
      provider: 'Advanced Imaging Center',
      providerNPI: '4444555566',
      date: '2023-11-15',
      submittedDate: '2023-11-16',
      processedDate: '2023-11-20',
      amount: 2500.00,
      covered: 0.00,
      copay: 0.00,
      deductible: 0.00,
      patientResponsibility: 2500.00,
      status: 'Denied',
      category: 'imaging',
      explanation: 'Prior authorization required for advanced imaging',
      denialReason: 'Lack of prior authorization',
      appealDeadline: '2024-02-20',
      eob: true
    }
  ]

  const providers = [
    {
      id: 1,
      name: 'Dr. Sarah Smith',
      specialty: 'Family Medicine',
      facility: 'Central Medical Center',
      address: '123 Main St, Anytown, ST 12345',
      phone: '(555) 123-4567',
      network: 'In-Network',
      tier: 'Preferred',
      distance: '2.3 miles',
      rating: 4.8,
      acceptingPatients: true,
      languages: ['English', 'Spanish'],
      subspecialties: ['Preventive Care', 'Chronic Disease Management']
    },
    {
      id: 2,
      name: 'Dr. Michael Johnson',
      specialty: 'Cardiology',
      facility: 'Heart Care Specialists',
      address: '456 Oak Ave, Anytown, ST 12345',
      phone: '(555) 987-6543',
      network: 'In-Network',
      tier: 'Standard',
      distance: '4.1 miles',
      rating: 4.9,
      acceptingPatients: true,
      languages: ['English'],
      subspecialties: ['Interventional Cardiology', 'Heart Failure']
    },
    {
      id: 3,
      name: 'Dr. Amanda Rodriguez',
      specialty: 'Dermatology',
      facility: 'Skin Health Clinic',
      address: '789 Pine St, Anytown, ST 12345',
      phone: '(555) 456-7890',
      network: 'Out-of-Network',
      tier: 'Non-Participating',
      distance: '6.8 miles',
      rating: 4.7,
      acceptingPatients: false,
      languages: ['English', 'Portuguese'],
      subspecialties: ['Skin Cancer', 'Cosmetic Dermatology']
    }
  ]

  const benefits = [
    {
      category: 'Preventive Care',
      services: [
        { name: 'Annual Physical', coverage: '100%', copay: '$0', notes: 'No deductible' },
        { name: 'Immunizations', coverage: '100%', copay: '$0', notes: 'No deductible' },
        { name: 'Cancer Screenings', coverage: '100%', copay: '$0', notes: 'No deductible' }
      ]
    },
    {
      category: 'Primary Care',
      services: [
        { name: 'Office Visit', coverage: '90%', copay: '$25', notes: 'After copay' },
        { name: 'Urgent Care', coverage: '80%', copay: '$40', notes: 'After copay' },
        { name: 'Telehealth', coverage: '90%', copay: '$15', notes: 'After copay' }
      ]
    },
    {
      category: 'Specialist Care',
      services: [
        { name: 'Specialist Visit', coverage: '70%', copay: '$50', notes: 'After copay and deductible' },
        { name: 'Mental Health', coverage: '80%', copay: '$30', notes: 'After copay' },
        { name: 'Physical Therapy', coverage: '70%', copay: '$35', notes: 'After copay, 20 visits/year' }
      ]
    },
    {
      category: 'Emergency & Hospital',
      services: [
        { name: 'Emergency Room', coverage: '80%', copay: '$200', notes: 'After copay and deductible' },
        { name: 'Inpatient Hospital', coverage: '80%', copay: '$500/day', notes: 'After copay and deductible' },
        { name: 'Ambulance', coverage: '80%', copay: '$100', notes: 'After copay and deductible' }
      ]
    },
    {
      category: 'Prescription Drugs',
      services: [
        { name: 'Generic (Tier 1)', coverage: '90%', copay: '$10', notes: 'After copay' },
        { name: 'Brand Name (Tier 2)', coverage: '80%', copay: '$40', notes: 'After copay' },
        { name: 'Specialty (Tier 3)', coverage: '60%', copay: '$80', notes: 'After copay and deductible' }
      ]
    }
  ]

  const categories = [
    { id: 'all', name: 'All Claims', count: claims.length, icon: FileText },
    { id: 'approved', name: 'Approved', count: claims.filter(c => c.status === 'Approved').length, icon: CheckCircle },
    { id: 'processing', name: 'Processing', count: claims.filter(c => c.status === 'Processing').length, icon: Clock },
    { id: 'denied', name: 'Denied', count: claims.filter(c => c.status === 'Denied').length, icon: AlertTriangle },
    { id: 'preventive', name: 'Preventive Care', count: claims.filter(c => c.category === 'preventive').length, icon: Heart },
    { id: 'specialist', name: 'Specialist', count: claims.filter(c => c.category === 'specialist').length, icon: User },
    { id: 'pharmacy', name: 'Pharmacy', count: claims.filter(c => c.category === 'pharmacy').length, icon: Pill }
  ]

  const filteredClaims = claims.filter(claim => {
    const matchesSearch = claim.service.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         claim.provider.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         claim.claimNumber.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || 
                           claim.status.toLowerCase() === selectedCategory ||
                           claim.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const getStatusColor = (status) => {
    switch (status) {
      case 'Approved': return 'text-green-700 bg-green-100 dark:bg-green-900/20 dark:text-green-400'
      case 'Processing': return 'text-orange-700 bg-orange-100 dark:bg-orange-900/20 dark:text-orange-400'
      case 'Denied': return 'text-red-700 bg-red-100 dark:bg-red-900/20 dark:text-red-400'
      default: return 'text-gray-700 bg-gray-100 dark:bg-gray-700 dark:text-gray-400'
    }
  }

  const getCategoryColor = (category) => {
    switch (category) {
      case 'preventive': return 'border-l-green-500 bg-green-50/30 dark:bg-green-900/10'
      case 'specialist': return 'border-l-blue-500 bg-blue-50/30 dark:bg-blue-900/10'
      case 'pharmacy': return 'border-l-purple-500 bg-purple-50/30 dark:bg-purple-900/10'
      case 'imaging': return 'border-l-orange-500 bg-orange-50/30 dark:bg-orange-900/10'
      case 'diagnostic': return 'border-l-yellow-500 bg-yellow-50/30 dark:bg-yellow-900/10'
      default: return 'border-l-gray-500 bg-gray-50/30 dark:bg-gray-900/10'
    }
  }

  const currentPlan = insurancePlans[0]

  return (
    <div className="p-6 space-y-6">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Insurance Dashboard
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            {currentPlan.name} • Member ID: {currentPlan.memberID} • Active until {new Date(currentPlan.expirationDate).toLocaleDateString()}
          </p>
        </div>
        <div className="flex gap-3">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors">
            <CreditCard className="w-4 h-4" />
            View ID Card
          </button>
          <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors">
            <FileText className="w-4 h-4" />
            Submit Claim
          </button>
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors">
            <Phone className="w-4 h-4" />
            Contact Support
          </button>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="border-b border-gray-200 dark:border-gray-700">
        <nav className="flex space-x-8">
          {[
            { id: 'overview', name: 'Overview', icon: Shield },
            { id: 'claims', name: 'Claims', icon: FileText },
            { id: 'benefits', name: 'Benefits', icon: DollarSign },
            { id: 'providers', name: 'Find Providers', icon: MapPin }
          ].map((tab) => {
            const Icon = tab.icon
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 py-2 px-1 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === tab.id
                    ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                    : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
                }`}
              >
                <Icon className="w-4 h-4" />
                {tab.name}
              </button>
            )
          })}
        </nav>
      </div>

      {/* Tab Content */}
      {activeTab === 'overview' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Plan Information */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="p-6">
              <div className="flex items-center gap-3 mb-6">
                <Shield className="w-6 h-6 text-blue-500" />
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Plan Information
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-gray-600 dark:text-gray-400">Insurance Provider</label>
                    <p className="text-lg font-semibold text-gray-900 dark:text-white">{currentPlan.provider}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-600 dark:text-gray-400">Plan Name</label>
                    <p className="text-lg font-semibold text-gray-900 dark:text-white">{currentPlan.name}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-600 dark:text-gray-400">Plan Type</label>
                    <p className="text-lg font-semibold text-gray-900 dark:text-white">{currentPlan.type}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-600 dark:text-gray-400">Policy Number</label>
                    <p className="text-lg font-semibold text-gray-900 dark:text-white">{currentPlan.policyNumber}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-600 dark:text-gray-400">Group Number</label>
                    <p className="text-lg font-semibold text-gray-900 dark:text-white">{currentPlan.groupNumber}</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-gray-600 dark:text-gray-400">Member ID</label>
                    <p className="text-lg font-semibold text-gray-900 dark:text-white">{currentPlan.memberID}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-600 dark:text-gray-400">Coverage Level</label>
                    <p className="text-lg font-semibold text-gray-900 dark:text-white">{currentPlan.coverageLevel}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-600 dark:text-gray-400">Network</label>
                    <p className="text-lg font-semibold text-gray-900 dark:text-white">{currentPlan.network}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-600 dark:text-gray-400">Effective Date</label>
                    <p className="text-lg font-semibold text-gray-900 dark:text-white">{new Date(currentPlan.effectiveDate).toLocaleDateString()}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-600 dark:text-gray-400">Plan Status</label>
                    <span className="inline-flex px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400">
                      {currentPlan.status}
                    </span>
                  </div>
                </div>
              </div>
            </Card>

            {/* Financial Summary */}
            <Card className="p-6">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                Financial Summary
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <label className="text-sm font-medium text-gray-600 dark:text-gray-400">Individual Deductible</label>
                      <span className="text-lg font-bold text-gray-900 dark:text-white">${currentPlan.deductible.individual.toLocaleString()}</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                      <div 
                        className="bg-blue-500 h-3 rounded-full transition-all duration-500"
                        style={{ width: `${(currentPlan.deductible.met / currentPlan.deductible.individual) * 100}%` }}
                      ></div>
                    </div>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                      ${currentPlan.deductible.met.toLocaleString()} of ${currentPlan.deductible.individual.toLocaleString()} met ({Math.round((currentPlan.deductible.met / currentPlan.deductible.individual) * 100)}%)
                    </p>
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <label className="text-sm font-medium text-gray-600 dark:text-gray-400">Out-of-Pocket Maximum</label>
                      <span className="text-lg font-bold text-gray-900 dark:text-white">${currentPlan.outOfPocketMax.individual.toLocaleString()}</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                      <div 
                        className="bg-green-500 h-3 rounded-full transition-all duration-500"
                        style={{ width: `${(currentPlan.outOfPocketMax.met / currentPlan.outOfPocketMax.individual) * 100}%` }}
                      ></div>
                    </div>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                      ${currentPlan.outOfPocketMax.met.toLocaleString()} of ${currentPlan.outOfPocketMax.individual.toLocaleString()} reached ({Math.round((currentPlan.outOfPocketMax.met / currentPlan.outOfPocketMax.individual) * 100)}%)
                    </p>
                  </div>
                </div>
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                  <h3 className="font-semibold text-blue-900 dark:text-blue-300 mb-3">Monthly Premium Breakdown</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Total Premium:</span>
                      <span className="font-medium text-gray-900 dark:text-white">${currentPlan.monthlyPremium.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Employer Contribution:</span>
                      <span className="font-medium text-green-600">${currentPlan.employerContribution.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between border-t border-blue-200 dark:border-blue-700 pt-2">
                      <span className="text-gray-600 dark:text-gray-400">Your Contribution:</span>
                      <span className="font-bold text-blue-600">${currentPlan.employeeContribution.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Sidebar - Quick Actions & Alerts */}
          <div className="space-y-6">
            <Card className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <AlertTriangle className="w-6 h-6 text-orange-500" />
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Important Alerts
                </h2>
              </div>
              <div className="space-y-3">
                <div className="p-3 bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-700 rounded-lg">
                  <div className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-red-800 dark:text-red-300">Denied Claim - Appeal Deadline</p>
                      <p className="text-xs text-red-700 dark:text-red-400 mt-1">MRI Brain Scan appeal due by Feb 20, 2024</p>
                    </div>
                  </div>
                </div>
                <div className="p-3 bg-yellow-50 dark:bg-yellow-900/30 border border-yellow-200 dark:border-yellow-700 rounded-lg">
                  <div className="flex items-start gap-2">
                    <Clock className="w-4 h-4 text-yellow-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-yellow-800 dark:text-yellow-300">Claims Processing</p>
                      <p className="text-xs text-yellow-700 dark:text-yellow-400 mt-1">1 claim currently being processed</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Quick Actions
              </h2>
              <div className="space-y-3">
                <button className="w-full flex items-center gap-3 px-4 py-3 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors">
                  <CreditCard className="w-5 h-5" />
                  <div className="text-left">
                    <div className="font-medium">View ID Card</div>
                    <div className="text-xs opacity-70">Digital insurance card</div>
                  </div>
                </button>
                <button className="w-full flex items-center gap-3 px-4 py-3 bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-lg hover:bg-green-100 dark:hover:bg-green-900/50 transition-colors">
                  <MapPin className="w-5 h-5" />
                  <div className="text-left">
                    <div className="font-medium">Find Provider</div>
                    <div className="text-xs opacity-70">Search network providers</div>
                  </div>
                </button>
                <button className="w-full flex items-center gap-3 px-4 py-3 bg-purple-50 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-lg hover:bg-purple-100 dark:hover:bg-purple-900/50 transition-colors">
                  <Shield className="w-5 h-5" />
                  <div className="text-left">
                    <div className="font-medium">Check Eligibility</div>
                    <div className="text-xs opacity-70">Verify coverage status</div>
                  </div>
                </button>
                <button className="w-full flex items-center gap-3 px-4 py-3 bg-orange-50 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 rounded-lg hover:bg-orange-100 dark:hover:bg-orange-900/50 transition-colors">
                  <FileText className="w-5 h-5" />
                  <div className="text-left">
                    <div className="font-medium">Submit Pre-Auth</div>
                    <div className="text-xs opacity-70">Request authorization</div>
                  </div>
                </button>
              </div>

              {/* Contact Information */}
              <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">Contact Information</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-gray-500" />
                    <span className="text-gray-600 dark:text-gray-400">Customer Service:</span>
                    <span className="font-medium text-gray-900 dark:text-white">(800) 555-HEALTH</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Globe className="w-4 h-4 text-gray-500" />
                    <span className="text-gray-600 dark:text-gray-400">Website:</span>
                    <span className="font-medium text-blue-600">healthfirst.com</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Smartphone className="w-4 h-4 text-gray-500" />
                    <span className="text-gray-600 dark:text-gray-400">Mobile App:</span>
                    <span className="font-medium text-gray-900 dark:text-white">HealthFirst Mobile</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      )}
      {/* Claims Tab */}
      {activeTab === 'claims' && (
        <div className="space-y-6">
          {/* Search and Filter Bar */}
          <Card className="p-4">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search claims by service, provider, or claim number..."
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
                    <option>All Statuses</option>
                    <option>Approved</option>
                    <option>Processing</option>
                    <option>Denied</option>
                  </select>
                  <select className="border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 bg-white dark:bg-gray-700 text-sm">
                    <option>All Categories</option>
                    <option>Preventive Care</option>
                    <option>Specialist</option>
                    <option>Pharmacy</option>
                  </select>
                  <select className="border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 bg-white dark:bg-gray-700 text-sm">
                    <option>All Amounts</option>
                    <option>Under $100</option>
                    <option>$100 - $500</option>
                    <option>Over $500</option>
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

          {/* Claims List */}
          <Card className="p-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {categories.find(c => c.id === selectedCategory)?.name || 'Claims'}
                </h2>
              </div>
              <div className="flex items-center gap-2">
                <select className="border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 bg-white dark:bg-gray-700 text-sm">
                  <option>Sort by Date</option>
                  <option>Sort by Amount</option>
                  <option>Sort by Status</option>
                  <option>Sort by Provider</option>
                </select>
              </div>
            </div>

            {filteredClaims.length === 0 ? (
              <div className="text-center py-12">
                <FileText className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-500 dark:text-gray-400">No claims found matching your criteria</p>
              </div>
            ) : (
              <div className="space-y-4">
                {filteredClaims.map((claim) => (
                  <div key={claim.id} className={`border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200 cursor-pointer group border-l-4 ${getCategoryColor(claim.category)}`}
                       onClick={() => setSelectedClaim(claim)}>
                        <div className="flex items-start justify-between">
                          <div className="flex items-start gap-4 flex-1">
                            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                              <FileText className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-start justify-between mb-2">
                                <div>
                                  <h3 className="font-bold text-lg text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                    {claim.service}
                                  </h3>
                                  <p className="text-sm text-gray-600 dark:text-gray-400">
                                    {claim.provider} • Claim #{claim.claimNumber}
                                  </p>
                                </div>
                                <div className="flex items-center gap-2 ml-4">
                                  <span className={`text-xs px-2 py-1 rounded-full font-medium ${getStatusColor(claim.status)}`}>
                                    {claim.status}
                                  </span>
                                  {claim.status === 'Denied' && claim.appealDeadline && (
                                    <AlertTriangle className="w-4 h-4 text-red-500" title="Appeal Deadline" />
                                  )}
                                </div>
                              </div>
                              
                              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-600 dark:text-gray-400 mb-3">
                                <div>
                                  <span className="font-medium">Service Date:</span>
                                  <p className="font-medium text-gray-900 dark:text-white">{new Date(claim.date).toLocaleDateString()}</p>
                                </div>
                                <div>
                                  <span className="font-medium">Billed Amount:</span>
                                  <p className="font-medium text-gray-900 dark:text-white">${claim.amount.toFixed(2)}</p>
                                </div>
                                <div>
                                  <span className="font-medium">Covered Amount:</span>
                                  <p className="font-medium text-green-600">${claim.covered.toFixed(2)}</p>
                                </div>
                                <div>
                                  <span className="font-medium">Your Cost:</span>
                                  <p className={`font-bold ${claim.patientResponsibility > 0 ? 'text-orange-600' : 'text-green-600'}`}>
                                    ${claim.patientResponsibility.toFixed(2)}
                                  </p>
                                </div>
                              </div>
                              
                              <p className="text-sm text-gray-600 dark:text-gray-400">
                                {claim.explanation}
                              </p>
                            </div>
                          </div>
                          
                          <div className="flex items-center gap-2 ml-4">
                            <button className="p-2 text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-colors" title="View Details">
                              <Eye className="w-4 h-4" />
                            </button>
                            {claim.eob && (
                              <button className="p-2 text-gray-400 hover:text-green-600 dark:hover:text-green-400 hover:bg-green-50 dark:hover:bg-green-900/20 rounded-lg transition-colors" title="Download EOB">
                                <Download className="w-4 h-4" />
                              </button>
                            )}
                          </div>
                        </div>
                      </div>
                  ))}
                </div>
              )}
            </Card>
        </div>
      )}

      {/* Benefits Tab */}
      {activeTab === 'benefits' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 gap-6">
            {benefits.map((benefitCategory) => (
              <Card key={benefitCategory.category} className="p-6">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  {benefitCategory.category}
                </h2>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                    <thead className="bg-gray-50 dark:bg-gray-800">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Service</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Coverage</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Copay</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Notes</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
                      {benefitCategory.services.map((service, index) => (
                        <tr key={index} className="hover:bg-gray-50 dark:hover:bg-gray-800">
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                            {service.name}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                            <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400">
                              {service.coverage}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-600">
                            {service.copay}
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">
                            {service.notes}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* Providers Tab */}
      {activeTab === 'providers' && (
        <div className="space-y-6">
          <Card className="p-4">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search providers by name, specialty, or location..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div className="flex gap-2">
                <select className="border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 bg-white dark:bg-gray-700 text-sm">
                  <option>All Specialties</option>
                  <option>Family Medicine</option>
                  <option>Cardiology</option>
                  <option>Dermatology</option>
                </select>
                <select className="border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 bg-white dark:bg-gray-700 text-sm">
                  <option>All Networks</option>
                  <option>In-Network</option>
                  <option>Out-of-Network</option>
                </select>
              </div>
            </div>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {providers.map((provider) => (
              <Card key={provider.id} className="p-6 hover:shadow-lg transition-shadow cursor-pointer"
                    onClick={() => setSelectedProvider(provider)}>
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-bold text-lg text-gray-900 dark:text-white">{provider.name}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{provider.specialty}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{provider.facility}</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium">{provider.rating}</span>
                  </div>
                </div>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm">
                    <MapPin className="w-4 h-4 text-gray-500" />
                    <span className="text-gray-600 dark:text-gray-400">{provider.distance}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Phone className="w-4 h-4 text-gray-500" />
                    <span className="text-gray-600 dark:text-gray-400">{provider.phone}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Shield className="w-4 h-4 text-gray-500" />
                    <span className={`font-medium ${
                      provider.network === 'In-Network' ? 'text-green-600' : 'text-orange-600'
                    }`}>
                      {provider.network} - {provider.tier}
                    </span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                    provider.acceptingPatients 
                      ? 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400'
                      : 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400'
                  }`}>
                    {provider.acceptingPatients ? 'Accepting Patients' : 'Not Accepting'}
                  </span>
                  <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                    View Details
                  </button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}