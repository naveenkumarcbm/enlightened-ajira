import React, { useState } from 'react';
import Footer from './layout/footer/Footer';
import Header from './layout/header/Header';
import Main from './layout/main/Main';

const App = () => {
  const [toogle, setToggle] = useState(false)
  return (
    <>
      <Header onToggle={() => setToggle(!toogle)} />
      <Main toogle={toogle} />
      <Footer />
    </>
  );
};

export default App;
