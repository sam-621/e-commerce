import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/containers/registerForm.css';

import { Input } from '../atoms/';

const LoginForm = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  return (
    <div className="RegisterForm-container">
      <div className="RegisterForm">
        <div className="RegisterForm-header">
          <h1>Login</h1>
        </div>
        <form className="RegisterForm-form">
          <div className="RegisterForm-form-inputContainer">
            <Input placeHolder="Email" setValue={setEmail} type="email" value={email} />
            <Input placeHolder="Password" setValue={setPassword} type="password" value={password} />
          </div>
          <div className="RegisterForm-form-submit">
            <input type="submit" value="Register" />
          </div>
        </form>
        <div className="RegisterForm-footer">
          <p>
            don't you have an account? <Link to="/">Register</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
