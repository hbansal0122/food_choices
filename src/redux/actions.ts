import {GET_RESTAURANTS} from './types';
import {IDetailedData} from "./interfaces/detailedInterface";

export const getRestaurantsAction =
    (restaurants: IDetailedData[]): {
        payload: IDetailedData[];
        type: typeof GET_RESTAURANTS
    } => {
        return {
            type: GET_RESTAURANTS,
            payload: restaurants
        };
    };
