import axios from "axios";

const placeApi = axios.create({
  baseURL: `http://localhost:4000`,
  withCredentials: true,
});

export const getAllPlaces = () => placeApi.get(`/place`);

export const getPlace = (placeId) => placeApi.post(`/place/${placeId}`);

//const QueryPlaceService = (query) => placeApi.get(`/search?q=${query}`);
