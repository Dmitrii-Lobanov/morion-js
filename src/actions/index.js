import { GET_DATE } from "./types";

export const getDate = (date) => {
  return {
    type: GET_DATE,
    payload: date
  }
};