import React from 'react';

const Cart = (props) => {
    console.log('test',props.cart)
    const cart = props.cart;
    let totalFee = 0;
    for (let i = 0; i < cart.length; i++) {
        const course = cart[i];
        totalFee  = totalFee  +course.price;
    }
    return (
        <div>
            <h4 className = "alert-success" >Enrolled Courses {cart.length}, Total Course Fee $ {totalFee}  </h4>
            
        </div>
    );
};

export default Cart;