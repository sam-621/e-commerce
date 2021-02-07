import React, { useState, SyntheticEvent } from 'react';
import { Link, useHistory } from 'react-router-dom';
import '../../styles/containers/registerForm.css';
import axios from 'axios';
import Cookie from 'universal-cookie';

import { Input } from '../atoms/';
import { API_KEY, API_URI } from '../../config';
import { HTTPException } from '../../utils/HttpException';

const LoginForm = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const history = useHistory();
  const cookie = new Cookie();

  async function login(e: SyntheticEvent): Promise<void> {
    e.preventDefault();

    if (password.length < 6) {
      alert('Password must have at least 6 characters');
      return;
    }

    try {
      const data = { email, password };
      const res = await axios.post(`${API_URI}/login`, data, { headers: { api_key: API_KEY } });

      if (res.status === 200) {
        cookie.set('token', res.data.data);
        history.push('/home');
        return;
      }
    } catch (e) {
      const httpException = new HTTPException(e.message);
      const message = httpException.getLoginMessage();
      alert(message);
    }
  }

  return (
    <div className="RegisterForm-container">
      <div className="RegisterForm">
        <div className="RegisterForm-header">
          <h1>Login</h1>
        </div>
        <form className="RegisterForm-form" onSubmit={login}>
          <div className="RegisterForm-form-inputContainer">
            <Input placeHolder="Email" setValue={setEmail} type="email" value={email} />
            <Input placeHolder="Password" setValue={setPassword} type="password" value={password} />
          </div>
          <div className="RegisterForm-form-submit">
            <input type="submit" value="Login" />
          </div>
        </form>
        <div className="RegisterForm-footer">
          <p>
            Don't you have an account? <Link to="/register">Register</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
