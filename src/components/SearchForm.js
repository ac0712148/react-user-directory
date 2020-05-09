import React, { useState } from "react";
import SearchResult from "./SearchResult";

const finalinput = [];

function SearchForm(props) {
    // console.log(props.userData);
    const [input, setInput] = useState("")

    // useEffect(() => {
    //     setInput()
    // })

    const handleInput = (event) => {
        // console.log(event.target.value);
        setInput(event.target.value);
        finalinput.pop()
        finalinput.push(event.target.value);
    }
    // console.log(finalinput);

    return (
        <div>
            <form className="search">
                <div className="form-group">
                    <input
                    value={input}
                    onChange={handleInput}
                    name="term"
                    type="text"
                    className="form-control w3-input w3-animate-input"
                    placeholder="Search by Name, Username, Email, or Phone to find user."
                    id="term"
                    />
                </div>
            </form>
            {/* <SearchResult filter={input} data={props.userData} /> */}
        </div>
    );
  }
  
  export {SearchForm, finalinput};