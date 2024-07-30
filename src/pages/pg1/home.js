import React from 'react';
import Nav from '../../comp/comp1/nav';
import Slider from '../../comp/comp3/slider';
import Footer from '../../comp/comp4/footer';


function Home() {
  return (

    <>
    <Nav/>
    <div className='down'>
          <Slider/>
          <Footer/>
    </div>

    </>
  );
}

export default Home;