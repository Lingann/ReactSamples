import React from  'react';
import {BrowserRouter} from 'react-router-dom';
import Navigation from "./partial/Navigation.jsx";
import Content from "./partial/Content.jsx";

const APP = () => (
    <BrowserRouter>
        <div className='App'>
            <Navigation/>
            <Content/>
        </div>
    </BrowserRouter>
);

export default APP
