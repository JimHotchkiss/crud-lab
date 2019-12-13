import React, { Component } from "react";
import RestaurantInput from "../components/restaurants/RestaurantInput";
import Restaurants from "../components/restaurants/Restaurants";
import { connect } from "react-redux";

class RestaurantsContainer extends Component {
  render() {
    return (
      <div>
        <RestaurantInput addRestaurant={this.props.addRestaurant} />
        <Restaurants
          restaurants={this.props.restaurants}
          deleteRestaurant={this.props.deleteRestaurant}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({ restaurants: state.restaurants });

const mapDispatchToState = dispatch => {
  return {
    addRestaurant: userInput =>
      dispatch({ type: "ADD_RESTAURANT", payload: userInput }),
    deleteRestaurant: id => dispatch({ type: "DELETE_RESTAURANT", payload: id })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToState
)(RestaurantsContainer);
