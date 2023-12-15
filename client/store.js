import { createStore } from 'redux';
import reducers from './reducers/index.js';

// we are adding composeWithDevTools here to get easy access to the Redux dev tools
const store = createStore(reducers);

export default store;