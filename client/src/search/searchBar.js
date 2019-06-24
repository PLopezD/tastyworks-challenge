import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setStocks } from '../actions/stockActions'
import ApiService from '../services/apiService'

const mapDispatchToProps = dispatch => ({
    setStocks: (value) => dispatch(setStocks(value))
})
const mapStateToProps = state => ({ ...state })

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchValue: '',
            stocks: []
        };
    }
    
    handleSearch(event) {
        const searchValue = event.target.value;
        this.setState({ searchValue: searchValue });
        if (searchValue.length === 1) {
            ApiService.getStocks(searchValue).then(res => {
                this.props.setStocks(res)
            })
        } else {
            const subSelection = this.state.stocks.filter(stock => stock.lowerName.startsWith(searchValue))
            this.setState({displayStocks: subSelection})
        }
    }
    
    render() {
        return (
            <div>
                <form>
                    <label>
                        <input type="text" value={this.state.searchValue} onChange={this.handleSearch.bind(this)} />
                    </label>
                </form>
                {
                    JSON.stringify(this.state)
                }
            </div>
        )
    }

}


export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
