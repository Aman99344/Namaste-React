import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constant";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {

  const Dispatch = useDispatch();

  const handleAddItem = (item) =>{
    //Dispatch an action
     Dispatch(addItem(item))
  }

  return (
    <div>
      {items.map((item) => {
        return (
          <div
            key={item.card.info.id}
            className="flex justify-around border-b-2 border-gray-300"
          >
            <div className="w-8/12 flex flex-col justify-around ">
              <h2 className="font-semibold text-md">{item.card.info.name}</h2>
              <p className="text-lg">
                ₹
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </p>
              <p className="font-light text-xs">{item.card.info.description}</p>
            </div>
            <div className="w-3/12 flex flex-col items-center my-10">
              <img
                className="w-32 rounded-lg"
                src={CDN_URL + item.card.info.imageId}
                alt="food-img"
              />

               <button includeLable={true} onClick={() =>handleAddItem(item)} className="m-[-20px] px-2 bg-green-200 font-semibold rounded-sm">
                ADD+
              </button>
             
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
