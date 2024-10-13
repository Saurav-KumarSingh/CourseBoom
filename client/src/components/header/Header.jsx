import React, { useState } from 'react';
import { MdLightMode, MdNightlight } from "react-icons/md";
import { Link, NavLink } from 'react-router-dom';
import Logo from '../Logo'; // Assuming Logo is in the parent folder

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isDarkTheme, setIsDarkTheme] = useState(false);

    const toggleMenu = () => {
        setIsOpen(prev => !prev);
    };

    const toggleTheme = () => {
        setIsDarkTheme(prev => !prev);
        document.body.classList.toggle('dark', !isDarkTheme);
    };

    const isAdmin = false;
    const isAuthenticated=false;

    const navLinks = [
        { to: "/home", label: "Home" },
        { to: "/courses", label: "Browse All Courses" },
        { to: "/about-us", label: "About Us" },
        { to: "/profile", label: "Profile" },
        { to: "/profile", label: "Logout" },
    ];

    return (
        <nav className={`z-10 shadow-md sticky top-0 left-0 ${isDarkTheme ? 'bg-[#2f3d53]' : 'bg-white'}`}>
            <div className="px-4">
                <div className="flex justify-between items-center py-4 lg:justify-start lg:space-x-10">
                    {/* Logo */}
                    <div className="flex justify-start lg:w-0 lg:flex-1">
                        <Link to='/' className="flex items-center link-no-border">
                            <Logo className='h-10' />
                        </Link>
                    </div>

                    {/* Hamburger Menu (Mobile) */}
                    <div className="-mr-2 flex items-center lg:hidden">
                        <button
                            onClick={toggleMenu}
                            type="button"
                            className="inline-flex items-center justify-center p-2 rounded-md text-purple-400 hover:text-white hover:bg-purple-400 focus:outline-none focus:bg-purple-400 focus:text-white"
                            aria-controls="mobile-menu"
                            aria-expanded={isOpen}
                        >
                            {!isOpen ? (
                                <svg className="block h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                                </svg>
                            ) : (
                                <svg className="block h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            )}
                        </button>
                    </div>

                    {/* Desktop Navigation Links */}
                    <div className="hidden lg:flex flex-grow justify-end items-center space-x-7">
                        {/* Theme Toggle Button */}
                        <div className="hidden md:flex items-center">
                            <button
                                onClick={toggleTheme}
                                className={`p-1 rounded-full transition duration-300 ${isDarkTheme ? 'bg-white' : 'bg-gray-700'}`}
                            >
                                {isDarkTheme ? <MdNightlight className='text-black text-xl font-bold' /> : <MdLightMode className='text-yellow-500 font-bold text-xl' />}
                            </button>
                        </div>

                        {isAuthenticated ? navLinks.map(({ to, label }, index) => (
                            <NavLink
                                key={index}
                                to={to}
                                className={({ isActive }) => `link-no-border md:mx-4 block py-2 pr-4 pl-3 font-semibold duration-200 ${isActive ? "text-blue-600" : "text-purple-400"}`}
                            >
                                {label}
                            </NavLink>
                        )):<div className='flex'>
                            <NavLink
                                
                                to='/register'
                                className={({ isActive }) => `link-no-border md:mx-4 block py-2 pr-4 pl-3 font-semibold duration-200 ${isActive ? "text-blue-600" : "text-purple-400"}`}
                            >
                                Sinup
                            </NavLink>
                            <NavLink
                                
                                to='/'
                                className={({ isActive }) => `link-no-border md:mx-4 block py-2 pr-4 pl-3 font-semibold duration-200 ${isActive ? "text-blue-600" : "text-purple-400"}`}
                            >
                                Login
                            </NavLink></div>}

                        {isAdmin && (
                            <NavLink
                                to="/admin/dashboard"
                                className={({ isActive }) => `link-no-border md:mx-1 md:pr-8 block py-2 pr-4 pl-3 font-semibold duration-200 ${isActive ? "text-blue-600" : "text-purple-400"}`}
                            >
                                Dashboard
                            </NavLink>
                        )}
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="lg:hidden" id="mobile-menu">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {isAuthenticated ? navLinks.map(({ to, label }, index) => (
                            <NavLink
                                key={index}
                                to={to}
                                className={({ isActive }) => `link-no-border block py-2 pr-4 pl-3 font-semibold duration-200 ${isActive ? "text-blue-600" : "text-purple-400"}`}
                            >
                                {label}
                            </NavLink>
                        )):<div >
                        <NavLink
                            
                            to='/register'
                            className={({ isActive }) => `link-no-border md:mx-4 block py-2 pr-4 pl-3 font-semibold duration-200 ${isActive ? "text-blue-600" : "text-purple-400"}`}
                        >
                            Sinup
                        </NavLink>
                        <NavLink
                            
                            to='/'
                            className={({ isActive }) => `link-no-border md:mx-4 block py-2 pr-4 pl-3 font-semibold duration-200 ${isActive ? "text-blue-600" : "text-purple-400"}`}
                        >
                            Login
                        </NavLink></div>}

                        {isAdmin && (
                            <NavLink
                                to="/admin/dashboard"
                                className={({ isActive }) => `link-no-border block py-2 pr-4 pl-3 font-semibold duration-200 ${isActive ? "text-blue-600" : "text-purple-400"}`}
                            >
                                Dashboard
                            </NavLink>
                        )}

                        {/* Theme Toggle in Mobile Menu */}
                        <div className="flex mx-4 mt-4">
                            <button
                                onClick={toggleTheme}
                                className={`p-1 rounded-full transition duration-300 ${isDarkTheme ? 'bg-white' : 'bg-gray-700'}`}
                            >
                                {isDarkTheme ? <MdNightlight className='text-black text-xl font-bold' /> : <MdLightMode className='text-yellow-500 font-bold text-xl' />}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Header;
