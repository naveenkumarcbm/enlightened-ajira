import React, { useState, useContext } from 'react';
import { AjirContext } from '../../App';
import Logo from '../../components/logo';
import './index.scss';

const menu = ['For Me', 'Jeans', 'Shirts', 'T-Shirts', 'Trousers', 'Shorts'];
const myProfile = ['My Profile', 'My wishlist', 'my orders', 'my address'];
const myBrand = [
  'The Brand',
  'The Made Up store',
  'Franchise and supplieds',
  'Store locator',
];

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [toogle, setToggle] = useContext(AjirContext);
  const [active, setActive] = useState(0);

  return (
    <>
      <header>
        <Logo />
        <div className='menu'>
          {menu.map((m, i) => (
            <span onClick={() => setActive(i)} className={`menu ${i === active ? 'menu-active' : ''} `} key={i}>
              {m}
            </span>
          ))}
        </div>
        <button className="btn btn-primary" onClick={() => setToggle(!toogle)}>Toggle</button>
        <div className='user-actions'>
          <ion-icon className='icons' name='search-outline'></ion-icon>
          <ion-icon className='icons' name='cart-outline'></ion-icon>
          <ion-icon name="heart-outline"></ion-icon>
          <ion-icon className='icons' name='person-outline'></ion-icon>
          <span className='menu-icon'>
            <ion-icon
              onClick={() => setShowMenu(!showMenu)}
              name='menu-outline'
            ></ion-icon>
          </span>
        </div>
      </header>
      {showMenu && (
        <div className='mobile-menu'>
          <div className="close-icon">
            <ion-icon
              onClick={() => setShowMenu(!showMenu)}
              name='close-outline'
            ></ion-icon>
          </div>
          {myProfile.map((val, i) => (
            <h3 className={i === 0 ? 'menu-active' : ''} key={i + val}>
              {val}
            </h3>
          ))}
          <hr />
          {myBrand.map((val, i) => (
            <h3 onClick={() => setActive(i)} className={i === 0 ? 'menu-active' : ''} key={i + val}>
              {val}
            </h3>
          ))}
        </div>
      )}
    </>
  );
};

export default Header;
