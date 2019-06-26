import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectStock, setRecents } from '../actions/stockActions'
import LocalStorageService from '../services/localStorageService'

class RecentSearches extends Component {
    constructor(props) {
        super(props)
        this.state = {
            recents: null
        }
    }
    componentDidMount() {
        let searches = LocalStorageService.retrieveSearches();
        this.props.setRecents(searches)
    }

    render() {
        return (
            <section className="recent-searches">
                {this.props.recents ? this.makeButtons() : null}
            </section>   
        )
    }

    makeButtons() {
        if (this.props.recents) {
            return this.props.recents.slice(-5).reverse().map((stock, i) =>
                <span className="waves-effect waves-light btn-small" key={`${stock.stockId}${i}`} onClick={() => this.props.selectStock(stock)}>
                    <i className="material-icons right">bookmark</i>
                    {stock.displayName}
                </span>
            )
        }
    }
}

const mapDispatchToProps = dispatch => ({
    selectStock: (value) => dispatch(selectStock(value)),
    setRecents: (value) => dispatch(setRecents(value))
})

const mapStateToProps = state => ({
    stocks: state.stockReducer.stocks,
    selectedStock: state.stockReducer.selectedStock,
    recents: state.stockReducer.recents
})

export default connect(mapStateToProps, mapDispatchToProps)(RecentSearches);
