import React, { Component } from "react";
import ReviewInput from "../components/reviews/ReviewInput";
import Reviews from "../components/reviews/Reviews";

class ReviewsContainer extends Component {
  render() {
    return (
      <div>
        Coming from Restaurant Component: {this.props.restaurant.id}
        <ReviewInput />
        <Reviews />
      </div>
    );
  }
}

export default ReviewsContainer;
