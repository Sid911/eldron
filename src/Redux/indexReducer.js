import rootReducer from './rootReducer'
import { createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger"
import storage from 'redux-persist/lib/storage'
import { persistStore, persistReducer } from 'redux-persist'

const persistConfig = {
    key: 'eldron',
    storage,
}

const loggerMiddleware = createLogger()
const persistedReducer = persistReducer(persistConfig, rootReducer)
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let data = createStore(persistedReducer, composeEnhancers(applyMiddleware(thunkMiddleware, loggerMiddleware)))
let persistor = persistStore(data);

export { data, persistor }