import React, { Component } from 'react';
import { LoadingIcon } from '../../components';

// 
class SearchBarForm extends Component {
    render () {
        return (
            <form className='search-form' onSubmit={this.props.handleSubmit}>
                <label>
                    <input 
                        autoFocus
                        id='search-input'
                        type="text" 
                        autoComplete="off" 
                        value={this.props.value} 
                        onChange={this.props.handleChange} 
                        placeholder="Search.."
                    />
                    {this.props.loading ? <LoadingIcon size={'small'} style={{top: 3, right: 0}} /> : null}
                    {this.props.noResults ? <span style={{float:'right'}}>No results</span> : null}
                </label>
            </form>
        )
    }
}

export default SearchBarForm
