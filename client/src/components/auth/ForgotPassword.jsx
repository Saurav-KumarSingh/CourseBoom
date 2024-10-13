import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');

    // Handle input change for email
    const handleInputChange = (e) => {
        setEmail(e.target.value);
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        // Here, you would typically send the email to the backend to send the reset link
        console.log('Email:', email);
    };

    return (
        <div>
            <div className="flex justify-center items-center h-screen">
                <div className="lg:p-10 md:p-40 sm:p-20 p-8 w-full lg:w-1/2">
                    <h1 className="text-2xl font-semibold mb-4">Forgot Password</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="email" className="block">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="abc@gmail.com"
                                value={email}
                                onChange={handleInputChange}
                                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                                autoComplete="off"
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-blue-600 hover:to-purple-500 text-white font-semibold rounded-md py-2 px-4 w-full"
                        >
                            Send Reset Link
                        </button>
                    </form>
                    <div className="mt-6">
                        <span>Remembered your password? </span>
                        <Link to="/" className="hover:underline text-blue-500">Login</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ForgotPassword;
