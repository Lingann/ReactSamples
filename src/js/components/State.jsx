import React, {Component} from "react";
import ReactDOM from "react-dom";
import Prop from "./Prop.jsx"
import PropTypes from "prop-types"
class State extends Component {
    constructor(props) {
        super(props);   // 通过super将props传递到父类构造函数中
        // 构造函数是唯一可以给this.state 赋值的地方
        this.state = {
            isHovering : false,
            isActive: false
        };
        // 对函数进行绑定this
        this.handleMouseOver = this.handleMouseOver.bind(this);
        this.handleMouseOut = this.handleMouseOut.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    // 需要注意this指向
    handleMouseOver() {
        this.setState((state)=>{
            return {
                isHovering: true
            }
        })
    }

    handleMouseOut() {
        this.setState((state)=> {
            return {
                isHovering: false
            }
        })
    }

    handleClick () {
        this.setState((state)=>{
            const active = !state.isActive;
            return {
                isActive: active
            }
        })
    }

    render() {

        let current = this.state.isActive ? "正" : "负";

        return (
            <div>
                <button onClick={this.handleClick}>+1</button>
                <Prop name={"当前:  "+ current}/>
            </div>
        )
    };

    // 箭头函数的作用域是：写在哪里，this就表示哪里

}



export default State;