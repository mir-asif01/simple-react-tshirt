import React, { useState } from 'react';
import './Home.css'
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import Tshirt from '../Tshirts/Tshirt';

const Home = () => {
    const tshirts = useLoaderData();
    const [cart, setCart] = useState([]);

    const handleAddToCart = (tshirt) => {
        const exist = cart.find(ts => ts._id === tshirt._id);
        if (exist) {
            alert('Already Added');
            return;
        }
        else {
            const newCart = [...cart, tshirt];
            setCart(newCart)
        }
    }

    const handleRemoveItemFromCart = (id) =>{
        const filteredCart = cart.filter(ts=> ts._id !== id);
        setCart(filteredCart); 
    }

    

    return (
        <div>
            <h1>This is Home</h1>
            <div className="main-container">
                <div className='shirts-container'>
                    {
                        tshirts.map(tshirt => <Tshirt key={tshirt._id} tshirt={tshirt}
                            handleAddToCart={handleAddToCart}></Tshirt>)
                    }
                </div>
                <div>
                    <Cart cart={cart} handleRemoveItemFromCart={handleRemoveItemFromCart}></Cart>
                </div>
            </div>
           
        </div>
    );
};

export default Home;