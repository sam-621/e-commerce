import { useState } from 'react';
import Input from '../atoms/Input';
import PrimaryButton from '../atoms/Butons/PrimaryButton';
import { useRegister } from '@Hooks/useRegister';

const RegisterForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassowrd, setConfirmPassword] = useState('');
  const [canRun, setCanRun] = useState(false);

  const [error] = useRegister(canRun, { email, password });

  return (
    <form method="post" className="RegisterForm" onSubmit={() => setCanRun(!canRun)}>
      <h2 className="RegisterForm-title">Register</h2>
      <Input
        id="input-1"
        label="Email"
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        hasError={!!error}
        errorMessage={error}
      />
      <Input
        id="input-2"
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        hasError={!!error}
        errorMessage={error}
      />
      <Input
        id="input-3"
        label="Confirm password"
        type="password"
        value={confirmPassowrd}
        onChange={(e) => setConfirmPassword(e.target.value)}
        hasError={!!error}
        errorMessage={error}
      />
      <div className="RegisterForm-submit">
        <PrimaryButton type="submit" text="Create an account" />
      </div>
    </form>
  );
};

export default RegisterForm;
