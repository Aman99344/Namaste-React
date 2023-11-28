import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimer from "./Shimer";

const RestaurantMenu = () => {

    const {resid} = useParams()

    const resInfo = useRestaurantMenu(resid)
    
    if (resInfo === null) return <Shimer />;


    const { name, costForTwoMessage, cuisines, avgRating } = resInfo?.cards[0]?.card?.card?.info;
    console.log(resInfo);

    const { itemCards } = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
    console.log(itemCards);

    return (
        <div>
            <h1>{name}</h1>
            <h2 style={{ color: "teal" }}>Rating {avgRating}</h2>
            <h3>{costForTwoMessage}</h3>
            <h4>{cuisines.join(",")}</h4>

            <ul>
                {
                    itemCards.map((item) => {
                        return <li>{item.card.info.name}</li>
                    })
                }
            </ul>
        </div>
    )
}

export default RestaurantMenu;