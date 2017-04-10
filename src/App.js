import React, { Component } from 'react';
import logo from './logo.svg';
//import Investments from './Investments';
import './App.css';
import { InvestmentForm, Investments } from './components/investment';
import { addInvestment, generateId } from './lib/investmentHelpers';

class App extends Component {
  constructor() {
    super();
    this.state = {
      investments: [
        {id: 1, category: 'Equity', price: 49.99, name: 'US Technology', isComplete: true},
        {id: 2, category: 'Income', price: 39.99, name: 'PIMCO', isComplete: false},
        {id: 3, category: 'Commodity', price: 29.99, name: 'United Gold', isComplete: false}
      ],
      currentInvestment: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleSubmit(evt) {
    evt.preventDefault();
    const newId = generateId();
    const newInvestment = {
      id: newId,
      category: 'Equity',
      price: 10.00,
      name: this.state.currentInvestment,
      isComplete: false
    };
    const updatedInvestments = addInvestment(this.state.investments, newInvestment);
    this.setState({
      investments: updatedInvestments,
      currentInvestment: ''
    });
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
          <InvestmentForm
            handleInputChange={this.handleInputChange}
            currentInvestment={this.state.currentInvestment}
            handleSubmit={this.handleSubmit}
          />
          <Investments investments={this.state.investments}/>
        </div>
      </div>
    );
  }
}

// class App extends Component {
//   render() {
//     return (
//           <Investments investments={investments}/>
//     );
//   }
// }
export default App;

