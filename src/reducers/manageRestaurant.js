import cuid from "cuid";
export const cuidFn = cuid;

export default function manageRestaurants(state = { restaurants: [] }, action) {
  console.log(action.payload);
  switch (action.type) {
    case "ADD_RESTAURANT":
      const restaurant = { text: action.payload, id: cuidFn() };
      return {
        ...state,
        restaurants: [...state.restaurants, restaurant]
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
