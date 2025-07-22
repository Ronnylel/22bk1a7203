import { useState } from "react";
import Log from "../evaluation-service/logs";
import axios from "axios";

function short(){
    const [count,setCount]=useState(0);
    axios.post()
    return(
        <div className="container mt-5">
      <div className="card p-4 shadow-sm">
        <h2 className="text-center mb-4">Shortened URL</h2>
        <a href="" 
        onClick={Log("frontend","info","api",`Link clicked ${setCount((count)=>count+1)} times`)}
        target="_blank"
        id="ShortenedLink"></a>
        </div>
        </div>
    )

}

export default short