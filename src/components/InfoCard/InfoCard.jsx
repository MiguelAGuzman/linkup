import React from 'react'
import './InfoCard.css'
import {UilPen} from '@iconscout/react-unicons'

const InfoCard = () => {
  return (
    <div className="InfoCard">
        <div className="infoHead">
            <h4>Tour Info</h4>
            <div>
                <UilPen width='2rem' height='1.2rem'/>
            </div>
        </div>

        <div className="info">
            <span>
                <b>Status</b>
            </span>
            <span>in Relationship</span>
        </div>

        <div className="info">
            <span>
                <b>Lives in</b>
            </span>
            <span>Multan</span>
        </div>

        <div className="info">
            <span>
                <b>Works at</b>
            </span>
            <span>FLNG</span>
        </div>

        <button className='button'>Logout</button>
    </div>
  )
}

export default InfoCard