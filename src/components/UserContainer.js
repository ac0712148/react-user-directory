import React, { Component } from "react";
import Header from "./Header";
import API from "../utils/API"
import Table from "../components/Table"
import SearchForm from "../components/SearchForm"

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
    handleInputChange = (event) => {
        console.log(event.target.value)
        this.setState({
            search: event.target.value
        })
    }
    render() {
        return (
            <div>
                <Header />
                <br />
                <SearchForm search={this.state.search} handleInputChange={this.handleInputChange} />
                <hr />
                <Table users={this.state.users}/>
            </div>
        )
    }
}

export default UserContainer;