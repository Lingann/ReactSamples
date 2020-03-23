import {Link} from 'react-router-dom';
import React from  'react';

const ulStyle = {
    // listStyleType: 'none',
    // margin: 0,
    // padding : 0
};

const liStyle = {
    // display: 'inline-block',
    // width: '60px'
};


const Navigation = () => (
    <header>
        <nav>
            <ul style={ulStyle}>
                <li style={liStyle}><Link to='/'>Home</Link></li>
                <li style={liStyle}><Link to='/about'>About</Link></li>
            </ul>
        </nav>
    </header>
);

export default Navigation;