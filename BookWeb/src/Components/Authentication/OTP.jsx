import React, { useState } from 'react';
import axios from 'axios';

const OTPVerification = () => {
  const [otp, setOTP] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://your-api-url/verify-otp', { otp });
      console.log('OTP verification successful!', response.data);
      // Handle success - perhaps redirect to profile completion
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          value={otp}
          onChange={(e) => setOTP(e.target.value)}
          placeholder="Enter OTP"
          className="border p-2 w-full"
          required
        />
        {error && <p className="text-red-500">{error}</p>}
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Verify OTP
        </button>
      </form>
    </div>
  );
};

export default OTPVerification;
