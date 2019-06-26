import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Navigation } from './components';
import SearchBar from './components/search/searchBar';
import StockSummaryContainer from './components/stockSummary/stockSummaryContainer';
import { RecentSearches } from './components';

import 'materialize-css'; 
import 'materialize-css/dist/css/materialize.min.css';
import './App.scss';

const mapDispatchToProps = dispatch => ({})
const mapStateToProps = state => ({...state})

class App extends Component {
  render() {
    return (
      <main className="app container">
        <Navigation></Navigation>
        <SearchBar></SearchBar>
        <RecentSearches></RecentSearches>
        <StockSummaryContainer></StockSummaryContainer>
      </main>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
