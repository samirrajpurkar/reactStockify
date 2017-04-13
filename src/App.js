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
      investmentName: '',
      category: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleSubmit(evt) {
    evt.preventDefault();
    const newId = generateId();
    const newInvestment = {
      id: newId,
      category: this.state.category,
      price: 10.00,
      name: this.state.investmentName,
      isComplete: false
    };
    console.log(newInvestment);

    const updatedInvestments = addInvestment(this.state.investments, newInvestment);
    this.setState({
      investments: updatedInvestments,
      investmentName: '',
      category: ''
    });
  }

  handleInputChange(evt) {
    // console.log(evt.target.name);
    // var partialState = {};
    // partialState[evt.target.name] = evt.target.value;

    // this.setState({
    //   currentInvestment: partialState
    // });
    const target = evt.target;
    const value = target.value;
    const name = target.name;
    // this.setState({
    //   name: value
    // });
    if (name === 'investmentName') {
      this.setState({
        investmentName: value
      });
    }
    if (name === 'category') {
      this.setState({
        category: value
      });
    }
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
            investmentName={this.state.investmentName}
            category={this.state.category}
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

