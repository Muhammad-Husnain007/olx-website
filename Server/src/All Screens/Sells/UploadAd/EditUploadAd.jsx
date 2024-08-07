import React, { useRef, useState, useEffect } from 'react';
import './style.user.css';
import addPhoto from './assests/addPhoto.svg'
import Navbar from './Navbar.jsx';
import { useNavigate, useParams } from 'react-router-dom';

const EditUploadAd = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [condition, setCondition] = useState('');
    const [price, setPrice] = useState('');
    const [phone, setPhone] = useState('');
    const [image, setImage] = useState(null);  
    const [location, setLocation] = useState(null);  
    const fileInputRef = useRef(null);
    const navigate = useNavigate()
    const { id } = useParams()
    const [selectedImage, setSelectedImage] = useState();



   
    // ============= GET DATA ===============

    useEffect(() => {
        const fetchAdData = async () => {
          try {
            const response = await fetch(`http://localhost:3000/olx/api/${id}`);
            if (response.ok) {
              const adData = await response.json();
              setTitle(adData.title || '');
              setDescription(adData.description || '');
              setImageUrl(adData.imageUrl || '');
              setCondition(adData.condition || '');
              setPrice(adData.price || '');
              setPhone(adData.phone || '');
              setLocation(adData.location || '');
              setSelectedImage(adData.imageUrl || null);

            } 
            
            else {
              console.error('Failed to fetch ad data:', response.statusText);
            }
            
          } catch (error) {
            console.error('Error fetching ad data:', error);
          }
        };
      
        // Call the async function to fetch data
        fetchAdData();
      }, [id]);
      
      const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
          const reader = new FileReader();
          reader.onloadend = () => {
            setSelectedImage(reader.result);
          };
          reader.readAsDataURL(file);
          setImage(file); // Set the 'image' variable here
        }
      };
      
    // ============= EDIT NEW DATA ===============

    const putAd = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('file', image);
        formData.append('upload_preset', 'Upload_Image');
        formData.append('cloud_title', 'drj6zra5d');
        try {
            const response = await fetch('https://api.cloudinary.com/v1_1/drj6zra5d/image/upload', {
              method: 'PUT',
              body: formData,
            });
        
            if (response.ok) {
              const data = await response.json();
              setImageUrl(data.secure_url);

              try {
                const putData = {
                  title,
                  description,
                  imageUrl: data.secure_url,
                  condition,
                  price,
                  phone,
                  location
                };
              
                const postResponse = await fetch(`http://localhost:3000/olx/api/${id}`, {
                    method: 'PUT',
                    headers: {
                      'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(putData),
                  });
              
                if (postResponse.ok) {
                  const responseData = await postResponse.json();
                  navigate(`/uploadAd/adminScreen/${id}`)
                } else {
                  console.error('Failed to update ad:', postResponse.statusText);
                }
              } catch (error) {
                console.error('Error updating ad:', error);
              }
              
            } else {
              console.error('Failed to upload image to Cloudinary');
            }
          } catch (error) {
            console.error('Error uploading image:', error);
          }
    }

   return (
    <div className='user-main-div'>
       <Navbar />
    <h3 style={{marginLeft: 530, marginTop: 40, fontSize: 23}}>POST YOUR AD</h3>
   <div className='post-ad'>
     <form className='post-ad-table' onSubmit={putAd}>
      
       <div className='select-condition'>
       </div>
       <div className='include-detail'>
       <p style={{fontSize: 20, fontWeight: 'bold', marginTop: 2}}>INCLUDE SOME DETAILS</p>
         <span className='title'>Ad title</span>
         <input type='text' value={title} onChange={(e) => setTitle(e.target.value)} />
         <span className='description'>Description</span>
         <textarea
           className='textArea'
           value={description}
           onChange={(e) => setDescription(e.target.value)}
           cols='30'
           rows='10'
         
         ></textarea>
         <span className='condition'>Condition</span>
         <input type='text' value={condition} onChange={(e) =>
          setCondition(e.target.value)}
          style={{fontSize: 16, paddingLeft: 10, outline: 'none'}}

           />
       </div>
       <div className='set-price'>
       <p className='details'>SET A PRICE</p>
         <span>Price</span>
         <input
           type='text'
           value={price}
           onChange={(e) => setPrice(e.target.value)}
           placeholder='Rs'
           style={{fontSize: 16, paddingLeft: 10, outline: 'none'}}


         />
       </div>
       <div className='phoneNumber'>
       <p className='details'>REVIEW YOUR DETAILS</p>
         <span>Mobile Phone Number</span>
         <input
           type='text'
           placeholder='Phone Number'
           value={phone}
           onChange={(e) => setPhone(e.target.value)}
           style={{fontSize: 16, paddingLeft: 10, outline: 'none'}}

         />
   
       </div>
       <div className='location'>
       <p className='details'>YOUR AD`S LOCATION</p>
         <span>Location</span>
       <input 
           type='text'
           placeholder='Enter your Address'
           value={location}
           onChange={(e) => setLocation(e.target.value)}
           style={{fontSize: 16, paddingLeft: 10, outline: 'none'}}
         />
       </div>

       {/* ======== file ======== */}

       <div className='file' onClick={() => fileInputRef.current.click()}>
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        style={{ display: 'none' }}
      />
     <img
  className='img-addPhoto'
  src={selectedImage ? selectedImage : imageUrl}
  alt={selectedImage ? 'Selected' : 'Default'}
/>
    </div>
       {/* ======== file end ======== */}

       <div className='post-btn'>
         <button className='postNow'>Post now</button>
       </div>
     </form>
   </div>
 </div>
);
}

export default EditUploadAd
