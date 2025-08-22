import { Card } from '@/components/shared/Card'
import { Users, MessageCircle, Heart, Reply, Plus, Search, TrendingUp } from 'lucide-react'

export default function CommunityForum() {
  const categories = [
    { name: 'General Health', posts: 234, members: 1234 },
    { name: 'Mental Health', posts: 156, members: 789 },
    { name: 'Chronic Conditions', posts: 189, members: 567 },
    { name: 'Nutrition & Diet', posts: 345, members: 1456 },
    { name: 'Exercise & Fitness', posts: 278, members: 1123 },
    { name: 'Support Groups', posts: 123, members: 456 }
  ]

  const trendingPosts = [
    {
      id: 1,
      title: "Managing diabetes with a busy lifestyle - tips that actually work",
      author: "Sarah M.",
      category: "Chronic Conditions",
      replies: 23,
      likes: 45,
      timeAgo: "2 hours ago",
      excerpt: "I've been struggling to maintain my blood sugar levels with my hectic work schedule. Here are some strategies that have really helped me..."
    },
    {
      id: 2,
      title: "Post-surgery recovery: What to expect and how to prepare",
      author: "Dr. Johnson",
      category: "General Health",
      replies: 18,
      likes: 67,
      timeAgo: "4 hours ago",
      excerpt: "As a surgeon, I often get asked about recovery expectations. Here's a comprehensive guide based on my 15 years of experience..."
    },
    {
      id: 3,
      title: "Meditation apps that actually help with anxiety",
      author: "MindfulMike",
      category: "Mental Health",
      replies: 31,
      likes: 89,
      timeAgo: "6 hours ago",
      excerpt: "After trying dozens of meditation apps, these are the ones that made a real difference in managing my anxiety..."
    },
    {
      id: 4,
      title: "Healthy meal prep for families on a budget",
      author: "NutritionalNancy",
      category: "Nutrition & Diet",
      replies: 42,
      likes: 156,
      timeAgo: "8 hours ago",
      excerpt: "Feeding a family of four healthy meals doesn't have to break the bank. Here's my weekly meal prep routine..."
    }
  ]

  const recentActivity = [
    { user: "Alex K.", action: "replied to", post: "Exercise with chronic pain", time: "5 min ago" },
    { user: "Maria L.", action: "started", post: "New support group for caregivers", time: "12 min ago" },
    { user: "Dr. Smith", action: "liked", post: "Understanding lab results", time: "18 min ago" },
    { user: "John D.", action: "commented on", post: "Weight loss plateau help", time: "25 min ago" }
  ]

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Community Forum
        </h1>
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search discussions..."
              className="pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
            />
          </div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2">
            <Plus className="w-4 h-4" />
            New Post
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="space-y-6">
          <Card className="p-6">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Categories
            </h2>
            <div className="space-y-3">
              {categories.map((category, index) => (
                <button key={index} className="w-full text-left p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                  <div className="font-medium text-gray-900 dark:text-white">{category.name}</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                    {category.posts} posts • {category.members} members
                  </div>
                </button>
              ))}
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Recent Activity
            </h2>
            <div className="space-y-3">
              {recentActivity.map((activity, index) => (
                <div key={index} className="text-sm">
                  <span className="font-medium text-gray-900 dark:text-white">{activity.user}</span>
                  <span className="text-gray-600 dark:text-gray-400"> {activity.action} </span>
                  <span className="text-blue-600 dark:text-blue-400">"{activity.post}"</span>
                  <div className="text-xs text-gray-500 dark:text-gray-500 mt-1">{activity.time}</div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        <div className="lg:col-span-3">
          <div className="mb-6 flex items-center gap-4">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2">
              <TrendingUp className="w-4 h-4" />
              Trending
            </button>
            <button className="text-gray-600 dark:text-gray-400 px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">
              Latest
            </button>
            <button className="text-gray-600 dark:text-gray-400 px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">
              Unanswered
            </button>
          </div>

          <div className="space-y-4">
            {trendingPosts.map((post) => (
              <Card key={post.id} className="p-6 hover:shadow-lg transition-shadow cursor-pointer">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 hover:text-blue-600 dark:hover:text-blue-400">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2 mb-3">
                      {post.excerpt}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      {post.author}
                    </div>
                    <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-xs">
                      {post.category}
                    </span>
                    <span>{post.timeAgo}</span>
                  </div>
                  
                  <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                    <div className="flex items-center gap-1">
                      <MessageCircle className="w-4 h-4" />
                      {post.replies}
                    </div>
                    <div className="flex items-center gap-1">
                      <Heart className="w-4 h-4" />
                      {post.likes}
                    </div>
                    <button className="text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1">
                      <Reply className="w-4 h-4" />
                      Reply
                    </button>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-8 flex justify-center">
            <button className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-6 py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700">
              Load More Posts
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}