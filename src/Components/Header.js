import React from 'react'

function Header(props) {
    console.warn("header",props.data);
    return (
        <div>
        <div className="add_to_cart">
            <span>{props.data.length}</span>
            <img src="https://freepngimg.com/download/web_design/42851-3-cart-free-clipart-hd.png" alt="cart" />
        </div>
        </div>
    )
}

export default Header;
