import axios from "axios";
import { FETCHING, SUCCESS, FAILURE } from "./exports";
export const getData = () => dispatch => {
  dispatch({
    FETCHING
  });
  axios
    .get("https://swapi.co/api/people/")
    .then(res => {
      console.log(res.data);
      dispatch({
        type: SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: FAILURE,
        payload: err
      });
    });
};
