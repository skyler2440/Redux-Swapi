import { createStore, applyMiddleware } from "redux";
import charsReducer from "../reducers";
import thunk from "redux-thunk";
// import {  } from "redux";
import logger from "redux-logger";


const store = createStore(charsReducer, applyMiddleware(thunk, logger));
export default store;
