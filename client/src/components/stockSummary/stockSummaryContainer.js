import React, { Component } from 'react';
import { connect } from 'react-redux';
import StockSummary from './stockSummary';
import { LoadingIcon } from '../../components';
import ApiService from '../../services/apiService'
import './stockSummary.scss';

class StockSummaryContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            data: []
        };
    }
    componentDidMount(){
        this.refreshData(this.props.selectedStock);
    }
    componentWillUpdate(nextProps) {
        if (this.props.selectedStock !== nextProps.selectedStock) {
            this.refreshData(nextProps.selectedStock);
        }
    }

    refreshData(stock) {
        this.setState({loading: true})
        ApiService.getStockData(stock.symbol).then(res => {
            this.setState({ 
                loading: false,
                data: res
            })
        })
    }

    render() {
        return (
            <section className="summary-container">
                {this.state.loading ? 
                  <LoadingIcon style={{left: '50%', marginLeft: '-50px', marginTop:'100px'}}/> : 
                  <StockSummary data={this.state.data}/>
                } 
            </section>
        )
    }
}

const mapDispatchToProps = dispatch => ({})

const mapStateToProps = state => ({
    stocks: state.stockReducer.stocks,
    selectedStock: state.stockReducer.selectedStock
})

export default connect(mapStateToProps, mapDispatchToProps)(StockSummaryContainer);
