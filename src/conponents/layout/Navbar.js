import React, { Component } from "react";
import PropTypes from "prop-types";
export default class Navbar extends Component {
  render() {
    return (
      <div className="navbar bg-danger">
        <i className={this.props.icon} />{" "}
        <span className="title"> {this.props.title}</span>
      </div>
    );
  }
}
Navbar.defaultProps = {
  title: "Finder Github",
  icon: "fab fa-github fa-2x",
};

Navbar.propTypes = {
  name: PropTypes.string,
  icon: PropTypes.string,
};
