import React from 'react'
import olxAppImage from './assests/olxAppimg.webp'
import appImage from './assests/appImage.svg'
import googleImage from './assests/googleImage.svg'
import storeImage from './assests/storeImage.svg'

const FooterImage = () => {
    return (
        <div style={{
            width: 1270, height: 210,
            display: 'flex', borderBottom: '1px solid black', overflowY: 'hidden',
            backgroundColor: '#F7F8F8'
        }}>
            <div style={{
                width: 635, height: 200, marginTop: 10,
                display: 'flex',
                justifyContent: 'flex-end'
            }}>
                <img style={{
                    width: 450, height: 200,
           }} src={olxAppImage} alt="" />
            </div>
            <div style={{
                width: 635, height: 200, marginTop: 10,
                 borderLeft: '2px solid gray', 
            }}>
            <span style={{fontWeight: 'bold', position: 'relative', left: 20, top: 70,
            fontSize: 14
            }}>GET YOUR APP TODAY</span>
            <div style={{ display: 'flex'}}>
                <img style={{ width: 130, height: 40, marginLeft: 20, marginTop: 100 }}
                    src={googleImage} alt="" />

                <img style={{ width: 130, height: 40, marginLeft: 20, marginTop: 100 }}
                    src={appImage} alt="" />

                <img style={{ width: 130, height: 40, marginLeft: 20, marginTop: 100 }}
                    src={storeImage} alt="" />
            </div>
            </div>
        </div>
    )
}

export default FooterImage
