import React from 'react';
import jean from '../../assets/img/jeans.png';
import shirt from '../../assets/img/shirt.png';
import './index.scss';

const Itemcard = ({ value }) => {
  return (
    <div className='itm-card'>
      {value && <>
        <img src={value % 2 === 0 ? jean : shirt} alt='product' />
        <span>Printed Polo T-Shirt</span>
        <span className='ajira-primary'>₹1,499.00</span>
      </>}
    </div>
  );
};

export default Itemcard;
