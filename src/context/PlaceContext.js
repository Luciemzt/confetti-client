import React from 'react';
import { 
    getAllPlaces as getAllPlacesService, 
     getPlace as getPlaceService, 
    } from "../service/place.service";



export const PlaceContext = React.createContext({});


function PlaceProvider({ children }) {
  const [places, setPlaces] = React.useState([]);

  const getAllPlaces = async () => {
      const { data } = await getAllPlacesService();
      setPlaces(data);
      console.log('data', data)
  };
  const getPlace = async () => {
    const { place} = await getPlaceService();
    setPlaces(place);
};

  return (
    <PlaceContext.Provider
      value={{ places, setPlaces, getAllPlaces, getPlace}}
    >
      {children}
    </PlaceContext.Provider>
  );
}

export function usePlaces() {
    return React.useContext(PlaceContext);
  }


export default PlaceContext;