import React from 'react'
import { Link , useParams } from 'react-router-dom';
import { usePlaces } from "../../context/PlaceContext";


function Place() {
  const {placeId} = useParams()
  const { places, getPlace } = usePlaces();

  React.useEffect(() => {
    getPlace(placeId);
  });
    return (
        <div className= "card">
            <h2>place view </h2>
            {places.map(() => (
                <div key={places._id}>
                <h3>{places.name}</h3>
                <p>{places.description}</p>
                <p>{places.adress}</p>
                <p>{places.type}</p>
                <img src="{places.imageURL}" alt="barimage"></img>
                <Link to={`/booking`}> Book it now </Link>
                </div>
            ))};
      </div>
    ); 
}

export default Place;