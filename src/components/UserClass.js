import React from "react";

class UserClass extends React.Component {
    constructor(props){
        super(props);
        
        this.state ={
            userInfo:{
                name:"Dummy",
                location:"Default",
                
            },
        };
        console.log(this.props.name + "child Constructor");

    }

   async componentDidMount(){
        //console.log(this.props.name + "Child Component Did Mount");
        // API Call
     const data = await fetch("https://api.github.com/users/upendar9999");
     const json = await data.json();
    
    this.setState({
        userInfo:json,
    })

     console.log(json);

    }
    componentDidUpdate(){
        console.log("component did update");
    }
    componentWillUnmount(){
        console.log("component will unmount");
    }
    render(){

        console.log(this.props.name + "child render");
        
        const {name,location,avatar_url} = this.state.userInfo;
        
        return ( <div className = "user-card">
        <img src = {avatar_url} />
        <h2>Name:{name}</h2>
        <h3>Location:{location}</h3>
        <h4>Contact:Upendar999</h4>
    </div>
        );
    }
}

export default UserClass;


/**
 * -----MOUNTING--------
 * constructor
 * render with dummy data
 * <HTML Dummy/>
 * componentDidMount is called
 *      <API Call>
 *      <this.setState>
 * 
 * 
 * --------UPDATE-----
 *         render(API data)
 *         <HTML (new API data)
 * component did update is called
 * 
 * 
 * 
 * ----UNMOUNTING----
 * componentWillUnmount() is called
 */