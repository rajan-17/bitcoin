import React from 'react'
import phoneimg from '../assest/ihphone.png';
import Header from '../comp/Header';
import Footer from './Footer';
import Week from '../pages/Week';


const Mainbody = () => {
  return (
    <div className='main-body'>
      <div className='innerbody'>
        <Header />

      <Week/>

        <Footer/>

      </div>

      {/* <img className='phimg' src={phoneimg} alt="" /> */}
    </div>
  )
}

export default Mainbody
