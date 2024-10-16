import { useState } from "react";
import "./Main1.css"
import Content from "./Content";

function Main1(){
    let[page,setPage]=useState("Home");
    function changepage(event){
        setPage(event.target.id);
    }
    return(

        <>
        <div className="container">

            <div className="sidebar">
                <button id="Home1" onClick={changepage}>Home</button>
                <button id="Contact" onClick={changepage}>Contact</button>
            </div>
            <div className="maincontent">
                <Content pageName={page}/>
            </div>

            
        </div>
        
        </>
    )
}

export default Main1;