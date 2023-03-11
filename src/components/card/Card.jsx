import React from 'react';
import './card.css';



const Card = (props) => {
  return (
    <div className='card'>
        <img className='card__img' src={ props.image } alt={ props.alt } />
        <p className='name'>{ props.name }</p>

    </div>
  )
}

export default Card