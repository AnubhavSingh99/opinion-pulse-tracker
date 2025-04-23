
# Customer Feedback Management System - Backend

This folder contains the backend code for the Customer Feedback Management System. The backend is designed to work with MongoDB and provides API endpoints for managing customer feedback.

## Backend Structure

```
backend/
├── server.js          # Main server entry point
├── models/            # MongoDB models
│   └── Feedback.js    # Feedback data model
├── routes/            # API route definitions
│   └── feedback.js    # Feedback-related endpoints
└── middleware/        # Custom middleware functions
```

## Implementation Notes

This is currently a template structure. To implement a working MongoDB backend, you'll need to:

1. Connect your Lovable project to Supabase using the native integration
2. Install the necessary dependencies:
   - express
   - mongoose
   - cors
   - dotenv
   - bcryptjs (for password hashing)
   - jsonwebtoken (for authentication)

## API Endpoints (Planned)

- `GET /api/feedback` - Get all feedback items
- `GET /api/feedback/:id` - Get a specific feedback item
- `POST /api/feedback` - Submit new feedback
- `PATCH /api/feedback/:id` - Update feedback status
- `POST /api/feedback/:id/responses` - Add a response to feedback

## Data Model

The Feedback model includes:
- Customer name and email
- Feedback category and message
- Rating (1-5)
- Status (pending, in-progress, resolved)
- Creation timestamp
- Responses (with response text, responder, and timestamp)
