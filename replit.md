# Alex Rivera Portfolio Website

## Overview

This is a modern, responsive portfolio website built for Alex Rivera, a full-stack developer. The application showcases professional experience, skills, projects, and provides a contact form for potential clients or employers. It's built as a full-stack application with a React frontend and Express.js backend.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **Styling**: Tailwind CSS with CSS variables for theming
- **UI Components**: shadcn/ui component library built on Radix UI primitives
- **State Management**: TanStack Query for server state management
- **Build Tool**: Vite for development and building

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Runtime**: Node.js with ESM modules
- **API Pattern**: RESTful API endpoints
- **Error Handling**: Centralized error middleware with structured responses
- **Logging**: Custom request/response logging middleware

### Database Architecture
- **ORM**: Drizzle ORM with TypeScript-first schema definitions
- **Database**: PostgreSQL (configured for Neon Database)
- **Migrations**: Drizzle Kit for schema migrations
- **Storage Abstraction**: Interface-based storage layer with in-memory implementation for development

## Key Components

### Frontend Components
- **Sections**: Modular page sections (Hero, About, Skills, Portfolio, Resume, Footer)
- **UI Library**: Complete set of reusable components from shadcn/ui
- **Responsive Design**: Mobile-first approach with breakpoint-specific styling
- **Smooth Scrolling**: Custom hook for navigation between sections
- **Form Handling**: React Hook Form with Zod validation

### Backend Components
- **Route Handlers**: Contact form submission and resume download endpoints
- **Storage Layer**: Abstracted data access with multiple implementation options
- **Validation**: Zod schema validation for API requests
- **Development Tools**: Vite integration for hot module replacement

### Database Schema
- **Users Table**: Basic user management structure
- **Contact Messages**: Stores form submissions with timestamps
- **Type Safety**: Full TypeScript integration with inferred types

## Data Flow

1. **Contact Form Submission**:
   - User fills out contact form in Footer component
   - Form data validated client-side with Zod schemas
   - TanStack Query mutation sends POST request to `/api/contact`
   - Backend validates data and stores in database
   - Success/error feedback displayed via toast notifications

2. **Resume Download**:
   - User clicks download button in Resume section
   - GET request sent to `/api/resume/download`
   - Backend responds with file download headers

3. **Static Content**:
   - All portfolio content rendered statically from component data
   - Images served from Unsplash for demo purposes
   - Responsive images with optimized loading

## External Dependencies

### UI and Styling
- **Radix UI**: Accessible component primitives
- **Tailwind CSS**: Utility-first styling framework
- **Lucide React**: Icon library
- **class-variance-authority**: Component variant management

### Data and State
- **TanStack Query**: Server state management and caching
- **React Hook Form**: Form state management
- **Zod**: Runtime type validation and schema parsing

### Development Tools
- **Vite**: Fast build tool and development server
- **ESBuild**: JavaScript bundling for production
- **TSX**: TypeScript execution for development

### Database and ORM
- **Drizzle ORM**: TypeScript-first ORM
- **@neondatabase/serverless**: PostgreSQL client for Neon
- **connect-pg-simple**: PostgreSQL session store

## Deployment Strategy

### Development
- Vite dev server with HMR for frontend
- TSX for running TypeScript backend directly
- In-memory storage for rapid prototyping

### Production Build
- Vite builds frontend to `dist/public`
- ESBuild bundles backend to `dist/index.js`
- Static files served from Express in production
- Database migrations run via `drizzle-kit push`

### Environment Configuration
- Database URL required for PostgreSQL connection
- ESM modules throughout the application
- TypeScript strict mode enabled
- Path aliases configured for clean imports

The application follows modern full-stack patterns with strong type safety, responsive design, and a clean separation of concerns between frontend and backend components.