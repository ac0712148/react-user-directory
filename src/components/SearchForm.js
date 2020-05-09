import React from "react";

function SearchForm(props) {
    // console.log(props.userData);

    return (
        <form className="search">
            <div className="form-group">
                <input
                value={props.search}
                onChange={props.handleInputChange}
                name="search"
                type="text"
                className="form-control w3-input w3-animate-input"
                placeholder="Search by Name, Username, Email, or Phone to find user."
                id="search"
                />
            </div>
        </form>
    );
  }
  
  export default SearchForm;