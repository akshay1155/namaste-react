import React from "react";
import { Link } from "react-router-dom";
class UserClass extends React.Component{
    constructor(props){
        super(props);
        this.state={
            count: 0,
        };
        console.log(props.child+" constructor");
    }
    componentDidMount(){
        console.log(this.props.child+" Component did Mount");
    }
    render(){
        console.log(this.props.child+" render");
        const {count} = this.state;
        return (
            <div className="user-card">
              <p>{this.props.name}</p>
              <p>Contact: 8688162268</p>
              <p>akshaykumarreddy1155@gmail.com</p>
              <Link to="https://github.com/akshay1155">Github</Link>
              <h2>Count: {count}</h2>
              <button onClick={()=>{
                this.setState({
                    count: this.state.count +1,
                });
              }}>Count Increase</button>
            </div>
          );
    }
}

export default UserClass;