import React from 'react';
import { BrowserRouter as Router,Link, Switch, Route } from 'react-router-dom';
import Form from './Form';
import FormRef from './FormRef';
import FormState from './FormState';

function App() {
  return (
<Router>
      <nav style={{ padding: '10px', textAlign: 'center', gap: '15px', display: 'flex', justifyContent: 'center' }}>
        <Link id="form-link" to="/">Section 1 (Basic Form)</Link>
        <Link id="form-ref-link" to="/ref">Section 2 (useRef)</Link>
        <Link id="form-state-link" to="/state">Section 3 (useState)</Link>
      </nav>

      <Switch>
        <Route exact path="/" component={Form} />
        <Route path="/ref" component={FormRef} />
        <Route path="/state" component={FormState} />
      </Switch>
    </Router>
  );
}

export default App;

