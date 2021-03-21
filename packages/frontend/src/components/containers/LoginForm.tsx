import React, { useState, SyntheticEvent } from 'react';
import { Link, useHistory } from 'react-router-dom';
import '../../styles/containers/registerForm.css';
import '../../styles/toastify.css';
import { post } from '../../utils/petitions';
import Cookie from 'universal-cookie';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Loader } from '../atoms';
import { Input } from '../elements';
import { HTTPException } from '../../utils/HttpException';

const LoginForm = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const history = useHistory();
  const cookie = new Cookie();

  async function login(e: SyntheticEvent): Promise<void> {
    e.preventDefault();
    setIsLoading(true);

    if (password.length < 6) {
      setIsLoading(false);
      toast.error('Password must have at least 6 characters');
      return;
    }

    try {
      const data = { email, password };
      const res = await post('/login', data);

      if (res.status === 200) {
        setIsLoading(false);
        cookie.set('token', res.data.data);
        history.push('/home');
        return;
      }
    } catch (e) {
      setIsLoading(false);

      const httpException = new HTTPException(e.message);
      const message = httpException.getLoginMessage();
      toast.error(message);
    }
  }

  return (
    <>
      <div className="RegisterForm-container">
        <div className="RegisterForm">
          <div className="RegisterForm-header">
            <h1>Login</h1>
          </div>
          <form className="RegisterForm-form" onSubmit={login}>
            <div className="RegisterForm-form-inputContainer">
              <Input placeHolder="Email" setValue={setEmail} type="email" value={email} />
              <Input
                placeHolder="Password"
                setValue={setPassword}
                type="password"
                value={password}
              />
            </div>
            <div className="RegisterForm-form-submit">
              {isLoading ? <Loader /> : <input type="submit" value="Login" />}
            </div>
          </form>
          <div className="RegisterForm-footer">
            <p>
              Don't you have an account? <Link to="/register">Register</Link>
            </p>
          </div>
        </div>
      </div>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        closeOnClick
        pauseOnFocusLoss
        pauseOnHover
      />
    </>
  );
};

export default LoginForm;
