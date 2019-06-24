import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actionTest } from '../actions/stockActions'
import ApiService from '../services/apiService'

const mapDispatchToProps = dispatch => ({
    actionTest: (value) => dispatch(actionTest(value))
})
const mapStateToProps = state => ({ ...state })

class StockList extends Component {
    constructor(props) {
        super(props);
    }

    selectStock(stock) {
        // redux
    }

    render() {
        return (
            <div>
                <form>
                    <label>
                        <input type="text" value={this.state.searchValue} onChange={this.handleSearch.bind(this)} />
                    </label>
                </form>
            </div>
        )
    }

}


export default connect(mapStateToProps, mapDispatchToProps)(StockList);
