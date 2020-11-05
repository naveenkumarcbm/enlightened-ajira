import React, { useState } from 'react';
import './index.scss';
import img from '../../assets/img/img2.png';
import ProfileMenu from './menu';
import Orders from './orders';
import UserForm from './form';

const profileMenu = [
  { id: 1, name: 'My Profile', subMenu: 'Notifications, password' },
  { id: 2, name: 'My orders', subMenu: 'Already have 12 orders' },
  { id: 3, name: 'Shipping addresses', subMenu: '3 addresses' },
];

const orders = [
  {
    order: '#12345678',
    orderDesc: 'Madeup White Cotton Blend Checkered Slim Fit Shirt',
    price: 'Rs 1,899',
    delivery: 'Express Delivery by Sat, Aug 30',
    paymentType: 'Credit Card Payment',
    pending: true,
  },
  {
    order: '#12345678',
    orderDesc: 'Madeup White Cotton Blend Checkered Slim Fit Shirt',
    price: 'Rs 1,000',
    delivery: 'Express Delivery by Sat, Oct 30',
    paymentType: 'Credit Card Payment',
    pending: true,
  },
  {
    order: '#12345678',
    orderDesc: 'Madeup White Cotton Blend Checkered Slim Fit Shirt',
    price: 'Rs 1,299',
    delivery: 'Express Delivery by Sat, Npv 3',
    paymentType: 'Credit Card Payment',
    pending: false,
  },
  {
    order: '#12345678',
    orderDesc: 'Madeup White Cotton Blend Checkered Slim Fit Shirt',
    price: 'Rs 1,899',
    delivery: 'Express Delivery by Sat, Aug 30',
    paymentType: 'Credit Card Payment',
    pending: false,
  },
];

const Profile = () => {
  const [selected, setSelected] = useState(profileMenu[0]);
  
  const menuSelect = (menu) => {
    setSelected(menu);
  };

  return (
    <div className='profile'>
      <div className='profile-detail'>
        <div>
          <div className='profile-container'>
            <div className='profile-image'>
              <img width='100%' src={img} alt='profile' />
            </div>
            <div>
              <h3>Aksah</h3>
              <span>griiskaim@gmail.com</span>
            </div>
          </div>
          <div>
            <ProfileMenu
              profileMenu={profileMenu}
              menuSelect={menuSelect}
              selected={selected}
            />
          </div>
        </div>
        <div className='profile-summary'>
          {selected.id !== 1 && <Orders orders={orders} />}
          {selected.id === 1 && <UserForm />}
        </div>
      </div>
    </div>
  );
};

export default Profile;
