import React, { useState, useContext } from 'react';
import forMe from '../../assets/img/forme.png';
import pants from '../../assets/img/pants.png';
import shirts from '../../assets/img/shirts.png';
import tshirt from '../../assets/img/tshirt.png';
import jean from '../../assets/img/jean.png';
import './index.scss';
import { AjirContext } from '../../App';

const category = [
  {
    src: forMe,
    label: 'For Me',
  },
  {
    src: pants,
    label: 'Pants',
  },
  {
    src: shirts,
    label: 'Shirts',
  },
  {
    src: tshirt,
    label: 'T-Shirts',
  },
  {
    src: jean,
    label: 'Jeans',
  },
];

const Category = () => {
  const [active, setActive] = useState(0);
  const [toogle, setToggle] = useContext(AjirContext);

  return (
    <div className='category'>
      <ion-icon name='chevron-back-outline'></ion-icon>
      <div>
      {category.map((ct, i) => (
        <div>
        <div
          key={'cat_' + i}
          className='category-itm'
          onClick={() => setActive(i)}
        >
          <div
            onClick={() => i === 0 && setToggle(!toogle)}
            className={`category-img ${active === i && 'category-img-active'}`}
          >
            <img width='100%' src={ct.src} alt='user' />
          </div>
          <span
            className={`category-lbl ${active === i && 'category-lbl-active'}`}
          >
            {ct.label}
          </span>
        </div>
        </div>
      ))}
      </div>
      <ion-icon className="fwrd" name='chevron-forward-outline'></ion-icon>
    </div>
  );
};

export default Category;
