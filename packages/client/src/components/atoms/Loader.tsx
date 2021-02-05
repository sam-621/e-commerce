import React from 'react';
import '../../styles/atoms/loader.css';

const Loader = ({ width, height, border }: ILoaderProps) => {
  return (
    <div className="Loader-container">
      <div
        className="Loader"
        style={{
          width: width,
          height: height,
          border: `${border} solid #c4c4c4`,
          borderLeft: `${border} solid #2f80ed`,
        }}
      ></div>
    </div>
  );
};

interface ILoaderProps {
  width: string;
  height: string;
  border: string;
}

export default Loader;
