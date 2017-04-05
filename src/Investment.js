import React from 'react';
class Investment extends React.Component {
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
      </tr>
    );
  }
}

export default Investment;