import React, { Component } from "react";
import ReviewInput from "../components/reviews/ReviewInput";
import Reviews from "../components/reviews/Reviews";
import { connect } from "react-redux";

class ReviewsContainer extends Component {
  render() {
    // restaurant is being passed from Restaurant component and we attach it to our ReviewInput component
    return (
      <div>
        {/* Coming from Restaurant Component: {this.props.restaurant.text} */}
        <ReviewInput
          restaurantId={this.props.restaurant.id}
          addReview={this.props.addReview}
        />
        <Reviews
          deleteReview={this.props.deleteReview}
          restaurantId={this.props.restaurant.id}
          reviews={this.props.reviews}
        />
      </div>
    );
  }
}

// map state to props
const mapStateToProps = state => ({
  reviews: state.reviews
});

// map dispatach to props
const mapDispatchToProps = dispatch => {
  return {
    addReview: review => dispatch({ type: "ADD_REVIEW", review }),
    deleteReview: id => dispatch({ type: "DELETE_REVIEW", id })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer);
