import React from 'react'
import './Home.css'
import "./Product"
import Product from './Product';

function Home() {
  return (
    <div className='home'>
      <div className="home__container">
        <img className='home__image' src="https://images-eu.ssl-images-amazon.com/images/G/31/Events/img23/Aug23ART/GW/PUSH/PC_Hero_3000x1200_NTA_2X._CB599338253_.jpg" alt="" />
      
      <div className="home__row">
      <Product id="12321341"
       title="Master Your Emotions: A Practical Guide to Overcome Negativity and Better Manage Your Feelings"
       price={500} 
       image="https://m.media-amazon.com/images/I/51n-q69gn4L.jpg"
       rating={5}
       />
        
      <Product id="12321342"
       title="John Jacobs Gunmetal Black Blue Gradient Full Rim Aviator Medium (Size-59) Sunglasses For Unisex-Pack of 1."
       price={900} 
       image="https://m.media-amazon.com/images/I/51INILzSt4L._UX679_.jpg"
       rating={5}
       />
        
      <Product id="12321343"
       title="OnePlus Nord CE 2 Lite 5G (Blue Tide, 6GB RAM, 128GB Storage)"
       price={55000} 
       image="https://m.media-amazon.com/images/I/71AvQd3VzqL._SX679_.jpg"
       rating={3}
       />
        <Product id="12321344"
       title="Skybags Trooper Cabin Hard Luggage"
       price={7500} 
       image="https://m.media-amazon.com/images/I/81-0qCBJ5EL._UL1500_.jpg"
       rating={4}
       />
        {/*Product ⭐*/}
        
        
      </div>
      <div className="home__row">
     
      <Product id="12321345"
       title="Lakmé Cushion Matte Lipstick, Pink Summer, 4.5 gz"
       price={899} 
       image="https://img.freepik.com/free-photo/beauty-spa-feminine-concept-different-make-up-beauty-care-essentials-cosmetics-flat-lay-white-background-top-view_1220-1812.jpg?w=1060&t=st=1691379424~exp=1691380024~hmac=4a3776a9915047ddaa46e9194980746ab7787a843f4a1cfcb5836606e30c64fa"
       rating={4}
       />

       <Product id="12321346"
       title="GaxQuly Electric Juicer 6 Blade Rechargable Portable USB Bottle Blender Shaker Juicer A 2000 Juicer Mixer Grinder (Large)"
       price={4999} 
       image="	https://m.media-amazon.com/images/I/71UOarsFmhL._SX522_.jpg"
       rating={4}
       />
      <Product id="12321347"
       title="boAt Rockerz 450 Bluetooth On Ear Headphones with Mic, Upto 15 Hours Playback, 40MM Drivers, Padded Ear Cushions, Integrated Controls and Dual Modes(Luscious Black)"
       price={1199} 
       image="https://m.media-amazon.com/images/I/51xxA+6E+xL._SX522_.jpg"
       rating={4}
       />
        {/*Product */}
        {/*Product */}
        {/*Product */}
        
      </div>
      <div className="home__row">
        {/*Product */}
        <Product id="12321347"
       title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
       price={51999} 
       image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
       rating={4}
       />
        
      </div>

      </div>
    </div>
  )
}

export default Home;
