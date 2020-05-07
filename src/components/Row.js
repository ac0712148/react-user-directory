import React from "react";

function Row(props) {
    return (
        <div className={`w3-row`}>
            {props.children}
        </div>
    )
}

export default Row;