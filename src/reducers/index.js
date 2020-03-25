import { GET_DATE } from "../actions/types";

export default (state = {}, action) => {
  switch(action.type) {
    case GET_DATE:
      return {
        ...state,
        date: action.payload
      }
    default:
      return state;
  }
};