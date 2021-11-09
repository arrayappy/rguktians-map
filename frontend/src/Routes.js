import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import studentForm from "./components/studentForm";
import home from "./components/home";
import history from './components/history';

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={home} />
                    <Route path="/student-form" component={studentForm} />
                </Switch>
            </Router>
        )
    }
}
