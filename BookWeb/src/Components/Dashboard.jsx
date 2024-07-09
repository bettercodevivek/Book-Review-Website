import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          navigate('/login');
          return;
        }

        const response = await axios.get('http://localhost:5173/user', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setUser(response.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
        navigate('/login');
      }
    };

    fetchUser();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto px-6 py-16 text-center">
      <h1 className="text-4xl font-bold text-gray-800">Welcome to Your Dashboard</h1>
      <p className="mt-4 text-gray-600">Here you can manage your book reviews and more.</p>
      <div className="mt-6">
        <h2 className="text-2xl font-semibold text-gray-700">User Information</h2>
        <p className="mt-2 text-gray-600">Email: {user.email}</p>
        <p className="mt-2 text-gray-600">Username: {user.username}</p>
      </div>
      <button
        onClick={handleLogout}
        className="mt-8 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
