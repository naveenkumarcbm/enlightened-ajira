import React, { useContext } from 'react';
import { AjirContext } from '../../App';
import Category from '../../components/category';
import Gallery from '../../components/gallery';
import LatestCollection from '../../components/latest-collections';
import Profile from '../../components/profile';
import Review from '../../components/review';
import Subscriber from '../../components/subscriber';

const Main = () => {
  const [toogle,] = useContext(AjirContext);

return (
  <main>
    {toogle ? (
      <Profile />
    ) : (
      <>
        <Category />
        <Gallery />
        <LatestCollection />
        <Review />
        <Subscriber />
      </>
    )}
  </main>
);
  }

export default Main;
