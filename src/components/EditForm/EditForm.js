import React from 'react';
import {Card, Label} from './style.js'
import { Container } from 'react-bootstrap';




function EditForm ({ onSubmit, bookingInfo, toogleEdit}) {
    const initialState = {
        options: bookingInfo.options,
        beverage: bookingInfo.options.includes("beverage"),
        music: bookingInfo.options.includes("music"),
        confettis: bookingInfo.options.includes("confettis"),
        fireworks: bookingInfo.options.includes("fireworks"),
        quantity: bookingInfo.quantity,
        date: bookingInfo.date,
    };
  const [state, setState] = React.useState(initialState);
  const handleChange = ({ target }) =>{
    if(target.type === "checkbox" && target.checked) {
      setState({ ...state, [target.name]: !!target.checked, options: [...state.options, target.name] });
    } else if(target.type === "checkbox" && !target.checked && state.options.includes(target.name)) {
      const options = [...state.options].filter(e => e !== target.name);
      setState({...state,[target.name]: !!target.checked, options});
    } else {
      setState({ ...state, [target.name]: target.value });
    }
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    onSubmit(bookingInfo._id, state);
    toogleEdit(bookingInfo._id);
  }


  return (
    <Container fluid="md"> 
    <Card>
  <form className="form" onSubmit={handleSubmit}>
    <div>
      <Label className="label" htmlFor="name">
        Options:
        <input
          className="input"
          type="checkbox"
          name="beverage"
          defaultChecked={state.beverage}
          value={state.beverage}
          onChange={handleChange}
        />Beverages
        <input
          className="input"
          type="checkbox"
          name="music"
          value={state.music}
          defaultChecked={state.music}
          onChange={handleChange}
        />Music
        <input
          className="input"
          type="checkbox"
          name="confettis"
          value={state.confettis}
          defaultChecked={state.confettis}
          onChange={handleChange}
        />Confettis
        <input
          className="input"
          type="checkbox"
          name="fireworks"
          value={state.fireworks}
          defaultChecked={state.fireworks}
          onChange={handleChange}
        />Fireworks
      </Label>
    </div>
    <Label className="label" htmlFor="start">
      Number of persons
    </Label>
    <input
      className="input"
      type="number"
      name="quantity"
      value={state.quantity}
      onChange={handleChange}
    />
    <Label className="label" htmlFor="start">
      Date:
    </Label>
    <input
      className="input"
      type="date"
      name="date"
      value={state.date}
      onChange={handleChange}
    />
    <button className="button" type="submit"> Edit your reservation </button>
  </form>
  </Card>
	</Container>
);
}
export default EditForm;