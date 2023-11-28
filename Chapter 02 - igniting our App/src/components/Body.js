import RestaurantCard from "./RestaurantCard";
import Shimer from "./Shimer";
import { useEffect, useState } from "react";
import Shimer from "./Shimer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {

  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilterRestaurants] = useState([])

  const [searchText, setSearchText] = useState("");

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

  const onlineStatus = useOnlineStatus()

  if (onlineStatus === false)
    return (
      <h1>NO Internet Connection!</h1>
    )
  return listOfRestaurants.length === 0 ? <Shimer /> : (

    <div className="body-container">
      <div className="res-filter">
        <div className="searchContainer">
          <input
            type="text"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button onClick={() => {
            const filterRes = listOfRestaurants.filter((res) => {
              return res.info.name.toLowerCase().includes(searchText.toLowerCase())
            })
            setFilterRestaurants(filterRes)

          }}>Seach</button>

        </div>

        <button
          className="filtred-btn"
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
      <div className="resContainer">
        {filteredRestaurants.map((restorant) => {
          return <Link key={restorant.info.id} to={"restaurent/" + restorant.info.id}> <RestaurantCard resData={restorant} /> </Link>;
        })}
      </div>
    </div>
  );
};

export default Body;
