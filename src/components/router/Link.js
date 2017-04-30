import React, {Component} from 'react';

export class Link extends Component {
  static contextTypes = {
    route: React.PropTypes.string,
    linkHandler: React.PropTypes.func
  }

  handleClick = (evt) => {
    evt.preventDefault();
    //history.pushState(null,'',this.props.to); //history.pushState(state, title, location in the browser)
    this.context.linkHandler(this.props.to);
  }

  render() {
    const activeRouteClass = this.context.route === this.props.to ? 'activeRoute' : '';
    return <a className={activeRouteClass} href="#" onClick={this.handleClick}>{this.props.children}</a>;
  }
}

Link.propTypes = {
  to: React.PropTypes.string.isRequired
};