import React from "react";
import {
  getAllPlaces as getAllPlacesService,
  getPlace as getPlaceService,
} from "../service/place.service";

export const PlaceContext = React.createContext({});

function PlaceProvider({ children }) {
  const [places, setPlaces] = React.useState([]);
  const [place, setPlace] = React.useState({});

<<<<<<< HEAD
  const getAllPlaces = async () => {
      const { data } = await getAllPlacesService();
      setPlaces(data);
      console.log('data', data)
  };
  const getPlace = async () => {
    const { place} = await getPlaceService();
    setPlaces(place);
};
=======
  const getAllPlaces = React.useCallback(async () => {
    const { data } = await getAllPlacesService();
    setPlaces(data);
  }, [setPlaces, getAllPlacesService]);

  const getPlace = React.useCallback(async () => {
    const { place } = await getPlaceService();
    setPlace(place);
  }, [setPlace, getPlaceService]);
>>>>>>> 2295b80fc99d955f95d43fba270d943d04b2cdf4

  return (
    <PlaceContext.Provider
      value={{ places, setPlaces, getAllPlaces, getPlace, place, setPlace }}
    >
      {children}
    </PlaceContext.Provider>
  );
}

export function usePlaces() {
  return React.useContext(PlaceContext);
}

export default PlaceProvider;
