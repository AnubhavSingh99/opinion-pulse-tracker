
const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true,
    enum: ['bug', 'feature', 'suggestion', 'praise', 'complaint', 'other']
  },
  feedback: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    required: true,
    min: 1,
    max: 5
  },
  status: {
    type: String,
    required: true,
    default: 'pending',
    enum: ['pending', 'in-progress', 'resolved']
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Feedback', feedbackSchema);

