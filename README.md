# Healthcare Hub

A comprehensive healthcare management platform built with Next.js, Express.js, and modern web technologies.

## Features

- 🏥 **Dashboard**: Overview of health metrics and AI insights
- 📊 **Health Metrics**: Track vital signs and health data
- 🤖 **AI Assistant**: Multiple specialized health AI agents
- 📅 **Appointments**: Schedule and manage medical appointments
- 💊 **Medications**: Track prescriptions and reminders
- 🔒 **HIPAA Compliant**: End-to-end encryption and audit logging
- 📱 **Responsive**: Works on desktop and mobile devices

## Quick Start

### Prerequisites

- Node.js 18+ 
- npm 8+

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd healthcare-hub
```

2. Install dependencies for all packages:
```bash
npm run install:all
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

4. Start the development servers:
```bash
npm run dev
```

This will start:
- Frontend (Next.js) on http://localhost:3000
- Backend (Express) on http://localhost:4000

### Using Docker

Alternatively, you can run the entire stack with Docker:

```bash
docker-compose up
```

## Project Structure

```
healthcare-hub/
├── packages/
│   └── web/                 # Next.js frontend application
├── backend/                 # Express.js API server
├── docker-compose.yml       # Docker configuration
└── package.json            # Root package.json with scripts
```

## Development

### Available Scripts

- `npm run dev` - Start both frontend and backend in development mode
- `npm run build` - Build both applications for production
- `npm run test` - Run tests for both applications
- `npm run lint` - Lint both applications

### Individual Package Scripts

Frontend (packages/web):
- `npm run dev:web` - Start frontend only
- `npm run build:web` - Build frontend only

Backend:
- `npm run dev:backend` - Start backend only
- `npm run build:backend` - Build backend only

## Authentication

For development, use these demo credentials:
- Email: demo@healthhub.com
- Password: demo123

## API Endpoints

### Health
- `GET /api/health/metrics` - Get health metrics
- `POST /api/health/metrics` - Update health metrics
- `GET /api/health/insights` - Get AI health insights

### Authentication
- `POST /api/auth/login` - User login
- `POST /api/auth/register` - User registration
- `GET /api/auth/profile` - Get user profile

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is licensed under the MIT License.