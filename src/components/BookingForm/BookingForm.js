import React from 'react';

const initialState = {
    quantity: 0,
    name: '',
    date: ''
};

function BookingForm ({ onSubmit }) {
    const [state, setState] = React.useState(initialState);

    const handleSumbit = (event) => {
        event.preventDefault()
        onSubmit(state)
        setState(initialState)
    }
    const handleChange = ({ target }) =>{
        setState({ ...state, [target.name]: target.value });
    }
    return (

    <form className="form" onSubmit={handleSumbit}>
        <label className="label" htmlFor="name">
            Option:
        </label>
        <input
            className="input"
            type="text"
            name="name"
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
        <label className="label" htmlFor="start">
            Start date:
        </label>
        <input
            className="input"
            type="date"
            name="date"
            value={(state.date).format("yyyy-mm-dd")}
            onChange={handleChange}
        />
        <button className="button" type="submit">Add option  </button>
    </form>

);
}

export default BookingForm; 

        
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
