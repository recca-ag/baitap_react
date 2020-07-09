import React, { Component } from 'react'

export default class State extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLogin: false,
            username: "Long"
        };
    }

    renderHTML = () => {
        //1===2 ? "Dung" : "Sai"--> react hay sử dụng
        return this.state.isLogin ? (<p>Hello {this.state.username}</p>) : (<button className="btn btn-success" onClick={this.handleLogin}> Login</ button>);
    };

    handleLogin = () => {
        this.setState({
            isLogin: true
        });
    };

    render() {
        console.log("render");
        return (
            <div>
                <h3 className="title">*State</h3>
                {this.renderHTML()}
            </div>
        );
    };
}
