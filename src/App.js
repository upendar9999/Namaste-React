import React,{lazy, Suspense, useEffect, useState} from "react";
import ReactDOM from "react-dom/client";
import {Header} from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
//import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/Usercontext";
//import Grocery from "./components/Grocery";

// React.createElement => Object => HTML Element(Render)

// JSX -> is not an HTML in JS,html or xml like syntax
//JSX(transpiled before it reaches the JS engine) - Parcel->Babel
//JSX => React.createElement => Object => HTML Element(Render)


// React Components(Class Bases and Functional Components)

/* 
Header(logo,Nav items),Body(search,restaurant container,restaurant cards),Footer(copy rights,links,address,constact info)
*/
//not using keys(not acceptable) << using index as keys <<<<<<<<  using unique id(best practice)
// Chunking
// Code Splitting
// Dynamic Bundling
// Lazy Loading
// On Demand Loading
// Dynamic Import
const Grocery = lazy(()=>import("./components/Grocery") );
const About = lazy(()=>import("./components/About") );
const AppLayOut = ()=>{

  const [userName,setUserName] = useState();

  //authentication
  useEffect(()=>{
    //Make an API Call and send username and password
    const data = {
      name:"Upendar",
    };
    setUserName(data.name);

  },[])
    return (
      //Default
      <UserContext.Provider value = {{loggedInUser : userName,setUserName}}>
        {/*//Upendar */}
             <div className = "App">
                 <Header/>
          
          <Outlet/>
           </div>
           </UserContext.Provider>
    )
}

const appRouter = createBrowserRouter([
  {
    path:"/",
    element: <AppLayOut/>,
    errorElement:<Error/>,
    children:[
      {
          path:"/",
          element:<Body/>
      },
      {
        path:"/About",
        element:(
          <Suspense fallback = {<h1>
            Loading...
          </h1>}>
          <About/>
          </Suspense>
        )
      },
      {
        path:"/contact",
        element: <Contact />
      },
      {
        path:"/grocery",
        element:(
          <Suspense fallback = {<h1>
            Loading...
          </h1>}>
           <Grocery />
          </Suspense>
        ),
      },
      {
        path:"/restaurants/:resId",
        element:<RestaurantMenu/>
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router = {appRouter}/>);
