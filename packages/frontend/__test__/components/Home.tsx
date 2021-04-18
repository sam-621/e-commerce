import React, { FC } from 'react';

const Home: FC<IHomeProps> = ({ p }: IHomeProps) => {
  return (
    <div>
      <h1>Hola :)</h1>
      <p>{p}</p>
    </div>
  );
};

interface IHomeProps {
  p: string;
}

export default Home;
