import React from 'react';
import './CartWidgets.css';
import cartIcon from '../assets/carritodecompras.svg';

const CartWidgets = () => {
  return (
    <div className="cart-widgets">
      <img src={cartIcon} alt="Cart" />
      <span className="cart-item-count">0</span>
    </div>
  );
}

export default CartWidgets;


