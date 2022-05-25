import React,{useState} from "react";

export const Counter=()=>{
    const  [cntr,setCntr] = useState(10)
    return(
        <div className="proditem">
            <br/>
            <br/>
            <br/>
            <button onClick={()=>setCntr(cntr-1)}>-</button>

            <span>{cntr}</span>
            <button onClick={()=>setCntr(cntr+1)}>+</button>
        </div>
    )
}