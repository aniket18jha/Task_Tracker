import React, { useState } from 'react';

function Login({ setUser }) {
  const [username, setUsername] = useState('');

  const handleLogin = () => {
    if (username.trim()) {
      localStorage.setItem('user', username);
      setUser(username);
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Enter username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;