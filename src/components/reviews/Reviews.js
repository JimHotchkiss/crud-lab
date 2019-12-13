import React, { Component } from "react";
import Review from "./Review";

class Reviews extends Component {
  render() {
    // need to associate restaurantIds with reviews
    // "This restaurant has these reviews"
    console.log(this.props);

    const restaurantReviews = this.props.reviews.filter(
      review => review.restaurantId === this.props.restaurantId
    );

    console.log(restaurantReviews);

    return <ul>Reviews</ul>;
  }
}

export default Reviews;
