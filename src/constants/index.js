import React from 'react';
import img1 from '../assets/img/img1.jpg';
import img2 from '../assets/img/b2.png';
import img3 from '../assets/img/b3.png';

export const galleryList = [
  {
    src: img1,
    overlay: (
      <>
        <span className='badge'>
          Clothes that <span>respire</span>
        </span>
        <span className='badge'>
          for men who <span>aspire</span>
        </span>
        <button className='btn btn-primary mt-4'>BROWSE COLLECTIONS</button>
      </>
    ),
  },
  {
    src: img2,
    overlay: (
      <>
        <span className='badge'>
          <span>Summer</span> is here and
        </span>
        <span className='badge'>
          so is our <span>collection</span>
        </span>
      </>
    ),
  },
  {
    src: img2,
    overlay: (
      <span className='badge'>
        <span>Wrinkle-free</span> t-shirts
      </span>
    ),
  },
  {
    src: img3,
    overlay: (
      <span className='badge'>
        <span>Stain-free</span> denim shirts
      </span>
    ),
  },
];
