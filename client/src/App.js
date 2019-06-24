import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchBar from './search/searchBar';
import Navigation from './components';

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
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
