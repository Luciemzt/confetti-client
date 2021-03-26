import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useBooking } from "../../context/BookingContext";
import {
    editBooking as editBookingService,
    getBookings as getBookingsService,
} from "../../service/booking.service";



function EditForm ({ onSubmit, bookingInfo, toogleEdit}) {
    const initialState = {
        options: [],
        beverage: bookingInfo.options.includes("beverage"),
        music: bookingInfo.options.includes("music"),
        confettis: bookingInfo.options.includes("confettis"),
        fireworks: bookingInfo.options.includes("fireworks"),
        quantity: bookingInfo.quantity,
        date: bookingInfo.date,
    };
	const [state, setState] = React.useState(initialState);


	const handleChange = ({ target }) =>{
        console.log("state", state)
        console.log("target", target)
		if(target.type === "checkbox" && target.checked) {
            console.log("target.name", target.name, target.checked)
			setState({ ...state, options: [...state.options, target.name] });
		} else if(target.type === "checkbox" && !target.checked && state.options.includes(target.name)) {
            console.log("target.name", target.name, target.checked)
			const options = [...state.options].filter(e => e !== target.name);
			setState({...state, options});
		} else {
            console.log("target.name", target.name,target.value)
			setState({ ...state, [target.name]: target.value });
		}
	}

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("state submit ", state)
        onSubmit(bookingInfo._id, state);
        toogleEdit(bookingInfo._id);
      }

  return (
	<form className="form" onSubmit={handleSubmit}>
		<div>
			<label className="label" htmlFor="name">
				Options:
				<input
					className="input"
					type="checkbox"
					name="beverage"
					value={state.beverage}
                    //checked= {state.beverage}
					onChange={handleChange}
				/>Beverages
				<input
					className="input"
					type="checkbox"
					name="music"
					value={state.music}
                    //checked={state.music}
					onChange={handleChange}
				/>Music
				<input
					className="input"
					type="checkbox"
					name="confettis"
					value={state.confettis}
                    //checked={state.confettis}
					onChange={handleChange}
				/>Confettis
				<input
					className="input"
					type="checkbox"
					name="fireworks"
					value={state.fireworks}
                    //checked={state.fireworks}
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
		<button className="button" type="submit"> Edit your reservation </button>
	</form>
);
}
export default EditForm; 