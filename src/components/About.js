import React from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("Parent constructor");
  }
  componentDidMount() {
    console.log("Parent Component did Mount");

  }
  render() {
    console.log("Parent render");
    return (
      <div className="about">
        <h2>About Us</h2>
        <UserClass name={"Akshay from Class Based Component"} child={"child1"}/>
        <UserClass name={"Akshay from Class Based Component"} child={"child2"}/>
      </div>
    );
  }
}

export default About;
