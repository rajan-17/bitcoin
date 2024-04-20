import React from 'react'

const Footer = () => {
  return (
    <div>
              <div className="row5">
          <div className="buysell">
            <div className="buy">
              <i className="fa-solid fa-dollar-sign"></i>
              <p className='gtext'>Buy BTC</p>
            </div>
            <div className="sell">
              <i className="fa-solid fa-dollar-sign pink"></i>
              <p className='gtext'>Sell BTC</p>
            </div>

          </div>
        </div>
        <div className="row6">
          <ul className='footer'>
            <li><i className="ficon fa-solid fa-wallet"></i></li>
            <li><i className="ficon fa-solid fa-compass"></i></li>
            <li><i className="ficon fa-solid fa-bell"></i></li>
            <li><i className="ficon fa-solid fa-gear"></i></li>
          </ul>
          <div className="recent"></div>
        </div>
    </div>
  )
}

export default Footer
