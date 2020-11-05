import React from 'react';
import Logo from '../../components/logo';
import './index.scss';

const menu = [
  'About Us',
  'Delivery Information',
  'Returns & Exchange',
  'Technical & Privacy',
  'Order Status',
];

const Footer = () => {
  return (
    <footer>
      <div className='footer-menu'>
        {menu.map((itm, i) => (
          <span key={i}>{itm}</span>
        ))}
      </div>
      <div className='logo-container'>
        <Logo />
        <p>Stay in touch with us</p>
        <div>
          <ion-icon name='logo-facebook'></ion-icon>
          <ion-icon name='logo-instagram'></ion-icon>
          <ion-icon name='logo-youtube'></ion-icon>
        </div>
      </div>
      <div className="address">
        <h3>Our Corporate Office </h3>
        <span>No: 7,A2B road, Adayar Rajpuram,</span>
        <span>T-Nagar, Chennai - 642002.</span>
        <p>
          <ion-icon name='mail-outline'></ion-icon>
          sales@madeup.com
        </p>
        <p>
          <ion-icon name='call-outline'></ion-icon>
          044 9999 9999
        </p>
      </div>
    </footer>
  );
};
export default Footer;
