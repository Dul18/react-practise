import React from 'react';

function Header(props) {
  return (
    <div>
      <div className="add-to-cart">
        <span className="cart-count">{props.data.length}</span>
        <img src="https://png.pngtree.com/element_our/20200702/ourlarge/pngtree-red-kawaii-shopping-cart-icon-free-download-image_2291261.jpg" />
      </div>
    </div>
  );
}

export default Header;
