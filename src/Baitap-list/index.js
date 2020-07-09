import React, { Component } from 'react';
import data from "./data.json";

export default class BaitapList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listMovie: data,

        };
        console.log(this.state.listMovie);
    };
    renderHTML = () => {
        const { listMovie } = this.state;
        return listMovie.map((movie) => {
            return (
                <div className="col-4 movie__content mb-3">
                    <div className="card">
                        <img src={movie.hinhAnh} class="card-img-top img-fluid" alt={movie.biDanh}></img>
                        <div className="card-body">
                            <h5 className="card-title">{movie.tenPhim}</h5>
                            <p>{movie.moTa}</p>

                        </div>
                    </div>
                </div>
            )
        });
    };

    render() {
        return (
            <div className="container">
                <h3 className="title text-center m-2">Bài Tập List</h3>
                <div className="row">

                    {this.renderHTML()}

                </div>
            </div>

        );

    }
}
