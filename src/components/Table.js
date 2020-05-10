import React from "react";
import RowData from "../components/RowData"

function Table(props) {
    console.log(props)
    const users = props.users;
    const filteredUsers = props.filteredUsers;
    let search = props.search;
    const rows = [];

    if(search === ""){
        for(let i = 0; i < users.length; i++) {
            rows.push(<RowData key={i} userData={users[i]}/>)
        }
    }
    else{
        for(let i = 0; i < filteredUsers.length; i++) {
            rows.push(<RowData key={i} userData={filteredUsers[i]}/>)
        }
    }
    
    return(
        <div>
            <div className = "w3-center">
                <div className = "w3-responsive w3-card-4">
                    <table className = "w3-table w3-bordered w3-centered">
                        <thead>
                            <tr className = "w3-black">
                                <th > Name <span onClick={() => {}}>{'🔼'}</span><span onClick={() => {}}>{'🔼'}</span></th>
                                <th > User <span onClick={() => {}}>{'🔼'}</span><span onClick={() => {}}>{'🔼'}</span></th>
                                <th > Email <span onClick={() => {}}>{'🔼'}</span><span onClick={() => {}}>{'🔼'}</span></th>
                                <th > Phone <span onClick={() => {}}>{'🔼'}</span><span onClick={() => {}}>{'🔼'}</span></th>
                            </tr>
                        </thead>
                        <tbody>
                            {rows}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

// function Table() {
//     const users = [];
//     for(let i = 0; i < 5; i++) {
//         users.push(<RowData key={i}/>)
//     }

//     console.log("Final: " + finalinput);
//     return (
//         <div>
//             <hr />
//             <div className = "w3-center">
//                 <SearchForm userData={data} />
//                 <div className="w3-padding-small"></div>
//                 <div className = "w3-responsive w3-card-4">
//                     <table className = "w3-table w3-bordered w3-centered">
//                         <thead>
//                             <tr className = "w3-black">
//                                 <th > Name </th>
//                                 <th > User </th>
//                                 <th > Email </th>
//                                 <th > Phone </th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {users}
//                         </tbody>
//                     </table>
//                 </div>
//                 <div className="w3-padding-32"></div>
//             </div>
//         </div>
        
//     )
// }

export default Table