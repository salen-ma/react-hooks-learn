import React, { Component } from "react"
import './App.css'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import UseState from './views/useState'
import UseReducer from './views/useReducer'
import ParentContext from './views/useContext'
import UseEffect from './views/useEffect'
import UseMemo from './views/useMemo'
import Memo from './views/memo'
import UseCallback from './views/useCallback'
import UseRef from './views/useRef'
import CustomHook from './views/customHook'
import RouterHook from './views/routerHook'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <h1>ReactHooks</h1>
          <nav>
            <Link to="/useState">useState</Link>
            <Link to="/useReducer">useReducer</Link>
            <Link to="/useContext">useContext</Link>
            <Link to="/useEffect">useEffect</Link>
            <Link to="/useMemo">useMemo</Link>
            <Link to="/memo">memo</Link>
            <Link to="/useCallback">useCallback</Link>
            <Link to="/useRef">useRef</Link>
            <Link to="/customHook">customHook</Link>
            <Link to="/routerHook">routerHook</Link>
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
            <Route path="/useEffect">
              <UseEffect />
            </Route>
            <Route path="/useMemo">
              <UseMemo />
            </Route>
            <Route path="/memo">
              <Memo />
            </Route>
            <Route path="/useCallback">
              <UseCallback />
            </Route>
            <Route path="/useRef">
              <UseRef />
            </Route>
            <Route path="/customHook">
              <CustomHook />
            </Route>
            <Route path="/routerHook/:name/:age">
              <RouterHook />
            </Route>
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
