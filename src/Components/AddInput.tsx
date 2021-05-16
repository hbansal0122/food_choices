import React from "react";

const AddInput = (props: { onClick: () => void }) => {
    return <button
        data-test-id="add-participant"
        onClick={props.onClick}
        className="add-member">
        Add a team member
    </button>;
}

export default AddInput;