import {useEffect,useState} from 'react'
import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
import RestaurantCategory from './RestaurantCategory';

const RestaurantMenu = () => {
    const [resInfo,setresInfo]=useState(null);
    const [showIndex, setShowIndex] = useState(null);
    const{resId}=useParams();
    useEffect(()=>{
     fetchMenu();
    },[]);
    const fetchMenu= async()=>{
        const data=await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.8379544&lng=80.8765463&restaurantId="+resId+"&catalog_qa=undefined&submitAction=ENTER");

       const json=await data.json();
       
       setresInfo(json.data);
    }

    if(resInfo===null ) return(<Shimmer/>);

   const {name,cuisines,cloudinaryImageId,costForTwoMessage}=resInfo?.cards[2]?.card?.card?.info;
   const {itemCards}=resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
   

   const categories=resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c=>c?.card?.card?.["@type"]=="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
   console.log(categories);
  return (
    <div className="text-center">
    <h1 className="font-bold my-6 text-2xl">{name}</h1>
    <p className="font-bold text-lg">
      {cuisines.join(", ")} - {costForTwoMessage}
    </p>
    {/* categories accordions */}
    {categories.map((category, index) => (
      // controlled component
      <RestaurantCategory
        key={category?.card?.card.title}
        data={category?.card?.card}
        showItems={index === showIndex ? true : false}
        setShowIndex={() => setShowIndex(index)}
        
      />
    ))}
  </div>
  )
}

export default RestaurantMenu
