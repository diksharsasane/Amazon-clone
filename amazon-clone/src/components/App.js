import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Login from './Login';
import { auth } from '../firebase';
import { useStateValue } from './StateProvider';
import Payment from './Payment';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const promise=loadStripe('pk_test_51Nj3UISJIcMicnHBSnhGUVpHBJhfjSijsJIvu720TuhRwDopnQVxFW3Msz9lODV17eJ4pPpF1TkPAGXYTR2NeRTC00FU1wFrne');

//we need to keep track who is  signed in

function App() {

  const [{},dispatch]=useStateValue();  //magic react context api..

  useEffect(()=>{   //it like an if statement in react
    // it will only run once when the app component load

    auth.onAuthStateChanged(authUser =>{      //when app load we attach this lisner    like when we log in or logout it refire yhe code
      console.log('THE USER IS >>>>>>',authUser); //for debugging

      if(authUser){
        //user just logged in / user was loggedin
        dispatch({   //OBJECT
          type:'SET_USER',
          user:authUser   //send user come from firebase  ===>(if user logged in or was logged in and refresh page then these user auto logged in)
        })
      }
      else{
        //user logged out
        dispatch({
          type:'SET_USER', //==>if user logged out then user info delete from data link and set null
          user:null                 //this is action "action.user"
        })
      }
    })    

  },[])  //=>[user,basket]=> every time user changes basket also change it refire code
  return (
    //BEM

    <BrowserRouter>
    <div className="app">
  {/*Header*/}
      <Routes>
        <Route path='/login'
        element={<div><Login/></div>}>

        </Route>
        <Route path='/payment'
        element={<div><Header/>
           <Elements stripe={promise}>
           <Payment/>
        </Elements>
        </div>}>
       
        </Route>
        <Route path='/' element={<div>  <Header/><Home/></div>}>  
          
          {/*<Header/>
          <Home/> */}   
        </Route>

        <Route path='/checkout' 
        element={<div><Header/><Checkout/></div>}>
          
          
        </Route>
      </Routes>
      </div>
    </BrowserRouter>
    
   
  );
}

export default App;


//install 2 packege==>npm install @stripe/react-stripe-js   &    npm install @stripe/stripe-js
//you should be blaze plan on firbase(its free upgrade blaze)   otherwise express server(its not free)
//created stripe account its very easy and free