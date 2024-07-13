import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './Signup.css';

const Signup = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const history = useHistory();

  const { username, password } = formData;

  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
    history.push('/login'); 
  };

  return (
    <div className="signup">
      <h2>Sign Up</h2>
      <form onSubmit={onSubmit}>
        <label>
          Username:
          <input type="text" name="username" value={username} onChange={onChange} required />
        </label>
        <label>
          Password:
          <input type="password" name="password" value={password} onChange={onChange} required />
        </label>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;



