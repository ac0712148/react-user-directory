import React from "react";

function Header() {
    // const style = {fontWeight:900}
    return(
        <header className="w3-container w3-red w3-padding" id="myHeader">
            <div className="w3-center">
                <h2>Welcome to my First React App!</h2>
                <h1 className="w3-xxxlarge w3-animate-bottom">User Directory</h1>
                <div className="w3-padding-32"></div>
            </div>
        </header>
    )
}

export default Header;
