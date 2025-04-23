const express = require('express');
const cors = require('cors');
// We'll keep the MongoDB code commented for now since we can't connect without Supabase integration
// const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Basic route for testing
app.get('/', (req, res) => {
  res.json({ message: "Welcome to Customer Feedback Management API!" });
});

// Feedback routes (basic implementation without MongoDB)
app.get('/api/feedback', (req, res) => {
  res.json({ 
    message: "This would return feedback items from MongoDB",
    items: [
      { id: 1, name: "John Doe", email: "john@example.com", category: "feature", feedback: "I love this app!", rating: 5, status: "pending", createdAt: new Date() },
      { id: 2, name: "Jane Smith", email: "jane@example.com", category: "bug", feedback: "The app crashes when I click submit.", rating: 2, status: "in-progress", createdAt: new Date() }
    ]
  });
});

app.post('/api/feedback', (req, res) => {
  res.status(201).json({ 
    message: "Feedback saved successfully (simulation)",
    item: { ...req.body, id: Date.now(), createdAt: new Date(), status: "pending" }
  });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Visit http://localhost:${PORT} to test the API`);
  console.log("To implement a working backend with MongoDB, connect Lovable to Supabase");
});
