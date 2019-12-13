import cuid from "cuid";
export const cuidFn = cuid;

export default function manageRestaurants(
  state = { restaurants: [], reviews: [] },
  action
) {
  switch (action.type) {
    case "ADD_RESTAURANT":
      const restaurant = { text: action.payload, id: cuidFn() };
      return {
        ...state,
        restaurants: [...state.restaurants, restaurant]
      };

    case "ADD_REVIEW":
      const review = {
        text: action.review.text,
        id: cuidFn(),
        restaurantId: action.review.restaurantId
      };
      return {
        ...state,
        reviews: [...state.reviews, review]
      };

    case "DELETE_RESTAURANT":
      // console.log(state.restaurants);
      // console.log(action);
      // filter out the deleted object, and return the updated state, by using the spread operator
      const restaurants = state.restaurants.filter(
        restaurant => restaurant.id !== action.id
      );
      return { ...state, restaurants };
    case "DELETE_REVIEW":
      const reviews = state.reviews.filter(review => review.id !== action.id);
      return { ...state, reviews };

    default:
      return state;
  }
}
