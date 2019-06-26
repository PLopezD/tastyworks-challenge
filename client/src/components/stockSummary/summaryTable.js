import React, { Component } from 'react';
import { connect } from 'react-redux';

class SummaryTable extends Component {
    render() {
        const stock = this.props.selectedStock;
        return (
            <section>
                <a href={stock.website} rel="noopener noreferrer" target="_blank" title='external site link'>
                    <h6>{stock.displayName} - {stock.symbol} ({stock.exchange})</h6>
                </a>
                <div>Sector: {stock.sector}</div>
                {/* <div>Last sale: ${stock.lastSale}</div> */}
                <div>Market cap: {stock.marketCap}</div>
            </section>
        )
    }
}

const mapDispatchToProps = dispatch => ({})
const mapStateToProps = state => ({
    selectedStock: state.stockReducer.selectedStock
})


export default connect(mapStateToProps, mapDispatchToProps)(SummaryTable);
