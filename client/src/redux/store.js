import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import thunkMiddleWare from 'redux-thunk';
import appReducer from './app-reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const reducers = combineReducers({
    app: appReducer
})

export const store = createStore(reducers, composeEnhancers(compose(applyMiddleware(thunkMiddleWare))));