import { useState } from 'react';
import Input from '../atoms/Input';

const RegisterForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassowrd, setConfirmPassword] = useState('');
  return (
    <form method="post">
      <Input
        id="input-1"
        label="Email"
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
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
        label="Password"
        type="password"
        value={confirmPassowrd}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
    </form>
  );
};

export default RegisterForm;
