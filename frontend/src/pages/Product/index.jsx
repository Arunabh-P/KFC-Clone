import React from 'react'
import Card from '../../components/Card'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import "./product.css"
function Product() {
    return (
        <div className='product-wrapper'>
            <Header />
            <div className="lead-text">
          <h3>SIGNATURE BOXES</h3>
        </div>
            <div className="product-inner pt-5">
                <div className="row">
                    <div className="col-md-4 mb-5 ">
                        <Card />
                    </div>
                    <div className="col-md-4 mb-5 ">
                        <Card />
                    </div>
                    <div className="col-md-4 mb-5 ">
                        <Card />
                    </div>
                    <div className="col-md-4 mb-5 ">
                        <Card />
                    </div>
                    <div className="col-md-4 mb-5 ">
                        <Card />
                    </div>
                    <div className="col-md-4 mb-5 ">
                        <Card />
                    </div>
                    <div className="col-md-4 mb-5 ">
                        <Card />
                    </div>
                    <div className="col-md-4 mb-5 ">
                        <Card />
                    </div>
                    <div className="col-md-4 mb-5 ">
                        <Card />
                    </div>
                    <div className="col-md-4 mb-5 ">
                        <Card />
                    </div>
                    <div className="col-md-4 mb-5 ">
                        <Card />
                    </div>
                    <div className="col-md-4 mb-5 ">
                        <Card />
                    </div>
                    
                </div>

            </div>
            <Footer />

        </div>
    )
}

export default Product