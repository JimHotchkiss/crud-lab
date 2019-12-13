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
      console.log(action.review);
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
      return {
        restaurants: state.restaurants.filter(
          restaurant => restaurant.id !== action.payload
        )
      };

    default:
      return state;
  }
}
