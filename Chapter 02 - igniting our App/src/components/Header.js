import { LOGO_URL } from "../utils/constant";
import { useEffect, useState,useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import userContext from "../utils/UserContext";

const Header = () => {

  const {loggedInUser} = useContext(userContext)

  const [btnName, setBtnName] = useState("Login");

  useEffect(() => { }, [btnName]);

  const onlineStatus = useOnlineStatus();

  return (

    <div className="flex justify-between items-center px-6 py-2 bg-green-100 mt-2 rounded-xl text-lg">
      <div className="w-[90px]">
        <img className="logo" src={LOGO_URL} />
      </div>

      <div className="nav-items">
        <ul className="flex">
          <li className="px-5">Online Status: {onlineStatus === true ? "✅" : "🔴"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li className="px-5">
            <Link to="/about">About</Link>
          </li>
          <li className="px-5">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="px-5">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-5">Cart</li>
          <button
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
            <li className="px-5">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
