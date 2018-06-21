import React from 'react';
import Mens from '../assets/images/mens.png';
import Womens from '../assets/images/womens.png';
import Kids from '../assets/images/kids.png';
import Gear from '../assets/images/packsGear.png';

const Shop = () => {
  return(
    <div id="shop-component">

      <div className="shop-body">

        <div id="shop-header">
          <h1><span>Shop</span> New Products</h1>
          <div className="header-line"></div>
        </div>

        <div className="photos-container">
          <div className="mens-img"><img src={Mens}/></div>
          <div className="wommens-img"><img src={Womens}/></div>
          <div className="kids-img"><img src={Kids}/></div>
          <div className="gear-img"><img src={Gear}/></div>
        </div>
      </div>
    </div>
  )
}

export default Shop;