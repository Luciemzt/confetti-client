  
import React from "react";
import { Navbar, Nav, Container } from 'react-bootstrap';
import './Places.css'
import { Link } from "react-router-dom";
import { usePlaces } from "../../context/PlaceContext";
import Navigation from '../../components/Common/Navigation'
import Footer from '../../components/Foooter/Footer'
import {Card, Img, Button} from './style.js'


function Places() {
  const { places, getAllPlaces } = usePlaces();

  React.useEffect(() => {
    getAllPlaces();
  }, []);

  return (
    <div>
      <Container fluid="md">
      <Navigation/>
      <h1>Places</h1>
      <Card>
      {places.map((place) => (
        <div className = "cards-container" key={place._id}>
          <div className = "titre">
          <h5>{place.name}</h5>
          </div>
          <div className= "type">
          <p>{place.type}</p>
          </div>
          <div className = "image">
          <Img src={place.imageURL} style={{width: 150, height: 150,}} alt="barimage"/>
          </div>
          <div className = "url">
          <Link to={`/place/${place._id}`}> <Button className="button" type="submit"> View More </Button></Link>
          </div>
        </div>
      ))}
      </Card>
      <Footer/>
      </Container>
    </div>
  );
}

export default Places;