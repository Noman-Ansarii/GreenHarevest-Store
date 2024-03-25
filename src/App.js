import React from 'react'
import Navbar from './Components/Navbar';
import InrterFace from './Components/InrterFace';
import Silder from './Components/Silder';
import Featured_Items from './Components/Featured_Items';
import Banner from './Components/Banner';
import Products from './Components/Products';
import Blog from './Components/Blog';
import Footer from './Components/Footer';
import OverlaySliderOfNavbar from './Components/OverlaySliderOfNavbar';

function App() {
  return (
    <>
    <OverlaySliderOfNavbar />
    <Navbar />
    <InrterFace />
    <Silder />
    <Featured_Items />
    <Banner />
    <Products />
    <Blog />
    <Footer />
    </>
  );
}

export default App;
