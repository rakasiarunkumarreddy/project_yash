const Quiz = require('../models/Quiz');
const Question = require('../models/Question');

const getQuizzes = async (req, res) => {
    const quizzes = await Quiz.find().populate('questions');
    res.json(quizzes);
};

const submitQuiz = async (req, res) => {
    const { quizId, answers } = req.body;
    let score = 0;

    const quiz = await Quiz.findById(quizId).populate('questions');

    quiz.questions.forEach((q, index) => {
        const correctAnswers = q.options.filter(opt => opt.isCorrect).map(opt => opt.text);
        if (JSON.stringify(answers[index]) === JSON.stringify(correctAnswers)) {
            score++;
        }
    });

    res.json({ score });
};

module.exports = { getQuizzes, submitQuiz };
