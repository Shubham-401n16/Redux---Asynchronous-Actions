import { createStore, combineReducers, applyMiddleware } from 'redux';

import cartReducer from './cartReducer';
import categoriesReducer from './categoriesReducer';
import productsReducer from './productsReducer';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from './middleware/thunk.js';

let reducers = combineReducers({
    cart: cartReducer,
    categories: categoriesReducer,
    products: productsReducer,
});

const store = () => createStore(combineReducers(reducers), composeWithDevTools(applyMiddleware(thunk)));

export default store();