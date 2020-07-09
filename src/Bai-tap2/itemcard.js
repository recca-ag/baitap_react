import React from "react";

export default function Itemcard() {
    return (
        <div className="col-sm-4">
            {/* item */}
            <div className="card" style={{ width: "18rem" }}>
                <img
                    className="card-img-top"
                    src="https://picsum.photos/200/300"
                    alt="Card_image_cap"
                />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                        Some quick example text to build on the card title and make up the bulk
                        of the card's content.
      </p>
                    <a href="#a" className="btn btn-primary">
                        Go somewhere
      </a>
                </div>
            </div>
        </div>

    )
}