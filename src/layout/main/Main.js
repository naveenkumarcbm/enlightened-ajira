import React from 'react';
import Gallery from '../../components/gallery';
import LatestCollection from '../../components/latest-collections';
import Profile from '../../components/profile';
import Review from '../../components/review';
import Subscriber from '../../components/subscriber';

const Main = ({ toogle }) => (
  <main>
    {toogle ? (
      <Profile />
    ) : (
      <>
        <Gallery />
        <LatestCollection />
        <Review />
        <Subscriber />
      </>
    )}
  </main>
);

export default Main;
