import React from 'react'

const Card = (props) => {
  return (
    <div className='card'>
        <img src={props.image} alt="" />
        <h2>{props.desc}</h2>
    </div>
  )
}

export default Card
