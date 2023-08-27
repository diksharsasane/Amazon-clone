import React from 'react'   //rfce
import "./CheckoutProduct.css";
import { useStateValue } from './StateProvider';

function CheckoutProduct({id,image,title,price,rating}) {

  const [{ basket },dispatch]= useStateValue(); //(magic snift code)   pull info by basket and change info using dispatch

  const removeFromBasket=()=>{
    //remove items from basket
    dispatch({
      type:'REMOVE_FROM_BASKET',
      id:id,
    })
  }

  return (
    <div className='checkoutProduct'>
      <img className='checkoutProduct__image' src={image} />

      <div className='checkoutProduct__info'>
      <p className='checkoutProduct__title'>{title}</p>
      <p children='checkoutProduct__price'>
        <small>₹</small>
        <strong>{price}</strong>
      </p>
        <div className='checkoutProduct__rating'>
            {
                Array(rating).fill().map((_,i)=>(
                    <p>⭐</p>
                ))
            }
            <button onClick={removeFromBasket}>Remove from basket</button>
        </div>
      </div>
    </div>
  )
}

export default CheckoutProduct;
