import React from 'react'

function Home() {
    return (
        <div>
        <div className="add_to_cart">
            <img src="https://freepngimg.com/download/web_design/42851-3-cart-free-clipart-hd.png" alt="cart" />
        </div>
            <h1>Home Component</h1>
            <div className="cart_wrapper">
                <div className="cart_wrapper_image item">
                    <img src="https://i1.wp.com/macmagazine.com.br/wp-content/uploads/2018/03/02-conceito-ios-12-telainicial.jpeg?ssl=1" alt="cart_image" />
                </div>
                <div className="cart_wrapper_text item">
                    <span>I-PHONE 12</span>
                    <span>Price: $720</span>
                </div>
                <div className="cart_wrapper_btn item">
                     <button>Add to CART</button>
                </div>
            </div>
        </div>
    )
}

export default Home;
