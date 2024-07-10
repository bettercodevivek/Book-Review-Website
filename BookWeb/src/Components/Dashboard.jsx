import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');
  const [editing, setEditing] = useState(false); // State for editing mode
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
        const loggedInUser = data.find(user => user.email); // Update this logic as per your application

        if (loggedInUser) {
          setUser(loggedInUser);
          setUserInfo({
            location: loggedInUser.location,
            age: loggedInUser.age,
            gender: loggedInUser.gender,
            dob: loggedInUser.dob, // Assuming dob is stored as string
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
      // Update user information using API call (example: PATCH request)
      await axios.patch(`http://localhost:5174/users/${user.id}`, userInfo);
      setEditing(false);
      // Optionally, fetch updated user data after saving
      // fetchUserInfo();
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
      // Update user information using API call (example: PATCH request)
      await axios.patch(`http://localhost:5174/users/${user.id}`, userInfo);
      setEditing(false);
      // Optionally, fetch updated user data after saving
      // fetchUserInfo();
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
    <div className="container mx-auto px-6 py-16">
      <div className="max-w-lg mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="px-6 py-4">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Welcome to Your Dashboard</h1>
          <p className="text-gray-600">Here you can manage your book reviews and more.</p>
        </div>
        <div className="px-6 py-4">
          <h2 className="text-xl font-bold text-gray-800 mb-2">User Information</h2>
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
