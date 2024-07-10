import React, { useState, useEffect  } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');
  const navigate=useNavigate();

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const { data } = await axios.get('http://localhost:5174/users');
        const loggedInUser = data.find(user => user.email); 

        if (loggedInUser) {
          setUser(loggedInUser);
        } else {
          setError('User not found.');
        }
      } catch (error) {
        setError('Failed to fetch user information.');
      }
    };

    fetchUserInfo();
  }, []);

  const handleLogout = () => {
      navigate('/login');
    setUser(null);
    setError('');
    // window.location.href = '/login'; // You might use a router navigate instead
  };

  if (error) {
    return (
      <div className="container mx-auto px-6 py-16 text-center">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="container mx-auto px-6 py-16 text-center">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-6 py-16 text-center">
      <h1 className="text-4xl font-bold text-gray-800">Welcome to Your Dashboard</h1>
      <p className="mt-4 text-gray-600">Here you can manage your book reviews and more.</p>
      <div className="mt-8">
        <h2 className="text-2xl font-bold text-gray-800">User Information</h2>
        <p className="mt-2 text-gray-600">Email: {user.email}</p>
        <p className="mt-2 text-gray-600">Username: {user.username}</p>
        {/* Add more user information here */}
      </div>
      <button
        className="mt-8 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
