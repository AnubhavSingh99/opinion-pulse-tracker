
const express = require('express');
const router = express.Router();
const Feedback = require('../models/Feedback');

// Get all feedback items
router.get('/', async (req, res) => {
  try {
    const feedback = await Feedback.find().sort({ createdAt: -1 });
    res.json(feedback);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get a specific feedback item
router.get('/:id', async (req, res) => {
  try {
    const feedback = await Feedback.findById(req.params.id);
    if (!feedback) return res.status(404).json({ message: 'Feedback not found' });
    res.json(feedback);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Submit new feedback
router.post('/', async (req, res) => {
  const feedback = new Feedback({
    name: req.body.name,
    email: req.body.email,
    category: req.body.category,
    feedback: req.body.feedback,
    rating: req.body.rating
  });

  try {
    const newFeedback = await feedback.save();
    res.status(201).json(newFeedback);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update feedback status
router.patch('/:id', async (req, res) => {
  try {
    const updatedFeedback = await Feedback.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    if (!updatedFeedback) return res.status(404).json({ message: 'Feedback not found' });
    res.json(updatedFeedback);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete feedback
router.delete('/:id', async (req, res) => {
  try {
    const feedback = await Feedback.findById(req.params.id);
    if (!feedback) return res.status(404).json({ message: 'Feedback not found' });
    await feedback.deleteOne();
    res.json({ message: 'Feedback deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;

