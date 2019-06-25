import React, { Component } from 'react';
import { connect } from 'react-redux';

class SummaryTable extends Component {
    render() {
        return (
            <section>
                <span>table</span>
            </section>
        )
    }
}

const mapDispatchToProps = dispatch => ({})
const mapStateToProps = state => ({
    selectedStock: state.stockReducer.selectedStock
})


export default connect(mapStateToProps, mapDispatchToProps)(SummaryTable);
