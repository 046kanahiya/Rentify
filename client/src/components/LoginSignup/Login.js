import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import '../../App.css';

function Login() {
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const navigate = useNavigate();
    const handleLogin = async (event) => {
        event.preventDefault();
        try {
            const res = await axios.post(`${process.env.REACT_APP_BACKEND_URI}/api/user/login`, {
                email,
                password,
            });
            console.log(res);
            localStorage.setItem('token', res.data.token);
            navigate('/');
        } catch (error) {
            console.error('Login failed', error);
        }
    };

    return (
        <div className="login-container">
            <form onSubmit={handleLogin} className="login-form">
                <h1 className="login-title">Login</h1>
                <div className="form-group">
                    <label htmlFor="login-email" className="form-label">Email address</label>
                    <input
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        className="form-input"
                        id="login-email"
                        aria-describedby="emailHelp"
                    />
                    <div id="emailHelp" className="form-text">
                        We'll never share your email with anyone else.
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="login-password" className="form-label">Password</label>
                    <input
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        className="form-input"
                        id="login-password"
                    />
                </div>
                <button type="submit" className="btn-submit">Submit</button>
                <Link to="/register" className="register-link">Click Register</Link>
            </form>
        </div>
    );
}

export default Login;
