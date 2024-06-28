import React, {useEffect} from 'react';
import Card from './Card.jsx';
import './style.tablet.css';
import { useSelector, useDispatch } from 'react-redux';
import { fetchData, selectTabletsData } from '../../../Sells/redux/Slice.jsx';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';


const tabletsCards = () => {
  const dispatch = useDispatch();
  const tabletsData = useSelector(selectTabletsData);
  const navigate = useNavigate();
  const {id} = useParams()

  useEffect(() => {
    dispatch(fetchData());
  }, [id]);

  const showData = (id) => {
    navigate(`/opencard/${id}`);
  };

  const getTimeDifference = (dateString) => {
    const dateUploaded = new Date(dateString);
    const currentDate = new Date();
    const differenceInTime = currentDate.getTime() - dateUploaded.getTime();
    const differenceInDays = differenceInTime / (1000 * 3600 * 24);
  
    if (differenceInDays < 1) {
      return 'Today';
    } else if (differenceInDays < 2) {
      return '1 day ago';
    } else if (differenceInDays < 7) {
      return `${Math.floor(differenceInDays)} days ago`;
    } else if (differenceInDays < 14) {
      return '1 week ago';
    } else if (differenceInDays < 365) {
      return `${Math.floor(differenceInDays / 7)} weeks ago`;
    } else if (differenceInDays < 365 * 2) {
      return '1 year ago';
    } else {
      return `${Math.floor(differenceInDays / 365)} years ago`;
    }
  };
  

 
  return (
    <>
    <span className='tablet-span'>Tablets</span>
  <div className='tablet-cards-row'>
      {tabletsData &&
        tabletsData.slice(0, 4).map((tablets, index) => ( // Limit to 4 cards only
          <div key={tablets.id} onClick={() => showData(tablets._id)} className='tablet-card'>
            <Card
              imageUrl={tablets.imageUrl}
              price={"Rs " + tablets.price}
              description={tablets.description}
              location={tablets.location}
              condition={getTimeDifference(tablets.createdAt)}
            />
          </div>
        ))}
    </div>
    </>

  );
};

export default tabletsCards;
