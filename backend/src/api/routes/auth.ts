import { Router } from 'express'
import { Request, Response } from 'express'

const router = Router()

// Mock authentication endpoints
router.post('/login', async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body
    
    console.log('Login attempt for:', email)
    
    // Mock authentication - in production use proper auth
    if (email === 'demo@healthhub.com' && password === 'demo123') {
      const mockToken = 'mock_jwt_token_' + Date.now()
      
      res.json({
        success: true,
        token: mockToken,
        user: {
          id: 'user_123',
          email: email,
          name: 'John Doe',
          role: 'patient'
        }
      })
    } else {
      res.status(401).json({
        success: false,
        error: 'Invalid credentials'
      })
    }
  } catch (error) {
    console.error('Login error:', error)
    res.status(500).json({
      success: false,
      error: 'Authentication failed'
    })
  }
})

router.post('/register', async (req: Request, res: Response) => {
  try {
    const { email, password, name } = req.body
    
    console.log('Registration attempt for:', email)
    
    // Mock registration
    const mockToken = 'mock_jwt_token_' + Date.now()
    
    res.json({
      success: true,
      token: mockToken,
      user: {
        id: 'user_' + Date.now(),
        email: email,
        name: name,
        role: 'patient'
      }
    })
  } catch (error) {
    console.error('Registration error:', error)
    res.status(500).json({
      success: false,
      error: 'Registration failed'
    })
  }
})

router.get('/profile', async (req: Request, res: Response) => {
  try {
    // Mock user profile
    res.json({
      success: true,
      user: {
        id: 'user_123',
        email: 'demo@healthhub.com',
        name: 'John Doe',
        role: 'patient',
        createdAt: '2024-01-01T00:00:00.000Z'
      }
    })
  } catch (error) {
    console.error('Profile error:', error)
    res.status(500).json({
      success: false,
      error: 'Failed to fetch profile'
    })
  }
})

export default router