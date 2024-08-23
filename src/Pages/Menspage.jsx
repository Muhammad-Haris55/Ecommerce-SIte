import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Card from "../Components/Card"
import { useNavigate } from 'react-router-dom'

function Menspage() {
    const navigate = useNavigate()
    const [items, setitems] = useState(0)
    const Cart = useSelector((state) => state.Cart.items)
    const Menproducts = useSelector((state) => state.Products[0].MensAttire[0])

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
                    <h3 className='animate__animated animate__backInLeft' data-aos="fade-up">Mens-Attire</h3>
                </div>
                <div className="menstypes text-center animate__animated animate__fadeIn animate__delay-1s">
                    <h6>SHIRTS </h6>
                </div>
                <div className="parent" id="parent"  >
                    <div className="shirt" data-aos="fade-up"  >
                        {
                            Menproducts.MensShirts.map((element, index) => (
                                <Card element={element} key={index} imgsrc={element.imgscr} price={element.price} title={element.title} />
                            ))
                        }
                    </div>
                    <div className="menstype text-center my-3 " data-aos="zoom-in-up">
                        <h6>T-SHIRTS </h6>
                    </div>
                    <div className="shirt" data-aos="fade-up">
                        {
                            Menproducts.MensTshirts.map((element, index) => (
                                <Card element={element} key={index} imgsrc={element.imgscr} price={element.price} title={element.title} />
                            ))
                        }
                    </div>
                    <div className="menstype text-center my-3" data-aos="zoom-in-up" >
                        <h6>POLOS </h6>
                    </div>
                    <div className="shirt" data-aos="fade-up" >
                        {
                            Menproducts.MensPolos.map((element, index) => (
                                <Card element={element} key={index} imgsrc={element.imgscr} price={element.price} title={element.title} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Menspage

