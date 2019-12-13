import React, { Component } from "react";
import Restaurant from "./Restaurant";

class Restaurants extends Component {
  render() {
    const restaurants = this.props.restaurants.map(restaurant => {
      return (
        <Restaurant
          restaurant={restaurant}
          key={restaurant.id}
          name={restaurant.text}
          deleteRestaurant={this.props.deleteRestaurant}
        />
      );
    });

    return <ul>{restaurants}</ul>;
  }
}

export default Restaurants;
