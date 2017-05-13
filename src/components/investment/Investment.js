import React, { Component } from 'react';
import './Investment.css';
import {partial} from '../../lib/utils';
import {getPriceFromBloomberg} from '../../lib/price';

export class Investment extends Component {
  handleToggle = partial(this.props.handleToggle, this.props.id);
  handleRemove = partial(this.props.handleRemove, this.props.id);

  constructor(props) {
    super(props);
    this.state = {
      marketprice: props.current_price
    };
  }

  removeComma = (s) => (s.replace(',',''));

  componentDidMount() {
    getPriceFromBloomberg(this.props.investment_code)
      .then(result => {
        this.setState({marketprice: this.removeComma(result.price)});
      });
  }

  render() {
    return (
      <div className="Investment">
        <li>
          <span className="removeInvestment">
            <a href="#" onClick={this.handleRemove}>X</a>
          </span>
          <span className="main">
            <input type="checkbox"
              onChange={this.handleToggle}
              checked={this.props.isComplete}/>{this.props.name}
          </span>
          <span className="others">
            {this.props.price}
          </span>
          <span className="others">
            {this.props.category}
          </span>
          <span className="others">
            {this.state.marketprice}
          </span>
          <span className="others">
            {parseFloat(this.props.price) - parseFloat(this.state.marketprice)}
          </span>
        </li>
      </div>
    );
  }
}

Investment.propTypes = {
  name: React.PropTypes.string.isRequired,
  isComplete: React.PropTypes.bool,
  id: React.PropTypes.number.isRequired
};
