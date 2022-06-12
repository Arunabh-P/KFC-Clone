import React from 'react'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import "./productdetail.css"
import product1 from "../../assets/img/product1.png"

function ProductDetails() {
    return (
        <div className="product-detail-wrapper">
            <Header />
            <div className="product-detail-inner pt-5">

                <div className="row">
                    <div className="col-md-5">
                        <img src={product1} alt="" />

                    </div>
                    <div className="col-md-7">
                        <h3>Product title</h3>
                        <p>product details</p>

                    </div>
                </div>

            </div>
            <Footer />

        </div>
    )
}

export default ProductDetails