import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setStocks, selectStock } from '../../actions/stockActions'
import ApiService from '../../services/apiService'

class StockSummary extends Component {
    render() {
        return (
            <div>
                {
                    JSON.stringify(this.props.selectedStock)
                }
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


export default connect(mapStateToProps, mapDispatchToProps)(StockSummary);
