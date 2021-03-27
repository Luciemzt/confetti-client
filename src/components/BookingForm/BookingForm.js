import React from 'react';
import { useParams, useHistory } from 'react-router-dom';

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
  return (
	<form className="form" onSubmit={handleSumbit}>
		<div>
			<label className="label" htmlFor="name">
				Options:
				<input
					className="input"
					type="checkbox"
					name="beverage"
					value={state.beverage}
					onChange={handleChange}
				/>Beverages
				<input
					className="input"
					type="checkbox"
					name="music"
					value={state.music}
					onChange={handleChange}
				/>Music
				<input
					className="input"
					type="checkbox"
					name="confettis"
					value={state.confettis}
					onChange={handleChange}
				/>Confettis
				<input
					className="input"
					type="checkbox"
					name="fireworks"
					value={state.fireworks}
					onChange={handleChange}
				/>Fireworks
			</label>
		</div>
		<label className="label" htmlFor="start">
			Number of persons
		</label>
		<input
			className="input"
			type="number"
			name="quantity"
			value={state.quantity}
			onChange={handleChange}
		/>
		<label className="label" htmlFor="start">
			Start date:
		</label>
		<input
			className="input"
			type="date"
			name="date"
			value={state.date}
			onChange={handleChange}
		/>
		<button className="button" type="submit"> Reserve now  </button>
	</form>
);
}
export default BookingForm; 