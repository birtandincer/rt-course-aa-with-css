import React, { Component } from "react";

import PropTypes from "prop-types";
import { HashRouter, Route, Switch } from "react-router-dom";

import LoginPage from "./screens/LoginPage";

class Start extends Component {
  render() {
    return (
      <HashRouter>
      start
      <div>
        <Switch>
          <Route path="/Login" exact component={LoginPage} />
        </Switch>
        </div>
      </HashRouter>
    );
  }
}

export default Start;
