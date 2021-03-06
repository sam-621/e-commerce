import React from 'react';
import '../../styles/atoms/loader.css';

const Loader = ({ width = '20px', height = '20px', border = '5px' }: ILoaderProps) => {
  console.log('loader :)');

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
  width?: string;
  height?: string;
  border?: string;
}

export default Loader;
