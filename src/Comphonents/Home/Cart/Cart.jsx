import React from 'react';

const Cart = ({showCart,showBalance,balance}) => {
    console.log(showCart)
    return (
        <div>
           <h1 className='text-4xl font-bold'> Hire Actors : {showCart.length}</h1>
           <h2>Balance : {showBalance}</h2>
           <h2>Remaining Balance : {balance} </h2>
           <p>
           {
            showCart.map( name => <li>{name.name}</li>)
           }
           </p>
        </div>
    );
};

export default Cart;