import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import MessageBoard from "./components/MessageBoard";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>

        <Route exact path="/homepage">
          <Navbar />
          <MessageBoard />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
