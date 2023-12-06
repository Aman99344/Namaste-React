import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimer from "./Shimer";

const RestaurantMenu = () => {

    const { resid } = useParams()

    const resInfo = useRestaurantMenu(resid)

    if (resInfo === null) return <Shimer />;


    const { name, costForTwoMessage, avgRating } = resInfo?.cards[0]?.card?.card?.info;
    console.log(resInfo);

    const { itemCards } = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
    console.log(itemCards);

    return (
        <div>
            <div className="w-fit border-2 border-green-300 rounded-lg mx-auto my-5 flex justify-between">
                <h1 className="font-medium text-xl bg-pink-200 px-8">{name}</h1>
                <h2 className="px-10">Rating {avgRating}</h2>
                <h3 className=" bg-pink-200 px-6">{costForTwoMessage}</h3>
                {/* <h4>{cuisines.join(",")}</h4> */}
            </div> 
            <ul className="flex flex-wrap justify-center items-center">
                {
                    itemCards.map((item) => {
                        return <li className="w-fit border-2 border-green-300 rounded-lg p-4 m-5 bg-green-100 font-medium"> {item.card.info.name} </li>
                    })
                }
            </ul>
        </div>
    )
}

export default RestaurantMenu;