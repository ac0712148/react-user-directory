import React from "react";

function Table() {
    return (
        <div>
            <hr />
            <div class = "w3-center">
                <h2> Search Bar Goes Here! </h2>
                <p class = "w3-large" > Search by Name, Username, Email, or Phone to find user.</p>
                <div class = "w3-responsive w3-card-4">
                    <table class = "w3-table w3-bordered w3-centered">
                        <thead>
                            <tr class = "w3-black">
                                <th > Name </th>
                                <th > User </th>
                                <th > Email </th>
                                <th > Phone </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td> John Doe </td>
                                <td> jDoe </td>
                                <td> test@test.com </td>
                                <td> 123-456-7890 </td>
                            </tr>
                            <tr>
                                <td> Jane Doe </td>
                                <td> jDoe2 </td>
                                <td> test2@test.com </td>
                                <td> 123-456-7890 </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        
    )
}

export default Table