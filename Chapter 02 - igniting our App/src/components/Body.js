import RestaurantCard from "./RestaurantCard"
import resList from "../utils/mockData"
import { useEffect, useState } from "react"

const Body = () => {

  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=24.7927284&lng=84.9986545&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
    const json = await data.json()

    // console.log(json);
    console.log(json.data.cards[5].card.card.gridElements.infoWithStyle.restaurants);
    setListOfRestaurants(json.data.cards[5].card.card.gridElements.infoWithStyle.restaurants);
  }

  return (
    <div className="body-container">
      <div className="res-filter">
        <button className="filtred-btn" onClick={() => {
          const filterData = resList.filter((res) => {
            return res.info.avgRating > 4.2
          })
          setListOfRestaurants(filterData)
          console.log(filterData);
        }}
        >Top Rated Restaurant</button>
      </div>
      <div className="resContainer">
        {
          listOfRestaurants.map((restorant) => {
            return (
              <RestaurantCard key={restorant.info.id} resData={restorant} />
            )
          })

        }

      </div>
    </div>
  )
}

export default Body;