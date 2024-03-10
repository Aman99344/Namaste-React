// import { LOGO_URL } from "../utils/constant";
// import { useEffect, useState, useContext } from "react";
// import { Link } from "react-router-dom";
// import useOnlineStatus from "../utils/useOnlineStatus";
// import userContext from "../utils/UserContext";
// import { useSelector } from "react-redux";

// const Header = () => {
//   const { loggedInUser } = useContext(userContext);
//   const [btnName, setBtnName] = useState("Login");

//   useEffect(() => {}, [btnName]);

//   const onlineStatus = useOnlineStatus();

//   //Subscribing to the store using slector

//   const cartItems = useSelector((store) => store.cart.items);
//   console.log(cartItems);

//   return (
//     <div className="flex justify-between items-center px-6 py-2 bg-green-100 mt-2 rounded-xl text-lg">
//       <div className="w-[90px]">
//         <img className="logo" src={LOGO_URL} />
//       </div>

//       <div className="nav-items">
//         <ul className="flex">
//           <li className="px-5">
//             Online Status: {onlineStatus === true ? "✅" : "🔴"}
//           </li>
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li className="px-5">
//             <Link to="/about">About</Link>
//           </li>
//           <li className="px-5">
//             <Link to="/contact">Contact</Link>
//           </li>
//           <li className="px-5">
//             <Link to="/grocery">Grocery</Link>
//           </li>
//           <li className="px-5 font-bold">
//             <Link to="/cart">Cart ({cartItems.length} Items) </Link>
//           </li>
//           <button
//             onClick={() => {
//               btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
//             }}
//           >
//             {btnName}
//           </button>
//           <li className="px-5">{loggedInUser}</li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Header;



import { LOGO_URL } from "../utils/constant";
import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const { loggedInUser } = useContext(UserContext);
  const [btnName, setBtnName] = useState("Login");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {}, [btnName]);

  const onlineStatus = useOnlineStatus();

  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  return (
    <div className="px-6 py-2 flex justify-between items-center bg-green-100 rounded-xl text-lg">
      <div className="flex justify-between items-center">
        <div className="w-[80px]">
          <img className="logo" src={LOGO_URL} alt="Logo" />
        </div>
        <button 
          className="block md:hidden ml-36"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>
      </div>
      <div className={`nav-items ${isMenuOpen ? "block" : "hidden"} md:flex md:justify-end`}>
        <ul className="flex flex-col md:flex-row md:space-x-5">
          <li className="mb-2 md:mb-0">
            Online Status: {onlineStatus === true ? "✅" : "🔴"}
          </li>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/grocery">Grocery</Link></li>
          <li className="font-bold">
            <Link to="/cart">Cart ({cartItems.length} Items) </Link>
          </li>
          <button
            className="mb-2 md:mb-0 ml-2 md:ml-5 px-3 rounded-lg bg-green-200"
            onClick={() => {
              setBtnName(btnName === "Login" ? "Logout" : "Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;








