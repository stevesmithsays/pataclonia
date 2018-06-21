import React, { Component } from 'react';
import '../styles/scss/Header.scss';
import PataLogo from '../assets/images/patagoniaLogo.svg';
import SearchIcon from '../assets/images/icon-search.svg';
import AccountIcon from '../assets/images/icon-account.svg';
import CartIcon from '../assets/images/icon-cart.svg';
import {Link} from 'react-router-dom';

class Header extends Component {
  render(){
    return(
      <div>
        <div className="header-component">

          <div className="sup-header">

            <div className="color-stripe">
              <div className="color-stripe-stripe"></div>
            </div>

            <span className="leftspan headspan">visit patagonia® provisions - shop real foods</span> 
            <span className="rightspan headspan">free shipping on orders over $75</span> 

          </div>

          <div className="logo-container">
            <img src={PataLogo} alt="site-logo"/>
          </div>

          <div className="nav-container">
            <nav className="main-nav">
              <ul>
              <Link to="#"><li>Men</li></Link>
              <Link to="#"><li>Women</li></Link>
              <Link to="#"><li>Kids</li></Link>
              <Link to="#"><li>Packs & Gear</li></Link>
              <Link to="#"><li>Inside Patagonia</li></Link>
              </ul>
            </nav>
          </div>

          <div className="icon-container">
            <div className="icon-nav">
              <Link to="#"><div className="search icon"><img src={SearchIcon} alt="Search Icon"/></div></Link>
              <Link to="#"><div className="account icon"><img src={AccountIcon} alt="Account Icon"/></div></Link>
              <Link to="#"><div className="cart icon"><img src={CartIcon} alt="Cart Icon"/></div></Link>
            </div>
          </div>

          <div>
          </div>
        </div>
      </div>
    )
  }
}

export default Header;