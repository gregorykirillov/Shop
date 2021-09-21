import { createStore, combineReducers } from 'redux'

import filters from './filters';
import items from './items';
import cart from './cart';

const rootReducer = combineReducers({
  filters,
  items,
  cart,
});

export default rootReducer;