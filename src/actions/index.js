import axios from "axios";
import { FETCHING, SUCCESS, FAILURE } from "./actions/exports";
export const getData = () => dispatch => {
  dispatch({
    FETCHING
  });
  axios
    .get("https://swapi.co/api/people/")
    .then(res => {
      console.log("res", res.data);
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
