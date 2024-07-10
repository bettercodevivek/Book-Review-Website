import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FiUser } from 'react-icons/fi';

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');
  const [editing, setEditing] = useState(false);
  const [userInfo, setUserInfo] = useState({
    location: '',
    age: '',
    gender: '',
    dob: '',
    bookPreference: ''
  });
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const { data } = await axios.get('http://localhost:5174/users');
        const loggedInUser = data.find(user => user.email); 

        if (loggedInUser) {
          setUser(loggedInUser);
          setUserInfo({
            location: loggedInUser.location,
            age: loggedInUser.age,
            gender: loggedInUser.gender,
            dob: loggedInUser.dob,
            bookPreference: loggedInUser.bookPreference || ''
          });
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
  };

  const handleEdit = () => {
    setEditing(true);
  };

  const handleSave = async () => {
    try {
      await axios.patch(`http://localhost:5174/users/${user.id}`, userInfo);
      setEditing(false);
    } catch (error) {
      setError('Failed to update user information.');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5174/users/${user.id}`, userInfo);
      setEditing(false);
    } catch (error) {
      setError('Failed to update user information.');
    }
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
    <div className="min-h-screen relative bg-cover bg-center" style={{ backgroundImage: 'url(https://i.postimg.cc/4xC7V9M9/radu-marcusu-mb-KAp-Jz6-RSU-unsplash.webp)' }}>
      <div className="max-w-lg lg:mx-auto sm:mx-auto md:mx-auto bg-inherit backdrop-blur-xl rounded-xl shadow-2xl overflow-hidden relative lg:top-16 sm:top-16 md:top-16 top-40 mx-12">
        <div className="px-6 py-4">
          <h1 className="text-3xl font-bold text-white mb-2">Welcome to Your Dashboard</h1>
          <p className="text-white">Here you can manage your book reviews and more.</p>
        </div>
        <div className="px-6 py-4">
          <h2 className="text-xl font-bold text-white mb-2 flex items-center">
            <FiUser className="mr-2" />
            User Information
          </h2>
          <div className="bg-gray-100 rounded-lg p-4 mt-2">
            <p className="text-gray-700">Username: {user.username}</p>
            <p className="text-gray-700">Email: {user.email}</p>
            <p className="text-gray-700">Location: {userInfo.location}</p>
            <p className="text-gray-700">Age: {userInfo.age}</p>
            <p className="text-gray-700">Gender: {userInfo.gender}</p>
            <p className="text-gray-700">Date of Birth: {userInfo.dob}</p>
            <p className="text-gray-700">Book Preference: {userInfo.bookPreference}</p>
          </div>
        </div>
        <div className="px-6 py-4">
          {editing ? (
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Location</label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  name="location"
                  value={userInfo.location}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Age</label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  name="age"
                  value={userInfo.age}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Gender</label>
                <select
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  name="gender"
                  value={userInfo.gender}
                  onChange={handleChange}
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Date of Birth</label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="date"
                  name="dob"
                  value={userInfo.dob}
                  onChange={handleChange}
                  placeholder="DD/MM/YYYY"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Book Preference</label>
                <select
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  name="bookPreference"
                  value={userInfo.bookPreference}
                  onChange={handleChange}
                >
                  <option value="">Select Book Preference</option>
                  <option value="Fiction">Fiction</option>
                  <option value="Non-Fiction">Non-Fiction</option>
                  <option value="Science Fiction">Science Fiction</option>
                  <option value="Fantasy">Fantasy</option>
                  <option value="Mystery">Mystery</option>
                </select>
              </div>
              <button
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                type="submit"
              >
                Save
              </button>
            </form>
          ) : (
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={handleEdit}
            >
              Edit Information
            </button>
          )}
          <button
            className="ml-2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
