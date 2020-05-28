import React from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';

import Clock from './Clock';
import Folder from './Folder';
import Weather from './Weather';
import AutoComplete from './Auto';

const Widgets = ({ folders, names }) => (
  <div>
    <h1>Widgets</h1>

    <NavLink to="/clock">Clock</NavLink>
    <NavLink to="/folders">Folders</NavLink>
    <NavLink to="/weather">Weather</NavLink>
    <NavLink to="/autocomplete">Auto Complete</NavLink>
    <Switch>
      <Route path="/clock" component={Clock} />
      <Route path="/folders" render={() => <Folder folders={folders} />} />
      <Route path="/weather" component={Weather} />
      <Route
        path="/autocomplete"
        render={() => <AutoComplete names={names} />}
      />
      <Route
        exact
        path="/"
        render={() => <h1>Welcome to your widgets app!</h1>}
      />
      <Route path={/\/(.)+/} render={() => <h1>Page not Found</h1>} />
    </Switch>
  </div>
);

export default Widgets;
