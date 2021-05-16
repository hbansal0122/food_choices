import {ITeamList} from "../interface";
import {Venue} from "../redux/interfaces/detailedInterface";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck} from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Voting = (props: {
    onClick: (e: any) => void,
    eachParticipant: ITeamList, venue: Venue,
    testId: string
}) => {
    return <td className="selectable-area"
        data-test-id={props.testId}
        onClick={props.onClick}>
        {
            props.eachParticipant.restaurant === props.venue.id ?
                <FontAwesomeIcon icon={faCheck}/>
                : ""
        }
    </td>;
}
export default Voting;