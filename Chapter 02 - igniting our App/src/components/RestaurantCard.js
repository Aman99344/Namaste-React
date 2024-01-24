import { CDN_URL } from "../utils/constant";

const RestaurantCard = (props) => {
    const { resData } = props;

    const { name, cuisines, avgRating, cloudinaryImageId } = resData?.info;
    const { deliveryTime } = resData?.info.sla;
    return (
        <div className="h-[64vh] shadow-lg shadow-gray-400 m-10 p-2 w-64 hover:bg-gray-300 flex flex-col justify-around items-center">
            <img className="res-img p-1 rounded-lg" src={CDN_URL + cloudinaryImageId} alt="" />
            <h3 className="text-lg font-medium">{name}</h3>
            <h4>{cuisines.join(" ,")}</h4>
            <h4>{avgRating} starts</h4>
            <h4>{deliveryTime} minutes</h4>
        </div>

    )
}

export const withPromotedLabel = (RestaurantCard) => {
    return (props) => {
        return (
            <div>
                <label className="absolute bg-black text-white mx-14 my-2 p-1 rounded-lg">Promoted</label>
                <RestaurantCard {...props}/>
            </div>
        )
    }
}

export default RestaurantCard;