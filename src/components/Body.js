import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = ()=>{
    const [listOfRestaurants,setListOfRestaurants] = useState([]);
    const [filteredListOfRestaurants,setfilteredListOfRestaurants] = useState([]);
    const[searchText,setSearchText] = useState("");
    console.log("Helloworld before div and use effect");

    useEffect(()=>{
    fetchData();
     },[]);

    const fetchData = async ()=>{
        const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4398772&lng=78.36573419999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
    console.log("Helloworld inside fectch");
    console.log(json);
    const rests= json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    console.log(rests);
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

    
    return listOfRestaurants.length === 0 ?(<Shimmer/>) :(
        <div className = "body">
            <div className = "filter">
                <div className = "search">
                    <input type = "text" className = "search-box" value = {searchText} onChange = {(e)=>{
                        setSearchText(e.target.value)}
                        }/>
                    <button onClick={()=>{
                     const filteredRestaurant = listOfRestaurants.filter(
                        (res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase())
                    );
                     setfilteredListOfRestaurants(filteredRestaurant);
                    }}>Search</button>
                </div>
                <button className = "filter-btn" onClick={()=>{
                    const filteredList = listOfRestaurants.filter((res) => res.info.avgRating > 4);
                    setfilteredListOfRestaurants(filteredList);

                    console.log(listOfRestaurants);

                }}>Top Rated Restaurants </button>
            </div>
            <div className = "res-container">
              {
                filteredListOfRestaurants.map((restaurant)=>(
                <Link key = {restaurant.info.id} to = {"/restaurants/" + restaurant.info.id}>
                  <RestaurantCard  resData = {restaurant} />  
                </Link>
                ))
              }
            </div>
           {console.log("inside body")}
        </div>
    );
};

export default Body;