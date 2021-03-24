  
import React from "react";
import { Navbar, Nav, Container } from 'react-bootstrap';
import './Places.css'
import { Link } from "react-router-dom";
import { usePlaces } from "../../context/PlaceContext";


function Places() {
  const { places, getAllPlaces } = usePlaces();

  React.useEffect(() => {
    getAllPlaces();
  }, []);

  return (
    <div >
      <Container fluid>
      <h1>Places</h1>
      <div className="card">
      {places.map((place) => (
        <div className = "cards-container" key={place._id}>
          <div className = "titre">
          <h5>{place.name}</h5>
          </div>
          <div className= "type">
          <p>{place.type}</p>
          </div>
          <div className = "image">
          <img src={place.imageURL} style={{width: 150, height: 150,}} alt="barimage"/>
          </div>
          <div className = "url">
          <Link to={`/place/${place._id}`}>View More</Link>
          </div>
        </div>
      ))}
      </div>
      </Container>
    </div>
  );
}

export default Places;