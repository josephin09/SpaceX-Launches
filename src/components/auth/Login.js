import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const history = useHistory();

  const { username, password } = formData;

  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');
    
    if (username === storedUsername && password === storedPassword) {
      history.push('/launches');
    } else {
      alert('Invalid username or password');
    }
  };

  return (
    <div className="login">
      <h2>Login</h2>
      <form onSubmit={onSubmit}>
        <label>
          Username:
          <input type="text" name="username" value={username} onChange={onChange} required />
        </label>
        <label>
          Password:
          <input type="password" name="password" value={password} onChange={onChange} required />
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;





