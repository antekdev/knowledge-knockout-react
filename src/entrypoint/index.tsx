import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import Lobby from 'components/lobby'
import Mainmenu from 'components/mainmenu'

function Entry() {
  return (
    <Router>
        <Switch>
          <Route path="/lobby">
            <Lobby />
          </Route>
          <Route path="/">
            <Mainmenu />
          </Route>
        </Switch>
    </Router>
  );
}

export default Entry;
