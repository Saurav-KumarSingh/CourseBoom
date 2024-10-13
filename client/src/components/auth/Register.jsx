import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        avatar: null, // For file uploads
    });
    const [avatarPreview, setAvatarPreview] = useState('https://imgs.search.brave.com/dikm-ZnXrsKT4ZizeNda_KfMVt1H4GeMFUrXLCXMl8Y/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA1LzQ5Lzk4LzM5/LzM2MF9GXzU0OTk4/Mzk3MF9iUkNrWWZr/MFA2UFA1ZktiTWha/TUliMDdtQ0o2ZXNY/TC5qcGc'); // Default placeholder image

    const navigate = useNavigate();

    // Handle input changes for name, email, and password
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // Handle file input (avatar upload)
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setFormData({
                ...formData,
                avatar: file,
            });
            setAvatarPreview(URL.createObjectURL(file)); // Update image preview
        } else {
            setAvatarPreview('https://via.placeholder.com/150'); // Reset to placeholder if no file selected
        }
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, email, password, avatar } = formData;

        // Here, you would typically send the form data to a backend API
        console.log('Form data:', { name, email, password, avatar });

    };

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="lg:p-10 md:p-40 sm:20 p-8 w-full lg:w-1/2">
                <div className="max-w-lg mx-auto rounded-lg px-8 py-10 flex flex-col items-center">
                    <h1 className="text-2xl font-semibold text-center mb-8">Welcome to My Company</h1>
                    
                    {/* Avatar Preview */}
                    <img className="h-12 w-12 block my-3 rounded-full" src={avatarPreview} alt="avatar" />

                    <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
                        <div className="flex items-start flex-col justify-start">
                            <label htmlFor="name" className="text-sm mr-2">Name:</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                                required
                            />
                        </div>

                        <div className="flex items-start flex-col justify-start">
                            <label htmlFor="email" className="text-sm mr-2">Email:</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                                required
                            />
                        </div>

                        <div className="flex items-start flex-col justify-start">
                            <label htmlFor="password" className="text-sm mr-2">Password:</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={formData.password}
                                onChange={handleInputChange}
                                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                                required
                            />
                        </div>

                        <div className="flex items-start flex-col justify-start">
                            <label htmlFor="avatar" className="text-sm mr-2 mb-1">Upload Avatar</label>
                            <input
                                type="file"
                                id="avatar"
                                name="avatar"
                                accept="image/*"
                                onChange={handleFileChange}
                                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                            />
                        </div>

                        <button
                            type="submit"
                            className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-blue-600 hover:to-purple-500 text-white font-semibold rounded-md py-2 px-4 w-full mt-4"
                        >
                            Register
                        </button>
                    </form>

                    <div className="mt-4 text-left">
                        <span className="text-sm">Already have an account? </span>
                        <Link to="/login" className="text-blue-500 hover:text-blue-600">Login</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;
