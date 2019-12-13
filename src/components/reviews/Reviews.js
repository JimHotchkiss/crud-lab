import React, { Component } from "react";
import Review from "./Review";

class Reviews extends Component {
  render() {
    // need to associate restaurantIds with reviews
    // "This restaurant has these reviews"
    console.log(this.props);

    return <ul>Reviews</ul>;
  }
}

export default Reviews;
