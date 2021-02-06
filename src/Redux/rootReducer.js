import dataReducer from './dataReducer'

import { combineReducers } from "redux";
import { firebaseReducer } from "react-redux-firebase"
import { firestoreReducer } from 'redux-firestore'


const rootReducer = combineReducers({
    data: dataReducer,
    firebase: firebaseReducer,
    firestore: firestoreReducer
})

export default rootReducer;