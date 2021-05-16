import {ITeamList} from "../interface";
import React from "react";
import {IDetailedData} from "../redux/interfaces/detailedInterface";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrash} from "@fortawesome/free-solid-svg-icons";

const Participants = (props: {
    eachParticipant: ITeamList,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    never: [], callback: (data: IDetailedData, idx: number) => JSX.Element,
    iTeamLists: ITeamList[], onClick: () => void,
    testId: string
}) => {
    return <tr data-test-id={props.testId}>
        <td data-test-id="participants">
            <input
                name="name"
                placeholder="Enter Name"
                value={props.eachParticipant.name}
                onChange={props.onChange}
            />
        </td>
        {props.never.map(props.callback)}

        <td className="remove">
            {
                props.iTeamLists.length &&
                <span
                    className="remove-button"
                    data-test-id="remove-participant"
                    onClick={props.onClick}>
                    <FontAwesomeIcon
                        icon={faTrash}
                        className="remove-icon"/>
                </span>
            }
        </td>
    </tr>;
}

export default Participants;