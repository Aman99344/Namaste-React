import { useState } from "react";

const User = ({name,location,user}) =>{
    const[count, setCount] = useState(0)
    const[count2] = useState(1)

    return <div className="user-card">
        <h1>count: {count}</h1>
        <button onClick={()=>{
            setCount(count + 1)
        }}>INC Count</button>
        <h1>count: {count2}</h1>
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>User: {user}</h4>
    </div>
}

export default User;