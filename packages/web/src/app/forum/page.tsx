'use client'

import { useState } from 'react'
import { Card } from '@/components/shared/Card'
import { Users, MessageCircle, Heart, Reply, Plus, Search, TrendingUp, Grid3X3, List, Filter, Star, Clock, Eye, ThumbsUp, AlertCircle, CheckCircle, Pin, Award, UserCheck } from 'lucide-react'

export default function CommunityForum() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [sortBy, setSortBy] = useState('trending')
  const [searchTerm, setSearchTerm] = useState('')
  const [postsViewMode, setPostsViewMode] = useState('list') // list or tile
  const [showNewPostModal, setShowNewPostModal] = useState(false)
  const [newPost, setNewPost] = useState({
    title: '',
    category: '',
    content: '',
    tags: ''
  })

  const categories = [
    { id: 'all', name: 'All Categories', posts: 1345, members: 5625, icon: Users, color: 'bg-blue-500' },
    { id: 'general', name: 'General Health', posts: 234, members: 1234, icon: Heart, color: 'bg-green-500' },
    { id: 'mental', name: 'Mental Health', posts: 156, members: 789, icon: Users, color: 'bg-purple-500' },
    { id: 'chronic', name: 'Chronic Conditions', posts: 189, members: 567, icon: AlertCircle, color: 'bg-orange-500' },
    { id: 'nutrition', name: 'Nutrition & Diet', posts: 345, members: 1456, icon: Star, color: 'bg-yellow-500' },
    { id: 'fitness', name: 'Exercise & Fitness', posts: 278, members: 1123, icon: TrendingUp, color: 'bg-red-500' },
    { id: 'support', name: 'Support Groups', posts: 123, members: 456, icon: Users, color: 'bg-indigo-500' }
  ]

  const trendingPosts = [
    {
      id: 1,
      title: "Managing diabetes with a busy lifestyle - tips that actually work",
      author: "Sarah M.",
      authorType: "patient",
      category: "Chronic Conditions",
      categoryId: "chronic",
      replies: 23,
      likes: 45,
      views: 234,
      timeAgo: "2 hours ago",
      isPinned: false,
      isSolved: true,
      tags: ["diabetes", "lifestyle", "tips"],
      excerpt: "I've been struggling to maintain my blood sugar levels with my hectic work schedule. Here are some strategies that have really helped me...",
      lastReply: {
        author: "Dr. Martinez",
        timeAgo: "30 min ago"
      }
    },
    {
      id: 2,
      title: "Post-surgery recovery: What to expect and how to prepare",
      author: "Dr. Johnson",
      authorType: "verified",
      category: "General Health",
      categoryId: "general",
      replies: 18,
      likes: 67,
      views: 456,
      timeAgo: "4 hours ago",
      isPinned: true,
      isSolved: false,
      tags: ["surgery", "recovery", "preparation"],
      excerpt: "As a surgeon, I often get asked about recovery expectations. Here's a comprehensive guide based on my 15 years of experience...",
      lastReply: {
        author: "HealthyLiving23",
        timeAgo: "1 hour ago"
      }
    },
    {
      id: 3,
      title: "Meditation apps that actually help with anxiety",
      author: "MindfulMike",
      authorType: "patient",
      category: "Mental Health",
      categoryId: "mental",
      replies: 31,
      likes: 89,
      views: 567,
      timeAgo: "6 hours ago",
      isPinned: false,
      isSolved: false,
      tags: ["meditation", "anxiety", "apps"],
      excerpt: "After trying dozens of meditation apps, these are the ones that made a real difference in managing my anxiety...",
      lastReply: {
        author: "ZenMaster",
        timeAgo: "45 min ago"
      }
    },
    {
      id: 4,
      title: "Healthy meal prep for families on a budget",
      author: "NutritionalNancy",
      authorType: "expert",
      category: "Nutrition & Diet",
      categoryId: "nutrition",
      replies: 42,
      likes: 156,
      views: 789,
      timeAgo: "8 hours ago",
      isPinned: false,
      isSolved: true,
      tags: ["meal-prep", "budget", "family"],
      excerpt: "Feeding a family of four healthy meals doesn't have to break the bank. Here's my weekly meal prep routine...",
      lastReply: {
        author: "BudgetMom",
        timeAgo: "2 hours ago"
      }
    },
    {
      id: 5,
      title: "Support group for new cancer patients - weekly meetups",
      author: "CancerWarrior2024",
      authorType: "patient",
      category: "Support Groups",
      categoryId: "support",
      replies: 67,
      likes: 234,
      views: 1234,
      timeAgo: "1 day ago",
      isPinned: true,
      isSolved: false,
      tags: ["cancer", "support-group", "meetup"],
      excerpt: "Starting a weekly support group for newly diagnosed cancer patients. We meet every Tuesday at 7 PM EST via video call...",
      lastReply: {
        author: "HopeHealer",
        timeAgo: "3 hours ago"
      }
    },
    {
      id: 6,
      title: "Best exercises for chronic back pain relief",
      author: "PhysioExpert",
      authorType: "verified",
      category: "Exercise & Fitness",
      categoryId: "fitness",
      replies: 28,
      likes: 98,
      views: 445,
      timeAgo: "12 hours ago",
      isPinned: false,
      isSolved: true,
      tags: ["back-pain", "exercise", "chronic"],
      excerpt: "As a physical therapist with 10 years of experience, here are the most effective exercises I recommend for chronic back pain...",
      lastReply: {
        author: "BackPainSurvivor",
        timeAgo: "4 hours ago"
      }
    }
  ]

  const recentActivity = [
    { user: "Alex K.", action: "replied to", post: "Exercise with chronic pain", time: "5 min ago", type: "reply" },
    { user: "Maria L.", action: "started", post: "New support group for caregivers", time: "12 min ago", type: "new" },
    { user: "Dr. Smith", action: "liked", post: "Understanding lab results", time: "18 min ago", type: "like" },
    { user: "John D.", action: "commented on", post: "Weight loss plateau help", time: "25 min ago", type: "comment" },
    { user: "HealthyMom", action: "joined", post: "Nutrition & Diet community", time: "35 min ago", type: "join" },
    { user: "Dr. Wilson", action: "verified", post: "Mental health resources post", time: "1 hour ago", type: "verify" }
  ]

  const filteredPosts = trendingPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    const matchesCategory = selectedCategory === 'all' || post.categoryId === selectedCategory
    return matchesSearch && matchesCategory
  })

  const sortedPosts = [...filteredPosts].sort((a, b) => {
    if (sortBy === 'trending') return b.likes - a.likes
    if (sortBy === 'latest') return new Date(b.timeAgo).getTime() - new Date(a.timeAgo).getTime()
    if (sortBy === 'replies') return b.replies - a.replies
    if (sortBy === 'views') return b.views - a.views
    return 0
  })

  const getAuthorBadge = (authorType: string) => {
    switch (authorType) {
      case 'verified':
        return { icon: UserCheck, color: 'text-blue-500', bg: 'bg-blue-100 dark:bg-blue-900', label: 'Verified Healthcare Professional' }
      case 'expert':
        return { icon: Award, color: 'text-purple-500', bg: 'bg-purple-100 dark:bg-purple-900', label: 'Health Expert' }
      default:
        return null
    }
  }

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'reply': return MessageCircle
      case 'new': return Plus
      case 'like': return Heart
      case 'comment': return MessageCircle
      case 'join': return Users
      case 'verify': return CheckCircle
      default: return MessageCircle
    }
  }

  const handleCreatePost = () => {
    if (newPost.title && newPost.content && newPost.category) {
      // In a real app, this would make an API call
      console.log('Creating new post:', newPost)
      setShowNewPostModal(false)
      setNewPost({ title: '', category: '', content: '', tags: '' })
      alert('Post created successfully!')
    } else {
      alert('Please fill in all required fields.')
    }
  }

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
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search discussions..."
              className="pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
            />
          </div>
          <button
            onClick={() => setShowNewPostModal(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
          >
            <Plus className="w-4 h-4" />
            New Post
          </button>
        </div>
      </div>

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
                  {category.posts}
                </span>
              </button>
            )
          })}
        </div>
      </Card>

      {/* Recent Activity Card */}
      <Card className="p-6 mb-6">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Recent Activity
        </h2>
        <div className="space-y-3">
          {recentActivity.map((activity, index) => {
            const ActivityIcon = getActivityIcon(activity.type)
            return (
              <div key={index} className="flex items-start gap-3 text-sm">
                <div className="w-6 h-6 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <ActivityIcon className="w-3 h-3 text-gray-600 dark:text-gray-400" />
                </div>
                <div className="flex-1 min-w-0">
                  <div>
                    <span className="font-medium text-gray-900 dark:text-white">{activity.user}</span>
                    <span className="text-gray-600 dark:text-gray-400"> {activity.action} </span>
                    <span className="text-blue-600 dark:text-blue-400 hover:underline cursor-pointer">"{activity.post}"</span>
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-500 mt-1">{activity.time}</div>
                </div>
              </div>
            )
          })}
        </div>
      </Card>

      {/* Posts Section */}
      <Card className="p-6">
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              {/* View Mode Toggle */}
              <div className="flex border border-gray-300 dark:border-gray-600 rounded-lg overflow-hidden mr-3">
                <button
                  onClick={() => setPostsViewMode('list')}
                  className={`p-2 transition-colors ${postsViewMode === 'list'
                    ? 'bg-blue-600 text-white'
                    : 'bg-white dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-600'
                    }`}
                  title="List view"
                >
                  <List className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setPostsViewMode('tile')}
                  className={`p-2 transition-colors ${postsViewMode === 'tile'
                    ? 'bg-blue-600 text-white'
                    : 'bg-white dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-600'
                    }`}
                  title="Tile view"
                >
                  <Grid3X3 className="w-4 h-4" />
                </button>
              </div>
              <button
                onClick={() => setSortBy('trending')}
                className={`px-4 py-2 rounded-lg flex items-center gap-2 transition-colors ${sortBy === 'trending'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800'
                  }`}
              >
                <TrendingUp className="w-4 h-4" />
                Trending
              </button>
              <button
                onClick={() => setSortBy('latest')}
                className={`px-4 py-2 rounded-lg flex items-center gap-2 transition-colors ${sortBy === 'latest'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800'
                  }`}
              >
                <Clock className="w-4 h-4" />
                Latest
              </button>
              <button
                onClick={() => setSortBy('replies')}
                className={`px-4 py-2 rounded-lg flex items-center gap-2 transition-colors ${sortBy === 'replies'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800'
                  }`}
              >
                <MessageCircle className="w-4 h-4" />
                Most Replies
              </button>
            </div>
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400">
            {sortedPosts.length} posts found
          </div>
        </div>

        {postsViewMode === 'list' ? (
          <div className="space-y-4">
              {sortedPosts.map((post) => {
                const authorBadge = getAuthorBadge(post.authorType)
                return (
                  <Card key={post.id} className="p-6 hover:shadow-lg transition-all duration-200 cursor-pointer group">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-start gap-3 mb-3">
                          {post.isPinned && (
                            <Pin className="w-4 h-4 text-orange-500 flex-shrink-0 mt-1" />
                          )}
                          <div className="flex-1">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                              {post.title}
                              {post.isSolved && (
                                <CheckCircle className="w-5 h-5 text-green-500 inline-block ml-2" />
                              )}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2 mb-3">
                              {post.excerpt}
                            </p>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2 mb-3">
                              {post.tags.map((tag, index) => (
                                <span key={index} className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full text-xs">
                                  #{tag}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                        <div className="flex items-center gap-2">
                          <Users className="w-4 h-4" />
                          <span className="font-medium">{post.author}</span>
                          {authorBadge && (
                            <div className={`p-1 ${authorBadge.bg} rounded-full`} title={authorBadge.label}>
                              <authorBadge.icon className={`w-3 h-3 ${authorBadge.color}`} />
                            </div>
                          )}
                        </div>
                        <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-xs">
                          {post.category}
                        </span>
                        <span>{post.timeAgo}</span>
                        {post.lastReply && (
                          <span className="text-xs">
                            Last reply by <span className="font-medium">{post.lastReply.author}</span> {post.lastReply.timeAgo}
                          </span>
                        )}
                      </div>

                      <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                        <div className="flex items-center gap-1" title="Views">
                          <Eye className="w-4 h-4" />
                          {post.views}
                        </div>
                        <div className="flex items-center gap-1" title="Replies">
                          <MessageCircle className="w-4 h-4" />
                          {post.replies}
                        </div>
                        <div className="flex items-center gap-1" title="Likes">
                          <ThumbsUp className="w-4 h-4" />
                          {post.likes}
                        </div>
                        <button className="text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1 transition-colors">
                          <Reply className="w-4 h-4" />
                          Reply
                        </button>
                      </div>
                    </div>
                  </Card>
                )
              })}
            </div>
          ) : (
          <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {sortedPosts.map((post) => {
                const authorBadge = getAuthorBadge(post.authorType)
                return (
                  <Card key={post.id} className="p-4 hover:shadow-lg transition-all duration-200 cursor-pointer group flex flex-col h-full">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-start gap-2">
                        {post.isPinned && (
                          <Pin className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" />
                        )}
                        {post.isSolved && (
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                        )}
                      </div>
                      <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-xs">
                        {post.category}
                      </span>
                    </div>
                    
                    {/* Title */}
                    <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-2 line-clamp-2">
                      {post.title}
                    </h3>
                    
                    {/* Excerpt */}
                    <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-3 mb-3 flex-1">
                      {post.excerpt}
                    </p>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-1 mb-3">
                      {post.tags.slice(0, 2).map((tag, index) => (
                        <span key={index} className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full text-xs">
                          #{tag}
                        </span>
                      ))}
                      {post.tags.length > 2 && (
                        <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded-full text-xs">
                          +{post.tags.length - 2}
                        </span>
                      )}
                    </div>
                    
                    {/* Author */}
                    <div className="flex items-center gap-2 mb-3 text-sm text-gray-600 dark:text-gray-400">
                      <Users className="w-3 h-3" />
                      <span className="font-medium truncate">{post.author}</span>
                      {authorBadge && (
                        <div className={`p-0.5 ${authorBadge.bg} rounded-full flex-shrink-0`} title={authorBadge.label}>
                          <authorBadge.icon className={`w-2 h-2 ${authorBadge.color}`} />
                        </div>
                      )}
                    </div>
                    
                    {/* Stats */}
                    <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-1" title="Views">
                          <Eye className="w-3 h-3" />
                          {post.views}
                        </div>
                        <div className="flex items-center gap-1" title="Replies">
                          <MessageCircle className="w-3 h-3" />
                          {post.replies}
                        </div>
                        <div className="flex items-center gap-1" title="Likes">
                          <ThumbsUp className="w-3 h-3" />
                          {post.likes}
                        </div>
                      </div>
                      <span>{post.timeAgo}</span>
                    </div>
                    
                    {/* Last Reply */}
                    {post.lastReply && (
                      <div className="mt-2 pt-2 border-t border-gray-200 dark:border-gray-700 text-xs text-gray-500 dark:text-gray-400">
                        Last reply by <span className="font-medium">{post.lastReply.author}</span>
                      </div>
                    )}
                  </Card>
                )
              })}
            </div>
          )}

        <div className="mt-8 flex justify-center">
          <button className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-6 py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
            Load More Posts
          </button>
        </div>
      </Card>

      {/* New Post Modal */}
      {showNewPostModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-gray-800 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-hidden">
            <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Create New Post
              </h3>
              <button
                onClick={() => setShowNewPostModal(false)}
                className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                <Plus className="w-5 h-5 rotate-45" />
              </button>
            </div>

            <div className="p-6 space-y-6 max-h-[70vh] overflow-y-auto">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Title *
                </label>
                <input
                  type="text"
                  value={newPost.title}
                  onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
                  placeholder="What's your question or topic?"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Category *
                </label>
                <select
                  value={newPost.category}
                  onChange={(e) => setNewPost({ ...newPost, category: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                >
                  <option value="">Select a category</option>
                  {categories.filter(cat => cat.id !== 'all').map((category) => (
                    <option key={category.id} value={category.id}>{category.name}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Content *
                </label>
                <textarea
                  value={newPost.content}
                  onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
                  placeholder="Share your thoughts, ask questions, or provide helpful information..."
                  rows={8}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white resize-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Tags (optional)
                </label>
                <input
                  type="text"
                  value={newPost.tags}
                  onChange={(e) => setNewPost({ ...newPost, tags: e.target.value })}
                  placeholder="diabetes, exercise, nutrition (comma separated)"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                />
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  Add relevant tags to help others find your post
                </p>
              </div>

              <div className="bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-700 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                  <div className="text-sm text-blue-800 dark:text-blue-200">
                    <p className="font-medium mb-1">Community Guidelines</p>
                    <ul className="text-xs space-y-1">
                      <li>• Be respectful and supportive to all members</li>
                      <li>• Share accurate health information and cite sources when possible</li>
                      <li>• Protect privacy - don't share personal medical details</li>
                      <li>• Seek professional medical advice for serious health concerns</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 border-t border-gray-200 dark:border-gray-700 flex gap-3">
              <button
                onClick={() => setShowNewPostModal(false)}
                className="flex-1 px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleCreatePost}
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors"
              >
                Create Post
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}