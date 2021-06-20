import { FC } from 'react';

const Subtitle: FC<ISubtitleProps> = ({ text }) => {
  return (
    <>
      <h2>{text}</h2>
    </>
  );
};

interface ISubtitleProps {
  text: string;
}

export default Subtitle;
