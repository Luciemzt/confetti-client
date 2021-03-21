  
import React from "react";
import { Link } from "react-router-dom";
import { usePlaces } from "../../context/PlaceContext";


function Places() {
  const { places, getAllPlaces } = usePlaces();

  React.useEffect(() => {
    getAllPlaces();
  }, []);

  return (
    <div>
      <h1>Places</h1>
      {places.map((place) => (
        <div key={place._id}>
          <h5>{place.name}</h5>
          <p>{place.type}</p>
          <img src={place.imageURL}/>
          <Link to={`/place/${place._id}`}>View More</Link>
        </div>
      ))}
    </div>
  );
}

export default Places;