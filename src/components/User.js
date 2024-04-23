import { useState } from "react";
import { Link } from "react-router-dom";
const User = ({name}) => {
  const [count,setCount] = useState(0);
  const [count2]=useState(1);
  return (
    <div className="user-card">
      <p>{name}</p>
      <p>Contact: 8688162268</p>
      <p>akshaykumarreddy1155@gmail.com</p>
      <Link to="https://github.com/akshay1155">Github</Link>
      <h2>Count = {count}</h2>
      <h2>Count = {count2}</h2>
    </div>
  );
};

export default User;
