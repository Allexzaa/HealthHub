import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import dotenv from 'dotenv'
import { createServer } from 'http'
import { Server } from 'socket.io'

import healthRoutes from './api/routes/health'
import authRoutes from './api/routes/auth'
import { errorHandler } from './middleware/errorHandler'
import { requestLogger } from './middleware/logger'

dotenv.config()

const app = express()
const server = createServer(app)
const io = new Server(server, {
  cors: {
    origin: process.env.FRONTEND_URL || 'http://localhost:3000',
    methods: ['GET', 'POST']
  }
})

const PORT = process.env.PORT || 4000

// Middleware
app.use(helmet())
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  credentials: true
}))
app.use(express.json())
app.use(requestLogger)

// Routes
app.use('/api/health', healthRoutes)
app.use('/api/auth', authRoutes)

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ 
    status: 'OK', 
    message: 'Healthcare Hub API is running',
    timestamp: new Date().toISOString()
  })
})

// Socket.IO for real-time updates
io.on('connection', (socket) => {
  console.log('Client connected:', socket.id)
  
  socket.on('join-room', (roomId) => {
    socket.join(roomId)
    console.log(`Client ${socket.id} joined room ${roomId}`)
  })
  
  socket.on('disconnect', () => {
    console.log('Client disconnected:', socket.id)
  })
})

// Error handling
app.use(errorHandler)

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({ error: 'Route not found' })
})

server.listen(PORT, () => {
  console.log(`🚀 Healthcare Hub API running on port ${PORT}`)
  console.log(`📊 Health check available at http://localhost:${PORT}/health`)
})