import { combineReducers, applyMiddleware } from "redux";
import { createStoreHook } from "react-redux";

// import { Saga } from 'redux-saga'
// import { composeWithDevTools } from "redux-devtools-extension";


import {
    registerReducer
} from './reducers/userReducer'


// const middleware = [Saga];

const reducer = combineReducers({
    register: registerReducer
});

const store = createStoreHook(
    reducer,
    // composeWithDevTools(applyMiddleware(...middleware))
);

export default store;