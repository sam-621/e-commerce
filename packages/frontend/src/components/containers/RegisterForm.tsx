import { useState } from 'react';
import Input from '../atoms/Input';
import PrimaryButton from '../atoms/Butons/PrimaryButton';

const RegisterForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassowrd, setConfirmPassword] = useState('');

  return (
    <form method="post" className="RegisterForm">
      <h2 className="RegisterForm-title">Register</h2>
      <Input
        id="input-1"
        label="Email"
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        hasError={true}
        errorMessage="An error has occured"
      />
      <Input
        id="input-2"
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Input
        id="input-3"
        label="Confirm password"
        type="password"
        value={confirmPassowrd}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <div className="RegisterForm-submit">
        <PrimaryButton type="submit" text="Create an account" />
      </div>
    </form>
  );
};

export default RegisterForm;
