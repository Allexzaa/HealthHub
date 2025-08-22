'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Home, FileText, MessageCircle, Calendar, User } from 'lucide-react'

const mobileNavigation = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'Records', href: '/records', icon: FileText },
  { name: 'Chat', href: '/chat', icon: MessageCircle },
  { name: 'Calendar', href: '/appointments', icon: Calendar },
  { name: 'Profile', href: '/profile', icon: User },
]

export function MobileNav() {
  const pathname = usePathname()

  return (
    <nav className="md:hidden bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
      <div className="flex justify-around">
        {mobileNavigation.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex flex-col items-center px-4 py-2 text-xs font-medium transition-colors ${
                isActive
                  ? 'text-blue-600 dark:text-blue-400'
                  : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
              }`}
            >
              <item.icon className="w-6 h-6 mb-1" />
              {item.name}
            </Link>
          )
        })}
      </div>
    </nav>
  )
}