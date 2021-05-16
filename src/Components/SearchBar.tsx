import React from "react";

const SearchBar = (props: {
    value: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void, onClick: () => void
}) => {
    return <div className="header">
        <h1 data-test-id="heading">Lunch place</h1>
        <div className="input-box">
            <input type="text"
                   placeholder="PLZ or Place"
                   data-test-id="search-input"
                   value={props.value}
                   onChange={props.onChange}/>
            <button type="submit"
                    data-test-id="search-button"
                    onClick={props.onClick}
                    className="search-button">
                Search
            </button>
        </div>
    </div>;
}

export default SearchBar;