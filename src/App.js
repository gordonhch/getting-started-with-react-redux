import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {exampleAction} from './actions/actions.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;

// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

// import {bindActionCreators} from 'redux';
// import {connect} from 'react-redux';
// import {exampleAction} from './actions/actions.js';

// class App extends Component {
//   render() {
//     return (
//       <h1>Hello World, this is a Redux tutorial!</h1>
//       <p>Here is our property: {this.props.examplePropOne}</p>
//     );
//   }
// }

// const mapStateToProps = (state) => {
//   return {
//     examplePropOne: state.examplePropOne,
//     examplePropTwo: state.examplePropTwo,
//   }
// }

// const mapDispatchToProps = (dispatch) => {
//   return bindActionCreators({exampleAction}, dispatch);

// }
// export default connect(mapStateToProps, mapDispatchToProps)(App);
