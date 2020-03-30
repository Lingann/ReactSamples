import React, { Component } from "react";
import ReactDOM from "react-dom";

import './home.scss'
class Home extends Component {
    homeStyle() {
        return {
            // width : '100%',
            // height : '50px',
            // background: '#ededed'
        }
    }

    render() {
        return (
            <div className='home'>
                home content!
            </div>
        );
    }
}



export default Home;

