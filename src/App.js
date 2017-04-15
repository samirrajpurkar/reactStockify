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
      category: 'Equity',
      price: '',
      investmentName: '',
      errorMessage: ''
    };
    this.handleEmptySubmit = this.handleEmptySubmit.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleEmptySubmit(evt) {
    evt.preventDefault();
    this.setState({
      errorMessage: 'Please enter Price / Name'
    });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    const newId = generateId();
    const newInvestment = {
      id: newId,
      category: this.state.category,
      price: this.state.price,
      name: this.state.investmentName,
      isComplete: false
    };

    const updatedInvestments = addInvestment(this.state.investments, newInvestment);

    this.setState({
      investments: updatedInvestments,
      category: 'Equity',
      price: '',
      investmentName: '',
      errorMessage: ''
    });
  }

  handleInputChange(evt) {
    const target = evt.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  render() {
    const submitHandler = (this.state.price && this.state.investmentName) ?
                            this.handleSubmit : this.handleEmptySubmit;
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Stockify</h2>
        </div>
        <div className="Stockify-App">
          {this.state.errorMessage && <span className="error">{this.state.errorMessage}</span>}
          <InvestmentForm
            handleInputChange={this.handleInputChange}
            category={this.state.category}
            price={this.state.price}
            investmentName={this.state.investmentName}
            handleSubmit={submitHandler}
          />
          <Investments investments={this.state.investments}/>
        </div>
      </div>
    );
  }
}
export default App;

