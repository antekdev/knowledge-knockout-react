import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import Lobby from 'components/lobby'
import Mainmenu from 'components/mainmenu'
const {REACT_APP_SOCKET_URL} = process.env

function Entry() {
  console.log('REACT_APP_SOCKET_URL', REACT_APP_SOCKET_URL);
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
