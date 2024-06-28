import React, {useEffect} from 'react';
import Card from './Card.jsx';
import './style.tva.css';
import { useSelector, useDispatch } from 'react-redux';
import { fetchData, selectTvaData } from '../../../Sells/redux/Slice.jsx';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const tvaCards = () => {
  const dispatch = useDispatch();
  const tvaData = useSelector(selectTvaData);
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
    <span className='tva-span'>TV-Video-Audios</span>
  <div className='tva-cards-row'>
      {tvaData &&
        tvaData.slice(0, 4).map((tva, index) => ( // Limit to 4 cards only
          <div key={tva.id} onClick={() => showData(tva._id)} className='tva-card'>
            <Card
              imageUrl={tva.imageUrl}
              price={"Rs " + tva.price}
              description={tva.description}
              location={tva.location}
              condition={getTimeDifference(tva.createdAt)}
            />
          </div>
        ))}
    </div>
    </>
  );
};

export default tvaCards;
