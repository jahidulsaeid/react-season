import React, { Component } from "react";
import "semantic-ui-css/semantic.min.css";
import SeasonDisplay from "./SeasonDisplay";

class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = { lat: null };
  // }
  state = {lat: null, errorMessage : ''};
  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ errorMessage: err.message })
    );
  }

  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }
    if (!this.state.errorMessage && this.state.lat) {
      return <div><SeasonDisplay lat={this.state.lat}/></div>;
    }
    return <div>Loading...! </div>;
  }
}

export default App;
