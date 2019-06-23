import React, { Component } from 'react';
import { connect } from 'react-redux';

import './App.scss';

import { actionTest } from './actions/actionTest'

const mapDispatchToProps = dispatch => ({
  actionTest: (value) => dispatch(actionTest(value))
})

const mapStateToProps = state => ({
  ...state
})

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0
    };
  }

  actionTest = (event) => {
    let newNumber = this.state.number + 1
    this.setState({number: newNumber})
    this.props.actionTest(this.state.number);
  }

  render() {
    return (
      <div className="App">
        <pre>
          {
            JSON.stringify(this.props)
          }
        </pre>
        <button onClick={this.actionTest}>Test redux action</button>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
