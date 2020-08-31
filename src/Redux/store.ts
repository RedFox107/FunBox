import {createStore,combineReducers} from 'redux';
import ProductReducer from "./reducers/productReducer";

const reducers = combineReducers({
    ProductReducer
});

const store = createStore(reducers);

export default store;