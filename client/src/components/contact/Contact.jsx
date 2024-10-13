import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
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
        // Add your contact form submission logic here (e.g., send the data to a backend or show a success message)
        console.log('Contact Us form submitted with:', formData);

    };

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="lg:p-10 md:p-40 sm:20 p-8 w-full lg:w-1/2">
                <h1 className="text-2xl font-semibold mb-4">Contact Us</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="name" className="block">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                            autoComplete="off"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block">Email</label>
                        <input
                            type="email"
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
                        <label htmlFor="message" className="block">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                            rows="5"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-blue-600 hover:to-purple-500 text-white font-semibold rounded-md py-2 px-4 w-full"
                    >
                        Submit
                    </button>
                </form>
                <div className="mt-4">
                        <span>Request For A Course: </span>
                        <Link to="/request" className="hover:underline text-blue-500"> Click</Link>
                    </div>
            </div>
        </div>
    );
}

export default ContactUs;
