import ReactDOM from "react-dom";
import React from "react";

import APP from "./js/components/Router/App.jsx";

// import './style/main.scss'

const wrapper = document.getElementById("container");
wrapper ? ReactDOM.render(<APP />, wrapper) : false;