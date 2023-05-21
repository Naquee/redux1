import { applyMiddleware, legacy_createStore } from "redux";

import thunk from "redux-thunk";
import {reducer} from "../Redux/reducer"

// const customMiddleware=store=>next=>action=>{

//     if(typeof action === "function")
//     {
//         return action(store.dispatch)
//     }
//     return next(action)
// }
const store =legacy_createStore(reducer,
    applyMiddleware(thunk))

export {store}