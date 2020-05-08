import React from "react";
import RowData from "./RowData";

function Table() {
    const users = [];
    for(let i = 0; i < 10; i++) {
        users.push(<RowData key={i}/>)
    }
    return (
        <div>
            <hr />
            <div className = "w3-center">
                <h2> Search Bar Goes Here! </h2>
                <p className = "w3-large" > Search by Name, Username, Email, or Phone to find user.</p>
                <div className = "w3-responsive w3-card-4">
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
                            {users}
                        </tbody>
                    </table>
                </div>
                <div className="w3-padding-32"></div>
            </div>
        </div>
        
    )
}

export default Table