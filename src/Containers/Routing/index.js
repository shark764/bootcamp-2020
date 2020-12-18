import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import APIFetching from '../APIFetching';
import Example1 from '../ExampleJSX';
import Example from '../ExampleJSX/Example';
import Lifecycle from '../Lifecycle';
import UsersExample from '../UsersExample';
import Menu from './Menu';

function Routing() {
  return (
    <div>
      <HashRouter>
        <Menu />

        <Switch>
          <Route exact path="/">
            <Example />
          </Route>
          <Route path="/jsx">
            <Example1 />
          </Route>
          <Route path="/lifecycle">
            <Lifecycle />
          </Route>
          <Route path="/users">
            <UsersExample />
          </Route>
          <Route path="/api">
            <APIFetching />
          </Route>
        </Switch>
      </HashRouter>
    </div>
  );
}

export default Routing;
