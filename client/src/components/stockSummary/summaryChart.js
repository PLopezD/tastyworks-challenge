import React, { Component } from 'react';
import ChartService from '../../services/chartService'
import { connect } from 'react-redux';
const google = window.google;

class SummaryChart extends Component {
    componentDidMount() {
        google.charts.load('current', { 'packages': ['corechart'] });
        google.charts.setOnLoadCallback(this.drawChart.bind(this));
    }
    componentWillReceiveProps() {
        google.charts.load('current', { 'packages': ['corechart'] });
        google.charts.setOnLoadCallback(this.drawChart.bind(this));
    }

    render() {
        return (
            <section>
                <div id='chart-holder'></div>
            </section>
        )
    }
    drawChart() {
        if (this.props.data.length >= 1) {
            let cleanData = ChartService.cleanData(this.props.data);
            let data = google.visualization.arrayToDataTable(cleanData, true);
            let options = {
                legend: 'none',
                hAxis: {
                    title: 'Date'
                },
                vAxis: {
                    title: '$'
                }
            };
    
            let chart = new google.visualization.CandlestickChart(document.getElementById('chart-holder'));
            chart.draw(data, options);
        }
    }
}

const mapDispatchToProps = dispatch => ({})
const mapStateToProps = state => ({
    selectedStock: state.stockReducer.selectedStock
})

export default connect(mapStateToProps, mapDispatchToProps)(SummaryChart);

