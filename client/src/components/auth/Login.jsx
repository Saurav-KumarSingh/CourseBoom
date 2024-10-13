import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const navigate = useNavigate(); // For programmatic navigation

    // Handle input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your login logic here, such as calling an API

        console.log('Login form submitted with:', formData);
    };

    return (
        <div>
            <div className="flex justify-center items-center h-screen">
                <div className="lg:p-10 md:p-40 sm:20 p-8 w-full lg:w-1/2">
                    <h1 className="text-2xl font-semibold mb-4">Login</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="email" className="block">Email</label>
                            <input
                                type="text"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                                autoComplete="off"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="password" className="block">Password</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={formData.password}
                                onChange={handleInputChange}
                                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                                autoComplete="off"
                                required
                            />
                        </div>

                        <div className="mb-6 text-blue-500">
                            <Link to="/forgot-password" className="hover:underline">Forgot Password?</Link>
                        </div>

                        <button
                            type="submit"
                            className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-blue-600 hover:to-purple-500 text-white font-semibold rounded-md py-2 px-4 w-full"
                        >
                            Login
                        </button>
                    </form>

                    <div className="mt-6">
                        <span>Don't have an account? </span>
                        <Link to="#" className="hover:underline text-blue-500">Sign up</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
