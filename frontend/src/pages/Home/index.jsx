import React from 'react'
import "./Home.css"
import Header from "../../components/Header/index"
import Slider from '../../components/Slider/index'
import Card from "../../components/Card/index"
function Home() {
  return (
    <div className="home-wrapper">
        <Header/>
        <Slider/>
        <div className="lead-text">
          <h3>SIGNATURE BOXES</h3>
        </div>
        <div className="row">
          <div className="col-md-4">
          <Card />
          </div>
          <div className="col-md-4">
          <Card />
          </div>
          <div className="col-md-4">
          <Card />
          </div>
        </div>
    </div>
  )
}

export default Home