import React from 'react';
import './Checkout.css';
import './Subtotal';
import Subtotal from './Subtotal';
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';



function Checkout() {
  const [{ basket , user },dispatch]= useStateValue();   // pull items from basket

  return (
    <div className='checkout'>
    <div className="checkout__left">
        <img src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB23492668_.jpg" alt="" className="checkout__ad" />
        <div>
            <h3>hello,{user ? user?.email: 'guest'}</h3>  {/**if user present then mail show otherwise none */}
            <h2 className="checkout__title">
                your shopping basket
            </h2>
            
            {basket.map(item=>(      //printing every single product in basket
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}

              />
            ))}

            {/*CheckoutProduct*/}
            {/*CheckoutProduct*/}
            {/*CheckoutProduct*/}
            {/*CheckoutProduct*/}
            {/*CheckoutProduct*/}
        </div>
    </div>

    <div className="checkout__right">
      <Subtotal/>
    </div>
    </div>
  )
}

export default Checkout;



