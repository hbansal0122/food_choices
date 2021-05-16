import {Venue} from "../redux/interfaces/detailedInterface";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck} from "@fortawesome/free-solid-svg-icons";
import React from "react";

function RestaurantChoice(props:
                              {
                                  singleRestaurant: Venue,
                                  winner: string | 0,
                                  testId: string
                              }) {
    return <th data-test-id={props.testId}>
        <a
            href={props.singleRestaurant.url}
            className="link">
            {props.singleRestaurant.name}
        </a>
        <br/>
        <label className="winner">
            {props.singleRestaurant.id === props.winner ?
                <FontAwesomeIcon icon={faCheck} className="green" data-test-id="winner"/>
                : ""}
        </label>
        <br/>
        <label className="category">
            {props.singleRestaurant.categories[0].name}
        </label>
        <br/>
        <label className="rating">
            {props.singleRestaurant.rating}
        </label>
    </th>;
}

export default RestaurantChoice;