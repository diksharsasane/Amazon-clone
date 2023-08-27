import React, { useState } from 'react'
import "./Payment.css"
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';
import { Link } from 'react-router-dom';
import {CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import { getbasketTotal } from './reducer';



function Payment() {

  const [{basket,user},dispatch]=useStateValue();

  const [error,setError]= useState(null);
  const [disabled,setDisabled]=useState(true);

  const stripe=useStripe();     //two imp hooks
  const element=useElements();

  const handleSubmit=e=>{
    //do all fancy stuff
  }
  const handleChange=e=>{
    //Listen for changes in CardElement
    //and display any error as the customer type their card details

    setDisabled(e.empty);
    setError(e.error ? e.error.message:"");
  }

  return (
    <div className='payment'>
      <div className='payment__container'>
        <h1>
          Checkout(<Link to="/checkout">
            {basket?.length} items
          </Link>)
        </h1>
      {/*Payment section -delivery address */}
      <div className="payment__section">
        <div className="payment__title">
          <h3>Delivery Address:</h3>
        </div>
        <div className="patment__address">
          <p>{user?.email}</p>  {/**pulling from datalink for that we creating a function const[{basket,user},dispatch]=useStateValue() */}
          <p>123 React Lane</p>
          <p>Los Angles, CA</p>
        </div>

      </div>

      {/*payment section- review items */}
      <div className="payment__section">
      <div className="payment__title">
          <h3>Review items and delivery</h3>
      </div>
        <div className="payment__items">
          {basket.map(item=>(
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>

      {/*payment section -payment method */}
      <div className="payment__section">
            <div className="payment__title">
              <h3>Payment Method</h3>
            </div>
        <div className="payment__detail">
          {/*Stripe magic will go. */}  {/*we can do recurring payment  */}

          <form onSubmit={handleSubmit}>
            <CardElement onChange={handleChange}/>
            <div className="payment__priceContainer">
              <CurrencyFormat
              renderText={(value)=>(
              <>
                <h3>Order Total : {value}</h3>
              </>)}
              decimalScale={2}
              value={getbasketTotal(basket)}
              displayType={'text'}
              thousandSeparator={true}
              prefix={"₹"}
              />
            </div>
          </form>

        </div>
      </div>

      </div>
    </div>
  )
}

export default Payment;
