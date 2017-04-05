import React from 'react';
import Investment from './Investment';

class Investments extends React.Component {
  render() {
    var rows = [];
    this.props.investments.forEach(function (i) {
      rows.push(<Investment investment={i} key={i.name}/>);
    });

    return (
      <table>
        <thead>
          <tr>
            <th>Category</th>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
          <tbody>{rows}</tbody>
      </table>
    );
  }
}

export default Investments;