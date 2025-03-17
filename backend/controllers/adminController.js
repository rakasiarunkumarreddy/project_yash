const User = require('../models/User');

const getLeaderboard = async (req, res) => {
    try {
        const users = await User.find().sort({ score: -1 }).limit(10); // Top 10 users
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};

const getAllUserScores = async (req, res) => {
    try {
        const users = await User.find().select('username score');
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};

module.exports = { getLeaderboard, getAllUserScores };
