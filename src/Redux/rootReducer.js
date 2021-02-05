import authReducer from './authReducer'
import dataReducer from './dataReducer'

import { combineReducers } from "redux";
import { firebaseReducer } from "react-redux-firebase"


const rootReducer = combineReducers({
    data: dataReducer,
    firebase: firebaseReducer
})

export default rootReducer;