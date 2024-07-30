import React from 'react';

import Nav from '../../comp/comp1/nav';
import Footer from '../../comp/comp4/footer';
import Contact from '../../comp/comp5/Contact';

const Co = () => {
  return (
    <>
    <Nav/>
    <div className='down cont'>
          <Contact/>
          <Footer/>
    </div>

    </>
  );
}

export default Co;
