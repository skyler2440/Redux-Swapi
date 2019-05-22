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
// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based action creator
