import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setStocks, selectStock } from '../../actions/stockActions'
import ApiService from '../../services/apiService'
import SearchBarForm from './searchBarForm';
import StockList from './stockList';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
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
            this.setState({loading: true})
            ApiService.getStocks(searchValue).then(res => {
                this.props.setStocks(res)
                this.setState({ displayStocks: res.slice(0, 10), loading: false })
            })
        } else {
            // subselect from already called stocks
            const subSelection = this.props.stocks.filter(stock => stock.lowerName.startsWith(searchValue)).slice(0, 10)
            if (subSelection.length === 1 && this.props.selectedStock && subSelection[0].displayName !== this.props.selectedStock.displayName) {
                // only one stock left, select it
                this.handleSelect(subSelection[0])
            } else {
                this.setState({displayStocks: subSelection})
            }
        }
    }
    handleSubmit(e) {
        e.preventDefault()
        if (this.state.displayStocks && this.state.displayStocks[0]){
            this.handleSelect(this.state.displayStocks[0])
        }
    }
    handleSelect(stock) {
        this.props.selectStock(stock)
        this.setState({ displayStocks: [], searchValue: stock.displayName })
    }
    
    render() {
        return (
            <div>
                <SearchBarForm 
                    value={this.state.searchValue} 
                    handleChange={this.handleSearch.bind(this)} 
                    handleSubmit={this.handleSubmit.bind(this)} 
                    loading={this.state.loading}
                    />
                <StockList stocks={this.state.displayStocks} handleSelect={this.handleSelect.bind(this)}/>
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
