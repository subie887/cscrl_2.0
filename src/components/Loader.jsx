import React from "react";
import { ProgressBar } from "react-loader-spinner";

function Loader() {
    return (
        <ProgressBar
        height="80"
        width="100%"
        ariaLabel="progress-bar-loading"
        wrapperStyle={{}}
        wrapperClass="progress-bar-wrapper"
        borderColor = '#4B2913'
        barColor = '#FFD94A'
        />
    )
}

export default Loader;