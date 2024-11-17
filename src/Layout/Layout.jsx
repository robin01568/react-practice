import React from 'react';
import Footer from '../components/Client/Footer';
import Header from '../components/Client/Header';
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
}

export default Layout;
