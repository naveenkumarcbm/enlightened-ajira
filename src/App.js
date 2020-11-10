import React, { useState, useContext } from 'react';
import Footer from './layout/footer/Footer';
import Header from './layout/header/Header';
import Main from './layout/main/Main';
export const AjirContext = React.createContext({});

const App = () => {
  const [toogle, setToggle] = useState(false);
  return (
    <AjirContext.Provider value={[toogle, setToggle]}>
      <Header />
      <Main />
      <Footer />
    </AjirContext.Provider>
  );
};

export default App;
