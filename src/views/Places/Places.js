import React from 'react'
import { Link } from 'react-router-dom';
import { usePlaces } from "../../context/PlaceContext";




function Places() {
const {places, setPlaces, getAllPlaces, getPlace} = usePlaces()

  React.useEffect(()=>{
    getAllPlaces()
  }, []);

    return (
      <div>
            {places.map((place) => (
            <div key={places._id}>
              <h5>{places.name}</h5>
              <p>{places.type}</p>
              <Link to={"/place/${place._id}"}>View More</Link>
            </div> 
          ))}
    </div>
    );
  }
  
  export default Places;
