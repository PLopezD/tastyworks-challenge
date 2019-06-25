import React, { Component } from 'react';
import { connect } from 'react-redux';
import Navigation from './components';
import SearchBar from './components/search/searchBar';
import StockSummary from './components/stockSummary/stockSummary';

import 'materialize-css'; 
import 'materialize-css/dist/css/materialize.min.css';
import './App.scss';

const mapDispatchToProps = dispatch => ({})
const mapStateToProps = state => ({...state})

class App extends Component {
  render() {
    return (
      <div className="app container">
        <Navigation></Navigation>
        <SearchBar></SearchBar>
        <StockSummary></StockSummary>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
