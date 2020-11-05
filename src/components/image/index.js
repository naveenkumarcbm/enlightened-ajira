import React from 'react';
import './index.scss'

const Image = ({ src, style, children, ...props }) => {
  console.log(props);
  return (
    <div className="img-container" style={style}>
      <img width='100%' src={src} alt='' />
      <div>{children}</div>
    </div>
  );
};

export default Image;
