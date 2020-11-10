import React from 'react';
import UserForm from '../form';
import '../index.scss';

const ProfileMenu = ({ profileMenu, selected, menuSelect }) => {
  return (
    <div>
      {profileMenu.map((menu, i) => (
        <>
          <div
            key={i}
            className={`profile-menu ${
              selected.name === menu.name ? 'menu-selected' : ''
            }`}
            onClick={() => menuSelect(menu)}
          >
            <div className='profile-menu-item'>
              <h3>{menu.name}</h3>
              <h3>
                <ion-icon name='chevron-down-outline'></ion-icon>
                <ion-icon name='chevron-forward-outline'></ion-icon>
              </h3>
            </div>
            <span>{menu.subMenu}</span>
          </div>
          <div className='show-mobile'>
            {menu.id === selected.id && menu.content}
          </div>
        </>
      ))}
    </div>
  );
};

export default ProfileMenu;
