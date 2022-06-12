import React from 'react'
import "./card.css"
import product1 from "../../assets/img/product1.png"
import product2 from "../../assets/img/product2.png"
import product3 from "../../assets/img/product3.png"

function Card() {
    return (
        <div className="card-wrapper">
            <div className="card">
                <img src={product1} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <div className="btn-wrapper d-flex">
                        <button type='button' className="btn btn-outline-danger btn-wrapper">MRP 495/-</button>
                        <button type='button' className="btn btn-danger btn-wrapper">Add to Bucket</button>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Card