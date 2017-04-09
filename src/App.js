import React, { Component } from 'react';
import logo from './logo.svg';
//import Investments from './Investments';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      investments: [
        {id: 1, category: 'Equity', price: '$49.99', name: 'US Technology', isComplete: true},
        {id: 2, category: 'Income', price: '$39.99', name: 'PIMCO', isComplete: false},
        {id: 3, category: 'Commodity', price: '$29.99', name: 'United Gold', isComplete: false}
      ],
      currentInvestment: ''
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(evt) {
    this.setState({
      currentInvestment: evt.target.value
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Stockify</h2>
        </div>
        <div className="Stockify-App">
          <form>
            <input type="text" onChange={this.handleInputChange} value={this.state.currentInvestment}/>
          </form>
          <div className="Stockify-List">
            <ul>
              {this.state.investments.map(investment =>
                <li key={investment.id}>
                  <input type="checkbox" defaultChecked={investment.isComplete}/>{investment.name}
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

// var investments = [
// {category: 'Equity', price: '$49.99', stocked: true, name: 'US Technology'},
// {category: 'Income', price: '$39.99', stocked: true, name: 'PIMCO'},
// {category: 'Commodity', price: '$29.99', stocked: true, name: 'United Gold'}
// ];

// class App extends Component {
//   render() {
//     return (
//           <Investments investments={investments}/>
//     );
//   }
// }
export default App;

