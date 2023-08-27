import React from 'react';
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from './StateProvider';
import { getbasketTotal } from './reducer';
import {useNavigate} from "react-router-dom";


function Subtotal() {
  //const history =useHistory();       //browser history
  const navigate = useNavigate();   //use instead of history
  const [{ basket },dispatch]= useStateValue();

  return (
    <div className='subtotal' >
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal of {basket.length} items: <strong>{value}</strong>
            </p>
            <small className='subtotal__gift'>
              <input type='checkbox'/>
              This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getbasketTotal(basket)} // part of the hw
        displayType={"text"}
        thousandSeparator={true}
        prefix={"₹"}
      />

     
<button onClick={() => navigate("/Payment")}>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
