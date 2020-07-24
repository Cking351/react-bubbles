import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Login from "./components/Login";
import "./styles.scss";
import PrivateRoute from "./components/PrivateRoute";
import BubblePage from './components/BubblePage';
import Header from './components/Header';

function App() {
  const token = localStorage.getItem('token')
  const [loggedIn, setLoggedIn] = useState(Boolean(token))


  return (
    <Router>
      <div className="App">
        <Header loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
        <PrivateRoute exact path="/" component={BubblePage} />

        <Route path="/login">
          <Login setLoggedIn={setLoggedIn} />
        </Route>
        
        <PrivateRoute path="/bubbles" component={BubblePage} />
      </div>
    </Router>
  );
}

export default App;
