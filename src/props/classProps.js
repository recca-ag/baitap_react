import React, { Component } from 'react'

export default class ClassProps extends Component {
    render() {
        return (
            <div>
                <h3>ClassProps</h3>
                <div>Hello {this.props.name} -lop: {this.props.lop}</div>
            </div>
        )
    }
}
