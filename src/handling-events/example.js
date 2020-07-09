import React, { Component } from 'react'


export default class ExampleHandlingEvent extends Component {

    isLogin = false;
    username = "Long";

    // renderHTML = () => {
    //     if (this.isLogin) {
    //         return (
    //             <p>Hello {this.username}</p>
    //         );
    //     } else {
    //         return (
    //             <button className="btn btn-success">Login</button>
    //         );
    //     }
    // };



    renderHTML = () => {
        //1===2 ? "Dung" : "Sai"--> react hay sử dụng
        return this.isLogin ? (<p>Hello {this.username}</p>) : (<button className="btn btn-success" onClick={this.handleLogin}> Login</ button>);
    }
    handleLogin = () => {
        this.isLogin = true;
        console.log(this.isLogin);
    }


    render() {

        return (
            <div>
                <h3 className="title">*ExampleHandlingEvent</h3>
                {this.renderHTML()}
            </div>
        );
    }
}
