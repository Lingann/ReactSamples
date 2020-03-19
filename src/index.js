import Form from "./js/components/Form.jsx";
import State from './js/components/State.jsx';
import ReactDOM from "react-dom";
import React from "react";
const wrapper = document.getElementById("container");
wrapper ? ReactDOM.render(<State />, wrapper) : false;