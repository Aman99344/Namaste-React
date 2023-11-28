import React from "react"

class UserClass extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
           userInfo: {
            name: "Dummy",
            location: "Default"
           }
        }
        console.log("This is child constructor");
    }

   async componentDidMount(){
         
    const data = await fetch("https://api.github.com/users/aman99344")
    const json = await data.json()

     this.setState({
        userInfo: json
     })

     console.log("child mount");
    }

    componentDidUpdate(){
      console.log("update");
    }
    
    componentWillUnmount(){
        console.log("will unmount");
    }
    render() {
        
        const {name, following, avatar_url} = this.state.userInfo;
        
        return (
            <div className="user-card">

                <img src={avatar_url} />
                <h2>Name: {name}</h2>
                <h3>followers: {following}</h3>
                {/* <h4>User: {user}</h4> */}
            </div>
        )
    }
}

export default UserClass;