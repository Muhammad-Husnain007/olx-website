import React, {useState} from 'react';
import navbarcss from './style.navbar.css';
import carpng from './assest/car.png';
import apartmentpng from './assest/apartment.png';
import multipleColour from './assest/colours.svg';
import plus from './assest/plus.svg';
import olxLogo from './assest/olxLogo.jpg';
import olxImage from './assest/olxImage.svg';

const Navbar = () => {

  return (
    <nav className='navbar'>
      <nav className='icon-image'>
        <div className='olx-motors-property'>
         <a href="/home"><img className='olxBlue' src={olxLogo} alt="Olx" /> </a>
          <div className='motors'>
            <img style={{ width: 20, height: 20, marginLeft: 7, marginTop: 7 }} src={carpng} alt="" />
          </div>
          <span className='motorsSpan'>MOTORS</span>
          <div className='property'>
            <img style={{ width: 20, height: 20, marginLeft: 7, marginTop: 7 }} src={apartmentpng} alt="" />
          </div>
          <span className='propertySpan'>PROPERTY</span>

        </div>
      </nav>
      <div className='search-fields'>
      <a style={{overflow:'hidden'}} href="/home"> <img className='olxImage' src={olxImage} alt="olx" /></a>
        <select className='selects'>
          <option value="">Pakistan</option>
          {/* <option value="">Pakistan, Sindh, Karachi</option>
          <option value="">Pakistan, Sindh, Hyderabad</option>
          <option value="">Pakistan, Punjab, Lahore</option>
          <option value="">Pakistan, Punjab, Rawalpindi</option>
          <option value="">Pakistan, Sindh, Faisalabad</option>
          <option value="">Pakistan, KPK, Islamabad</option>
          <option value="">Pakistan, KPK, Mansehrah</option> */}
        </select>
        <div className='search-field'>
        <input
          type="search"
          placeholder='Find Cars, Mobile Phones and more...'
        />
        </div>
        <a href="/signin" className='login'>Login</a>
       <a href="/uploadAd"> <div className='sellAd'>
          <img style={{ width: 140, height: 50, marginLeft: -19 }} src={multipleColour} alt="" />
          <img style={{ width: 20, height: 15, marginBottom: 19, marginLeft: -104 }} src={plus} alt="" />
          <span>Sell</span>
        </div> </a>
      </div>
    </nav>

  )
}

export default Navbar
