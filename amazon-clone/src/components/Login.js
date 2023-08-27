import React, { useState } from 'react'
import "./Login.css"
import { Link ,useNavigate } from 'react-router-dom'

import { auth } from '../firebase';

//we need to keep track who is  signed in


function Login() {
  const navigate = useNavigate();//programatically change the url
   
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const signIn = e =>{
        e.preventDefault()    //prevent it from refreshing page

        //some fancy firebase login shit...
        auth
        .signInWithEmailAndPassword(email,password)
        .then(auth=>{
          navigate('/');
        })
        .catch(error=> alert(error.message));    //if not have account

    }
    const register = e =>{
        e.preventDefault() 
        //do some fancy firebase register shitt...
        auth
        .createUserWithEmailAndPassword(email,password)
        .then((auth)=>{
          //it successfully created a new user
          console.log(auth);
          if(auth){
            navigate('/');
          }
          

        })
        .catch(error=>alert(error.message));//if error occurr
    }

  return (
    <div className='login'>
    <Link to='/'>
      <img className='login__logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' alt="" />
    </Link>

    <div className='login__container'>
        <h1>sign in</h1>

        <form>
            <h5>E-mail:</h5>
            <input type='text' value={email} onChange={e=>setEmail(e.target.value)}/>
            <h5>Password:</h5>
            <input type='password' value={password} onChange={e=>setPassword(e.target.value)}/>
            <button type='submit' onClick={signIn} className='login__signInButton'>Sign In</button>
        </form>
        <p>
            By signing-in you agree to AMAZON FAKE CLONE Conditions of Use & Sale. Please see ourPrivacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
        </p>
        <button onClick={register} className='login__registerButton'>Create your amazon account</button>
    </div>



    </div>
  )
}

export default Login
