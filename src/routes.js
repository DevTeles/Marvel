import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Characters from './pages/Characters';
import Series from './pages/Series';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Characters} />
      <Route path="/characters/:id/series" component={Series} />
    </Switch >
  );
}