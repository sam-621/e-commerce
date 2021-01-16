import React, { useState, SyntheticEvent } from 'react';
import '../../styles/containers/registerForm.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

import { Input } from '../atoms/';
import { API_KEY, API_URI } from '../../config/';

const RegisterForm = () => {
  const [username, setUsername] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  console.log(API_KEY, API_URI);

  async function handleSubmit(e: SyntheticEvent): Promise<void> {
    e.preventDefault();

    if (password.length < 6) {
      alert('Password must have at least 6 characters');
      return;
    }
    try {
      const data = { username, email, password };
      const res = await axios.post(`${API_URI}/register`, data, { headers: { api_key: API_KEY } });
      console.log(res, 'res');

      if (res.status === 200) {
        alert('User registered');
      }
    } catch (e) {
      console.log(e, 'catch');
    }
  }

  return (
    <div className="RegisterForm-container">
      <div className="RegisterForm">
        <div className="RegisterForm-header">
          <h1>Create an account</h1>
        </div>
        <form className="RegisterForm-form" onSubmit={handleSubmit}>
          <div className="RegisterForm-form-inputContainer">
            <Input placeHolder="Username" setValue={setUsername} type="text" value={username} />
            <Input placeHolder="Email" setValue={setEmail} type="email" value={email} />
            <Input placeHolder="Password" setValue={setPassword} type="password" value={password} />
          </div>
          <div className="RegisterForm-form-submit">
            <input type="submit" value="Register" />
          </div>
        </form>
        <div className="RegisterForm-footer">
          <p>
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
