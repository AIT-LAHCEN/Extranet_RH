import React from 'react';
import {Switch,Route} from 'react-router-dom';
import Statistics from './statistics';
import conn_inscr from './conn_inscr';
import Accueil from './recherche';

const Main = () =>  (
    <Switch>
        <Route exact path="/" component={conn_inscr}></Route>
        <Route exact path="/accueil" component={Accueil}></Route>
        <Route exact path="/aide" component={Statistics}></Route>
    </Switch>
);

export default Main;