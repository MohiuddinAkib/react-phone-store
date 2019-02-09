import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <main>
        <div className="container">
          <div className="row">
            <div className="col-md-6">Column number 1</div>
            <div className="col-md-6">
              <span>
                <i className="fas fa-home" />
              </span>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default App;
