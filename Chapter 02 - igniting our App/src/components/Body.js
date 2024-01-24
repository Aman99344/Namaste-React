import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import Shimer from "./Shimer";
import { useEffect, useState } from "react";
import Shimer from "./Shimer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {

  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilterRestaurants] = useState([])

  const [searchText, setSearchText] = useState("");

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard)


  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6279488&lng=77.2786205&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();


    setListOfRestaurants(
      json.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilterRestaurants(json.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  };

  //! console.log(filteredRestaurants)
  //! console.log(listOfRestaurants)

  const onlineStatus = useOnlineStatus()

  if (onlineStatus === false)
    return (
      <h1>NO Internet Connection!</h1>
    )

  return !listOfRestaurants || listOfRestaurants.length === 0 ? <Shimer /> : (

    <div>
      <div className="res-filter">
        <div className="flex justify-center items-center mt-6 mb-4">
          <input className="border-2 border-black mr-10 rounded-lg"
            type="text"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button className="px-5 py-1.5 rounded-lg bg-green-100" onClick={() => {
            const filterRes = listOfRestaurants.filter((res) => {
              return res.info.name.toLowerCase().includes(searchText.toLowerCase())
            })
            setFilterRestaurants(filterRes)

          }}>Search</button>

          <button className="filtred-btn border-2 border-green-200 ml-10 px-4 py-1.4 rounded-lg"
            onClick={() => {
              const filterData = listOfRestaurants.filter((res) => {
                return res.info.avgRating > 4.2;
              });
              setFilterRestaurants(filterData);
            }}
          >
            Top Rated Restaurant
          </button>

        </div>


      </div>
      <div className="flex flex-wrap justify-center">
        {filteredRestaurants.map((restorant) => {
          return <Link key={restorant.info.id} to={"restaurent/" + restorant.info.id}> {restorant.info.promoted ? <RestaurantCardPromoted resData={restorant} /> : <RestaurantCard resData={restorant} />} </Link>;
        })}
      </div>
    </div>
  );
};



export default Body;
