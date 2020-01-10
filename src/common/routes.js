import React from "react";
import { Route } from "react-router-dom";
import PropTypes from "prop-types";

import Tester from "../containers/Tester";
import App from "../containers/App";

const routes = () => (
  <div>
    <Route path="/#" exact component={Tester} />
    <Route path="/Persons-page" exact component={App} />
    </div>
);

export default routes;
