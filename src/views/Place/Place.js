import React from 'react'
import { Link, useParams } from 'react-router-dom';
import { usePlaces } from "../../context/PlaceContext";
import Navigation from '../../components/Common/Navigation'
import Footer from '../../components/Foooter/Footer'
import { Navbar, Nav, Container } from 'react-bootstrap';
import {Card, Img, Button} from './style.js'

function Place() {
  const {placeId} = useParams()
  const { place, getPlace } = usePlaces();

  React.useEffect (() => {
    getPlace(placeId)
  },[]);
    return (
      <Card>
        <Container fluid="md">
        <Navigation/>
        <h1>Place details </h1>
        <h2>{place.name}</h2>
        <p> {place.description}</p>
        <h5> {place.adress}</h5>
        <h5>{place.type}</h5>
        <Img src={place.imageURL} style={{width: 180, height: 180,}} alt="barimage"/>
        <Link to={`/booking/${placeId}`}>  <Button className="button" type="submit"> Book it now </Button> </Link>
        <Footer/>
        </Container>
      </Card>
    );
};

export default Place;