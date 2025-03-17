const express = require('express');
const { getQuizzes, submitQuiz } = require('../controllers/quizController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/', getQuizzes);
router.post('/submit', protect, submitQuiz);

module.exports = router;
