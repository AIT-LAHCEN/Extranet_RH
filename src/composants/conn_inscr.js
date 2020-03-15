import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch
} from "react-router-dom";
import Connection from './connexion';
import Inscription from './inscription';
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';

class conn_inscr extends Component{
  
  render() {
    return(
      <Router>
        <div className="app">
          <div>
            <NavLink exact to="/" activateClassName="active">se connecter </NavLink>
            <NavLink to="/inscription" activateClassName="active"> s'inscrire</NavLink>
          </div>
          <Route render = {() => (
            <TransitionGroup>
            <CSSTransition timeout={300}>
              <Switch>
                <Route exact path="/" component={Connection}/>
                <Route path="/inscription" component={Inscription}/>
              </Switch>
            </CSSTransition>
          </TransitionGroup>
          )}/>
      </div>
    </Router>
    );
  }
}

export default conn_inscr;
