import { LOGO_URL } from "../utils/constants";
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";

export const Header = ()=>{
    const [btnName,setBtnName] = useState("Login");
     console.log("hedaer");
    // if no dependency array => useEffect called on every render
    // if dependency array is empty => useEffect called on initial render (just once)
    // if dependency array is not empty => useEffect called everytime array gets updated
     useEffect(()=>{
        console.log("useeffect called");
     },[btnName]);
    return (
        <div className = "header">
            <div className = "logo-container">
                <img className = "logo" src = {LOGO_URL} />
            </div>
            <div className = "Nav-items">
                <ul>
                    <li>
                    <Link to ="/">Home</Link>
                    </li>
                    <li>
                     <Link to ="/about">About Us</Link>
                        </li>
                    <li>
                      <Link to = "/contact">Contact Us</Link>
                        </li>
                    <li>Cart</li>
                    <button className = "login" onClick={()=>{

                        btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
                    }}>{btnName}</button>
                </ul>
            </div>
        </div>
    );
};

export default Header;