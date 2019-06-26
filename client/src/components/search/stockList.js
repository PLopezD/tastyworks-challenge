import React, { Component } from 'react';
import { connect } from 'react-redux';
import './search.scss';

const mapDispatchToProps = dispatch => ({})
const mapStateToProps = state => ({ ...state })

class StockList extends Component {
    render() {
        const itemList = this.makeList()
        return (
            <ul className='stock-list' style={{width:this.props.width}}>
                {itemList}
            </ul>
        )
    }
    makeList() {
        if (this.props.stocks) {
            return this.props.stocks.map((stock) =>
                <li key={stock.stockId} onClick={() => this.props.handleSelect(stock)}>
                    {stock.displayName}
                    <a href={stock.website} rel="noopener noreferrer" target="_blank" title='external site link'>
                        <i className="material-icons">open_in_new</i>
                    </a>
                    <span>{stock.symbol}</span>
                    <span>-</span>
                    <span>{stock.exchange}</span>
                </li>
            );
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(StockList);
