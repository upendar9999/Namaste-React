import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemList = ({items,dummy})=>{

   const dispatch = useDispatch();

   const handleAddItem = (item)=>{
    //Dispatch an action
    dispatch(addItem(item));
   }

    return (
     <div>
       {items.map((item)=>(
        <div 
            data-testid="foodItems"
            key ={item.card.info.id} className = "p-2 m-2 border-gray-200 border-b-2 text-left flex">
            <div className="w-40 p-4">
              <div className="absolute">
                <button className="p-2 mx-16 rounded-lg bg-white shadow-lg" onClick={()=>
                  handleAddItem(item)}>Add+</button>
               </div>
               <img src = {CDN_URL + item.card.info.imageId} />
            </div>
            <div className="w-9/12">
            <div className = "py-2">
           <span>{item.card.info.name}</span>
           <span>
             - Rs.{item.card.info.finalPrice ? item.card.info.finalPrice/100 : item.card.info.defaultPrice/100}</span>
            </div>
          <p className="text-xs">
            {item.card.info.description}</p>
           </div> 
        </div>
       ))}
    </div>
    );
};

export default ItemList;