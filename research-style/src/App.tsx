import React from 'react';
import { HashRouter as Router, Switch } from 'react-router-dom';
import AppRoute from './components/layouts/AppRoute';

function App() {
  return (
    <div className="app-root">
      <Router>
        <Switch>
          <AppRoute/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
