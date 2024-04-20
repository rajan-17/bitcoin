import React, { useState } from 'react'
import DropDown from '../pages/DropDown'
import Button from './Button';


const Header = () => {
  const [openProfile, setOpenProfile]= useState(false);
  const [btn, setBtn]= useState(false);
    return (
        <>
        <div className='header'>
            <div className="headrow1">
                <div className="time">
                    <p>9:45</p>
                </div>
                <div className="icons">
                    <i className=" icon fa-solid fa-signal"></i>
                    <i className=" icon fa-solid fa-wifi"></i>
                    <i className=" icon fa-solid fa-battery-three-quarters"></i>
                </div>
            </div>
            <div className="headrow2">
                <div className="Arrow">
                <i className="fa-solid fa-less-than"></i>
                </div>
                <div className="wallet">
                    <h2>Bitcoin Wallet</h2>
                </div>
                <div className="more">
                  {
                    openProfile && (

                      <DropDown/>
                    )
                  }
                <i className="fa-solid fa-ellipsis-vertical" onClick={()=> setOpenProfile((prev) => !prev)} ></i>
                </div>
            </div>
            
        </div>
        
        <div className="row2">
          <div className="b1">
            <div className="bchild1">
              <div className="blogo">
                <i className="fa-solid fa-bitcoin-sign"></i>
              </div>
              <div className="btext">
                <p>Bitcoin</p>
              </div>
            </div>
            <div className="bchild2">
              <div className="btext2">
                <p>BTC</p>
              </div>
            </div>
          </div>
          <div className="b2">

            <p className="b2text">3.529020 BTC</p>

          </div>
          <div className="b3">
            <div className="b3child1">
              <p className='b3text'>$19.153 USD</p>
            </div>
            <div className="b3child2">
              <p className='b3text2'>-2.32%</p>
            </div>
          </div>
          <div className="b4">
          {
            btn &&(

              <Button/>
            )
          }
            <div className="">
              <i className="fa-solid fa-chevron-down" onClick={()=> setBtn((prev) => !prev)}></i>
            </div>
          </div>
        </div>
        </>
    )
}

export default Header
