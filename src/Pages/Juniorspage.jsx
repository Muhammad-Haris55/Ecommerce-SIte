import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Card from "../Components/Card"
import { useNavigate } from 'react-router-dom'

function Juniorspage() {
    const navigate = useNavigate()
    const [items, setitems] = useState(0)
    const Cart = useSelector((state) => state.Cart.items)
    const Juniorproducts = useSelector((state) => state.Products[0].JuniorsAttire[0])
    
    // Caluclating items in the cart acc to the quantity of the product
    useEffect(() => {
        let total = 0
        Cart.map((item) => {
            total += item.quantity
        })
        setitems(total)
    }, [Cart])
    const navCart = () => {
        navigate("/Cart")
    }
    return (
        <>
            <div className="col-md-12 mx-auto">
                <div className="menstitle text-center mt-2">
                    <h3 className='animate__animated animate__backInLeft'>Juniors-Attire</h3>
                    {/* <div className="cartflex">
                        <div className="carticon" >

                            <button data-quantity={items} class="btn-cart" onClick={navCart}>
                                <svg class="icon-cart" viewBox="0 0 24.38 30.52" height="30.52" width="24.38" xmlns="http://www.w3.org/2000/svg">
                                    <title>icon-cart</title>
                                    <path transform="translate(-3.62 -0.85)" d="M28,27.3,26.24,7.51a.75.75,0,0,0-.76-.69h-3.7a6,6,0,0,0-12,0H6.13a.76.76,0,0,0-.76.69L3.62,27.3v.07a4.29,4.29,0,0,0,4.52,4H23.48a4.29,4.29,0,0,0,4.52-4ZM15.81,2.37a4.47,4.47,0,0,1,4.46,4.45H11.35a4.47,4.47,0,0,1,4.46-4.45Zm7.67,27.48H8.13a2.79,2.79,0,0,1-3-2.45L6.83,8.34h3V11a.76.76,0,0,0,1.52,0V8.34h8.92V11a.76.76,0,0,0,1.52,0V8.34h3L26.48,27.4a2.79,2.79,0,0,1-3,2.44Zm0,0"></path>
                                </svg>
                                <span class="quantity"></span>
                            </button>
                        </div>
                    </div> */}
                </div>
                <div className="menstypes text-center animate__animated animate__fadeIn animate__delay-1s">
                    <h6>SHIRTS </h6>
                </div>
                <div className="parent" id="parent"  >
                    <div className="shirt" data-aos="fade-up"  >
                        {
                            Juniorproducts.JuniorTshirts.map((element, index) => (
                                <Card element={element} key={index} imgsrc={element.imgscr} price={element.price} title={element.title} />
                            ))
                        }
                    </div>
                    <div className="menstype text-center my-3 " data-aos="zoom-in-up">
                        <h6>T-SHIRTS </h6>
                    </div>
                    <div className="shirt" data-aos="fade-up">
                        {
                            Juniorproducts.JuniorShirt.map((element, index) => (
                                <Card element={element} key={index} imgsrc={element.imgscr} price={element.price} title={element.title} />
                            ))
                        }
                    </div>
                    <div className="menstype text-center my-3" data-aos="zoom-in-up" >
                        <h6>POLOS </h6>
                    </div>
                    <div className="shirt" data-aos="fade-up" >
                        {
                            Juniorproducts.JuniorPolos.map((element, index) => (
                                <Card element={element} key={index} imgsrc={element.imgscr} price={element.price} title={element.title} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Juniorspage

