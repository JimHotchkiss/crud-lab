import React, { Component } from "react";
import Reviews from "./Reviews";

class ReviewInput extends Component {
  constructor() {
    super();
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
    this.props.addReview({
      text: this.state.text,
      restaurantId: this.props.restaurantId,
      someVariable: "some variable"
    });
    this.setState({
      text: ""
    });
  };
  render() {
    return (
      <div>
        <form onSubmit={event => this.handleSubmit(event)}>
          <label>Review Input: </label>
          <input
            onChange={this.handleChange}
            type="text"
            value={this.state.text}
          ></input>
          <input type="submit"></input>
        </form>
      </div>
    );
  }
}

export default ReviewInput;
