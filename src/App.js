import React, {useMemo, useState, useEffect} from "react";
import axios from "axios";
import Header from "./Header.js"
import Table from "./Table";

function App() {
    const [data,
        setData] = useState([]);

    const columns = useMemo(() => [
        {
            Header: "User Directory",
            columns: [
                {
                    Header: "👉Name",
                    accessor: "fullname"
                }, {
                    Header: "👉Login",
                    accessor: "login.username"
                }, {
                    Header: "👉Gender",
                    accessor: "gender"
                }, {
                    Header: "👉Email",
                    accessor: "email"
                }, {
                    Header: "👉Phone",
                    accessor: "phone"
                }
            ]
        }
    ], []);

    // Using useEffect to call the API once mounted and set the data
    useEffect(() => {
        (async() => {
            const result = await axios("https://randomuser.me/api/?results=20");
            for (let i = 0; i < result.data.results.length; i++) {
                result.data.results[i].fullname = `${result.data.results[i].name.first} ${result.data.results[i].name.last}`
            }
            setData(result.data.results);
            console.log(result.data.results)
        })();
    }, []);

    return (
        <div className="App">
            <Header/>
            <hr/>
            <Table columns={columns} data={data}/>
        </div>
    );
}

export default App;