import React, { Component } from "react";
import Header from "./Header";
import API from "../utils/API"
import Table from "../components/Table"

class UserContainer extends Component {
    state = {
        users: [],
        search: "",
        filteredUsers: [],
    };

    componentDidMount(){
        this.loadUsers()
    }
    loadUsers = () => {
        API.getUser()
        .then((res) => {
            this.setState({users: res.data.results})
        })
    }
    render() {
        return (
            <div>
                <Header />
                <hr />
                <Table users={this.state.users}/>
            </div>
        )
    }
}

export default UserContainer;