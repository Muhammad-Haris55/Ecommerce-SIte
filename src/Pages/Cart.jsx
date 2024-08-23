import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Cartitem from '../Components/Cartitem'
function Cart() {
    const Cart = useSelector((state) => state.Cart.items)
    const Price = useSelector((state) => state.Cart.price)
    return (
        <>

            <div className="cart col-md-8 mx-auto mt-4">
                <div className="title pt-4 text-center">
                    <h3>Your Cart</h3>
                </div>
                <div id="itemz" className="cartitems pt-3">
                    <div className="itemhead">
                        <div className="imagehead">
                            <p>Product</p>
                        </div>
                        <div className="titlehead">
                            <p>Title</p>
                        </div>
                        <div className="quantityhead">
                            <p>Quantity</p>
                        </div>
                        <div className="pricehead">
                            <p>Price </p>
                        </div>
                        <div className="removehead">
                            <p>Remove</p>
                        </div>
                    </div>
                    {Cart ?
                        Cart.map((element, index) => (
                            <Cartitem key={index} element={element} />

                        ))
                        : null
                    }

                </div>
            </div>
            <div className="total col-md-8 mx-auto mt-1">
                <div className="count">
                    <div className="totalprice pt-3">
                        <p>Shipping fee : 200RS</p>
                    </div>
                    <div className="dc">
                        {(Price > 0) ?
                            <p>Sub-Total : <span id="final">{Price}</span></p>
                            :
                            <p>Sub-Total : <span id="final">0</span></p>
                        }
                    </div>
                    <div className="dc">
                        {
                            (Price > 0) ?
                                <p>Total :<span id="total">{Price+200}</span></p>
                                :
                                <p>Total : <span id="total">0</span></p>

                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cart
// export { getprice }
