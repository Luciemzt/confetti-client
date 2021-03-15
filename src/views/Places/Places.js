import React from 'react'
import { Link } from 'react-router-dom';
import { usePlaces } from "../../context/PlaceContext";




function Places() {
const {places, getAllPlaces} = usePlaces()

  React.useEffect(()=>{
    getAllPlaces()
  }, []);

    return (
      <div>
            {places.map((place) => (
            <div key={place._id}>
              <h5>{place.name}</h5>
              <p>{place.type}</p>
              <Link to={"/place/${place._id}"}>View More</Link>
            </div> 
          ))}
    </div>
    );
  }
  
  export default Places;
