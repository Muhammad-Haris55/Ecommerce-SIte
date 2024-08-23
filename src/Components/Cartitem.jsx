import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Quantitydecrease, Quantityincrease, Removeitem } from '../Store/CartSlice'

function Cartitem({ element }) {
    const dispatch = useDispatch()
    const increment = (element) => {
        dispatch(Quantityincrease({ id: element.id, price: element.price }))
    }
    const decrement = () => {
        dispatch(Quantitydecrease({ id: element.id, price: element.price }))
        if (element.quantity < 2) {
            dispatch(Removeitem({ id: element.id }))
        }
    }
    const Removeitems = () => {
        dispatch(Removeitem({ id: element.id,price:element.quantity*element.price }))
    }
    return (
        <>
            <div className="item">
                <div className="itemimage">
                    <img src={element.imgsrc} alt="" />
                </div>
                <div id="it" className="itemtitle">
                    <p>{element.title}</p>
                </div>
                <div className="itemquantity">
                    <button id="itembutn" className='itmbtn' onClick={() => increment(element)}>+</button>
                    <div className="display">
                        <p> {element.quantity}</p>
                    </div>
                    <button id="itembutn" onClick={() => decrement(element)}>-</button>
                </div>
                <div id="prices" className="itemrpice" >
                    <p id="pri">{element.quantity * element.price}</p>
                </div>
                <div className="itemremove">
                    <img src="https://img.icons8.com/?size=512&id=107448&format=png" onClick={() => Removeitems(element)} alt="" ></img>
                </div>
            </div>
            <hr />
        </>

    )
}

export default Cartitem
