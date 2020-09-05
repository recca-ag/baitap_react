import React, { Component } from 'react';
import Child from "./child";
import Pure from "./pure";

export default class LifeCycle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "Cybersoft",
        }
        /**
         * constructor chỉ chạy 1 lần duy nhất
         */
        console.log("constructor");
    }
    //componentDidMount là 1 lifecycle
    componentDidMount() {
        /**
         * Chỉ chạy 1 lần duy nhất-->chạy sau render
         * gọi API
         */
        console.log("componentDidMount");
    }

    componentWillUpdate() {
        /**
         * Khi state thay đổi componentWillUpdate mới chạy
         */
        console.log("componentWillUpdate");
    }

    shouldComponentUpdate(nextProps, nextState) {
        /**
         * Có nên Update hay không
         * Không viết thì thôi còn viết rồi thì phải return về true nếu update, false nếu không update
         * Cố tình nhúng tay vào thì dùng vòng đời lifeCYCLe-->ngăn hoặc cho chạy
         */
        console.log("shouldComponentUpdate");
        console.log(nextProps);
        console.log(nextState);
        if (nextState.username === "Hao") {
            return false;
        }
        return true;
    }



    render() {
        console.log("render");
        return (
            <div>
                <h3 className="title">LifeCycle</h3>
                <p>{this.state.username}</p>
                <button className="btn btn-success" onClick={() => {
                    this.setState({
                        username: "Nguyen"
                    })
                }}>Click</button>
                <Child />
                <Pure />
            </div>

        );
    }
}


//LifeCycle chỉ hỉu cho component dưới dạng statefull