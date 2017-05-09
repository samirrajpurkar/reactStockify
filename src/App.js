import React, { Component } from 'react';
import logo from './logo.svg';
//import Investments from './Investments';
import './App.css';
import { Footer, InvestmentForm, Investments } from './components/investment';
import { filterInvestments, removeInvestment, addInvestment, generateId,
  findById, toggleInvestment,updateInvestment} from './lib/investmentHelpers';
import {pipe, partial} from './lib/utils';
import { loadInvestments, createInvestment, saveInvestment, deleteInvestment } from './lib/investmentService';
import {getMarketPrice} from './lib/priceService';

class App extends Component {
  state = {
    investments: [],
    category: 'Equity',
    price: '',
    investmentName: '',
    errorMessage: '',
    message: ''
  };

  static contextTypes = {
    route: React.PropTypes.string
  }

  componentDidMount() {
    loadInvestments()
      .then(investments => this.setState({investments}));
  }

  handleRemove = (id, evt) => {
    evt.preventDefault();
    const updatedInvestments = removeInvestment(this.state.investments, id);
    this.setState({investments: updatedInvestments});
    deleteInvestment(id)
      .then(() => this.showTempMessage('Investment Deleted'));
  }

  handleToggle = (id) => {
    // const investment = findById(id, this.state.investments);
    // const toggled = toggleInvestment(investment);
    // const updatedInvestments = updateInvestment(this.state.investments, toggled);
    // this.setState({investments: updatedInvestments});
    // Refactor the code using pipe utility
    const getToggledInvestment = pipe(findById, toggleInvestment);
    const updatedInvestment = getToggledInvestment(id, this.state.investments);
    const getUpdatedInvestments = partial(updateInvestment, this.state.investments);
    const updatedInvestments = getUpdatedInvestments(updatedInvestment);
    this.setState({investments: updatedInvestments});
    saveInvestment(updatedInvestment)
      .then(() => this.showTempMessage('Investment Updated'));
  }

  handleEmptySubmit = (evt) => {
    evt.preventDefault();
    this.setState({
      errorMessage: 'Please enter Price / Name'
    });
  }

  showTempMessage = (msg) => {
    this.setState({message: msg});
    setTimeout(() => this.setState({message: ''}),2500);
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

    createInvestment(newInvestment)
      .then(() => this.showTempMessage('New Investment Added.'));
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
          {this.state.message && <span className="success">{this.state.message}</span>}
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
            investments={
              filterInvestments(this.state.investments, this.context.route)
            }
            />
        </div>
        <Footer />
      </div>
    );
  }
}
export default App;

