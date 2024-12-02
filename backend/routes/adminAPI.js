const express = require('express');
const router = express.Router();

// Test route - GET /api
router.get('/', (req, res) => {
  res.json({
    success: true,
    message: 'Admin API is working!',
  });
});

// Example route - GET /api/users
router.get('/users', (req, res) => {
  const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' },
  ];
  res.json({
    success: true,
    data: users,
  });
});

// Example route - POST /api/users
router.post('/users', (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({
      success: false,
      message: 'Name is required',
    });
  }

  const newUser = {
    id: Math.floor(Math.random() * 1000),
    name,
  };

  res.status(201).json({
    success: true,
    message: 'User created successfully',
    data: newUser,
  });
});

module.exports = router;
