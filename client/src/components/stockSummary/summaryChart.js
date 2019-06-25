import React, { Component } from 'react';
import { connect } from 'react-redux';

class SummaryChart extends Component {
    render() {
        return (
            <section>
                <span>chart</span>
            </section>
        )
    }
}

const mapDispatchToProps = dispatch => ({})
const mapStateToProps = state => ({
    selectedStock: state.stockReducer.selectedStock
})

export default connect(mapStateToProps, mapDispatchToProps)(SummaryChart);

// google.charts.load('current', { 'packages': ['corechart'] });
// google.charts.setOnLoadCallback(drawChart);

// function drawChart() {
//     var data = google.visualization.arrayToDataTable([
//         ['Mon', 20, 28, 38, 45],
//         ['Tue', 31, 38, 55, 66],
//         ['Wed', 50, 55, 77, 80],
//         ['Thu', 77, 77, 66, 50],
//         ['Fri', 68, 66, 22, 15]
//         // Treat first row as data as well.
//     ], true);

//     var options = {
//         legend: 'none'
//     };

//     var chart = new google.visualization.CandlestickChart(document.getElementById('chart_div'));

//     chart.draw(data, options);
// }