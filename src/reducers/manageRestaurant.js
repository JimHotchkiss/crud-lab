import cuid from "cuid";
export const cuidFn = cuid;

export default function manageRestaurants(state = { restaurants: [] }, action) {
  switch (action.type) {
    case "ADD_RESTAURANT":
      console.log(action.type);
      return { restaurants: state.restaurants.concat(action.payload) };
  }
}
