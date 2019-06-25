import React, { Component } from 'react';
import { connect } from 'react-redux';
import SummaryChart from './summaryChart';
import SummaryTable from './summaryTable';


class StockSummary extends Component {
    render() {
        return (
            <section>
                <SummaryTable></SummaryTable>
                <SummaryChart></SummaryChart>
            </section>
        )
    }
}

const mapDispatchToProps = dispatch => ({})
const mapStateToProps = state => ({
    selectedStock: state.stockReducer.selectedStock
})

export default connect(mapStateToProps, mapDispatchToProps)(StockSummary);
