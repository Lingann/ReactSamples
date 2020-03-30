import React, { Component } from "react";
import ReactDOM from "react-dom";

import './about.scss'

import bg_img from '../../assets/image/solution_bg.jpg'

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
                <img src={bg_img}/>
            </div>
        );
    }
}

export default About;

