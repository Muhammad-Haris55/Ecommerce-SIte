import React, { useState } from "react";
import { NavLink } from "react-router-dom";


function Footer() {
    const [email, updemail] = useState(null)
    let onchangeemail = (event) => {
        updemail(event.target.value)
    }
    let emailbtnclick = () => {
        updemail("")
    }
    return (
        <>
            <div className="hr pt-4">
                <hr />
            </div>
            <p id="abovefooter" className="text-center pt-3">GET THE LATEST TRENDS FIRST!</p>
            <div className="updates col-md-3 mx-auto mt-4">
                <div class="input-container ">
                    <input placeholder="" value={email} onChange={onchangeemail} class="input-field" type="text"></input>
                    <label for="input-field" class="input-label">Email</label>
                    <span class="input-highlight"></span>
                </div>
                <div className="inputbtn" >
                    <div class="container">
                        <button id="fotrbutn" class="button" onClick={emailbtnclick}></button>
                        <span class="arrow first">
                            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                            </svg>
                        </span>
                        <span class="arrow second">
                            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                            </svg>
                        </span>
                        <span class="arrow third">
                            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                            </svg>
                        </span>
                    </div>
                </div>
            </div>
            <div className="footer">
                <div className="footerhead col-md-9 mx-auto mb-3">
                    <div className="div1 mt-4">
                        <div className="1title">
                            <p>how can we help you?</p>
                        </div>
                        <div className="para1">
                            <p>SEND EMAIL</p>
                            <div id="contact"><p>CONTACTUS@threadz.COM.PK</p></div>
                        </div>
                        <div className="para2">
                            <p>UAN: 042 111-11-6387</p>
                            <div id="contacts"><p>MON-FRI 9:00 TO 5:30 PST</p></div>
                        </div>
                    </div>
                    <div className="div2 mt-4">
                        <div className="1title">
                            <p>HELP</p>
                        </div>
                        <div className="para1">
                            <p>FAQ's</p>
                            <div id="contact"><p>LOG IN/SIGN UP</p></div>
                            <div id="contact"><p>HOW TO BUY</p></div>
                            <div id="contact"><p>PAYMENT</p></div>
                            <div id="contact"><p>SHIPPING & DELIVERIES</p></div>
                            <div id="contact"><p>EXCHANGES & RETURNS</p></div>
                        </div>
                    </div>
                    <div className="div3 mt-4">
                        <div className="1title">
                            <p>ABOUT THREADZ!</p>
                        </div>
                        <div className="para1">
                            <p>SEND EMAIL</p>
                            <div id="contact"><p>ABOUT US</p></div>
                            <div id="contact"><p>RETAIL STORE</p></div>
                            <div id="contact"><p>CONTACT US</p></div>
                            <div id="contact"><p>WORK WITH US</p></div>
                        </div>
                    </div>
                </div>
                <div className="borderz">
                    <div className="threadz">
                        <p>©2023 THREADZ </p>
                    </div>
                    <div className="centr">
                        <p>|</p>
                    </div>
                    <div className="terms">
                        <p>TERMS AND CONDITIONS</p>
                    </div>
                    <div className="centr">
                        <p>|</p>
                    </div>
                    <div className="privacy">
                        <p>PRIVACY POLICY</p>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Footer




