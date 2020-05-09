import React from "react";


function RowData(props) {
    const user = props.userData;
    // console.log(user)
    return(
        <tr>
            <td> {user.name.first} {user.name.last} </td>
            <td> {user.login.username} </td>
            <td> {user.email} </td>
            <td> {user.phone} </td>
        </tr>
    )
}

// // function getData() {
// //     API.getUser().then((res) => {
// //         return console.log(res.data.results[0]);
// //     })
// // }

// const data = [];

// function RowData() {
//     const [user, setUser] = useState({
//         loading: "w3-spin",
//         name: <i className="fa fa-spinner"></i>,
//         username: <i className="fa fa-spinner"></i>,
//         email: <i className="fa fa-spinner"></i>,
//         phone: <i className="fa fa-spinner"></i>,
//     })

//     useEffect(() => {
//         API.getUser()
//         .then((res) => {
//             const dataName = `${res.data.results[0].name.first} ${res.data.results[0].name.last}`
//             const dataUsername = res.data.results[0].login.username;
//             const dataEmail = res.data.results[0].email;
//             const dataPhone = res.data.results[0].phone;
//             setUser({
//                 loading: "",
//                 name: dataName,
//                 username: dataUsername,
//                 email: dataEmail,
//                 phone: dataPhone,
//             })
//             data.push({name: dataName,
//                 username: dataUsername,
//                 email: dataEmail,
//                 phone: dataPhone,});
//         })
//     },[])

//     return(
//         <tr>
//             <td className = {user.loading}> {user.name} </td>
//             <td className = {user.loading}> {user.username} </td>
//             <td className = {user.loading}> {user.email} </td>
//             <td className = {user.loading}> {user.phone} </td>
//         </tr>
//     )
// }

export default RowData;