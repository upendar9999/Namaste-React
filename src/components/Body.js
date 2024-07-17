import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
// let listOfRestuarantsJS = [{
//     "info": {
//         "id": "347774",
//         "name": "Varalakshmi Tiffins",
//         "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/11/c75ff48c-b373-4733-8126-e3180cbb0fa0_347774.jpg",
//         "locality": "Manikonda",
//         "areaName": "Narsingi",
//         "costForTwo": "₹300 for two",
//         "cuisines": [
//           "South Indian"
//         ],
//         "avgRating": 3.5,
//         "veg": true,
//         "parentId": "6482",
//         "avgRatingString": "4.5",
//         "totalRatingsString": "10K+",
//         "sla": {
//           "deliveryTime": 36,
// }}},
// {
//     "info": {
//         "id": "347776",
//         "name": "Dominos",
//         "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/11/c75ff48c-b373-4733-8126-e3180cbb0fa0_347774.jpg",
//         "locality": "Manikonda",
//         "areaName": "Narsingi",
//         "costForTwo": "₹300 for two",
//         "cuisines": [
//           "South Indian"
//         ],
//         "avgRating": 4.9,
//         "veg": true,
//         "parentId": "6482",
//         "avgRatingString": "4.5",
//         "totalRatingsString": "10K+",
//         "sla": {
//           "deliveryTime": 63,
// }}}
// ];

const Body = ()=>{
    const [listOfRestaurants,setListOfRestaurants] = useState([]);
    const [filteredListOfRestaurants,setfilteredListOfRestaurants] = useState([]);
    const[searchText,setSearchText] = useState("");
    console.log("Helloworld");

    useEffect(()=>{
    fetchData();
     },[]);

    const fetchData = async ()=>{
        const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4398772&lng=78.36573419999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
    console.log("Helloworld");
    console.log(json);
    setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setfilteredListOfRestaurants(listOfRestaurants);
      
    };
    
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
                filteredListOfRestaurants.map((restaurant)=>(<RestaurantCard key = {restaurant.info.id} resData = {restaurant} />))
              }
            </div>

        </div>
    );
};

export default Body;