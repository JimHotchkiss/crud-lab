import React, { Component } from "react";
import RestaurantInput from "../components/restaurants/RestaurantInput";
import Restaurants from "../components/restaurants/Restaurants";
import { connect } from "react-redux";

class RestaurantsContainer extends Component {
  render() {
    console.log(this.props.restaurants);
    return (
      <div>
        <RestaurantInput addRestaurant={this.props.addRestaurant} />
        <Restaurants />
      </div>
    );
  }
}

const mapStateToProps = state => ({ restaurants: state.restaurants });

const mapDispatchToState = dispatch => {
  return {
    addRestaurant: userInput =>
      dispatch({ type: "ADD_RESTAURANT", payload: userInput })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToState
)(RestaurantsContainer);
