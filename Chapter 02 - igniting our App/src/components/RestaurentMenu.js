import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimer from "./Shimer";
import ResCategory from "./ResCategory";
import { useState} from "react";

const RestaurantMenu = () => {

  const [showIndex, setShowIndex]= useState()

  const { resid } = useParams();
  const resInfo = useRestaurantMenu(resid);

  if (resInfo === null) return <Shimer />;

  const { name, costForTwoMessage, avgRating } =
    resInfo?.cards[0]?.card?.card?.info;
  // const { itemCards } = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card

  //! console.log(resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards)

  const categories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  // console.log(categories);

  return (
    <div>
      <div className="w-fit border-2 border-teal-300 rounded-lg mx-auto my-5 flex justify-between items-center">
        <h1 className="font-medium text-xl bg-pink-200 px-2">{name}</h1>
        <h2 className="px-10">
          Rating <span className="font-bold">{avgRating}</span>
        </h2>
        <h3 className="text-xl bg-pink-200 px-6">{costForTwoMessage}</h3>
      </div>

      <div>
        {categories.map((category, index) => {
          return (
            <ResCategory
              key={category?.card?.card.title}
              data={category?.card?.card}
              showItem={index === showIndex ? true : false}
              setShowIndex={index === showIndex ? ()=>{setShowIndex(-1)} : ()=>{setShowIndex(index)}}
            />
          );
        })}
      </div>
    </div>
  );
};

export default RestaurantMenu;
