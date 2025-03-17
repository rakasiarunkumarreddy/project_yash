import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

export const loginUser = (data) => axios.post(`${API_URL}/auth/login`, data);
export const registerUser = (data) => axios.post(`${API_URL}/auth/register`, data);
export const fetchQuizzes = () => axios.get(`${API_URL}/quizzes`);
export const submitQuiz = (data, token) => 
    axios.post(`${API_URL}/quizzes/submit`, data, {
        headers: { Authorization: `Bearer ${token}` }
    });
export const fetchLeaderboard = (token) => 
    axios.get(`${API_URL}/admin/leaderboard`, {
        headers: { Authorization: `Bearer ${token}` }
    });
export const fetchUserScores = (token) => 
    axios.get(`${API_URL}/admin/users`, {
        headers: { Authorization: `Bearer ${token}` }
    });
