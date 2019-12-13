import React, { Component } from "react";
import Review from "./Review";

class Reviews extends Component {
  render() {
    // need to associate restaurantIds with reviews
    // "This restaurant has these reviews"
    console.log(this.props);

    // Associate (filter) restuarant with review(s)
    const restaurantReviews = this.props.reviews.filter(
      review => review.restaurantId === this.props.restaurantId
    );

    // pass the new array of reviews to Review component
    const reviewList = restaurantReviews.map(review => {
      return <Review text={review.text} key={review.id} />;
    });
    console.log(restaurantReviews);

    return <ul>{reviewList}</ul>;
  }
}

export default Reviews;
