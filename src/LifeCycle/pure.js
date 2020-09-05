import React, { PureComponent } from 'react'
//Giải quyết vấn đề chỉ viết HTML không cần chạy lại

export default class Pure extends PureComponent {
    render() {
        console.log("render-pure");
        return (
            <div>
                <h3 className="tittle">Pure</h3>
            </div>
        )
    }
}
