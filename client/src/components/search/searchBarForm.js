import React from 'react';
import { LoadingIcon } from '../../components';


const SearchBarForm = (props) => {
    return (
        <form className='search-form' onSubmit={props.handleSubmit}>
            <label>
                <input 
                    type="text" 
                    value={props.value} 
                    onChange={props.handleChange} 
                    placeholder="Search.."
                />
                {props.loading ? <LoadingIcon size={'small'} style={{top: 3, right: 0}} /> : null}
            </label>
        </form>
    )
}

export default SearchBarForm
