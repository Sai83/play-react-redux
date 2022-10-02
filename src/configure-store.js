import { createStore } from "redux";
import data from "./data";
import rootReducer from "./reducers/root-reducer";

const configureStore = (initialState) => {

    return createStore(rootReducer, initialState = data);
}
export default configureStore;