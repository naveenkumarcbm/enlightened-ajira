import React from 'react';
import Itemcard from '../item-card';
import './index.scss';
const itms = [1, 2, 3, 4, 5, 6, 7];

const LatestCollection = () => {
  return (
    <section className="collection-section">
      <div className='category-title'>
        <span>Latest Collection</span>
      </div>
      <div className='itm-list'>  
        {itms.map((itm, i) => (
          <Itemcard key={i} value={itm} />
        ))}
      </div>
    </section>
  );
};

export default LatestCollection;
