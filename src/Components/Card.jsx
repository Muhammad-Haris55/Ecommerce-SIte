import React from 'react'
import { useDispatch } from 'react-redux'
import { Additem } from '../Store/CartSlice'


function Card({element,imgsrc,price,title}) {
    const dispatch=useDispatch()

    const Handleclick=(element)=>{
        const {id}=element
        const quantity=1
        dispatch(Additem({id,quantity,imgsrc,price,title}))
    }

    return (
        <>
            <div className="shirts" >
                <div class="card " >
                    <img src={imgsrc} class="card-img-top" alt="..."></img>
                    <div class="card-body">
                        <h6 class="card-title text-center">{title}</h6>
                        <button id="cardbtn" type="button" class="btn btn-primary mt-2" onClick={()=>Handleclick(element)} >{price}</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card
