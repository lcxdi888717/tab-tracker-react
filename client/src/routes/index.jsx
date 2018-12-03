import React from "react";
import { Route, Switch } from "react-router-dom";
import { RegisterForm } from "../views";

const Routes = () => (
  <Switch>
    <Route path="/register" component={RegisterForm} />
    <Route render={() => <div>Not found</div>} />
  </Switch>
);

export default Routes;
