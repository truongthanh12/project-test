import "./App.css";
import React, { Component } from "react";
import Navbar from "./conponents/layout/Navbar";
import Users from "./conponents/users/Users";
import axios from "axios";
import SearchUsers from "./conponents/users/SearchUsers";

export default class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      users: [],
      loading: false,
    };
  }

  // async componentDidMount() {
  //   this.setState({
  //     loading: true,
  //   });

  //   const res = await axios.get(
  //     `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
  //   );
  //   this.setState({
  //     users: res.data,
  //     loading: false,
  //   });
  // }

  // search Github here
  searchUsers = async (text) => {
    this.setState({
      loading: true,
    });

    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}
      &client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}
      &client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    this.setState({
      users: res.data.items,
      loading: false,
    });
  };
  clearUsers = () => {
    this.setState({
      users: [],
      loading: false,
    });
  };
  render() {
    const { users, loading } = this.state;
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <SearchUsers
            searchUsers={this.searchUsers}
            clearUsers={this.clearUsers}
            showClear={users.length > 0 ? true : false}
            setAlert={this.setAlert}
          />
          <Users users={users} loading={loading} />
        </div>
      </div>
    );
  }
}
