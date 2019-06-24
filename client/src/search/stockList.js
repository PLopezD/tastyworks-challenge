import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectStock } from '../actions/stockActions'
import './search.scss';

const mapDispatchToProps = dispatch => ({
    selectStock: (value) => dispatch(selectStock(value))
})
const mapStateToProps = state => ({ ...state })

class StockList extends Component {
    render() {
        const itemList = this.makeList()
        return (
            <ul className='stockList'>
                {itemList}
            </ul>
        )
    }
    makeList() {
        if (this.props.stocks) {
            return this.props.stocks.map((stock) =>
                <li key={stock.stockId} onClick={() => this.props.selectStock(stock)}>
                    {stock.displayName}
                    <a href={stock.website} rel="noopener noreferrer" target="_blank" title='external site link'>
                        <i className="material-icons">open_in_new</i>
                    </a>
                    <span>{stock.symbol}</span>
                </li>
            );
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(StockList);
