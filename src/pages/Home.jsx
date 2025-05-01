import React from 'react';
import Navbar from '../components/Navbar';
import CategoryMenu from '../components/CategoryMenu';
import Fooditems from '../components/Fooditems';
import Cart from '../components/Cart';

const Home = () => {
  return (
    <>
      <Navbar />
      <CategoryMenu />
      <Fooditems />
      <Cart />
    </>
  )
}

export default Home
