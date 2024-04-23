import React from "react";
import { Link } from "react-router-dom";
class UserClass extends React.Component{
    constructor(props){
        super(props);
        this.state={
            name1: "dummy",
        };
        console.log("child constructor");
    }
    async componentDidMount(){
        console.log("Child Component did Mount");
        const data = await fetch("https://api.github.com/users/akshay1155");
        const json = await data.json();
        this.setState({
            name1: "dummy2",
        });
        console.log(json);
    }
    componentDidUpdate(){
        console.log("Child Component did Update");
    }
    componentWillUnmount(){
        console.log("Component Will Unmount");
    }
    render(){
        console.log("Child render");
        return (
            <div className="user-card">
              <p>{this.state.name1}</p>
              <p>Contact: 8688162268</p>
              <p>akshaykumarreddy1155@gmail.com</p>
              <Link to="https://github.com/akshay1155">Github</Link>
            </div>
          );
    }
}

export default UserClass;