import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let x = `Hello, I've learnt to use the full-stack evaluation tool. This makes
	me so happy`;
    state = {
      id: "click",
      content: ""
    };

    return (
      <div id="main">
        <button
          id={this.state.id}
          onClick={() => {
            this.setState({
              id: "para"
            });
            this.setState({
              content: x
            });
          }}
        ></button>
        <div>{this.state.content}</div>
      </div>
    );
  }
}

export default App;
