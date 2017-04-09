import React from 'react';

class Investment extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      currentprice: 0
    };
    // This binding is necessary to make `this` work in the callback
    this.handleGetPriceClick = this.handleGetPriceClick(this);
  }

  componentDidMount() {
    //this.timerID = setInterval(() => this.updateCurrentPrice(), 5000);
  }

  componentWillUnmount() {
    //clearInterval(this.timerID);
  }

  updateCurrentPrice() {
    //this.setState({currentprice: new Date()});
    var that = this;
    fetch('http://127.0.0.1:8888/?isin=FSIDVDU:SP', {mode: 'cors'})
      .then(function (response) {
        return response.text();
      }). then(function (text) {
        console.log(text);
        that.setState({currentprice: text});
      });
  }

  handleGetPriceClick() {
    this.updateCurrentPrice();
  }

  render() {
    return (
      <tr>
        <td>
          {this.props.investment.category}
        </td>
        <td>
          {this.props.investment.name}
        </td>
        <td>
          {this.props.investment.price}
        </td>
        <td>
          {this.state.currentprice}
        </td>
        <td>
          <button onClick={this.handleGetPriceClick}>
            Get Price
          </button>
        </td>
      </tr>
    );
  }
}

export default Investment;