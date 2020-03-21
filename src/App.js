import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import LoginPage from "./Pages/Login"
import UserDashboard from "./Pages/UserDashboard"
import CountryPage from "./Pages/Country"


function App() {
  return (
    <BrowserRouter basename="/">
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route exact path="/user-dashboard" component={UserDashboard} />
        <Route exact path="/country-details/:code" component={CountryPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
