import React, { Component } from 'react';
import ClassProps from "./classProps";
import FunctionProps from "./functionProps"

export default class Props extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "Long",
            lop: "FE42",
        };
    }


    render() {
        const { username, lop } = this.state;
        return (
            <div>
                <h3 className="title">* Props</h3>
                <ClassProps name={username} lop={lop} />
                <ClassProps name="Cybersoft" lop="FE42" />
                <ClassProps name="Vũ" lop="FE42" />

                {/* <FunctionProps name={username} lop={lop} /> */}
                <FunctionProps>
                    <div>
                        <h3>Hello Cybersoft</h3>
                        <p>Ho Quoc Long</p>

                    </div>
                </FunctionProps>
            </div>
        );
    }
}
