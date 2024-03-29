

import {createStore,combineReducers,applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import { agentReducer } from "./reducers/agentReducer";


const reducer= combineReducers({
  
      agent:agentReducer

});
 
let initialState={
        
};
const middleware=[thunk];  
const store=createStore(reducer,
      initialState,
      composeWithDevTools(applyMiddleware(...middleware)));

export default store;   