import axios from "axios";

const placeApi = axios.create({
  baseURL: `http://localhost:4000/api`,
  withCredentials: true,
});

export const getPlaces = () => placeApi.get("/place", place);

export const getPlace = (placeId) => placeApi.post("/place/${placeId}`", place);

export const QueryPlacesService = (query) => placeApi.get(`/search?q=${query}`);