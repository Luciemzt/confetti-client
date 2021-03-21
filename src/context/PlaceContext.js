import React from "react";
import {
  getAllPlaces as getAllPlacesService,
  getPlace as getPlaceService,
} from "../service/place.service";

export const PlaceContext = React.createContext({});

function PlaceProvider({ children }) {
  const [places, setPlaces] = React.useState([]);
  const [place, setPlace] = React.useState({});

  const getAllPlaces = React.useCallback(async () => {
    const { data } = await getAllPlacesService();
    setPlaces(data);
  }, [setPlaces, getAllPlacesService]);

  const getPlace = React.useCallback(async (placeId) => {
    const { data } = await getPlaceService(placeId);
    setPlace(data);
  }, [setPlace, getPlaceService]);

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