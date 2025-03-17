const express = require('express');
const { getLeaderboard, getAllUserScores } = require('../controllers/adminController');
const { protect, isAdmin } = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/leaderboard', protect, isAdmin, getLeaderboard);
router.get('/users', protect, isAdmin, getAllUserScores);

module.exports = router;