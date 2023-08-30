import React, { useEffect, useState } from 'react'
import "./Payment.css"
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';
import { Link ,useNavigate} from 'react-router-dom';
import {CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from './reducer';
import axios from './axios';

    



function Payment() {

  const [{basket,user},dispatch]=useStateValue();
  const navigate = useNavigate();

  const stripe=useStripe();     //two imp hooks
  const element=useElements();

  const [succeeded,setSucceeded] = useState(false);
  const [processing,setProcessing] = useState("");
  const [error,setError]= useState(null);
  const [disabled,setDisabled]=useState(true);
  const [clientSecret, setClientSecret]=useState(true);

  useEffect(()=>{
    //it run when payment component load   as well as any componet of basket has change

      //generate the special stripe secreate which allow us to charge a customer

      const getClientSecret =async()=>{
            const response= await axios ({
                method:'post',

                //stripe except the total in current currency subunits

                 // eslint-disable-next-line no-undef
                 url:`payments/create?total=${getBasketTotal(basket)*100}`
            });  //axios is a way of making request we can make post reqest get request any thing that
            setClientSecret(response.data.clientSecret)  //backend
      }
      getClientSecret();   //whenever the basket changes it will make these request and update the stripe secrete which allows a customer to correct amount
  },[basket])

  console.log("the secrete is",clientSecret)

  const handleSubmit=async(event)=>{
    //do all fancy stuff
    event.preventDefault();
    setProcessing(true)     //when user click on buy button more than one time it will block other click
    
    const payload =await stripe.confirmCardPayment(clientSecret,{
      payment_method:{
        card: element.getElement(CardElement)
      }
    }).then(({paymentIntent})=>{
      //paymentIntent=payment conformation
      setSucceeded(true);
      setError(null)
      setProcessing(false)

      navigate.replace('/orders')    //here may error occur
    })
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
              value={getBasketTotal(basket)}
              displayType={'text'}
              thousandSeparator={true}
              prefix={"₹"}
              />

              <button disabled={processing || disabled || succeeded}>    {/**when there is nothing in card list it desable  */}
                <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
              </button>
            </div>
            {/**Errors */}
            {error && <div>{error}</div>}
          </form>

        </div>
      </div>

      </div>
    </div>
  )
}

export default Payment;
