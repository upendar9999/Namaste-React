import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

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
    const [listOfRestaurants,setListOfRestaurants] = useState(resList);
    return (
        <div className = "body">
            <div className = "filter">
                <button className = "filter-btn" onClick={()=>{
                    const filteredList = listOfRestaurants.filter((res) => res.info.avgRating > 4);
                    setListOfRestaurants(filteredList);

                    console.log(listOfRestaurants);

                }}>Top Rated Restaurants </button>
            </div>
            <div className = "res-container">
              {
                listOfRestaurants.map((restaurant)=>(<RestaurantCard key = {restaurant.info.id} resData = {restaurant} />))
              }
            </div>

        </div>
    );
};

export default Body;