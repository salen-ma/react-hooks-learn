import React, { Component } from "react"
import './App.css'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import UseState from './views/useState'

class App extends Component {
  render() {
    return (
      <Router>
        <div class="app">
          <h1>ReactHooks</h1>
          <nav>
            <Link to="/useState">useState</Link>
          </nav>
          <Switch>
            <Route path="/useState">
              <UseState />
            </Route>
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
