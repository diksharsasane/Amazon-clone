import React from 'react'
import './Header.css'
//import SearchIcon from '@mui/icons-material/Search';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
//import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import {Link} from "react-router-dom";
import { useStateValue } from './StateProvider';
import { auth } from '../firebase';

function Header() {
  const [{ basket ,user },dispatch]= useStateValue();

  const handleAuthentication=()=>{
    if(user){
      auth.signOut();
    }
  }

  return (
    <div className='header'>
    <Link to="/">
    <img className='header__logo' src='http://pngimg.com/uploads/amazon/amazon_PNG11.png' alt='amezon logo'></img>
    </Link>
      
      
      <div className="header__search">
        <input className="header__SearchInput" type="text" />
        {/*logo*/}
       {/*<SearchIcon className="header__searchIcon"></SearchIcon>*/}
       <SearchIcon className="header__searchIcon"></SearchIcon>
      </div>

      <div className="header__nav">
      <Link to={!user && "/login"}>    {/**when there is no user it redirect to login page  or when user siggned out it stay on same page */} 
        <div onClick={handleAuthentication} className="header__option">
          <span className='header__optionLineOne'>hello {user ? user?.email: 'guest'}</span>    {/* if user present then mail show otherwise guest. */}
          {/**  OR !user? 'Guest' : user.email */}
          <span className="optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>  {/*if the user is present then sign out otherwise sign in */}
        </div>
      </Link>
        <div className="header__option">
        <span className='header__optionLineOne'>returns</span>
          <span className="optionLineTwo">& Orders</span>
        </div>
        <div className="header__option">
        <span className='header__optionLineOne'>your</span>
          <span className="optionLineTwo">Prime</span>
        </div>


      <Link to="/checkout">
      <div className="header__optionBasket">
        {/*<ShoppingBasketIcon/>*/}
        <ShoppingBasketIcon/>
        <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>
      </div>

      </Link>
      
      </div>
    </div>
  );
}

export default Header;
