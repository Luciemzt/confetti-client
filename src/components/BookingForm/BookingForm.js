import React from 'react';

const initialState = {,
    quantity: 0,
    options: {beverages: '', foods:'', customOptions:''},
};

function BookingForm({ onSubmit }) {
    const [state, setState] = React.useState(initialState);

    const handleSumbit = (event) => {
        event.preventDefault()
        onSubmit(state)
        setState(initialState)
    }
    const handleChange = ({ target }) =>
        setState({ ...state, [target.beverage]: target.value });

    return (
        <div>
        <label for="options">Choose an option :</label>
        <select name="option">
        <option value="beverages">Beverages</option>
        <option value="food">Food</option>
        <option value="Animation">Animation</option>
        <option value="music">Music</option>
        </select>
        </div>

        
/*         <form className="form" onSubmit={handleSumbit}>
            <label className="label" htmlFor="name">
                Name:
            </label>

            <input
                className="input"
                type="text"
                name="beverage"
                value={state.name}
                onChange={handleChange}
            />

            <label className="label" htmlFor="quantity">
                Quantity:
            </label>

            <input
                className="input"
                type="number"
                name="quantity"
                value={state.quantity}
                onChange={handleChange}
            />

            <button className="button" type="submit">Add Option </button>
        </form>  */       
    );
}

export default BookingForm;