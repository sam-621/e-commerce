import React, { useState, SyntheticEvent } from 'react';
import '../../styles/containers/registerForm.css';
import '../../styles/toastify.css';
import { Link, useHistory } from 'react-router-dom';
import { post } from '../../utils/petitions';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Loader } from '../elements/';
import { Input } from '../elements';
import { HTTPException } from '../../utils/HttpException';
import Cookie from 'universal-cookie';

const RegisterForm = () => {
  const [username, setUsername] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const cookie = new Cookie();
  const history = useHistory();

  async function handleSubmit(e: SyntheticEvent): Promise<void> {
    e.preventDefault();
    setIsLoading(true);

    if (password.length < 6) {
      setIsLoading(false);
      toast.error('Password must have at least 6 characters');
      return;
    }
    try {
      const data = { username, email, password };
      const res = await post('/register', data);

      if (res.status === 201) {
        setIsLoading(false);
        cookie.set('token', res.data.data);
        history.push('/home');
      }
    } catch (e) {
      setIsLoading(false);

      const httpException = new HTTPException(e.message);
      const message = httpException.getRegisterMessage();
      toast.error(message);
    }
  }

  return (
    <>
      <div className="RegisterForm-container">
        <div className="RegisterForm">
          <div className="RegisterForm-header">
            <h1>Create an account</h1>
          </div>
          <form className="RegisterForm-form" onSubmit={handleSubmit}>
            <div className="RegisterForm-form-inputContainer">
              <Input placeHolder="Username" setValue={setUsername} type="text" value={username} />
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
              Already have an account? <Link to="/login">Login</Link>
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

export default RegisterForm;
