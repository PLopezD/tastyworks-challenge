import React from 'react';


const SearchBarForm = (props) => {
    return (
        <form>
            <label>
                <input type="text" value={props.value} onChange={props.handleChange} />
            </label>
        </form>
    )
}

export default SearchBarForm
