import React from  'react';
import {Route,Switch} from 'react-router-dom';
import Home from "./Home.jsx";
import About from './About.jsx';
const Content = () => (
    <main>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/about' component={About}/>
        </Switch>
    </main>
);

export default Content;