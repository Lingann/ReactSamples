import React, { Component } from "react";
import ReactDOM from "react-dom";

import '../../../style/about/about.scss'
class About extends Component {

    aboutStyle() {
        return {
            // width : '100%',
            // height : '50px',
            // background: '#c7e6cc'
        }
    }

    render() {
        return (
            <div className='about'>
                about content!
            </div>
        );
    }
}

export default About;

