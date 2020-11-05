import React from 'react';
import img from '../../../assets/img/shirt.png';

const Orders = ({ orders }) => {
  return (
    <div>
      <h3 className="form-title">My Orders</h3>
      {orders.map((order, i) => (
        <div>
          <div className='flex-center'>
            <div className='order-img'>
              <img width='100%' src={img} alt='order' />
            </div>
            <div className='order-card'>
              <div className='flex-between'>
                <span>Order {order.order}</span>
                <span>{order.paymentType}</span>
              </div>
              <div className='flex-between'>
                <h3>{order.orderDesc}</h3>
                <h3>{order.price}</h3>
              </div>
              <div className='flex-between'>
                <span>{order.delivery}</span>
                <b>
                  <ion-icon name='chevron-down-outline'></ion-icon>
                  <ion-icon name="chevron-forward-outline"></ion-icon>
                </b>
              </div>
            </div>
          </div>
          <div className='order-card-status'>
            <span
              className={`order-status ${
                order.pending
                  ? 'order-status-pending'
                  : 'order-status-delivered'
              }`}
            >
              Pending
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Orders;
