import ReactDOM from "react-dom";
import React from "react";

import APP from "./views/App/App.jsx";

// import './style/main.scss'

const wrapper = document.querySelector("body");

wrapper ? ReactDOM.render(<APP />, wrapper) : false;
