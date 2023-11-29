import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar=()=>{
    const isMenuOpen=useSelector(store=>store.app.isMenuOpen)

    if (!isMenuOpen) return null;

    return(
        <div className="p-12 shadow-lg w-52">
            <h1 className="font-bold"><Link to="/">Home</Link></h1>
            <ul>
                <li>Music</li>
                <li>Sports</li>
                <li>Gaming</li>
                <li>Movie</li>
            </ul>
            <h1 className="font-bold pt-5">Subscriptions</h1>
            <ul>
                <li>Music</li> 
                <li>Sports</li>
                <li>Gaming</li>
                <li>Movie</li>
            </ul>
            <h1 className="font-bold pt-5">Shorts</h1>
            <ul>
                <li>Music</li>
                <li>Sports</li>
                <li>Gaming</li>
                <li>Movie</li>
            </ul>
            <h1 className="font-bold pt-5">Library</h1>
            <ul>
                <li>Music</li>
                <li>Sports</li>
                <li>Gaming</li>
                <li>Movie</li>
            </ul>
        </div>
    )
}

export default Sidebar;