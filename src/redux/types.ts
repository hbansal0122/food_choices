import {IDetailedData} from "./interfaces/detailedInterface";

export const GET_RESTAURANTS = 'GET_RESTAURANTS';

export interface GetRestaurantsStateType {
    restaurants: [];
}

interface GetRestaurantsActionType {
    type: typeof GET_RESTAURANTS;
    payload: IDetailedData[];
}

export type RestaurantsActionTypes = GetRestaurantsActionType;
