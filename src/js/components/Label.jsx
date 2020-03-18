import React, {Component} from "react";
import ReactDOM from "react-dom";

class Label extends Component {
    constructor(props) {
        super(props);   // 通过super将props传递到父类构造函数中
        // 构造函数是唯一可以给this.state 赋值的地方
        this.state = {
            date : new Date()
        }
    }

    render() {
        return (
            <div>
                <Text/>
            </div>
        )
    };
}

const Text = (props) => {
    return (<p>123</p>);
};

export default Label;