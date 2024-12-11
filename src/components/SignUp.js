import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Signup() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Name:", name);
        console.log("Email:", email);
        console.log("Password:", password);
        navigate("/");
    };

    return (
        <div className='signup-container'>
            <div className='signup-box shadow-lg p-4 rounded'>
                <h2 className='text-center mb-4 text-primary'>Sign Up</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter your name"
                        className="form-control"
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        className="form-control"
                        required
                    />
                    <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter your password"
                        className="form-control"
                        required
                    />
                    <button type="submit" className="btn btn-primary w-100">Sign Up</button>
                </form>
            </div>
        </div>
    );
}

export default Signup;
