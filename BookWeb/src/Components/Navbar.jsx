import React, { useState } from "react";
import { Link, NavLink } from 'react-router-dom';
import { FiHome, FiUser, FiBookOpen, FiList, FiLogIn } from 'react-icons/fi';

export default function Navbar() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <header className="sticky top-0 z-50 bg-white shadow">
            <nav className="bg-white border-gray-200 px-4 lg:px-8 py-2.5">
                <div className="flex items-center justify-between mx-auto max-w-screen-xl">
                    <Link to="/" className="flex items-center">
                        <div className="hidden md:flex flex-col items-start ml-4">
                            <div className="flex flex-row">
                            <img className="h-12 px-4" src='https://i.postimg.cc/43SDC78P/book-opened-svgrepo-com.png'></img>
                            <div className="flex flex-col items-left">
                            <div className="text-lg font-semibold text-gray-900">Reader's Realm</div>
                            <div className="text-sm text-gray-600">Your Harbor for Honest Reviews</div>
                            </div>
                            </div>
                        </div>
                    </Link>

                    <button
                        onClick={toggleSidebar}
                        type="button"
                        className="lg:hidden text-gray-500 hover:text-gray-700 focus:outline-none focus:text-gray-700"
                        aria-label="toggle menu"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isSidebarOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
                        </svg>
                    </button>

                    <div className="hidden lg:flex lg:items-center lg:space-x-8">
                        <ul className="flex space-x-6 items-center font-medium">
                            <li>
                                <NavLink to='/'
                                    className={({ isActive }) =>
                                        `block py-2 px-4 rounded duration-200 ${isActive ? "text-blue-500" : "text-black"} hover:bg-gray-50 hover:text-blue-400`
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashboard'
                                    className={({ isActive }) =>
                                        `block py-2 px-4 rounded duration-200 ${isActive ? "text-blue-500" : "text-black"} hover:bg-gray-50 hover:text-blue-400`
                                    }
                                >
                                    Dashboard
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/books'
                                    className={({ isActive }) =>
                                        `block py-2 px-4 rounded duration-200 ${isActive ? "text-blue-500" : "text-black"} hover:bg-gray-50 hover:text-blue-400`
                                    }
                                >
                                    Our Books
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/guidelines'
                                    className={({ isActive }) =>
                                        `block py-2 px-4 rounded duration-200 ${isActive ? "text-blue-500" : "text-black"} hover:bg-gray-50 hover:text-blue-400`
                                    }
                                >
                                    Our Guidelines
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/Login'
                                    className={({ isActive }) =>
                                        `block py-2 px-4 rounded duration-200 ${isActive ? "text-blue-500" : "text-black"} hover:bg-gray-50 hover:text-blue-400`
                                    }
                                >
                                    Login/Register
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <div className={`fixed inset-0 z-40 transition-opacity ${isSidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-filter backdrop-blur-sm" onClick={toggleSidebar}></div>
                <div className={`fixed inset-y-0 left-0 w-64 bg-blue-400 bg-opacity-50 backdrop-filter backdrop-blur-lg shadow-lg transform transition-transform duration-300 ease-in-out ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} rounded-r-xl`}>
                    <div className="flex justify-between items-center p-4">
                        <button
                            onClick={toggleSidebar}
                            type="button"
                            className="text-black hover:text-gray-700 focus:outline-none focus:text-gray-700"
                            aria-label="close menu"
                        >
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </button>
                    </div>
                    <ul className="flex flex-col p-6 space-y-6">
                        <li>
                            <NavLink to='/home'
                                onClick={toggleSidebar}
                                className={({ isActive }) =>
                                    `flex items-center space-x-4 py-2 px-6 rounded-lg shadow-md bg-white text-lg font-semibold ${isActive ? "text-blue-500" : "text-gray-900"} hover:bg-gray-200 hover:text-blue-700 transition-transform transform hover:scale-105`
                                }
                            >
                                <FiHome className="w-5 h-5" /> <span>Home</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/dashboard'
                                onClick={toggleSidebar}
                                className={({ isActive }) =>
                                    `flex items-center space-x-4 py-2 px-6 rounded-lg shadow-md bg-white text-lg font-semibold ${isActive ? "text-blue-500" : "text-gray-900"} hover:bg-gray-200 hover:text-blue-700 transition-transform transform hover:scale-105`
                                }
                            >
                                <FiUser className="w-5 h-5" /> <span>Dashboard</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/books'
                                onClick={toggleSidebar}
                                className={({ isActive }) =>
                                    `flex items-center space-x-4 py-2 px-6 rounded-lg shadow-md bg-white text-lg font-semibold ${isActive ? "text-blue-500" : "text-gray-900"} hover:bg-gray-200 hover:text-blue-700 transition-transform transform hover:scale-105`
                                }
                            >
                                <FiBookOpen className="w-5 h-5" /> <span>Books</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/guideline'
                                onClick={toggleSidebar}
                                className={({ isActive }) =>
                                    `flex items-center space-x-4 py-2 px-6 rounded-lg shadow-md bg-white text-lg font-semibold ${isActive ? "text-blue-500" : "text-gray-900"} hover:bg-gray-200 hover:text-blue-700 transition-transform transform hover:scale-105`
                                }
                            >
                                <FiList className="w-5 h-5" /> <span>Guidelines</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/login'
                                onClick={toggleSidebar}
                                className={({ isActive }) =>
                                    `flex items-center space-x-4 py-2 px-6 rounded-lg shadow-md bg-white text-lg font-semibold ${isActive ? "text-blue-500" : "text-gray-900"} hover:bg-gray-200 hover:text-blue-700 transition-transform transform hover:scale-105`
                                }
                            >
                                <FiLogIn className="w-5 h-5" /> <span>Login</span>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
}