import React from 'react'
import { Link, useEffect, useParams } from 'react-router-dom';
import { usePlaces } from "../../context/PlaceContext";
import Navigation from '../../components/Common/Navigation'
import Footer from '../../components/Foooter/Footer'
import { Navbar, Nav, Container } from 'react-bootstrap';


function Place() {
  const {placeId} = useParams()
  const { place, getPlace } = usePlaces();

  React.useEffect (() => {
    getPlace(placeId)
  },[]);
    return (
      <div>
        <Container fluid="md">
        <Navigation/>
        <h2>place view </h2>
        <h3>{place.name}</h3>
        <p>{place.description}</p>
        <p>{place.adress}</p>
        <p>{place.type}</p>
        <img src={place.imageURL} style={{width: 150, height: 150,}} alt="barimage"/>
        <Link to={`/booking/${placeId}`}> Book it now </Link>
        <Footer/>
        </Container>
      </div>
    );
};

export default Place;