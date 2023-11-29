import React from "react";

const Button=({name})=>{
    return(
        <div>
            <button className="p-3 m-3 bg-gray-200 rounded-lg">{name}</button>
        </div>
    )
}

export default Button;