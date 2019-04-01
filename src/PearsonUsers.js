import React, { Component } from "react";
import UsersGridContainer from "./usersGridContainer";


export class PearsonUsers extends Component {
  constructor(props) {
    super(props);
    this.state = {users: []};
  }

  
  // Make the async call
  componentDidMount(){
    fetch("https://reqres.in/api/users?page=1&per_page=10")
    .then(response=> response.json()).then(data1 =>{this.setState({ users: this.state.users.concat(data1.data) })})
    .catch(error => {
      //console.log("test")
  });
  }

  // Delete Users
  delete = (index, e) => {
      const addresses = this.state.users; 
      const uniqueAddresses = Array.from(new Set(addresses.map(a => a.id)))
                                   .map(id => {
                                        return addresses.find(a => a.id === id)
                                      })
      const del = Object.assign([], uniqueAddresses);
      del.splice(index, 1);
      this.setState({users:del})
  }
  
  render() {
      // Remove dupliacte values from a collection
      const addresses = this.state.users; 
      const uniqueAddresses = Array.from(new Set(addresses.map(a => a.id)))
                                  .map(id => {
                                        return addresses.find(a => a.id === id)
                                      })
                                      
      // Iteration over a collection
      let userGrid = uniqueAddresses.map((item, index) => {
                          return(<UsersGridContainer 
                                                    key = {item.id} 
                                                    firstName = {item.first_name} 
                                                    lastName = {item.last_name} 
                                                    avatar = {item.avatar} delete = {()=>{this.delete(index)}} />)
                                })
  return (
     <React.Fragment>
          {/* ...Users Grid start here */}
          <div className="users"> 
            {this.state.users.length > 0 ? userGrid : <p className="error">All Items have been deleted...</p>}
          </div>
          {/* Users Grid start here... */}
          
    </React.Fragment>
    );
  }
}
