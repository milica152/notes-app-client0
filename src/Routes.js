import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import Login from "./containers/Login";
import NewNote from "./containers/NewNote";
import NotFound from "./containers/NotFound";
import Signup from "./containers/Signup";
import Notes from "./containers/Notes";
import AuthenticatedRoute from "./components/AuthenticatedRoute";
import UnauthenticatedRoute from "./components/UnauthenticatedRoute";
import Settings from "./containers/Settings";

export default function Routes() {
  return (
    <Switch>
        <Route exact path="/" component={Home}/>
        <UnauthenticatedRoute exact path="/login" component={Login}/>
        <UnauthenticatedRoute exact path="/signup" component={Signup}/>
        <AuthenticatedRoute exact path="/notes/new" component={NewNote}/>
        <AuthenticatedRoute exact path="/notes/:id" component={Notes}/>
        <AuthenticatedRoute exact path="/settings" component={Settings}/>
        <Route component={NotFound}/>
    </Switch>
  );
}