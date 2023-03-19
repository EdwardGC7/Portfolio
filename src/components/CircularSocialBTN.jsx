import React from 'react'
import '../styles/circularSocialBTN.css';


const CircularSocialBTN = ({Iconfa, bColor='black'}) => {
  return (
    <div className='circular_social_btn' style={{border: `1px solid ${bColor}`}}>
      {Iconfa}
    </div>
  )
}

export default CircularSocialBTN