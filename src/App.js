import React, { Component } from "react";
import menuItems from "./menu.json";
import MultiMenu from "./components/MultiMenu";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="menu-app">
        <MultiMenu menuItems={menuItems} />
      </div>
    );
  }
}
export default App;
