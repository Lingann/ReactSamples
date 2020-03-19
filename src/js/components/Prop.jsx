import React from "react";
import {PropTypes} from 'prop-types';


const Prop = (props) => {
    // const count = this.state.count;
    return (<p>{props.name}</p>);
};

/*
* 使用propTypes来定义组件的props
* */
Prop.propTypes = {
    text: PropTypes.string,
    name: PropTypes.string.isRequired,
    callback : PropTypes.func
};

Prop.defaultProps = {
    name: ''
};

export default Prop;