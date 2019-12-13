import React, { Component } from "react";

class Review extends Component {
  handleDelete = () => {
    // this needs to be defined in Review Container, in mapToDispatch, needs to be passed into Reviews component, and passed to Review component
    this.props.deleteReview(this.props.review.id);
  };
  render() {
    const { review } = this.props;
    console.log(review.text);
    return (
      <div>
        <li>{review.text} </li>
        <button onClick={this.handleDelete}> X </button>
      </div>
    );
  }
}

export default Review;
