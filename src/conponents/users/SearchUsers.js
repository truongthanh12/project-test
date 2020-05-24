import React, { Component } from "react";
import PropTypes from "prop-types";
export default class SearchUsers extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      text: "",
    };
  }

  static propTypes = {
    searchUsers: PropTypes.func,
    clearUsers: PropTypes.func,
    showClear: PropTypes.bool,
    setAlert: PropTypes.func,
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.text === "") {
      this.props.setAlert("Please enter something.", "light");
    } else {
      this.props.searchUsers(this.state.text);
      this.setState({
        text: "",
      });
    }
  };
  render() {
    const { showClear, clearUsers } = this.props;
    return (
      <form className="form py-3" onSubmit={this.handleSubmit}>
        <input
          className="btn btn-light mb-3"
          type="text"
          name="text"
          value={this.state.text}
          onChange={this.handleChange}
          placeholder="Search Users ...."
        />

        <input type="submit" value="Search" className="btn btn-dark mb-3" />
        {showClear && (
          <button className="btn btn-danger btn-block" onClick={clearUsers}>
            Clear button
          </button>
        )}
      </form>
    );
  }
}
