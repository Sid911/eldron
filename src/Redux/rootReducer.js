import authReducer from './authReducer'
import dataReducer from './dataReducer'

import { combineReducers } from "redux";


const rootReducer = combineReducers({
    auth: authReducer,
    project: dataReducer
})

export default rootReducer;