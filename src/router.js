import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import App from './App';
import About from "./components/aboutPage/About";

export default function MyRouter() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/parler-map">
            <App />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <App />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}