import React from 'react'
import { Link } from 'react-router-dom';
import grap from '../assest/Screenshot 2024-04-20 023015.png'

const Year = () => {
    return (
        <>
            <div className="row3">

                <ul>
                    <Link to='/Day'><li>Day</li></Link>
                    <Link to='/'><li>Week</li></Link>

                    <Link to='/month'><li>Month</li></Link>
                    <Link to='/year'><li className='active'>Year</li></Link>
                </ul>


            </div>
            <div className="row4">
                <div className="grap">
                <div className="gchild1"> <div className="red"></div> <p>Lower: $12.895</p></div>
          <div className="gchild2"> <div className="green"></div> <p>higher: $14.857</p></div>
                </div>
                <div className="grapimg">
            <img  style={{height : '96px'}} src={grap} alt="" />
          </div>
            </div>



        </>
    )
}

export default Year
