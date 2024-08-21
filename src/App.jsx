import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

import './Global/Global.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  const { pathname } = useLocation();

  // SCROLL TO TOP
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Navbar />
      <Outlet />
      <Footer id='Footer' />
    </>
  );
}

export default App;
