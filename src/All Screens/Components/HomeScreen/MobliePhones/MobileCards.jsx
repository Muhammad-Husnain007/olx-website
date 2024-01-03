import React, {useEffect} from 'react';
import Card from './Card.jsx';
import './style.mobile.css';
import { useSelector, useDispatch } from 'react-redux';
import { fetchData, selectMobilesData } from '../../../Sells/redux/Slice.jsx';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const MobileCards = () => {
  const dispatch = useDispatch();
  const mobilesData = useSelector(selectMobilesData);
  const navigate = useNavigate();
  // const [data, setData] = useState([])
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
     <span className='span'>Mobile Phones</span>
    <div className='mobile-card-row'>
      {mobilesData &&
        mobilesData.slice(0, 4).map((mobiles, index) => ( // Limit to 4 cards only
          <div key={mobiles.id} onClick={() => showData(mobiles._id)} className='mobile-card'>
            <Card
              imageUrl={mobiles.imageUrl}
              price={"Rs " + mobiles.price}
              description={mobiles.description}
              location={mobiles.location}
              condition={getTimeDifference(mobiles.createdAt)}
            />
          </div>
        ))}
    </div>
    </>

  );
};

export default MobileCards;
