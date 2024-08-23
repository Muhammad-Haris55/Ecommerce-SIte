import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import Typed from "typed.js";
import Card from "../Components/Card"

function Home() {
    // Typed js library
    const el = React.useRef(null);
    React.useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ['Starting from $20.00'],
            startDelay: 120,
            typeSpeed: 40,
            backDelay: 60,
            loop: true,
            backSpeed: 60,
            smartBackspace: true,
        });
    }, []);
    // Navigating to NEw arrival from shop now button
    const navigate = useNavigate()
    const Redirect = () => {
        navigate("/Newarrival")
    }
    const Summersale = useSelector((state) => state.Products[0].SummerSale[0])
    return (
        <>
            <div className="hero col-md-10 mx-auto pt-4">
                <div className="h1">
                    <div className="h1text">
                        <div className="trend">
                            <p className='animate__animated animate__backInLeft'>Trending Items!</p>
                        </div>
                        <div className="sale">
                            <p className='animate__animated animate__backInLeft'>Largest Fashion Sale</p>
                        </div>
                        <div className="start">
                            <p className='animate__animated animate__backInLeft'>  <span ref={el}></span></p>
                        </div>
                    </div>
                    <div className="h1butn">
                        <button className="cta animate__animated animate__backInLeft" onClick={Redirect}>
                            <span className="hover-underline-animation "> Shop now </span>
                            <svg viewBox="0 0 46 16" height="10" width="30" xmlns="http://www.w3.org/2000/svg" id="arrow-horizontal">
                                <path transform="translate(30)" d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z" data-name="Path 10" id="Path_10"></path>
                            </svg>
                        </button>
                    </div>
                </div>
                <div className="h2 ">
                    <div className="h2img animate__animated animate__fadeIn animate__delay-1s">
                        <img src="h2img.png" alt="" />
                    </div>
                </div>
            </div>
            <div id="maincol" className="col-md-12 mx-auto pt-3">
                <div id="sumsale" className="menstitle text-center pt-3">
                    <div className="new">
                        <h3>NEW ARRIVALS</h3>
                    </div>
                </div>
                {/* Shirts Mapping */}
                <div className="parent">
                    <div className="shirt mt-2" data-aos="fade-right">
                        {Summersale.Coll2.map((element, index) => {
                            return (
                                <Card element={element} key={index} imgsrc={element.imgscr} price={element.price} title={element.title} />
                            );
                        })}
                    </div>

                    <div className="shirt mt-4" data-aos="fade-right">
                        {Summersale.Coll3.map((element, index) => {
                            return (

                                <Card element={element} key={index} imgsrc={element.imgscr} price={element.price} title={element.title} />
                            );
                        })}
                    </div>
                    <div className="shirt mt-4" data-aos="fade-right">
                        {Summersale.Summersale.map((element, index) => {
                            return (

                                <Card element={element} key={index} imgsrc={element.imgscr} price={element.price} title={element.title} />
                            );
                        })}
                    </div>
                </div>
            </div>
            
        </>
    )
    // Newarrival()
    
}
// export { Newarrival };

export default Home
