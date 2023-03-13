import React from "react";
import "../assets/css/Counter.css";

function Counter ( {clickNumber} ) {
    return (
        <div className="counter">
            {clickNumber}
        </div>
    );
}

export default Counter;