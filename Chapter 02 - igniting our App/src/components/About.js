import UserClass from "./UserClass";
import React from "react";


class About extends React.Component {
    constructor(props) {
        super(props)
        console.log("Parent constructor");
    }

   
    render() {
        console.log("Parent render");
        return (
            <div>
                <h1>This is About Us Page</h1>

                <UserClass />
            </div>
        )
    }
}



// const About = () => {
//     return <div>
//         <h1>This is About Us Page</h1>
//         <User name ={"Aman"} location={"Delhi"}  user ={"yarpi"}/>

//         <UserClass name ={"Aman Gupta -- class comp"} location ={"Bihar"} user= {"@aman99344"} />
//     </div>
// }

export default About;