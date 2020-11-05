import React from 'react';
import { galleryList } from '../../constants';
import Image from '../image';
import './index.scss';

const Gallery = () => {
  return (
      <div className='gallery'>
        {galleryList.map((itm, i) => (
          <Image key={i} {...itm}>{itm.overlay}</Image>
        ))}
      </div>
  );
};

export default Gallery;
