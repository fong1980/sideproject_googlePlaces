import { createStore, combineReducers } from "redux";
import reducers from "./reducers";

const reducer = combineReducers(reducers);
const devTools = window.devToolsExtension ? window.devToolsExtension() : f => f;
const store = createStore(reducer);
export default store;
