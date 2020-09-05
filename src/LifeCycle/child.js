import React, { Component } from 'react'

export default class Child extends Component {
    /**
     * componentWillReceiveProps chỉ chạy khi có component cha truyền vô
     */
    UNSAFE_componentWillReceiveProps(nextProps) {
        console.log("componentWillReceiveProps", nextProps);
    }

    render() {
        console.log("render-child");
        return (
            <div>
                <h3 className="tittle">Child</h3>
            </div>
        )
    }
}
