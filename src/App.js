import React, { Component } from 'react';
import Investments from './Investments';

// import logo from './logo.svg';
// import './App.css';

// // class App extends Component {
// //   render() {
// //     return (
// //       <div className="App">
// //         <div className="App-header">
// //           <img src={logo} className="App-logo" alt="logo" />
// //           <h2>Welcome to React</h2>
// //         </div>
// //         <p className="App-intro">
// //           To get started, edit <code>src/App.js</code> and save to reload.
// //         </p>
// //       </div>
// //     );
// //   }
// // }

var investments = [
{category: 'Equity', price: '$49.99', stocked: true, name: 'US Technology'},
{category: 'Income', price: '$39.99', stocked: true, name: 'PIMCO'},
{category: 'Commodity', price: '$29.99', stocked: true, name: 'United Gold'}
];

class App extends Component {
  render() {
    return (
          <Investments investments={investments}/>
    );
  }
}
export default App;

