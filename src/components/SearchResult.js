import React from "react";
// import SearchForm from "./SearchForm";

function SearchResult(props) {
    console.log(props)
    let filter = props.filter;
    let data = props.data
    let filteredData = [];

    for(let i = 0; i < data.length; i++) {
        if(data[i].name.toLowerCase().search(filter.toLowerCase()) !== -1){
            filteredData.push(data[i])
            console.log(filteredData);
        }
    }

    let filteredUsers = []
    let j = 0;
    for(let i = 0 ; i < filteredData.length; i++) {

        filteredUsers.push(<tr>
            <td key={j++}> {filteredData[i].name} </td>
            <td key={j++}> {filteredData[i].username} </td>
            <td key={j++}> {filteredData[i].email} </td>
            <td key={j++}> {filteredData[i].phone} </td>
        </tr>)
    }
    
    return (
        <table className = "w3-table w3-bordered w3-centered">
            <thead>
                <tr className = "w3-black">
                    <th > Name </th>
                    <th > User </th>
                    <th > Email </th>
                    <th > Phone </th>
                </tr>
            </thead>
            <tbody>
                {filteredUsers}
            </tbody>
        </table>
    );
}

export default SearchResult;