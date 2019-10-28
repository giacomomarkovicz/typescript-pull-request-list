import React from "react";

import { Switch, Route } from "react-router-dom";

import Main from "./pages/main";
//import Show from './pages/show';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Main} />
    {/* <Route path="/pull-request/:id" component={Show} /> */}
  </Switch>
);

export default Routes;
