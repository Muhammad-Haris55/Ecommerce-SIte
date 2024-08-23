import React from 'react'
import { useSelector } from 'react-redux';
import Card from '../Components/Card';

function Summersale() {

    const Summersale = useSelector((state) => state.Products[0].SummerSale[0])
    return (

        <div className="col-md-12 mx-auto">
            <div id="sumsale" className="menstitle text-center mt-2">
                <div> <h3>SUMMER SALE</h3></div><div className=''><h4>Flat 50%off </h4></div>
            </div>
            <div className="parent" >
                <div className="shirt mt-2" data-aos="fade-up" >
                    {Summersale.Summersale.map((element,index) => {
                        return (
                            
                            <Card element={element} key={index} imgsrc={element.imgscr} price={element.price} title={element.title} />
                        );
                    })}
                </div>


                <div className="shirt mt-4" data-aos="fade-up" >
                    {Summersale.Coll2.map((element,index) => {
                        return (

                            <Card element={element} key={index} imgsrc={element.imgscr} price={element.price} title={element.title} />
                        );
                    })}
                </div>

                <div className="shirt mt-4" data-aos="fade-up" >
                    {Summersale.Coll3.map((element,index) => {
                        return (
                            <Card element={element} key={index} imgsrc={element.imgscr} price={element.price} title={element.title} />
                        );
                    })}
                </div>
            </div>
        </div >

    )
}

export default Summersale
