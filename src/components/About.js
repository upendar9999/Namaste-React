import User from "./User";
import UserClass from "./UserClass";
import {Component} from "react";

class About extends Component {
      constructor(props){
            super(props);
            //console.log("parent constructor");
      }
      componentDidMount(){
            //console.log("Parent Component Did Mount");
        }

      render(){
            //console.log("parent render");
            return (
                  <div>
                        <h1>Namste React Class Component</h1>
                        <h2>This is React Course</h2>
                        <UserClass name = {"Upendar (class)"} location = {"Hyderabad(Class)"}/>
                  
                  </div>
                 ); 
      }
}

export default About;