import React, { useState, useEffect } from "react";
import API from "../utils/API"

// function getData() {
//     API.getUser().then((res) => {
//         return console.log(res.data.results[0]);
//     })
// }

function RowData() {
    const [user, setUser] = useState({
        loading: "w3-spin",
        name: <i class="fa fa-spinner"></i>,
        username: <i class="fa fa-spinner"></i>,
        email: <i class="fa fa-spinner"></i>,
        phone: <i class="fa fa-spinner"></i>,
    })

    useEffect(() => {
        API.getUser()
        .then((res) => {
            console.log(res.data.results[0])
            const dataName = `${res.data.results[0].name.first} ${res.data.results[0].name.last}`
            const dataUsername = res.data.results[0].login.username;
            const dataEmail = res.data.results[0].email;
            const dataPhone = res.data.results[0].phone;
            setUser({
                loading: "",
                name: dataName,
                username: dataUsername,
                email: dataEmail,
                phone: dataPhone,
            })
        })
    },[])

    return(
        <tr>
            <td className = {user.loading}> {user.name} </td>
            <td className = {user.loading}> {user.username} </td>
            <td className = {user.loading}> {user.email} </td>
            <td className = {user.loading}> {user.phone} </td>
        </tr>
    )
}

export default RowData;