import React, { Component } from 'react';
import Routes from './Routes'
import Navbar from './Components/NavBar'
import './App.css';

import { connect } from "react-redux";
import { getBlogsFromAPI } from './Actions'

class App extends Component {

  componentDidMount() {
    this.props.getBlogsFromAPI();
    console.log("WE ARE HERE")
  }

  render() {


    return (
      <div className="App">
        <Navbar />
        <Routes />
      </div>
    );
  }
}
function mapStateToProps(state) {
  return { blogs: [...state.blogs] };
}

export default connect(mapStateToProps, { getBlogsFromAPI })(App);


