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

  removeComma = (s) => {
    if (s.indexOf(',') === -1) {
      return s;
    } else {
      return s.replace(',','');
    }
  };

  componentDidMount() {
    getPriceFromBloomberg(this.props.invesment_code)
      .then(result => {
        this.setState({marketprice: this.removeComma(result.price)});
      });
  }

  render() {
    return (
      <div>
        <li>
          <div className="card">
            <div className="card-block">
              <h4 class="card-title">
               {this.props.name}
              </h4>
              <h6 class="card-subtitle mb-2 text-muted">
                <small>{this.props.category}</small>
              </h6>
              <div className="row">
                  <div className="col-4">
                    {this.props.price || 'C.P.'}
                  </div>
                  <div className="col-4">
                    {this.state.marketprice || 'M.P.' }
                  </div>
                <div className="col-4">
                  {(parseFloat(this.state.marketprice || 0.00) - parseFloat(this.props.price || 'P.L.')).toFixed(2)}
                </div>
              </div>
              <a href="#" className="card-link" onClick={this.handleRemove}>Delete</a>

              <input type="checkbox"
                  onChange={this.handleToggle}
                  checked={this.props.isComplete}/> Complete
            </div>
          </div>
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
