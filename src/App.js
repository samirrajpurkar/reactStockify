import React, { Component } from 'react';
import logo from './logo.svg';
//import Investments from './Investments';
import './App.css';
import { Footer, InvestmentForm, Investments } from './components/investment';
import { removeInvestment, addInvestment, generateId, findById, toggleInvestment,updateInvestment} from './lib/investmentHelpers';
import {pipe, partial} from './lib/utils';

class App extends Component {
  state = {
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

  handleRemove = (id, evt) => {
    evt.preventDefault();
    const updatedInvestments = removeInvestment(this.state.investments, id);
    this.setState({investments: updatedInvestments});
  }

  handleToggle = (id) => {
    // const investment = findById(id, this.state.investments);
    // const toggled = toggleInvestment(investment);
    // const updatedInvestments = updateInvestment(this.state.investments, toggled);
    // this.setState({investments: updatedInvestments});
    // Refactor the code using pipe utility
    const getUpdatedInvestments = pipe(
            findById,
            toggleInvestment,
            partial(updateInvestment, this.state.investments)
            );
    const updatedInvestments = getUpdatedInvestments(id, this.state.investments);
    this.setState({investments: updatedInvestments});
  }

  handleEmptySubmit = (evt) => {
    evt.preventDefault();
    this.setState({
      errorMessage: 'Please enter Price / Name'
    });
  }

  handleSubmit = (evt) => {
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

  handleInputChange = (evt) => {
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
          <Investments
            handleRemove={this.handleRemove}
            handleToggle={this.handleToggle}
            investments={this.state.investments}
            />
        </div>
        <Footer />
      </div>
    );
  }
}
export default App;

