import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const { data } = await axios.get('http://localhost:5174/users');
        const user = data.find(user => user.email === email && user.password === password);
  
        if (user) {
          console.log('Login successful!', user);
          navigate('/dashboard'); // Redirect to dashboard on successful login
        } else {
          setError('Invalid email or password. Please try again.');
        }
      } catch (error) {
        setError('Login failed. Please try again.');
      }
  };

  return (
    <div className="max-w-md mx-auto relative top-48 sm:top-24 lg:top-28 md:top-24">
      <form onSubmit={handleSubmit} className="bg-blue-400 shadow-md rounded-xl mx-4 lg:mx-0 md:mx-0 sm:mx-0 px-8 pt-6 pb-8 mb-4">
        <h2 className="text-2xl mb-4 text-center">Login</h2>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-white hover:bg-blue-700 text-blue-500 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Sign In
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
