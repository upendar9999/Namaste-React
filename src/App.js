import React from "react";
import ReactDOM from "react-dom/client";
import {Header} from "./components/Header";
import Body from "./components/Body";

// React.createElement => Object => HTML Element(Render)

// JSX -> is not an HTML in JS,html or xml like syntax
//JSX(transpiled before it reaches the JS engine) - Parcel->Babel
//JSX => React.createElement => Object => HTML Element(Render)


// React Components(Class Bases and Functional Components)

/* 
Header(logo,Nav items),Body(search,restaurant container,restaurant cards),Footer(copy rights,links,address,constact info)
*/





  //not using keys(not acceptable) << using index as keys <<<<<<<<  using unique id(best practice)

const AppLayOut = ()=>{
    return (
        <div className = "App">
         <Header/>
         <Body/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayOut/>);
