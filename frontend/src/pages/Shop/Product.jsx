import React from 'react';

const Product = (props) => {
  const {id, productName, price, productImage}=props.data

  return (
    <div className="product">
      <img src={productImage} alt="" />
      <div className="description">
        <p> 
          <b>{productName}</b> 
        </p>
        <p>
          R$ {price}
        </p>
      </div>
    </div>
  );
}

export {
  Product
}
