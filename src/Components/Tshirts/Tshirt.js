import React from 'react';
import './Tshirts.css'

const Tshirt = ({tshirt,handleAddToCart}) => {
    const {name,picture} = tshirt;
    return (
        <div className='tshirt'>
            <img src={picture} className='t-img' alt="" />
            <h4>{name}</h4>
            <button onClick={()=>handleAddToCart(tshirt)}>Add To Cart</button>
        </div>
    );
};

export default Tshirt;