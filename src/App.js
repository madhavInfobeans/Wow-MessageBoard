import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import ContactUs from "./components/ContactUs";
import Login from "./components/Login";
import MessageBoardData from "./components/MessageBoardData";
import Navbar from "./components/Navbar";
import UserContact from "./components/UserContact";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route exact path="/homepage">
          <MessageBoardData />
        </Route>
        <Route exact path="/messageboard">
          <MessageBoardData />
        </Route>
        <Route exact path="/contactus">
          <ContactUs />
        </Route>
        <Route exact path="/displayuser">
          <UserContact />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
