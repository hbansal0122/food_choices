import {Dispatch} from 'redux';
import {getRestaurantsAction} from './actions';
import {RestaurantsActionTypes} from './types';
import {IItem, IOverviewData} from './interfaces/overviewInterface';
import {IDetailedData} from './interfaces/detailedInterface';
import queryString from 'query-string';

const client_id: String = 'F0MU3E24OUE0EYBLE1M253DA51ELKRS2GWJKUVQUPT2UIVMH';
const client_secret: String = 'SSN3LI1XIYXTH5D4WOTM3JKV4AKFLND3K5OEGFZR102NDIYS';
const getRestaurantURL = `https://api.foursquare.com/v2/venues`;
const baseQueryString = {
    client_id: client_id,
    client_secret: client_secret,
    v: "20190724",
}

export const getRestaurants = (area: string) => {

    return async function (dispatch: Dispatch<RestaurantsActionTypes>) {
        const data: IDetailedData[] = await Promise.all(await getData(area))
        dispatch(getRestaurantsAction(data));
    }
}

const getGroupsResponse = async (singleRes: IItem) => {

    const query = queryString.stringify(baseQueryString);
    return await fetch(`${getRestaurantURL}/${singleRes.venue.id}?${query}`)
        .then((res) => {
            if (!res.ok) {
                return Promise.reject(`Failed to get data with error ${res.status}`)
            }
            return res.json();
        })
        .catch(err => {
            console.log(err);
            return Promise.reject(`Failed to get data with ${err}`)
        })
}

const getData = async (area: string) => {

    const query = queryString.stringify({
        ...baseQueryString,
        query: "lunch",
        near: area,
        limit: 3
    });
    const recommendedRes: IOverviewData = await fetch(`${getRestaurantURL}/explore?${query}`)
        .then((res) => {
            if (!res.ok) {
                return Promise.reject(`Failed to get data with error ${res.status}`)
            }
            return res.json();
        })
        .catch(err => {
            alert(err);
            return Promise.reject(`Failed to get data with ${err}`)
        })
    return recommendedRes.response.groups[0].items.map(getGroupsResponse);
}
