import React from 'react';

class Investment extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      currentprice: new Date()
    };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.updateCurrentPrice(), 30000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  updateCurrentPrice() {
    this.setState({currentprice: new Date()});
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
          {this.state.currentprice.toLocaleTimeString()}
        </td>
      </tr>
    );
  }
}

export default Investment;