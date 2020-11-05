import React from 'react';
import shirt from '../../../assets/img/shirt.png';
import './index.scss';

const Card = () => {
  return (
    <div className='card-container'>
      <div className='reviewer'>
        <img width="100%" src={shirt} alt='user' />
      </div>
      <div className="card-content">
        <div className='reviewer-name'>
          <h3>Vikas</h3>
          <div>
            {[1, 2, 3, 4, 5].map((s, i) => (
              <ion-icon
                key={s}

                name='star-outline'
                style={{ color: '#FDC02F', fontSize: '1.6rem', marginRight: 4 }}
              ></ion-icon>
            ))}
          </div>
        </div>
        <p>
          Love the cloth material! So breezy and comfortable. Really durable as
          well. I must say the jeans I bought was worth the price
        </p>
      </div>
    </div>
  );
};

export default Card;
