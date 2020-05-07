import React from "react";

function Container(props) {
    return (
        <div className={`w3-container`}>
            {props.children}
        </div>
    )
}

export default Container;