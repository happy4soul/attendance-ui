import React, { useState } from 'react';
import './LoginComponent.css'

const LoginComponent = ({ handleLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(username, password);
  };

  return (
    <div className='login-container'>
      <h2>Login to Mark Attendance</h2>
      <form onSubmit={handleSubmit}>
      
        <input
        className='form-input'
          type="text"
          placeholder="your username..."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
        className='form-input'
          type="password"
          placeholder="your password..."
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginComponent;
