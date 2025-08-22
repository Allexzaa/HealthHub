'use client'

import { Card } from '@/components/shared/Card'
import { Shield, FileText, DollarSign, Phone, CheckCircle, Clock } from 'lucide-react'

export default function Insurance() {
  const claims = [
    {
      id: 1,
      service: 'Annual Physical Exam',
      provider: 'Central Medical Center',
      date: '2024-01-15',
      amount: '$350.00',
      covered: '$280.00',
      status: 'Approved'
    },
    {
      id: 2,
      service: 'Blood Work Panel',
      provider: 'Lab Services Inc',
      date: '2024-01-10',
      amount: '$180.00',
      covered: '$144.00',
      status: 'Approved'
    },
    {
      id: 3,
      service: 'Prescription Medication',
      provider: 'Downtown Pharmacy',
      date: '2024-01-05',
      amount: '$85.00',
      covered: '$68.00',
      status: 'Processing'
    }
  ]

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Insurance
        </h1>
        <div className="flex gap-3">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2">
            <FileText className="w-4 h-4" />
            Submit Claim
          </button>
          <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg flex items-center gap-2">
            <Phone className="w-4 h-4" />
            Contact Support
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card className="p-6 mb-6">
            <div className="flex items-center gap-3 mb-6">
              <Shield className="w-6 h-6 text-blue-500" />
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                Insurance Information
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-gray-600 dark:text-gray-400">Provider</label>
                  <p className="text-lg font-semibold text-gray-900 dark:text-white">HealthFirst Insurance</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-600 dark:text-gray-400">Plan Name</label>
                  <p className="text-lg font-semibold text-gray-900 dark:text-white">Premium Health Plan</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-600 dark:text-gray-400">Policy Number</label>
                  <p className="text-lg font-semibold text-gray-900 dark:text-white">HF-123456789</p>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-gray-600 dark:text-gray-400">Deductible</label>
                  <p className="text-lg font-semibold text-gray-900 dark:text-white">$1,500</p>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mt-1">
                    <div className="bg-blue-500 h-2 rounded-full w-1/3"></div>
                  </div>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">$450 of $1,500 met</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-600 dark:text-gray-400">Out-of-Pocket Max</label>
                  <p className="text-lg font-semibold text-gray-900 dark:text-white">$6,000</p>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mt-1">
                    <div className="bg-green-500 h-2 rounded-full w-1/6"></div>
                  </div>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">$900 of $6,000 reached</p>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
              Recent Claims
            </h2>
            <div className="space-y-4">
              {claims.map((claim) => (
                <div key={claim.id} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">{claim.service}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{claim.provider}</p>
                    </div>
                    <span className={`px-2 py-1 text-xs rounded-full flex items-center gap-1 ${
                      claim.status === 'Approved' 
                        ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-300'
                        : 'bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-300'
                    }`}>
                      {claim.status === 'Approved' ? (
                        <>
                          <CheckCircle className="w-3 h-3" />
                          {claim.status}
                        </>
                      ) : (
                        <>
                          <Clock className="w-3 h-3" />
                          {claim.status}
                        </>
                      )}
                    </span>
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div>
                      <span className="text-gray-600 dark:text-gray-400">Date:</span>
                      <p className="font-medium text-gray-900 dark:text-white">{claim.date}</p>
                    </div>
                    <div>
                      <span className="text-gray-600 dark:text-gray-400">Billed:</span>
                      <p className="font-medium text-gray-900 dark:text-white">{claim.amount}</p>
                    </div>
                    <div>
                      <span className="text-gray-600 dark:text-gray-400">Covered:</span>
                      <p className="font-medium text-green-600">{claim.covered}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        <div className="space-y-6">
          <Card className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <DollarSign className="w-6 h-6 text-green-500" />
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                Coverage Benefits
              </h2>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between items-center pb-2 border-b border-gray-200 dark:border-gray-700">
                <span className="font-medium">Primary Care</span>
                <span className="text-blue-600">$25</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-gray-200 dark:border-gray-700">
                <span className="font-medium">Specialist</span>
                <span className="text-blue-600">$50</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-gray-200 dark:border-gray-700">
                <span className="font-medium">Emergency Room</span>
                <span className="text-blue-600">$200</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-medium">Prescription</span>
                <span className="text-blue-600">$10-$40</span>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Quick Actions
            </h2>
            <div className="space-y-3">
              <button className="w-full text-left px-4 py-3 bg-blue-50 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-800 transition-colors">
                View ID Card
              </button>
              <button className="w-full text-left px-4 py-3 bg-green-50 dark:bg-green-900 text-green-700 dark:text-green-300 rounded-lg hover:bg-green-100 dark:hover:bg-green-800 transition-colors">
                Find Provider
              </button>
              <button className="w-full text-left px-4 py-3 bg-purple-50 dark:bg-purple-900 text-purple-700 dark:text-purple-300 rounded-lg hover:bg-purple-100 dark:hover:bg-purple-800 transition-colors">
                Check Eligibility
              </button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}