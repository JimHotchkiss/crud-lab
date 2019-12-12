import React, { Component } from "react";

class RestaurantInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
  }

  handleChange = event => {
    this.setState({
      text: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.addRestaurant(this.state.text);
    this.setState({
      text: ""
    });
  };
  render() {
    return (
      <div>
        <form onSubmit={event => this.handleSubmit(event)}>
          <div>
            <p>
              <label>Add Restaurant </label>
              <input
                type="text"
                onChange={this.handleChange}
                value={this.state.text}
              />
              <input type="submit" />
            </p>
          </div>
        </form>
        {this.state.text}
      </div>
    );
  }
}

export default RestaurantInput;
