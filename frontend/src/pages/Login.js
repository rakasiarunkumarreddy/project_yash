import { useState, useContext } from 'react';
import AuthContext from '../context/AuthContext';
import { loginUser } from '../api';

const Login = () => {
    const [form, setForm] = useState({ username: '', password: '' });
    const { login } = useContext(AuthContext);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await loginUser(form);
            login(data.token);
        } catch (error) {
            alert('Login failed');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Username" onChange={(e) => setForm({ ...form, username: e.target.value })} />
            <input type="password" placeholder="Password" onChange={(e) => setForm({ ...form, password: e.target.value })} />
            <button type="submit">Login</button>
        </form>
    );
};

export default Login;
