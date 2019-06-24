import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setStocks, selectStock } from '../actions/stockActions'
import ApiService from '../services/apiService'
import SearchBarForm from './searchBarForm';
import StockList from './stockList';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchValue: ''
        };

    }
    
    handleSearch(event) {
        const searchValue = event.target.value.toLowerCase();
        this.setState({ searchValue: searchValue });
        if (searchValue.length === 0) {
            // no searching, display nothing
            this.setState({ displayStocks: [] })
        } else if (searchValue.length === 1) {
            // one character entered, make api call
            ApiService.getStocks(searchValue).then(res => {
                this.props.setStocks(res)
                this.setState({ displayStocks: res.slice(0, 10) })
            })
        } else {
            // subselect from already called stocks
            const subSelection = this.props.stocks.filter(stock => stock.lowerName.startsWith(searchValue)).slice(0, 10)
            if (subSelection.length === 1 && this.props.selectedStock && subSelection[0].displayName !== this.props.selectedStock.displayName) {
                // only one stock left, select it
                this.props.selectStock(subSelection[0])
                this.setState({ displayStocks: [], searchValue: subSelection[0].displayName })
            } else {
                this.setState({displayStocks: subSelection})
            }
        }
    }
    
    render() {
        return (
            <div>
                <SearchBarForm value={this.state.searchValue} handleChange={this.handleSearch.bind(this)}/>
                <StockList stocks={this.state.displayStocks}/>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    setStocks: (value) => dispatch(setStocks(value)),
    selectStock: (value) => dispatch(selectStock(value))
})
const mapStateToProps = state => ({ 
    stocks: state.stockReducer.stocks, 
    selectedStock: state.stockReducer.selectedStock 
})


export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
