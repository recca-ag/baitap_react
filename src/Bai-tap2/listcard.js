import React from "react";
import Itemcard from "./itemcard";

export default function Listcard() {
    return (
        <div className="container">
            <div className="row">
                <Itemcard />
                <Itemcard />
                <Itemcard />
            </div>
        </div>
    )
}