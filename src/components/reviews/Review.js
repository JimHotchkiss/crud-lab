import React, { Component } from "react";

class Review extends Component {
  render() {
    const { review } = this.props;
    return (
      <div>
        <li>{this.props.text} </li>
        <button> X </button>
      </div>
    );
  }
}

export default Review;
