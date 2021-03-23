import React, { Component } from "react"
import './App.css'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import UseState from './views/useState'
import UseReducer from './views/useReducer'
import ParentContext from './views/useContext'

class App extends Component {
  render() {
    return (
      <Router>
        <div class="app">
          <h1>ReactHooks</h1>
          <nav>
            <Link to="/useState">useState</Link>
            <Link to="/useReducer">useReducer</Link>
            <Link to="/useContext">useContext</Link>
          </nav>
          <Switch>
            <Route path="/useState">
              <UseState />
            </Route>
            <Route path="/useReducer">
              <UseReducer />
            </Route>
            <Route path="/useContext">
              <ParentContext />
            </Route>
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
