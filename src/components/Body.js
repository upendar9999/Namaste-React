import RestaurantCard,{withPromotedLabel} from "./RestaurantCard";
import { useEffect, useState,useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/Usercontext";

const Body = ()=>{
    const [listOfRestaurants,setListOfRestaurants] = useState([]);
    const [filteredListOfRestaurants,setfilteredListOfRestaurants] = useState([]);
    const[searchText,setSearchText] = useState("");
    
    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

    //console.log("Helloworld before div and use effect");

    useEffect(()=>{
    fetchData();
     },[]);

    const fetchData = async ()=>{
        const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4398772&lng=78.36573419999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
    //console.log("Helloworld inside fectch");
    //console.log(json);
    const rests= json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    //console.log(rests);
    setListOfRestaurants(rests);
    setfilteredListOfRestaurants(rests);
      
    };
    const onlineStatus = useOnlineStatus();

    if(onlineStatus === false)
        return (
           <h1>
            Looks like you're offline!!
            Please check your internet connection

           </h1>
    );

    const {loggedInUser,setUserName} = useContext(UserContext);

    return listOfRestaurants.length === 0 ?(<Shimmer/>) :(
        <div className = "body">
            <div className = "filter flex">
                <div className = "search m-4 p-4">
                    <input type = "text" 
                    data-testid = "searchInput"
                    className = "border border-solid border-black" value = {searchText} onChange = {(e)=>{
                        setSearchText(e.target.value)}
                        }/>
                    <button className = "px-4 py-1 bg-green-100 m-4 rounded-lg" onClick={()=>{
                     const filteredRestaurant = listOfRestaurants.filter(
                        (res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase())
                    );
                     setfilteredListOfRestaurants(filteredRestaurant);
                    }}>Search</button>
                </div>
                <div className = "search m-4 p-4 flex items-center">
                <button className = "px-4 py-1 bg-gray-100 rounded-lg" onClick={()=>{
                    const filteredList = listOfRestaurants.filter((res) => res.info.avgRating > 4);
                    setfilteredListOfRestaurants(filteredList);

                    //console.log(listOfRestaurants);

                }}>Top Rated Restaurants </button> 
                </div>
                <div className = "search m-4 p-4 flex items-center">
                    <label>UserName: </label>
                    <input className="border border-black p-2" value={loggedInUser} 
                    onChange={(e)=>setUserName(e.target.value)
                    }
                    />
                </div>
            </div>
            <div className = "flex flex-wrap">
              {
                filteredListOfRestaurants.map((restaurant)=>(
                <Link 
                key = {restaurant.info.id} to = {"/restaurants/" + restaurant.info.id}>
                    {
                      restaurant.info.isOpen?
                      (<RestaurantCardPromoted resData = {restaurant} />):(
                      <RestaurantCard  resData = {restaurant} />  )
                    }
                  
                </Link>
                ))
              }
            </div>
           {/*console.log("inside body") */}
        </div>
    );
};

export default Body;