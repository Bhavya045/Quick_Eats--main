

// Restaurant card component: Image, name, cuisine
const RestaurantCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  area,
  lastMileTravelString,
  costForTwoString,
  avgRating,
}) => {
  return (
    <div>
    <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-200 hover:bg-gray-300  ">
      <img className="rounded-lg " src={"https://media-assets.swiggy.com/swiggy/image/upload/" + cloudinaryImageId} />
      <h2 className="font-bold py-4 text-lg">{name}</h2>
      <h5>{cuisines.join(", ")}</h5>
      <h6>{area}</h6>
      <span><div className="bg-green-500 w-7 rounded-lg flex justify-center">
      <h4 >
         {avgRating}
        </h4>
      </div>
        
        <h4>{lastMileTravelString}</h4>
        <h4>{costForTwoString}</h4>
      </span>
    </div>
    </div>
  );
};

export const WithPromoted=()=>{
  return(props)=>{
    return (
      <div>
        <label>Promoted</label>
        <RestaurantCard {...props}/>
      </div>
    )
  }
}









export default RestaurantCard;