import React from 'react';
import './Cart.css'

const Cart = ({cart,handleRemoveItemFromCart}) => {
    let message;
    if(cart.length ===0){
        message = <p>Buy At Least one item</p>
    }
    else{
        message = <p>Thanks For Buying</p>
    }
    return (
        <div className='App'>
            <h3>This is cart</h3>
            <h3>Order Quantity {cart.length}</h3>
            {
                cart.map(tshirt => <p 
                key={tshirt._id}
                className = {`${cart.length === 2 ? `purple` : `orange`}` }   
                >
                    {tshirt.name} <button onClick={()=>handleRemoveItemFromCart(tshirt._id)}>✖</button>
                </p>)
            }
            {
                 message
            }
            {
                cart.length ? <h4>kine valo korso</h4> : <h4>na kinle jaite dibo na</h4>
            }
            {
                cart.length > 0 && <h4>Koto nilo???</h4>
            }
            {
                cart.length > 0 || <h4>taratari kine ne beta, mar khabi nki??</h4>
            }
        </div>
    );
};

export default Cart;