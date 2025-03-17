import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Quiz from './pages/Quiz';
import Admin from './pages/Admin';

const App = () => {
    return (
        <AuthProvider>
            <ThemeProvider>
                <Router>
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/quiz" element={<Quiz />} />
                        <Route path="/admin" element={<Admin />} />
                    </Routes>
                </Router>
            </ThemeProvider>
        </AuthProvider>
    );
};

export default App;
