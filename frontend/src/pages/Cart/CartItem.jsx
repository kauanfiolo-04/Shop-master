import React, { useContext } from 'react';
import { ShopContext } from '../../context/shop-context';

const CartItem = (props) => {
  const { id, productName, price, productImage } = props.data
  const { cartItems } = useContext(ShopContext)

  return (
    <div className='cartItem'>
      <img src={productImage} alt=''/>
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p>
          R$ {price}
        </p>
        <div className="countHandler">
          <button> - </button>
          <input type="text" value={cartItems[id]}/>
          <button> + </button>
        </div>
      </div>
    </div>
  );
}

export {
  CartItem
}
