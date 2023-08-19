import { combineReducers } from "redux";
// import memberReducer from "./memberReducer";
// import bankReducer from "./bankReducer"
// import transactionReducer from "./transactionReducer"
// import authReducer from "./authReducer";
import user from "./userReducer"    

const rootReducer = combineReducers({
    user
    // memberReducer,
    // bankReducer,
    // transactionReducer,
    // auth:authReducer
});

export default rootReducer;