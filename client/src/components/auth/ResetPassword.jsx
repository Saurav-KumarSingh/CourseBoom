import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const ResetPassword = () => {
    const [password, setPassword] = useState('');
    const { userId } = useParams(); // Get the user ID from the URL

    // Handle input change for the password field
    const handleInputChange = (e) => {
        setPassword(e.target.value);
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        // Here, you would typically send the userId and password to the backend API for resetting the password
        console.log('User ID:', userId);
        console.log('New Password:', password);
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="lg:p-10 md:p-40 sm:p-20 p-8 w-full lg:w-1/2">
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="password" className="block">New Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={password}
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
                        Reset Password
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ResetPassword;
