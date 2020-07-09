import React, { Component } from 'react'

export default class BaitapCar extends Component {

    constructor(props) {
        super(props);

        this.state = {
            img: "./img/imgRedCar.jpg"
        }
    }
    handleChangeColor = (color) => {
        // debugger; debug hàm

        let img = "";
        switch (color) {
            case "red":
                img = "./img/imgRedCar.jpg";
                break;
            case "silver":
                img = "./img/imgSilverCar.jpg";
                break;
            default:
                img = "./img/imgBlackCar.jpg";
                break;

        }


        this.setState({
            img
        })
    };


    render() {
        return (
            <div className="container">
                <h3 className="title">*Bài tập Car</h3>
                <div className="row">
                    <div className="col-sm-6">
                        <img className="img-fluid" src={this.state.img} alt="" />
                    </div>
                    <div className="col-sm-6">
                        <button className="btn btn-danger m-2" onClick={() => { this.handleChangeColor("red") }}>Red</button>
                        <button className="btn btn-light m-2" onClick={() => { this.handleChangeColor("silver") }}>Silver</button>
                        <button className="btn btn-dark m-2" onClick={() => { this.handleChangeColor("black") }}>Black</button>
                    </div >
                </div >
            </div >
        );
    }
}
