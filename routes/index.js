import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import SalaDeJogo from '../pages/SalaDeJogo';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={SalaDeJogo} />

        <Route component={() => <h1>Essa pagina não existe</h1>} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
