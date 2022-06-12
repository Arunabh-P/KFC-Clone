import React from 'react'
import "./footer.css"
import FooterLogo from "../../assets/img/footer-logo.png"
import appstore from "../../assets/img/app-store.png"
import playstore from "../../assets/img/google-play.png"


function Footer() {
  return (
   <div className="footer-wrapper">
    <img className='footer-logo' src={FooterLogo} alt="" />
    <div className="row footer-inner">
        <div className="col-md-2">
            <ul>
                <li><a href="">Lorem ipsum </a></li>
                <li><a href="">Lorem ipsum </a></li>
                <li><a href="">Lorem ipsum </a></li>
                <li><a href="">Lorem ipsum </a></li>
                <li><a href="">Lorem ipsum </a></li>

            </ul>
        </div>
        <div className="col-md-2">
        <ul>
                <li><a href="">Lorem ipsum </a></li>

            </ul>
        </div>
        <div className="col-md-2">
        <ul>
                <li><a href="">Lorem ipsum </a></li>

            </ul> 
        </div>
        <div className="col-md-2">
        <ul>
                <li><a href="">Lorem ipsum </a></li>
                <li><a href="">Lorem ipsum </a></li>

            </ul> 
        </div>
        <div className="col-md-4">
        <ul className='store-logo-wrapper'>
                <li><a href=""><img src={appstore} alt="" /></a></li>
                <li><a href=""><img src={playstore} alt="" /> </a></li>

            </ul> 
        </div>
    </div>
    <div className="copy-write">
        <p>@ 2022 KFC India. All rights reserved.</p>
    </div>
   </div>
  )
}

export default Footer