
import { useState, useEffect, useContext } from 'react';
import { fetchLeaderboard, fetchUserScores } from '../api';
import AuthContext from '../context/AuthContext';

const Admin = () => {
    const { user } = useContext(AuthContext);
    const [leaderboard, setLeaderboard] = useState([]);
    const [userScores, setUserScores] = useState([]);

    useEffect(() => {
        if (user?.isAdmin) {
            fetchLeaderboard(user.token).then(res => setLeaderboard(res.data));
            fetchUserScores(user.token).then(res => setUserScores(res.data));
        }
    }, [user]);

    return user?.isAdmin ? (
        <div>
            <h2>Leaderboard</h2>
            <ul>
                {leaderboard.map((entry, index) => (
                    <li key={index}>{entry.username} - {entry.score}</li>
                ))}
            </ul>
            <h2>User Scores</h2>
            <ul>
                {userScores.map((entry, index) => (
                    <li key={index}>{entry.username} - {entry.score}</li>
                ))}
            </ul>
        </div>
    ) : <p>Access Denied</p>;
};

export default Admin;
