import React, { Component } from "react";
import Header from "./Header";
import API from "../utils/API"
import Table from "../components/Table"
import SearchForm from "../components/SearchForm"

class UserContainer extends Component {
    state = {
        users: [],
        search: "",
        filteredUsers: [""],
    };

    componentDidMount(){
        this.loadUsers()
    }
    loadUsers = () => {
        API.getUser()
        .then((res) => {
            this.setState({
                users: res.data.results
            })
        })
    }
    handleInputChange = (event) => {
        this.setState({
            search: event.target.value,
            filteredUsers: []
        })
        this.filterUsers();
        
    }
    filterUsers() {
        this.state.filteredUsers = [];
        for(let i = 0; i < this.state.users.length; i++){
            if(this.state.users[i].name.first.toLowerCase().search(this.state.search.toLowerCase()) !== -1
            || this.state.users[i].name.last.toLowerCase().search(this.state.search.toLowerCase()) !== -1){
                this.state.filteredUsers.push(this.state.users[i])
                this.setState({filteredUsers: this.state.filteredUsers})
            }
        }
        console.log(".......")
    }
    
    render() {
        return (
            <div>
                <Header />
                <br />
                <SearchForm search={this.state.search} handleInputChange={this.handleInputChange} filteredUsers={this.filterUsers}/>
                <hr />
                <Table users={this.state.users} search={this.state.search} filteredUsers={this.state.filteredUsers} />
            </div>
        )
    }
}

export default UserContainer;