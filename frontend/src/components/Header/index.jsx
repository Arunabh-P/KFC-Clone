import React from 'react'
import logo from "../../assets/img/KFC-Logo.png"
import "./header.css"
import Menu from '../../components/Menu/index'
function Header() {
  return (
    <>
      <div className="headerWrapper">
        <div className="logo">
          <img width="150px" src={logo} alt="" />
        </div>
        <div className="auth-link">
          <ul>
            <li><i class="bi bi-geo-alt-fill"></i> Store Locator</li>
            <li><i class="bi bi-person-fill"></i> Signin/Register</li>
          </ul>
        </div>
      </div>
      <Menu />
    </>
  )
}

export default Header