import React, { Component } from 'react'

export default class HandlingEvent extends Component {

    handleOnclick = () => {
        console.log("handleOnclick");
    }
    handleOnclickParams = (name, tuoi) => {
        console.log("Hello " + name + "tuoi" + tuoi);
    }

    render() {
        return (
            <div>
                <h3 className="title">*HandlingEvent</h3>
                <button className="btn btn-success" onClick={this.handleOnclick}>HandlingEvent</button>
                <br /> <br />
                <button className="btn btn-info" onClick={() => { this.handleOnclickParams("Long", "18") }}>HandlingEvent Params</button>
            </div>
        );
    }
}
