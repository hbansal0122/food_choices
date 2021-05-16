import {combineReducers} from 'redux';
import {getRestaurantsReducer} from './reducers';

const rootReducer = combineReducers({
    restaurants: getRestaurantsReducer
});

export default rootReducer;