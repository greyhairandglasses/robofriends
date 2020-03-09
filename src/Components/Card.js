import React, { Components } from 'react';
import './Card.css';


const Card = ({ name, email, id }) => {
    return (
        <div className='main-card'>
            <img src={`https://robohash.org/${id}?200x200`} alt='test' />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
                <p className='id-ptag'>Prisoner: #{id}</p>
            </div>
        </div>
    )
}


export default Card;