import React from 'react';
import Card from './card';
import './index.scss';

const Review = () => {
  return (
    <>
      <section className='review-section'>
        <div className='category-title testimoinal'>
          <span>Testimonials</span>
        </div>
        <div className="review-list">
          {[1, 2, 3].map((k) => (
            <Card key={k} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Review;
