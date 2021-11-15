import React from 'react'

function Home(props) {
    console.warn("home",props);
    return (
        <div>
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
                     <button onClick={()=>props.addToCartHandler({price: '$-820' ,name:'I-phone-12'})}>Add to CART</button>
                     <button onClick={()=>props.removeToCartHandler()}>Remove to CART</button>
                </div>
            </div>
        </div>
    )
}

export default Home;
