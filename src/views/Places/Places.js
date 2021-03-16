import React from 'react'
import { Link } from 'react-router-dom';
import { usePlaces } from "../../context/PlaceContext";




function Places() {
const {places, getAllPlaces} = usePlaces()

console.log('getAllPlaces', getAllPlaces)

  React.useEffect(()=>{
  },[]);
console.log('places', places)
    return (
      <div>
            {[].map((place) => (
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
