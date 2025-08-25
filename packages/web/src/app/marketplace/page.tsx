'use client'

import { useState } from 'react'
import { Card } from '@/components/shared/Card'
import { ShoppingCart, Star, Filter, Search, Heart, Truck, Plus, Minus, X, ChevronDown, Shield, Clock, Zap, User, CreditCard, Package, Gift, TrendingUp, Award, CheckCircle, AlertCircle, Eye, Share2, RefreshCw, Pill, Activity, Brain, Stethoscope, Dumbbell, Smile, MapPin, Phone, Calendar, Globe, UserCheck, GraduationCap, Building2 } from 'lucide-react'

export default function Marketplace() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [cartItems, setCartItems] = useState([])
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const [priceRange, setPriceRange] = useState([0, 500])
  const [sortBy, setSortBy] = useState('featured')
  const [viewMode, setViewMode] = useState('grid')
  const [wishlist, setWishlist] = useState([])

  const categories = [
    { id: 'all', name: 'All Categories', count: 756, icon: Package, color: 'text-gray-600' },
    { id: 'products', name: 'Health Products', count: 378, icon: ShoppingCart, color: 'text-blue-600' },
    { id: 'providers', name: 'Healthcare Providers', count: 245, icon: User, color: 'text-green-600' },
    { id: 'hospitals', name: 'Hospitals & Clinics', count: 89, icon: Building2, color: 'text-red-600' },
    { id: 'specialists', name: 'Specialists', count: 134, icon: Stethoscope, color: 'text-purple-600' },
    { id: 'dentists', name: 'Dental Care', count: 67, icon: Smile, color: 'text-pink-600' },
    { id: 'pharmacies', name: 'Pharmacies', count: 78, icon: Pill, color: 'text-orange-600' },
    { id: 'urgent-care', name: 'Urgent Care', count: 45, icon: Clock, color: 'text-indigo-600' },
    { id: 'wellness', name: 'Wellness Centers', count: 56, icon: Heart, color: 'text-teal-600' }
  ]

  const products = [
    {
      id: 1,
      name: 'Digital Blood Pressure Monitor with Bluetooth',
      brand: 'HealthTech Pro',
      price: 89.99,
      originalPrice: 109.99,
      rating: 4.8,
      reviews: 156,
      image: '🩺',
      category: 'medical-devices',
      shipping: 'Free shipping',
      inStock: true,
      stockCount: 25,
      description: 'Clinically validated blood pressure monitor with smartphone connectivity and unlimited cloud storage.',
      features: ['FDA Approved', 'Bluetooth Connectivity', 'Large Display', '2-Year Warranty'],
      insuranceCovered: true,
      prescriptionRequired: false,
      fastShipping: true,
      bestseller: true,
      savings: 18,
      deliveryTime: '1-2 days'
    },
    {
      id: 2,
      name: 'Omega-3 Fish Oil Capsules - Triple Strength',
      brand: 'Pure Wellness',
      price: 24.99,
      originalPrice: 29.99,
      rating: 4.6,
      reviews: 289,
      image: '💊',
      category: 'supplements',
      shipping: 'Free shipping',
      inStock: true,
      stockCount: 150,
      description: '1000mg triple-strength fish oil with EPA and DHA for heart and brain health.',
      features: ['Third-Party Tested', 'Mercury-Free', '90 Capsules', 'Enteric Coated'],
      insuranceCovered: false,
      prescriptionRequired: false,
      fastShipping: true,
      bestseller: false,
      savings: 17,
      deliveryTime: '2-3 days'
    },
    {
      id: 3,
      name: 'Smart Fitness Tracker with Health Monitoring',
      brand: 'ActiveLife',
      price: 149.99,
      originalPrice: 199.99,
      rating: 4.7,
      reviews: 534,
      image: '⌚',
      category: 'fitness',
      shipping: 'Free shipping',
      inStock: true,
      stockCount: 42,
      description: 'Advanced fitness tracker with heart rate, sleep, and stress monitoring plus GPS.',
      features: ['Heart Rate Monitor', 'GPS Tracking', '7-Day Battery', 'Water Resistant'],
      insuranceCovered: true,
      prescriptionRequired: false,
      fastShipping: true,
      bestseller: true,
      savings: 25,
      deliveryTime: '1-2 days'
    },
    {
      id: 4,
      name: 'Meditation & Sleep App Premium Subscription',
      brand: 'MindfulHealth',
      price: 9.99,
      originalPrice: 14.99,
      rating: 4.9,
      reviews: 1267,
      image: '🧘',
      category: 'mental-health',
      shipping: 'Digital delivery',
      inStock: true,
      stockCount: 999,
      description: 'Premium meditation app with guided sessions, sleep stories, and wellness tracking.',
      features: ['500+ Meditations', 'Sleep Stories', 'Progress Tracking', 'Offline Access'],
      insuranceCovered: true,
      prescriptionRequired: false,
      fastShipping: false,
      bestseller: true,
      savings: 33,
      deliveryTime: 'Instant'
    },
    {
      id: 5,
      name: 'Ergonomic Lumbar Support Cushion - Memory Foam',
      brand: 'ComfortCare',
      price: 39.99,
      originalPrice: 49.99,
      rating: 4.5,
      reviews: 178,
      image: '🪑',
      category: 'personal-care',
      shipping: 'Free shipping',
      inStock: true,
      stockCount: 67,
      description: 'Premium memory foam lumbar support with breathable mesh cover for office chairs.',
      features: ['Memory Foam', 'Breathable Mesh', 'Adjustable Straps', '30-Day Trial'],
      insuranceCovered: false,
      prescriptionRequired: false,
      fastShipping: true,
      bestseller: false,
      savings: 20,
      deliveryTime: '2-3 days'
    },
    {
      id: 6,
      name: 'Adjustable Walking Cane with LED Light',
      brand: 'MobilityPlus',
      price: 34.99,
      originalPrice: 44.99,
      rating: 4.4,
      reviews: 95,
      image: '🦯',
      category: 'mobility',
      shipping: 'Free shipping',
      inStock: true,
      stockCount: 33,
      description: 'Lightweight aluminum walking cane with built-in LED light and ergonomic grip.',
      features: ['LED Light', 'Adjustable Height', 'Ergonomic Grip', 'Lightweight'],
      insuranceCovered: true,
      prescriptionRequired: false,
      fastShipping: true,
      bestseller: false,
      savings: 22,
      deliveryTime: '1-2 days'
    },
    {
      id: 7,
      name: 'Prescription Lisinopril 10mg - 90 Tablets',
      brand: 'Generic Pharma',
      price: 15.99,
      originalPrice: 45.99,
      rating: 4.3,
      reviews: 67,
      image: '💊',
      category: 'prescriptions',
      shipping: 'Free shipping',
      inStock: true,
      stockCount: 200,
      description: 'Generic Lisinopril for blood pressure management - 90-day supply.',
      features: ['FDA Approved', '90-Day Supply', 'Generic Version', 'Auto-Refill Available'],
      insuranceCovered: true,
      prescriptionRequired: true,
      fastShipping: true,
      bestseller: false,
      savings: 65,
      deliveryTime: '2-3 days'
    },
    {
      id: 8,
      name: 'Home Blood Glucose Test Strips - 100 Count',
      brand: 'DiabetesCare',
      price: 29.99,
      originalPrice: 39.99,
      rating: 4.6,
      reviews: 234,
      image: '🩸',
      category: 'medical-devices',
      shipping: 'Free shipping',
      inStock: true,
      stockCount: 89,
      description: 'Accurate glucose test strips compatible with most meters - 100 count.',
      features: ['High Accuracy', 'Fast Results', 'Large Sample Size', 'Long Shelf Life'],
      insuranceCovered: true,
      prescriptionRequired: false,
      fastShipping: true,
      bestseller: false,
      savings: 25,
      deliveryTime: '1-2 days'
    }
  ]

  const providers = [
    {
      id: 101,
      name: 'Dr. Sarah Johnson, MD',
      type: 'provider',
      category: 'providers',
      specialties: ['Family Medicine', 'Preventive Care'],
      facility: 'Metro Family Health Center',
      rating: 4.9,
      reviews: 234,
      image: '👩‍⚕️',
      address: '123 Main St, Anytown, ST 12345',
      phone: '(555) 123-4567',
      acceptingPatients: true,
      insuranceAccepted: ['Aetna', 'Blue Cross', 'Cigna', 'UnitedHealth'],
      languages: ['English', 'Spanish'],
      experience: '15 years',
      education: 'Harvard Medical School',
      nextAvailable: '2024-02-05',
      price: 0, // For sorting compatibility
      consultationFee: 'Covered by insurance',
      inNetwork: true,
      telehealth: true,
      emergencyServices: false,
      description: 'Board-certified family physician specializing in comprehensive primary care and preventive medicine.',
      services: ['Annual Physicals', 'Chronic Disease Management', 'Vaccinations', 'Health Screenings']
    },
    {
      id: 102,
      name: 'Central City Hospital',
      type: 'facility',
      category: 'hospitals',
      specialties: ['Emergency Care', 'Surgery', 'Cardiology', 'Oncology'],
      facility: 'Central City Hospital',
      rating: 4.7,
      reviews: 1089,
      image: '🏥',
      address: '456 Hospital Blvd, Central City, ST 12345',
      phone: '(555) 987-6543',
      acceptingPatients: true,
      insuranceAccepted: ['Most Major Insurance'],
      languages: ['English', 'Spanish', 'French'],
      experience: '50+ years',
      beds: 350,
      nextAvailable: 'Emergency 24/7',
      price: 0,
      consultationFee: 'Varies by service',
      inNetwork: true,
      telehealth: false,
      emergencyServices: true,
      description: 'Full-service hospital providing comprehensive medical care with state-of-the-art facilities.',
      services: ['Emergency Care', 'Surgery', 'Maternity', 'ICU', 'Radiology', 'Laboratory']
    },
    {
      id: 103,
      name: 'Dr. Michael Chen, DDS',
      type: 'provider',
      category: 'dentists',
      specialties: ['General Dentistry', 'Cosmetic Dentistry'],
      facility: 'Bright Smile Dental',
      rating: 4.8,
      reviews: 167,
      image: '🦷',
      address: '789 Dental Ave, Anytown, ST 12345',
      phone: '(555) 456-7890',
      acceptingPatients: true,
      insuranceAccepted: ['Delta Dental', 'MetLife', 'Cigna Dental'],
      languages: ['English', 'Mandarin'],
      experience: '12 years',
      education: 'UCLA School of Dentistry',
      nextAvailable: '2024-02-03',
      price: 0,
      consultationFee: '$89 (applied to treatment)',
      inNetwork: true,
      telehealth: false,
      emergencyServices: false,
      description: 'Experienced dentist providing comprehensive dental care in a comfortable, modern setting.',
      services: ['Cleanings', 'Fillings', 'Crowns', 'Whitening', 'Root Canals', 'Implants']
    },
    {
      id: 104,
      name: 'Heart & Vascular Specialists',
      type: 'facility',
      category: 'specialists',
      specialties: ['Cardiology', 'Vascular Surgery', 'Heart Surgery'],
      facility: 'Heart & Vascular Specialists',
      rating: 4.9,
      reviews: 456,
      image: '❤️',
      address: '321 Cardiac Center Dr, Anytown, ST 12345',
      phone: '(555) 234-5678',
      acceptingPatients: true,
      insuranceAccepted: ['Most Major Insurance'],
      languages: ['English', 'Spanish'],
      experience: '25+ years',
      doctors: 8,
      nextAvailable: '2024-02-10',
      price: 0,
      consultationFee: 'Covered by most insurance',
      inNetwork: true,
      telehealth: true,
      emergencyServices: false,
      description: 'Leading cardiovascular care center with board-certified cardiologists and cardiac surgeons.',
      services: ['Cardiac Catheterization', 'Echocardiograms', 'Stress Testing', 'Pacemaker Implants']
    },
    {
      id: 105,
      name: 'QuickCare Urgent Care',
      type: 'facility',
      category: 'urgent-care',
      specialties: ['Urgent Care', 'Minor Injuries', 'Illness Treatment'],
      facility: 'QuickCare Urgent Care',
      rating: 4.5,
      reviews: 289,
      image: '🚑',
      address: '654 Quick St, Anytown, ST 12345',
      phone: '(555) 345-6789',
      acceptingPatients: true,
      insuranceAccepted: ['Most Insurance Plans'],
      languages: ['English', 'Spanish'],
      experience: '10 years',
      waitTime: '15-30 minutes',
      nextAvailable: 'Walk-ins welcome',
      price: 0,
      consultationFee: '$150-250 (before insurance)',
      inNetwork: true,
      telehealth: false,
      emergencyServices: false,
      description: 'Fast, convenient urgent care for non-emergency medical needs with extended hours.',
      services: ['Minor Injuries', 'Cold & Flu', 'Vaccinations', 'Physical Exams', 'Drug Testing']
    },
    {
      id: 106,
      name: 'Wellness Pharmacy',
      type: 'facility',
      category: 'pharmacies',
      specialties: ['Prescription Filling', 'Vaccinations', 'Health Screenings'],
      facility: 'Wellness Pharmacy',
      rating: 4.6,
      reviews: 134,
      image: '💊',
      address: '987 Pharmacy Rd, Anytown, ST 12345',
      phone: '(555) 567-8901',
      acceptingPatients: true,
      insuranceAccepted: ['Most Prescription Plans'],
      languages: ['English', 'Spanish'],
      experience: '20 years',
      hours: 'Mon-Sat 8AM-9PM, Sun 9AM-6PM',
      nextAvailable: 'Same day service',
      price: 0,
      consultationFee: 'Free consultation',
      inNetwork: true,
      telehealth: false,
      emergencyServices: false,
      description: 'Full-service pharmacy offering prescription filling, vaccinations, and health services.',
      services: ['Prescription Filling', 'Vaccinations', 'Blood Pressure Checks', 'Diabetes Management']
    },
    {
      id: 107,
      name: 'Mindful Wellness Center',
      type: 'facility',
      category: 'wellness',
      specialties: ['Mental Health', 'Counseling', 'Therapy'],
      facility: 'Mindful Wellness Center',
      rating: 4.8,
      reviews: 198,
      image: '🧘',
      address: '159 Wellness Way, Anytown, ST 12345',
      phone: '(555) 678-9012',
      acceptingPatients: true,
      insuranceAccepted: ['Mental Health Coverage'],
      languages: ['English', 'Spanish', 'French'],
      experience: '15 years',
      therapists: 12,
      nextAvailable: '2024-02-07',
      price: 0,
      consultationFee: '$120-180 per session',
      inNetwork: true,
      telehealth: true,
      emergencyServices: false,
      description: 'Comprehensive mental health and wellness center providing therapy and counseling services.',
      services: ['Individual Therapy', 'Group Therapy', 'Family Counseling', 'Stress Management']
    }
  ]

  const allItems = [...products, ...providers]

  const featuredDeals = [
    { id: 1, title: 'Up to 50% off Fitness Equipment', subtitle: 'Limited time offer', color: 'bg-purple-500' },
    { id: 2, title: 'Free shipping on orders $75+', subtitle: 'No code needed', color: 'bg-green-500' },
    { id: 3, title: 'Buy 2 Get 1 Free - Supplements', subtitle: 'Mix and match', color: 'bg-blue-500' }
  ]

  const filteredItems = allItems.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         (item.brand && item.brand.toLowerCase().includes(searchTerm.toLowerCase())) ||
                         (item.description && item.description.toLowerCase().includes(searchTerm.toLowerCase())) ||
                         (item.specialties && item.specialties.some(s => s.toLowerCase().includes(searchTerm.toLowerCase()))) ||
                         (item.facility && item.facility.toLowerCase().includes(searchTerm.toLowerCase()))
    const matchesCategory = selectedCategory === 'all' || 
                           item.category === selectedCategory ||
                           (selectedCategory === 'products' && item.type !== 'provider' && item.type !== 'facility')
    const matchesPrice = item.price >= priceRange[0] && item.price <= priceRange[1]
    return matchesSearch && matchesCategory && matchesPrice
  })

  const sortedItems = [...filteredItems].sort((a, b) => {
    switch (sortBy) {
      case 'price-low': return a.price - b.price
      case 'price-high': return b.price - a.price
      case 'rating': return b.rating - a.rating
      case 'reviews': return b.reviews - a.reviews
      case 'newest': return b.id - a.id
      default: return (b.bestseller || 0) - (a.bestseller || 0) || b.rating - a.rating
    }
  })

  const addToCart = (product) => {
    const existingItem = cartItems.find(item => item.id === product.id)
    if (existingItem) {
      setCartItems(cartItems.map(item => 
        item.id === product.id 
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ))
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }])
    }
  }

  const toggleWishlist = (productId) => {
    if (wishlist.includes(productId)) {
      setWishlist(wishlist.filter(id => id !== productId))
    } else {
      setWishlist([...wishlist, productId])
    }
  }

  const getTotalCartItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0)
  }

  const getCategoryColor = (categoryId) => {
    const category = categories.find(c => c.id === categoryId)
    return category ? category.color : 'text-gray-600'
  }

  return (
    <div className="p-6 space-y-6">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Health Marketplace
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            {sortedItems.length} of {allItems.length} items • Healthcare providers & products
          </p>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search products, providers, specialties, or conditions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white w-80"
            />
          </div>
          <button 
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 flex items-center gap-2 transition-colors"
          >
            <Filter className="w-4 h-4" />
            Filters
            <ChevronDown className={`w-4 h-4 transition-transform ${isFilterOpen ? 'rotate-180' : ''}`} />
          </button>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors relative">
            <ShoppingCart className="w-4 h-4" />
            Cart ({getTotalCartItems()})
            {getTotalCartItems() > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {getTotalCartItems()}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Featured Deals Banner */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {featuredDeals.map((deal) => (
          <Card key={deal.id} className={`${deal.color} text-white p-4 hover:shadow-lg transition-shadow cursor-pointer`}>
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-bold text-lg">{deal.title}</h3>
                <p className="text-sm opacity-90">{deal.subtitle}</p>
              </div>
              <Gift className="w-8 h-8 opacity-80" />
            </div>
          </Card>
        ))}
      </div>

      {/* Advanced Filters */}
      {isFilterOpen && (
        <Card className="p-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Price Range</label>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-500">$0</span>
                  <input 
                    type="range" 
                    min="0" 
                    max="500" 
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                    className="flex-1"
                  />
                  <span className="text-sm text-gray-500">$500+</span>
                </div>
                <div className="text-center text-sm font-medium text-gray-900 dark:text-white">
                  $0 - ${priceRange[1]}
                </div>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Features</label>
              <div className="space-y-1">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span className="text-sm">Insurance Covered</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span className="text-sm">Fast Shipping</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span className="text-sm">Bestseller</span>
                </label>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Rating</label>
              <select className="w-full border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 bg-white dark:bg-gray-700">
                <option>All Ratings</option>
                <option>4.5+ Stars</option>
                <option>4.0+ Stars</option>
                <option>3.5+ Stars</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Availability</label>
              <select className="w-full border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 bg-white dark:bg-gray-700">
                <option>All Products</option>
                <option>In Stock Only</option>
                <option>Fast Shipping</option>
                <option>Same Day Delivery</option>
              </select>
            </div>
          </div>
        </Card>
      )}

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

      {/* Quick Filters */}
      <Card className="p-4 mb-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-sm font-semibold text-gray-900 dark:text-white">Quick Filters</h3>
        </div>
        <div className="flex flex-wrap gap-2">
          <button className="flex items-center gap-2 px-3 py-2 bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-lg hover:bg-green-100 dark:hover:bg-green-900/50 transition-colors text-sm">
            <Shield className="w-4 h-4" />
            Insurance Covered
          </button>
          <button className="flex items-center gap-2 px-3 py-2 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors text-sm">
            <Zap className="w-4 h-4" />
            Fast Shipping
          </button>
          <button className="flex items-center gap-2 px-3 py-2 bg-orange-50 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 rounded-lg hover:bg-orange-100 dark:hover:bg-orange-900/50 transition-colors text-sm">
            <Award className="w-4 h-4" />
            Bestsellers
          </button>
          <button className="flex items-center gap-2 px-3 py-2 bg-purple-50 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-lg hover:bg-purple-100 dark:hover:bg-purple-900/50 transition-colors text-sm">
            <Pill className="w-4 h-4" />
            Prescription Required
          </button>
        </div>
      </Card>

      <div className="mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="text-sm text-gray-600 dark:text-gray-400">
            Showing {sortedItems.length} of {allItems.length} items
          </div>
          <div className="flex items-center gap-2">
            <button 
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-lg ${viewMode === 'grid' ? 'bg-blue-100 text-blue-600' : 'text-gray-400 hover:text-gray-600'}`}
            >
              <Package className="w-4 h-4" />
            </button>
            <button 
              onClick={() => setViewMode('list')}
              className={`p-2 rounded-lg ${viewMode === 'list' ? 'bg-blue-100 text-blue-600' : 'text-gray-400 hover:text-gray-600'}`}
            >
              <Filter className="w-4 h-4" />
            </button>
          </div>
        </div>
        <select 
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 bg-white dark:bg-gray-700"
        >
          <option value="featured">Sort by: Featured</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
          <option value="rating">Customer Rating</option>
          <option value="reviews">Most Reviews</option>
          <option value="newest">Newest First</option>
        </select>
      </div>

      {sortedItems.length === 0 ? (
        <Card className="p-12 text-center">
          <Package className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">No items found</h3>
          <p className="text-gray-600 dark:text-gray-400">Try adjusting your search or filters</p>
        </Card>
      ) : (
        <div className={`grid gap-6 ${
          viewMode === 'grid' 
            ? 'grid-cols-1 md:grid-cols-2 xl:grid-cols-3'
            : 'grid-cols-1'
        }`}>
              {sortedItems.map((item) => (
                <Card key={item.id} className={`hover:shadow-lg transition-all duration-200 cursor-pointer group ${
                  viewMode === 'grid' ? 'p-4' : 'p-4 flex items-center gap-6'
                }`}
                      onClick={() => setSelectedProduct(item)}>
                  <div className={`relative ${
                    viewMode === 'grid' ? 'mb-4' : 'w-32 h-32 flex-shrink-0'
                  }`}>
                    <div className={`bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center ${
                      viewMode === 'grid' ? 'aspect-square text-6xl' : 'w-full h-full text-4xl'
                    }`}>
                      {item.image}
                    </div>
                    {item.bestseller && (
                      <span className="absolute top-2 left-2 bg-orange-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                        Bestseller
                      </span>
                    )}
                    {item.savings > 0 && (
                      <span className="absolute top-2 right-8 bg-red-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                        {item.savings}% off
                      </span>
                    )}
                    {item.type === 'provider' && item.acceptingPatients && (
                      <span className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                        Accepting Patients
                      </span>
                    )}
                    {item.type === 'facility' && item.emergencyServices && (
                      <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                        24/7 Emergency
                      </span>
                    )}
                    <button 
                      onClick={(e) => {
                        e.stopPropagation()
                        toggleWishlist(item.id)
                      }}
                      className="absolute top-2 right-2 p-2 bg-white dark:bg-gray-800 rounded-full shadow-md hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                    >
                      <Heart className={`w-4 h-4 ${
                        wishlist.includes(item.id) 
                          ? 'text-red-500 fill-current' 
                          : 'text-gray-600 dark:text-gray-400'
                      }`} />
                    </button>
                  </div>
                  
                  <div className={viewMode === 'grid' ? '' : 'flex-1'}>
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex-1">
                        <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">
                          {item.type === 'provider' || item.type === 'facility' ? item.facility : item.brand}
                        </div>
                        <h3 className="font-semibold text-gray-900 dark:text-white mb-2 line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {item.name}
                        </h3>
                        {(item.type === 'provider' || item.type === 'facility') && item.specialties && (
                          <div className="text-xs text-blue-600 dark:text-blue-400 mb-1">
                            {item.specialties.slice(0, 2).join(', ')}
                            {item.specialties.length > 2 && ` +${item.specialties.length - 2} more`}
                          </div>
                        )}
                      </div>
                      {item.prescriptionRequired && (
                        <span className="ml-2 text-xs bg-red-100 text-red-800 px-2 py-1 rounded-full">
                          Rx Required
                        </span>
                      )}
                      {(item.type === 'provider' || item.type === 'facility') && item.inNetwork && (
                        <span className="ml-2 text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                          In Network
                        </span>
                      )}
                    </div>
                    
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm font-medium text-gray-900 dark:text-white">{item.rating}</span>
                      </div>
                      <span className="text-sm text-gray-600 dark:text-gray-400">({item.reviews} reviews)</span>
                      {item.stockCount && item.stockCount < 10 && (
                        <span className="text-xs text-orange-600 ml-auto">Only {item.stockCount} left!</span>
                      )}
                      {(item.type === 'provider' || item.type === 'facility') && item.experience && (
                        <span className="text-xs text-gray-500 ml-auto">{item.experience}</span>
                      )}
                    </div>
                    
                    <div className="flex items-center gap-2 mb-3">
                      {item.type === 'provider' || item.type === 'facility' ? (
                        <>
                          <span className="text-lg font-bold text-gray-900 dark:text-white">{item.consultationFee}</span>
                          {item.nextAvailable && (
                            <span className="text-sm text-blue-600 dark:text-blue-400 ml-auto">Next: {item.nextAvailable}</span>
                          )}
                        </>
                      ) : (
                        <>
                          <span className="text-xl font-bold text-gray-900 dark:text-white">${item.price}</span>
                          {item.originalPrice > item.price && (
                            <span className="text-sm text-gray-500 dark:text-gray-400 line-through">${item.originalPrice}</span>
                          )}
                          {item.savings > 0 && (
                            <span className="text-sm text-green-600 font-medium">Save {item.savings}%</span>
                          )}
                        </>
                      )}
                    </div>
                    
                    <div className="flex items-center gap-4 mb-4 text-sm">
                      {item.type === 'provider' || item.type === 'facility' ? (
                        <>
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4 text-gray-500" />
                            <span className="text-gray-600 dark:text-gray-400">
                              {item.address ? item.address.split(',')[1]?.trim() || 'Location' : 'Location'}
                            </span>
                          </div>
                          {item.telehealth && (
                            <div className="flex items-center gap-1">
                              <Globe className="w-4 h-4 text-blue-500" />
                              <span className="text-blue-600 dark:text-blue-400">Telehealth</span>
                            </div>
                          )}
                          {item.acceptingPatients && (
                            <div className="flex items-center gap-1">
                              <UserCheck className="w-4 h-4 text-green-500" />
                              <span className="text-green-600 dark:text-green-400">Accepting</span>
                            </div>
                          )}
                        </>
                      ) : (
                        <>
                          <div className="flex items-center gap-1">
                            <Truck className={`w-4 h-4 ${item.fastShipping ? 'text-green-500' : 'text-gray-400'}`} />
                            <span className={item.fastShipping ? 'text-green-600 dark:text-green-400' : 'text-gray-600 dark:text-gray-400'}>
                              {item.deliveryTime}
                            </span>
                          </div>
                          {item.insuranceCovered && (
                            <div className="flex items-center gap-1">
                              <Shield className="w-4 h-4 text-blue-500" />
                              <span className="text-blue-600 dark:text-blue-400">Insurance</span>
                            </div>
                          )}
                        </>
                      )}
                    </div>
                    
                    <div className={`flex gap-2 ${
                      viewMode === 'grid' ? 'flex-col' : 'flex-row items-center'
                    }`}>
                      {item.type === 'provider' || item.type === 'facility' ? (
                        <>
                          <button 
                            onClick={(e) => {
                              e.stopPropagation()
                              // Handle booking appointment
                            }}
                            className="flex-1 bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg transition-colors flex items-center justify-center gap-2"
                            disabled={!item.acceptingPatients}
                          >
                            <Calendar className="w-4 h-4" />
                            {item.acceptingPatients ? 'Book Appointment' : 'Not Available'}
                          </button>
                          {item.phone && (
                            <button 
                              onClick={(e) => {
                                e.stopPropagation()
                                window.open(`tel:${item.phone}`, '_self')
                              }}
                              className="px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                            >
                              <Phone className="w-4 h-4" />
                            </button>
                          )}
                        </>
                      ) : (
                        <>
                          <button 
                            onClick={(e) => {
                              e.stopPropagation()
                              addToCart(item)
                            }}
                            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors flex items-center justify-center gap-2"
                            disabled={!item.inStock}
                          >
                            <ShoppingCart className="w-4 h-4" />
                            {item.inStock ? 'Add to Cart' : 'Out of Stock'}
                          </button>
                          {viewMode === 'list' && (
                            <button className="px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                              <Eye className="w-4 h-4" />
                            </button>
                          )}
                        </>
                      )}
                    </div>
                  </div>
                </Card>
          ))}
        </div>
      )}

      {/* Pagination */}
      {sortedItems.length > 0 && (
        <div className="mt-8 flex justify-center">
          <div className="flex items-center gap-2">
            <button className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
              Previous
            </button>
            <button className="px-3 py-2 bg-blue-600 text-white rounded-lg">1</button>
            <button className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
              2
            </button>
            <button className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
              3
            </button>
            <button className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
              Next
            </button>
          </div>
        </div>
      )}

      {/* Product Detail Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-gray-800 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden">
            <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                {selectedProduct.type === 'provider' || selectedProduct.type === 'facility' ? 'Provider Details' : 'Product Details'}
              </h2>
              <button
                onClick={() => setSelectedProduct(null)}
                className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="p-6 overflow-y-auto max-h-[calc(90vh-200px)]">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Image and Info */}
                <div>
                  <div className="aspect-square bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center text-8xl mb-6 relative">
                    {selectedProduct.image}
                    {selectedProduct.bestseller && (
                      <span className="absolute top-4 left-4 bg-orange-500 text-white text-sm px-3 py-1 rounded-full font-medium">
                        Bestseller
                      </span>
                    )}
                    {selectedProduct.type === 'provider' && selectedProduct.acceptingPatients && (
                      <span className="absolute top-4 left-4 bg-green-500 text-white text-sm px-3 py-1 rounded-full font-medium">
                        Accepting Patients
                      </span>
                    )}
                    {selectedProduct.type === 'facility' && selectedProduct.emergencyServices && (
                      <span className="absolute top-4 left-4 bg-red-500 text-white text-sm px-3 py-1 rounded-full font-medium">
                        24/7 Emergency
                      </span>
                    )}
                  </div>
                  
                  <div className="space-y-4">
                    {(selectedProduct.type === 'provider' || selectedProduct.type === 'facility') ? (
                      <>
                        <div>
                          <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Services</h3>
                          <ul className="space-y-1">
                            {selectedProduct.services?.map((service, index) => (
                              <li key={index} className="flex items-center gap-2 text-sm">
                                <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                                <span className="text-gray-600 dark:text-gray-400">{service}</span>
                              </li>
                            )) || []}
                          </ul>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                          <div>
                            <div className="text-sm text-gray-600 dark:text-gray-400">Experience</div>
                            <div className="font-semibold text-gray-900 dark:text-white">{selectedProduct.experience || 'N/A'}</div>
                          </div>
                          <div>
                            <div className="text-sm text-gray-600 dark:text-gray-400">Next Available</div>
                            <div className="font-semibold text-gray-900 dark:text-white">{selectedProduct.nextAvailable || 'N/A'}</div>
                          </div>
                        </div>
                        
                        {selectedProduct.insuranceAccepted && (
                          <div>
                            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Insurance Accepted</h3>
                            <div className="flex flex-wrap gap-2">
                              {selectedProduct.insuranceAccepted.map((insurance, index) => (
                                <span key={index} className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded-full">
                                  {insurance}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                      </>
                    ) : (
                      <>
                        <div>
                          <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Key Features</h3>
                          <ul className="space-y-1">
                            {selectedProduct.features?.map((feature, index) => (
                              <li key={index} className="flex items-center gap-2 text-sm">
                                <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                                <span className="text-gray-600 dark:text-gray-400">{feature}</span>
                              </li>
                            )) || []}
                          </ul>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                          <div>
                            <div className="text-sm text-gray-600 dark:text-gray-400">Stock</div>
                            <div className="font-semibold text-gray-900 dark:text-white">{selectedProduct.stockCount} available</div>
                          </div>
                          <div>
                            <div className="text-sm text-gray-600 dark:text-gray-400">Delivery</div>
                            <div className="font-semibold text-gray-900 dark:text-white">{selectedProduct.deliveryTime}</div>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </div>
                
                {/* Details */}
                <div>
                  <div className="mb-4">
                    <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                      {selectedProduct.type === 'provider' || selectedProduct.type === 'facility' 
                        ? selectedProduct.facility 
                        : selectedProduct.brand}
                    </div>
                    <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{selectedProduct.name}</h1>
                    
                    {(selectedProduct.type === 'provider' || selectedProduct.type === 'facility') && selectedProduct.specialties && (
                      <div className="flex flex-wrap gap-2 mb-3">
                        {selectedProduct.specialties.map((specialty, index) => (
                          <span key={index} className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-sm rounded-full">
                            {specialty}
                          </span>
                        ))}
                      </div>
                    )}
                    
                    <div className="flex items-center gap-3 mb-4">
                      <div className="flex items-center gap-1">
                        <Star className="w-5 h-5 text-yellow-400 fill-current" />
                        <span className="font-medium text-gray-900 dark:text-white">{selectedProduct.rating}</span>
                      </div>
                      <span className="text-gray-600 dark:text-gray-400">({selectedProduct.reviews} reviews)</span>
                      <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                        Read Reviews
                      </button>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    {(selectedProduct.type === 'provider' || selectedProduct.type === 'facility') ? (
                      <>
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-2xl font-bold text-gray-900 dark:text-white">{selectedProduct.consultationFee}</span>
                          {selectedProduct.address && (
                            <div className="flex items-center gap-1 text-gray-600 dark:text-gray-400 ml-auto">
                              <MapPin className="w-4 h-4" />
                              <span className="text-sm">{selectedProduct.address.split(',').slice(-2).join(',').trim()}</span>
                            </div>
                          )}
                        </div>
                        
                        <div className="flex items-center gap-4 text-sm">
                          {selectedProduct.inNetwork && (
                            <div className="flex items-center gap-1 text-green-600">
                              <Shield className="w-4 h-4" />
                              <span>In Network</span>
                            </div>
                          )}
                          {selectedProduct.telehealth && (
                            <div className="flex items-center gap-1 text-blue-600">
                              <Globe className="w-4 h-4" />
                              <span>Telehealth available</span>
                            </div>
                          )}
                          {selectedProduct.acceptingPatients && (
                            <div className="flex items-center gap-1 text-green-600">
                              <UserCheck className="w-4 h-4" />
                              <span>Accepting patients</span>
                            </div>
                          )}
                          {selectedProduct.emergencyServices && (
                            <div className="flex items-center gap-1 text-red-600">
                              <AlertCircle className="w-4 h-4" />
                              <span>Emergency services</span>
                            </div>
                          )}
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-3xl font-bold text-gray-900 dark:text-white">${selectedProduct.price}</span>
                          {selectedProduct.originalPrice > selectedProduct.price && (
                            <>
                              <span className="text-lg text-gray-500 dark:text-gray-400 line-through">${selectedProduct.originalPrice}</span>
                              <span className="text-lg text-green-600 font-medium">Save {selectedProduct.savings}%</span>
                            </>
                          )}
                        </div>
                        
                        <div className="flex items-center gap-4 text-sm">
                          {selectedProduct.insuranceCovered && (
                            <div className="flex items-center gap-1 text-blue-600">
                              <Shield className="w-4 h-4" />
                              <span>Insurance may cover</span>
                            </div>
                          )}
                          {selectedProduct.fastShipping && (
                            <div className="flex items-center gap-1 text-green-600">
                              <Zap className="w-4 h-4" />
                              <span>Fast shipping</span>
                            </div>
                          )}
                          {selectedProduct.prescriptionRequired && (
                            <div className="flex items-center gap-1 text-red-600">
                              <AlertCircle className="w-4 h-4" />
                              <span>Prescription required</span>
                            </div>
                          )}
                        </div>
                      </>
                    )}
                  </div>
                  
                  <div className="mb-6">
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Description</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                      {selectedProduct.description}
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex gap-3">
                      {(selectedProduct.type === 'provider' || selectedProduct.type === 'facility') ? (
                        <>
                          <button 
                            onClick={() => {
                              // Handle booking appointment
                              setSelectedProduct(null)
                            }}
                            className="flex-1 bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-lg font-medium flex items-center justify-center gap-2 transition-colors"
                            disabled={!selectedProduct.acceptingPatients}
                          >
                            <Calendar className="w-5 h-5" />
                            {selectedProduct.acceptingPatients ? 'Book Appointment' : 'Not Available'}
                          </button>
                          {selectedProduct.phone && (
                            <button 
                              onClick={() => window.open(`tel:${selectedProduct.phone}`, '_self')}
                              className="px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                            >
                              <Phone className="w-5 h-5" />
                            </button>
                          )}
                        </>
                      ) : (
                        <>
                          <button 
                            onClick={() => {
                              addToCart(selectedProduct)
                              setSelectedProduct(null)
                            }}
                            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-medium flex items-center justify-center gap-2 transition-colors"
                            disabled={!selectedProduct.inStock}
                          >
                            <ShoppingCart className="w-5 h-5" />
                            {selectedProduct.inStock ? 'Add to Cart' : 'Out of Stock'}
                          </button>
                        </>
                      )}
                      <button 
                        onClick={() => toggleWishlist(selectedProduct.id)}
                        className="px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                      >
                        <Heart className={`w-5 h-5 ${
                          wishlist.includes(selectedProduct.id) 
                            ? 'text-red-500 fill-current' 
                            : 'text-gray-600 dark:text-gray-400'
                        }`} />
                      </button>
                      <button className="px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                        <Share2 className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                      </button>
                    </div>
                    
                    {selectedProduct.prescriptionRequired && (
                      <div className="p-4 bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-700 rounded-lg">
                        <div className="flex items-start gap-3">
                          <AlertCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                          <div>
                            <h4 className="font-medium text-blue-900 dark:text-blue-300 mb-1">Prescription Required</h4>
                            <p className="text-sm text-blue-800 dark:text-blue-400">
                              This medication requires a valid prescription. You can upload your prescription during checkout or have your doctor send it directly to us.
                            </p>
                            <button className="mt-2 text-sm text-blue-600 hover:text-blue-700 font-medium">
                              Learn more about prescription process
                            </button>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}