import React from 'react';
import 'assets/styles/reset.css'
import Index from './views/index/Index'
import List from './views/list/List'
import { Route, BrowserRouter as Router, Redirect, Switch } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/index" component={Index}></Route>
        <Route path="/list" component={List}></Route>

        <Redirect from="/" exact to="/index/category/classify"></Redirect>

        <Route path="*" render={
          () => {
            return <h1>404 Not Found</h1>
          }
        }></Route>

      </Switch>
    </Router>

  );
}

export default App;
