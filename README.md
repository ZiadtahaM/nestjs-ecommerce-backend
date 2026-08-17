# E-commerce Backend with NestJS

This is a NestJS-based e-commerce backend application with authentication, user management, dashboard, and seller features.

## Prerequisites

- Node.js (v14 or higher)
- MongoDB
- npm or yarn

## Installation

1. Clone the repository
2. Install dependencies:
```bash
npm install
```

3. Configure environment variables:
   - Copy `.env.example` to `.env`
   - Update the MongoDB connection URI and JWT settings

## Database Setup

1. Make sure MongoDB is running on your system
2. The application will automatically create the database when it first connects

## Running the Application

```bash
# development with nodemon (recommended for development)
npm run dev

# standard start
npm run start

# production mode
npm run start:prod
```

## Project Structure

```
src/
├── Auth/           # Authentication module
├── common/         # Shared resources
├── Dashboard/      # Admin dashboard
│   └── Category/  # Category management
├── DB/            # Database configuration
│   └── Models/    # Mongoose schemas and models
├── Seller/        # Seller module
└── User/          # User module
```

## Features

- Authentication with JWT
- User management
- Category management
- Seller management
- Dashboard analytics
- Database integration with MongoDB and Mongoose
- Hot reloading with Nodemon

## API Documentation

The API documentation will be available at `/api` when the application is running (coming soon).

## Testing

```bash
# unit tests
npm run test

# e2e tests
npm run test:e2e

# test coverage
npm run test:cov
``` 