import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../assest/styel/login.css'; // Import the custom CSS

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Email:", email);
        console.log("Password:", password);
        navigate("/"); // Redirect to home page after login
    };

    return (
        <div className="login-container">
            <div className="login-box shadow-lg p-4 rounded">
                <h2 className="text-center mb-4 text-primary">Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <input
                            type="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            className="form-control"
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <input
                            type="password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter your password"
                            className="form-control"
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-primary w-100">Login</button>
                </form>

                <p className="mt-3 text-center">
                    Don't have an account?{" "}
                    <Link to="/signup" className="text-decoration-none text-primary">
                        Sign Up
                    </Link>
                </p>
            </div>
        </div>
    );
}

export default Login;
