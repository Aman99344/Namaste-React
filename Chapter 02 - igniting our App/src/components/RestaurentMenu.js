import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimer from "./Shimer";

const RestaurantMenu = () => {

    const { resid } = useParams()

    const resInfo = useRestaurantMenu(resid)

    if (resInfo === null) return <Shimer />;

    const { name, costForTwoMessage, avgRating } = resInfo?.cards[2]?.card?.card?.info;

    const { itemCards } = resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card

    // console.log(resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards)

    const catetories = resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=>
      c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"

    )
    console.log(catetories)

    return (
        <div>
            <div>
                <h1>{name}</h1>
                <h2>Rating {avgRating}</h2>
                <h3>{costForTwoMessage}</h3>
            </div>
            <ul>
                {
                    itemCards.map((item) => {
                        return <li key={item.card.info.id}>{item.card.info.name} </li>
                    })
                }
            </ul>
        </div>
    )
}

export default RestaurantMenu;

