const mongoose = require('mongoose');

const QuestionSchema = new mongoose.Schema({
    quizId: { type: mongoose.Schema.Types.ObjectId, ref: 'Quiz', required: true },
    text: { type: String, required: true },
    options: [{ text: String, isCorrect: Boolean }],
    type: { type: String, enum: ['single', 'multiple', 'truefalse'], required: true },
});

module.exports = mongoose.model('Question', QuestionSchema);
