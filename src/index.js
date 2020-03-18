import Form from "./js/components/Form.jsx";
import Label from './js/components/Label.jsx';
import ReactDOM from "react-dom";
import React from "react";
const wrapper = document.getElementById("container");
wrapper ? ReactDOM.render(<Label />, wrapper) : false;