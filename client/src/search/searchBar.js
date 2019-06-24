import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actionTest } from '../actions/actionTest'
import ApiService from '../services/apiService'

const mapDispatchToProps = dispatch => ({
    actionTest: (value) => dispatch(actionTest(value))
})
const mapStateToProps = state => ({ ...state })

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchValue: '',
            stocks: []
        };
    }
    actionTest = (event) => {
        let newNumber = this.state.number + 1
        this.setState({ number: newNumber })
        this.props.actionTest(this.state.number);
    }
    handleSearch(event) {
        const searchValue = event.target.value;
        this.setState({ searchValue: searchValue });
        
        if (searchValue.length === 1) {
            ApiService.getStocks(searchValue).then(res => {this.setState({stocks: res, displayStocks: res})})
        } else {
            const subSelection = this.state.stocks.filter(stock => stock.lowerName.startsWith(searchValue))
            this.setState({displayStocks: subSelection})
        }
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


export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
