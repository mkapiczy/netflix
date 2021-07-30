import React from "react";
import * as ROUTES from './constants/routes';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Browse, Home, SignIn, SignUp} from "./pages";

export default function App() {
    return (
        <Router>
            <Route exact path={ROUTES.HOME}><Home/></Route>
            <Route exact path={ROUTES.BROWSE}><Browse/></Route>
            <Route exact path={ROUTES.SING_IN}><SignIn/></Route>
            <Route exact path={ROUTES.SING_UP}><SignUp/></Route>
        </Router>
    );
}
