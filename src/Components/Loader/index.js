import React from 'react';
import "./style.css";

const Loader = () => {
    return (
        <div className="loaderContainer">
            <img src="/loader.gif" alt="Loading...." className="loader" />
        </div>
    )
}

export default Loader;