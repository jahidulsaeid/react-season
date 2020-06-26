import React, { Component } from "react";
import "semantic-ui-css/semantic.min.css";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = { lat: null };
  // }
  state = { lat: null, errorMessage: "" };
  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ errorMessage: err.message })
    );
  }

  returnContent() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }
    if (!this.state.errorMessage && this.state.lat) {
      return (
        <div>
          <SeasonDisplay lat={this.state.lat} />
        </div>
      );
    }
    return (
      <div>
        <Spinner message="Please accept the location request" />{" "}
      </div>
    );
  }

  render() {
    return <div className="hello red">{this.returnContent()}</div>;
  }
}

export default App;
