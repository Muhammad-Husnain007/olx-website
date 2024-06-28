import React from 'react';
import './StyleCards.css'
const Card = (props) => {
  const { imageSrc, spanText } = props; // Destructure the props

  const cardStyle = {
    width: '100%',
    height: '280px',
    display: 'flex',
    justifyContent: 'space-around'
  };

  const innerCardStyle = {
    width: '115px',
    height: '156px',
    position: 'relative',
    top: '20px',
    overflowY: 'hidden',
   
  };

  const spanStyle = {
    position: 'relative',
    left: '30px',
    top: '10px',
  };

  return (
    <div className='images-span-main' style={cardStyle}>
      <div className='images-span' style={innerCardStyle}>
        <img className='categories-images' src={imageSrc} alt="" style={{ width: '93px', height: '93px', margin: '10px' }}  /> {/* Use the provided image source */}
        <span className='categories-span' style={spanStyle}>{spanText}</span> {/* Use the provided text */}
      </div>
    </div>
  );
};

export default Card;


