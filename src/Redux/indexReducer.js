import rootReducer from './rootReducer'
import { createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger"
//import storage from 'redux-persist/lib/storage'
//import { persistStore, persistReducer } from 'redux-persist'
import { firebase, init } from "../firebase"
import { getFirestore, createFirestoreInstance } from "redux-firestore"
import { getFirebase } from 'react-redux-firebase'

// const persistConfig = {
//     key: 'eldron',
//     storage,
// }
const rrfConfig = {
    userProfile: 'users',
    useFirestoreForProfile: true, // Firestore for Profile instead of Realtime DB
    enableClaims: true, // Get custom claims along with the profile
    presence: 'presence', // where list of online users is stored in database
    sessions: 'sessions' // where list of user sessions is stored in database (presence must be enabled)// Get custom claims along with the profile
}
init()

const loggerMiddleware = createLogger()
//const persistedReducer = persistReducer(persistConfig, rootReducer)
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let data = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware.withExtraArgument(getFirebase, getFirestore), loggerMiddleware))
)
//let persistor = persistStore(data);
var rrfProps = {
    firebase,
    config: rrfConfig,
    dispatch: data.dispatch,
    createFirestoreInstance // <- needed if using firestore
}

export { data, rrfProps }