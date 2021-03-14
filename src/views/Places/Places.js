import React from 'react'
import { Link } from 'react-router-dom';
import { getPlaces, QueryPlacesService } from './service/place.service';



function Places() {
    const [places, setPlaces] = React.useState([]);
    const [query, setQuery] = React.useState('');
  
    const handleGetPlaces = async () => {
      const { data } = await getPlaces();
      setPlaces(data);
    };
    const handleQueryPlaces = async () => {
      const { data } = await QueryPlacesService(query);
      setPlaces(data);
    };
    const memoHandleGetPlaces = React.useCallback(handleGetPlaces, [setPlaces]);
    const memoHandleQueryPlaces = React.useCallback(handleQueryPlaces, [
      query,
      setPlaces,
    ]);
    React.useEffect(() => {
      if (!query) {
        memoHandleGetPlaces();
      }
    }, [query, memoHandleGetPlaces]);
  
    React.useEffect(() => {
      if (query) {
        memoHandleQueryPlaces();
      }
    }, [query, memoHandleQueryPlaces]);
  
    return (
      <div>
        <h2>Places</h2>
        <div>
          <input
            type="text"
            name="query"
            id="query"
            onChange={({ target }) => setQuery(target.value)}
          />
        </div>
        <div>
          {places.map((place) => (
            <div key={place._id}>
              <h5>{place.name}</h5>
              <p>{place.description}</p>
              <p>{place.adress}</p>
              <p>{place.type}</p>
              <Link to={`/place/${place._id}`}>View More</Link>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  export default Places;
