import React from "react";

function Col(props) {
    return (
        <div className={`w3-col`}>
            {props.children}
        </div>
    )
}

export default Col;