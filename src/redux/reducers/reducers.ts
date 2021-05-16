import {GET_RESTAURANTS, GetRestaurantsStateType, RestaurantsActionTypes} from '../types';

const initialStateGetRestaurants: GetRestaurantsStateType = {
    restaurants: []
}

export const getRestaurantsReducer = (
    state = initialStateGetRestaurants,
    action: RestaurantsActionTypes
): GetRestaurantsStateType => {
    switch (action.type) {
        case GET_RESTAURANTS:
            return {
                ...state,
                restaurants: action.payload
            } as GetRestaurantsStateType;
        default:
            return state;
    }
};