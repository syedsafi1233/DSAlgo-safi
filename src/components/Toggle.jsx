import React,{useState} from "react";

export const Toggle=()=>{
    [bulb,setBulb]=useState("bulbgreen");
    return(
        <div className="proditem">
            <div className={bulb}></div>
            <button onClick={()=> setBuld("bulbred")}>Red</button>
            <button onClick={()=> setBuld("bulgreen")}>Green</button>
             
        </div>
    )
}