import { Card } from '@/components/shared/Card'
import { ShoppingCart, Star, Filter, Search, Heart, Truck } from 'lucide-react'

export default function Marketplace() {
  const categories = [
    { name: 'Medical Devices', count: 45, icon: '🩺' },
    { name: 'Supplements', count: 120, icon: '💊' },
    { name: 'Fitness Equipment', count: 67, icon: '🏃' },
    { name: 'Mental Health', count: 34, icon: '🧠' },
    { name: 'Personal Care', count: 89, icon: '🧴' },
    { name: 'Mobility Aids', count: 23, icon: '♿' }
  ]

  const products = [
    {
      id: 1,
      name: 'Digital Blood Pressure Monitor',
      brand: 'HealthTech Pro',
      price: '$89.99',
      originalPrice: '$109.99',
      rating: 4.8,
      reviews: 156,
      image: '🩺',
      category: 'Medical Devices',
      shipping: 'Free shipping',
      inStock: true
    },
    {
      id: 2,
      name: 'Omega-3 Fish Oil Capsules',
      brand: 'Pure Wellness',
      price: '$24.99',
      originalPrice: '$29.99',
      rating: 4.6,
      reviews: 89,
      image: '💊',
      category: 'Supplements',
      shipping: 'Free shipping',
      inStock: true
    },
    {
      id: 3,
      name: 'Smart Fitness Tracker',
      brand: 'ActiveLife',
      price: '$149.99',
      originalPrice: '$199.99',
      rating: 4.7,
      reviews: 234,
      image: '⌚',
      category: 'Fitness Equipment',
      shipping: 'Free shipping',
      inStock: true
    },
    {
      id: 4,
      name: 'Meditation & Sleep App Subscription',
      brand: 'MindfulHealth',
      price: '$9.99/month',
      originalPrice: '$14.99/month',
      rating: 4.9,
      reviews: 567,
      image: '🧘',
      category: 'Mental Health',
      shipping: 'Digital delivery',
      inStock: true
    },
    {
      id: 5,
      name: 'Ergonomic Lumbar Support Cushion',
      brand: 'ComfortCare',
      price: '$39.99',
      originalPrice: '$49.99',
      rating: 4.5,
      reviews: 78,
      image: '🪑',
      category: 'Personal Care',
      shipping: 'Free shipping',
      inStock: true
    },
    {
      id: 6,
      name: 'Adjustable Walking Cane',
      brand: 'MobilityPlus',
      price: '$34.99',
      originalPrice: '$44.99',
      rating: 4.4,
      reviews: 45,
      image: '🦯',
      category: 'Mobility Aids',
      shipping: 'Free shipping',
      inStock: true
    }
  ]

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Health Marketplace
        </h1>
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search products..."
              className="pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
            />
          </div>
          <button className="border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 flex items-center gap-2">
            <Filter className="w-4 h-4" />
            Filters
          </button>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2">
            <ShoppingCart className="w-4 h-4" />
            Cart (0)
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div>
          <Card className="p-6">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Categories
            </h2>
            <div className="space-y-3">
              {categories.map((category, index) => (
                <button key={index} className="w-full text-left p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{category.icon}</span>
                      <div>
                        <div className="font-medium text-gray-900 dark:text-white">{category.name}</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">{category.count} items</div>
                      </div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </Card>
        </div>

        <div className="lg:col-span-3">
          <div className="mb-6 flex items-center justify-between">
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Showing {products.length} of 378 products
            </div>
            <select className="border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 bg-white dark:bg-gray-700">
              <option>Sort by: Featured</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Customer Rating</option>
              <option>Newest First</option>
            </select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {products.map((product) => (
              <Card key={product.id} className="p-4 hover:shadow-lg transition-shadow">
                <div className="relative">
                  <div className="aspect-square bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center text-6xl mb-4">
                    {product.image}
                  </div>
                  <button className="absolute top-2 right-2 p-2 bg-white dark:bg-gray-800 rounded-full shadow-md hover:bg-gray-50 dark:hover:bg-gray-700">
                    <Heart className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                  </button>
                </div>
                
                <div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">{product.brand}</div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2 line-clamp-2">{product.name}</h3>
                  
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-medium text-gray-900 dark:text-white">{product.rating}</span>
                    </div>
                    <span className="text-sm text-gray-600 dark:text-gray-400">({product.reviews})</span>
                  </div>
                  
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-lg font-bold text-gray-900 dark:text-white">{product.price}</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400 line-through">{product.originalPrice}</span>
                  </div>
                  
                  <div className="flex items-center gap-2 mb-4">
                    <Truck className="w-4 h-4 text-green-500" />
                    <span className="text-sm text-green-600 dark:text-green-400">{product.shipping}</span>
                  </div>
                  
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors flex items-center justify-center gap-2">
                    <ShoppingCart className="w-4 h-4" />
                    Add to Cart
                  </button>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-8 flex justify-center">
            <div className="flex items-center gap-2">
              <button className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800">
                Previous
              </button>
              <button className="px-3 py-2 bg-blue-600 text-white rounded-lg">1</button>
              <button className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800">
                2
              </button>
              <button className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800">
                3
              </button>
              <button className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}