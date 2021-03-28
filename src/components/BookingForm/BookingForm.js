import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import {Card, Img, Button, Label} from './style.js'
import { usePlaces } from "../../context/PlaceContext";
import { Container } from 'react-bootstrap';

const initialState = {
	options: [],
	beverage: false,
	music: false,
	confettis: false,
	fireworks: false,
	quantity: 0,
	date: new Date(),
};
function BookingForm ({ onSubmit }) {
	const [state, setState] = React.useState(initialState);
	const { placeId } = useParams();
    const {push} = useHistory();
	const handleSumbit = (event) => {
		event.preventDefault();
		onSubmit({...state, placeId});
		setState(initialState);
        push('/mybookings');
	}
	const handleChange = ({ target }) =>{
		if(target.type === "checkbox" && target.checked) {
			setState({ ...state, options: [...state.options, target.name] });
		} else if(target.type === "checkbox" && !target.checked && state.options.includes(target.name)) {
			const options = [...state.options].filter(e => e !== target.name);
			setState({...state, options});
		} else {
			setState({ ...state, [target.name]: target.value });
		}
	}

  	const { place, getPlace } = usePlaces();

  return (
	<Container fluid="md">
	  <Card>
		<div>
			<h2>{place.name}</h2>
			<Img src={place.imageURL} style={{width: 180, height: 180,}} alt="barimage"/>
		</div>

	 	<form className="form" onSubmit={handleSumbit}>
			<div>
				<Label>
					<h6>Options:</h6><br></br>
					<input
					className="input"
					type="checkbox"
					name="beverage"
					value={state.beverage}
					onChange={handleChange}
				/> <h7> Beverages   </h7>
				<input
					className="input"
					type="checkbox"
					name="music"
					value={state.music}
					onChange={handleChange}
				/> <h7> Music   </h7>
				<input
					className="input"
					type="checkbox"
					name="confettis"
					value={state.confettis}
					onChange={handleChange}
				/> <h7> Confettis   </h7>
				<input
					className="input"
					type="checkbox"
					name="fireworks"
					value={state.fireworks}
					onChange={handleChange}
				/> <h7>Fireworks </h7>
			</Label>
		</div>
		<Label>
		<h7>Number of persons: </h7>
		</Label>
		<input
			className="input"
			type="number"
			name="quantity"
			value={state.quantity}
			onChange={handleChange}
		/>
		<Label>
		<h7> Date: </h7>
		</Label>
		<input
			className="input"
			type="date"
			name="date"
			value={state.date}
			onChange={handleChange}
		/>
		<Button className="button" type="submit"> Reserve now  </Button>
	</form>
	</Card>
	</Container>
);
}
export default BookingForm; 