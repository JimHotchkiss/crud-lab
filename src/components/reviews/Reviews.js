import React, { Component } from "react";
import Review from "./Review";

class Reviews extends Component {
  render() {
    console.log(this.props.deleteReview);
    // need to associate restaurantIds with reviews
    // "This restaurant has these reviews"
    //console.log(this.props);

    // Associate (filter) restuarant with review(s)
    const restaurantReviews = this.props.reviews.filter(
      review => review.restaurantId === this.props.restaurantId
    );

    // pass the new array of reviews to Review component
    const reviewList = restaurantReviews.map(review => {
      return (
        <Review
          review={review}
          text={review.text}
          key={review.id}
          deleteReview={this.props.deleteReview}
        />
      );
    });
    //console.log(restaurantReviews);

    return <ul>{reviewList}</ul>;
  }
}

export default Reviews;
