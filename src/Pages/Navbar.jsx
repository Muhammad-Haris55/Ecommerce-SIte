import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import {  NavLink, useNavigate } from 'react-router-dom'
// Mens
// import Shirts from "./Shirts"
// import { Tshirts } from './Shirts'
// import { Polos } from './Shirts'
// // Womens
// import Wshirts from './WomenShits'
// import { Wtshirts } from './WomenShits'
// import { Wpolos } from './WomenShits'
// // Juniors
// import { JuniorShirt } from './Juniorshirts'
// import JuniorTShirts from './Juniorshirts'
// import { JuniorP } from './Juniorshirts'
import {MensPolos,MensTshirts,MensShirts,Wtshirts,Wpolos,Wshirts,JuniorTshirts,JuniorShirt,JuniorPolos,Coll3,Coll2,SummerSales} from '../Store/Attires'



function Navbar() {
    // For Search Bar functionalities!!
    // let searchcart = [...Shirts, ...Tshirts, ...Polos, ...Wshirts, ...Wtshirts, ...Wpolos, ...JuniorShirt, ...JuniorTShirts, ...JuniorP]
    const [search, updsearch] = useState(null)
    let onchange = (event) => {
        updsearch(event.target.value)
    }
   console.log(search)
    // Agr false hoga to -1 return krta hai
    // indexOf Agr jo type kr rhy wo index m ha to us k (index) return kr deta hai,Aur yh case sensitive hota hai

    const Cart = useSelector((state) => state.Cart.items)
    // const Products = useSelector((state) => state.Products[0])
    const ProductArray=[...MensShirts,...MensPolos,...MensTshirts,...Wtshirts,...Wpolos,...Wshirts,...JuniorTshirts,...JuniorShirt,...JuniorPolos,...Coll3,...Coll2,...SummerSales]
    // console.log(ProductArray)
    // const Menproducts = useSelector((state) => state.Products[0].MensAttire[0])
    
    // Caluclating items in the cart acc to the quantity of the product
    
    const [items, setitems] = useState(0)
    
    const navigate = useNavigate()
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
    let index = 0
    let Searchclick = () => {
        let find = search.toUpperCase()
    }
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-transparent">
                <div className="container-fluid col-md-10 mx-auto" id='navcon'>
                    <NavLink className="navbar-brand" id="navtitle" to="Home">Threadz</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li id="navli" className="nav-item">
                                <NavLink className="nav-link " aria-current="page" to="Home">Home</NavLink>
                            </li>
                            <li id="navli" className="nav-item">
                                <NavLink className="nav-link" to="Mens">Men's</NavLink>
                            </li>
                            <li id="navli" className="nav-item">
                                <NavLink className="nav-link" to="Womens">Women's</NavLink>
                            </li>
                            <li id="navli" className="nav-item">
                                <NavLink className="nav-link" to="Juniors">Junior's</NavLink>
                            </li>
                            <li id="navli" className="nav-item display2">
                                <NavLink className="nav-link" to="Cart">Cart </NavLink>
                            </li>
                            <li className="nav-item dropdown">
                                <NavLink className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="">
                                    Discover
                                </NavLink>
                                <ul className="dropdown-menu">
                                    <li><NavLink id="dropdown" className="dropdown-item" to="SummerCollection">Summer Collection</NavLink></li>
                                    <li><NavLink id="dropdown" className="dropdown-item" to="SummerSale">Summer Sale</NavLink></li>
                                    <li><hr className="dropdown-divider"></hr></li>
                                    <li><NavLink id="dropdown" className="dropdown-item" to="NewArrival">New Arrival</NavLink></li>
                                </ul>
                            </li>
                        </ul>
                        <div className="searchnav" role="search">
                            <div className="input d-flex">
                                <input className="form-control me-2" id="input" type="search" placeholder="Search" autoComplete="off" value={search} onChange={onchange} aria-label="Search"></input>
                                <button className="btn btn-primary" id="formbtn" type="submit" onClick={Searchclick} >Search </button>
                            </div>
                            <div className="dropdown2">
                                {
                                    ProductArray.filter(item => {
                                        if (search) {
                                            let find = search.toUpperCase()
                                            let shirt = item.title.toUpperCase()
                                            return find && shirt.startsWith(find)
                                        }
                                    }).slice(0,4).map((item) => {
                                        return (
                                            <div className="dropdown2-row" >
                                                <div className="div1">
                                                    <img src={item.imgscr} alt="" />
                                                </div>
                                                <div className="div2">
                                                    <p>{item.title}</p>
                                                    <p id="div2p2">{item.price} Rs</p>
                                                <hr />
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>

                        </div >
                    </div>

                    <button data-quantity={items} class="btn-cart" id='navcart' onClick={navCart} >
                        <svg class="icon-cart" viewBox="0 0 24.38 30.52" height="30.52" width="24.38" xmlns="http://www.w3.org/2000/svg">
                            <title>icon-cart</title>
                            <path transform="translate(-3.62 -0.85)" d="M28,27.3,26.24,7.51a.75.75,0,0,0-.76-.69h-3.7a6,6,0,0,0-12,0H6.13a.76.76,0,0,0-.76.69L3.62,27.3v.07a4.29,4.29,0,0,0,4.52,4H23.48a4.29,4.29,0,0,0,4.52-4ZM15.81,2.37a4.47,4.47,0,0,1,4.46,4.45H11.35a4.47,4.47,0,0,1,4.46-4.45Zm7.67,27.48H8.13a2.79,2.79,0,0,1-3-2.45L6.83,8.34h3V11a.76.76,0,0,0,1.52,0V8.34h8.92V11a.76.76,0,0,0,1.52,0V8.34h3L26.48,27.4a2.79,2.79,0,0,1-3,2.44Zm0,0"></path>
                        </svg>
                        <span class="quantity"></span>
                    </button>
                </div>
            </nav>
        </>
    )
}

export default Navbar
