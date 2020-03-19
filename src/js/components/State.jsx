import React, {Component} from "react";
import ReactDOM from "react-dom";
import Prop from "./Prop.jsx"
import PropTypes from "prop-types"
class State extends Component {
    constructor(props) {
        super(props);   // 通过super将props传递到父类构造函数中
        // 构造函数是唯一可以给this.state 赋值的地方
        this.state = {
            count : 0
        };
        // 对函数进行绑定this
        this.counter = this.counter.bind(this);
    }

    // 需要注意this指向
    counter() {
        this.setState((state)=>{
            return {
                count: state.count + 1
            }
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.counter}>+1</button>
                <Prop name={"计数:  "+ this.state.count}/>
            </div>
        )
    };

    // 箭头函数的作用域是：写在哪里，this就表示哪里
    // counter () {
    //     this.setState({
    //         count: 1
    //     })
    // };

}



export default State;