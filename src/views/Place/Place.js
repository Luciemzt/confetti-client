import React from 'react'
import { withRouter, Link  } from 'react-router-dom';
import { getPlace } from '../../service/place.service';



class Place extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      place: {},
    };
  }

  componentDidMount() {
    const { placeId } = this.props.match.params;
    getPlace(placeId).then(({ data }) => {
      this.setState({ place: data });
    });
  }

  render() {
    return (
        <div classname= "card">
            <h2>place view </h2>
            <h3>{this.state.place.name}</h3>
                <div key={this.state.place._id}>
                <p>{this.state.place.description}</p>
                <p>{this.state.place.adress}</p>
                <p>{this.state.place.type}</p>
                <img src="{this.state.place.imageURL}" alt="barimage"></img>
                <Link to={`/booking`}> Book it now </Link>
                </div>
        </div>
    )};
}

export default withRouter (Place);