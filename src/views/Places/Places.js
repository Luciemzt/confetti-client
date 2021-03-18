import React from "react";
import { Link } from "react-router-dom";
import { usePlaces } from "../../context/PlaceContext";

function Places() {
  const { places, getAllPlaces } = usePlaces();

<<<<<<< HEAD
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
=======
  React.useEffect(() => {
    getAllPlaces();
  });

  return (
    <div>
      <h1>Places</h1>
      {places.map((place) => (
        <div key={place._id}>
          <h5>{place.name}</h5>
          <p>{place.type}</p>
          <Link to={`/place/${place._id}`}>View More</Link>
        </div>
      ))}
>>>>>>> 2295b80fc99d955f95d43fba270d943d04b2cdf4
    </div>
  );
}

export default Places;
