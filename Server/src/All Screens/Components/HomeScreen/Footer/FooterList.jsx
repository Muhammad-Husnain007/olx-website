import React from 'react'
import FooterImage from './FooterImage.jsx'
import './style.footer.css'
import instaIcon from './assests/instaicon.svg'
import facebookIcon from './assests/facebookicon.svg'
import playIcon from './assests/youtubeicon.svg'
import twitterIcon from './assests/twittericon.svg'
import olxAppImage from './assests/olxAppimg.webp'
import appImage from './assests/appImage.svg'
import googleImage from './assests/googleImage.svg'
import storeImage from './assests/storeImage.svg'

const FooterList = () => {
  return (
    <>
      <FooterImage />
<div className='mainDiv'>
<div className='allLists'>
  <ul className='popular'>
    <li style={{fontSize: 16, fontWeight: 'bold', color: 'black'}}>POPULAR CATEGORIES</li>
    <li style={{width: 100}}>Cars</li>
    <li style={{width: 100}}>Flats for rent</li>
    <li style={{width: 100}}>Mobile Phones</li>
    <li style={{width: 100}}>Jobs</li>
  </ul>

  <ul className='trending'>
    <li style={{fontSize: 16, fontWeight: 'bold', color: 'black'}}>TRENDING SEARCHES</li>
    <li style={{width: 100}}>Bikes</li>
    <li style={{width: 100}}>Watches</li>
    <li style={{width: 100}}>Books</li>
    <li style={{width: 100}}>Dogs</li>
  </ul>

  <ul className='trending'>
    <li style={{fontSize: 16, fontWeight: 'bold', color: 'black'}}>ABOUT US</li>
    <li style={{width: 100}}>About Dubizzle </li>
    <li style={{width: 100}}>Olx Blog</li>
    <li style={{width: 100}}>Contact Us</li>
    <li style={{width: 100}}>OLX for Business</li>
  </ul>

  <ul className='trending'>
    <li style={{fontSize: 16, fontWeight: 'bold', color: 'black'}}>OLX</li>
    <li style={{width: 100}}>Help</li>
    <li style={{width: 100}}>Sitemap</li>
    <li style={{width: 100}}>Terms of use</li>
    <li style={{width: 100}}>Privacy Policy</li>
  </ul>

  <ul className='trending'>
    <li style={{fontSize: 16, fontWeight: 'bold', color: 'black'}}>FOLLOW US</li>
    <span style={{display: 'flex', }}>
      <img style={{width: 25, height: 25, marginTop: 5}} src={twitterIcon} alt="" />
      <img style={{width: 25, height: 25, marginTop: 5, marginLeft: 10}} src={facebookIcon} alt="" />
      <img style={{width: 25, height: 25, marginTop: 5, marginLeft: 10}} src={playIcon} alt="" />
      <img style={{width: 25, height: 25, marginTop: 5, marginLeft: 10}} src={instaIcon} alt="" />
    </span>

    <span style={{display: 'flex', }}>
      <img style={{width: 85, height: 30, marginTop: 27}} src={appImage} alt="" />
      <img style={{width: 85, height: 30, marginTop: 27, marginLeft: 10}} src={googleImage} alt="" />
      <img style={{width: 85, height: 30, marginTop: 27, marginLeft: 10}} src={storeImage} alt="" />
    </span>

  </ul>

</div>

<div className='freeClassifieds'>
<div>
<span> Free Classifieds in Pakistan . </span> © 2006-2023 OLX
</div>
</div>
</div>
    </>
  )
}

export default FooterList
