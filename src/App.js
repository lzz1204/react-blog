import React, { Component } from 'react';
import AppNav from './components/AppNav';
import Home from './pages/Home';
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Edit from "./pages/Edit";
import User from "./pages/User";
import "whatwg-fetch";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import './App.css';
const currentUser = localStorage.getItem("username");
class App extends Component {
  render() {
    const LoginRoute = ({component: Component, ...rest}) => {
      if (currentUser) {
        return <Redirect to="/"/>
      } else {
        return <Route {...rest} component={Component}/>
      }
    }
    return (
      <BrowserRouter>
        <div>
          <AppNav/>
          <Switch>
            <Route exact path="/" component={Home}/>
            <LoginRoute exact path="/login" component={Login}/>
             <Route exact path="/edit" component={Edit}/>
            <Route exact path="/signup" component={Signup}/>
            <Route  path="/user" component={User}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
