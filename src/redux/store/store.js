// import { createstore, applyMiddleware, compose } from "redux";
import {legacy_createStore as  createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
// import rootReducer from "../Reducers/rootReducer";
// import rootReducer from "../Reducers/rootReducer";
import rootReducer from "../reducers/rootReducer";
// import rootReducer from "../Reducers/";

// import { createStore } from 'redux';

const store = createStore(
  rootReducer,
  compose( 
    applyMiddleware(thunk),
   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;