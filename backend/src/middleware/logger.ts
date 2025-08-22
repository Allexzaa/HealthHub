import { Request, Response, NextFunction } from 'express'

export const requestLogger = (req: Request, res: Response, next: NextFunction) => {
  const timestamp = new Date().toISOString()
  
  // Log request for audit trail (HIPAA compliance)
  const logEntry = {
    timestamp,
    method: req.method,
    url: req.url,
    userAgent: req.get('User-Agent'),
    ip: req.ip,
    headers: {
      authorization: req.get('Authorization') ? '[REDACTED]' : undefined,
      contentType: req.get('Content-Type')
    }
  }
  
  console.log('Request:', JSON.stringify(logEntry))
  
  next()
}