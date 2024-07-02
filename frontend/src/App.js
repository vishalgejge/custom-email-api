import React, { useState } from 'react';
import './App.css';
import { FaPaperclip, FaEnvelope } from 'react-icons/fa';
import axios from 'axios';

function App() {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');

  const handleSubmit = async () => {
      try {
        const response = await axios.post('http://localhost:8001/sendMail', {
        // const response = await axios.post('https://mailblast-api.vercel.app/sendMail', {
          email,
          otp,
        });
        console.log(response.data);
        alert(response.data);

        // Clear the input fields
        setEmail('');
        setOtp('');
      } catch (error) {
        console.error('Error sending email:', error);
        alert('An error occurred while sending the email.');
      }
  };

  return (
    <div className="container">
      <div className="header">
        <FaEnvelope className="logo" />
        <h1>Email Sender</h1>
      </div>
      <form className="form">
        <div className="form-group">
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="off"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="otp"
            name="otp"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            rows="4"
            autoComplete="off"
          />
        </div>
        <input
          type="button"
          value="Send Email"
          className="submit-button"
          onClick={handleSubmit}
        />
      </form>
      <div className="footer">
        <FaPaperclip className="footer-icon" />
        <p>&copy; {new Date().getFullYear()} Vishal Gejge. All rights reserved.</p>
      </div>
    </div>
  );
}

export default App;
