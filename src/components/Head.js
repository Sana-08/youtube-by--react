import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";

const Head = () => {
    const [searchBox, setSearchBox] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const [showSuggestions,setShowSuggestion]=useState(false);

    useEffect(() => {
        console.log(searchBox)
        const timer = setTimeout(() => getSearchSugsestions(), 200);

        return () => {
            clearTimeout(timer);
        }

    }, [searchBox]);

    const getSearchSugsestions = async () => {
        console.log("API CALL-" + searchBox);
        const data = await fetch(YOUTUBE_SEARCH_API + searchBox);
        const json = await data.json();
        // console.log(json[1]);
        setSuggestions(json[1])
    };

    const dispatch = useDispatch();

    const toggleMenuHandle = () => {
        dispatch(toggleMenu())
    }

    return (
        <div className="grid grid-flow-col p-2 m-1 shadow-lg">
            <div className="flex col-span-1 ">
                <img onClick={() => toggleMenuHandle()}
                    className="h-10 cursor-pointer" alt="hamburger"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAYFBMVEX///8CAgIAAADb29vDw8OxsbHt7e3y8vK4uLiampo7OztmZmaAgIC8vLzT09NhYWEcHBxxcXHi4uITExOioqJXV1eHh4dMTEx7e3uQkJAnJyc1NTX5+fnW1tbJyclAQEBzZbpGAAABTUlEQVR4nO3cC1LCQAwG4LK8lYcioCLi/W9pGa9gkyH9vgt0/tmhGzbNdh0AAAAAAAAAAAAAAAAAAABEW0yHtkzNt9u/tKFdXg95AdeDx/uzygo4b20SobVdTsBlUMA+4ltOwmNUwH4RZykJT2EJJ+2ckvApMOFzSsL3wIQfKQk/AxPOUxJO496lLamw2YTth8ecgF23bwEZ+2dssgL2W+IloGb7Siva7q671XxY2+/MfAAAAAAPY3GbDeuW2wOe/QSctZ2Suod35xZzXpp2ILwOO/Pe5gQ8BPaArykJ14E94JxFjOwf5nQu9ID/M2HOGtb/HdZ/l9bfD0dQ04ygLu3q/7cAAAAAeBDlv9UvP29Rfmam/NxT/dm1+vOH9WdI6/eA689y15/Hr3+nQv17MUZwt8kI7qfp6t8xBAAAAAAAAAAAAAAAAAAAwDj9AgjsI6cJ8n2yAAAAAElFTkSuQmCC" />
                <a href="/">
                    <img className="h-16 mx-2" alt="youtube-logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdUDYP6_0Ru4Fe1oZIoeKmtCYjlUdMFYLR2IREu2hGO4zFpmw_EBdwcoJwd3MwiHVU3A&usqp=CAU" />
                </a>
            </div>

            <div>
                <div className="col-span-10 px-10 my-2">
                    <input className="w-10/12 border border-gray-400 p-2 rounded-l-full"
                        type="text" value={searchBox}
                        onChange={(e) => setSearchBox(e.target.value)}
                        onFocus={()=>setShowSuggestion(true)}
                        onBlur={()=>setShowSuggestion(false)}
                        />
                    <button className="border border-gray-400 p-2 rounded-r-full bg-gray-50">Search</button>
                </div>
                {showSuggestions && (
                    <div className="fixed bg-white p-1 px-2 w-[30rem] shadow-lg rounded-lg">
                        <ul>
                            {suggestions.map(s => <li key={s} className="py-2 px-3 shadow-sm hover:bg-gray-100">{s}</li>)}
                        </ul>
                    </div>
                )}
            </div>
            <div className="col-span-1 my-1">
                <img className="h-11" alt="user" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr5dsAGEvu7dG3LF3t7F-lx3SgxKdjjd5HIg&usqp=CAU" />
            </div>
        </div>
    )
}

export default Head;