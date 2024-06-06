import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { RiShoppingCartFill } from "react-icons/ri";
import useCart from "../../../hooks/useCart";
import useAdmin from "../../../hooks/useAdmin";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [cart] = useCart();
  const [isAdmin] = useAdmin();
  const handleLogout = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };
  console.log(user?.displayName);
  const navOptions = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/menu">Our Menu</Link>
      </li>
      <li>
        <Link to="/order/salad">Order Food</Link>
      </li>
      {
        //user?'true':'false'
        //user?'condition'?'double true':'one true':'false'
      }
      {user && isAdmin && (
        <li>
          <Link to="/dashboard/adminHome">Admin Home</Link>
        </li>
      )}
      {user && !isAdmin && (
        <li>
          <Link to="/dashboard/userHome">User Home</Link>
        </li>
      )}

      <li>
        <Link to="/secret">Secret</Link>
      </li>
      <li>
        {" "}
        <Link to={"/dashboard/cart"}>
          <button className="btn mr-4">
            <RiShoppingCartFill />
            <div className="badge">+{cart.length}</div>
          </button>
        </Link>
      </li>
      <li>
        {user ? (
          <>
            <button onClick={handleLogout}>Logout</button>
            {/* <span>{user?.displayName}</span> */}
          </>
        ) : (
          <>
            {" "}
            <Link to="/login">Login</Link>
          </>
        )}
      </li>
    </>
  );
  return (
    <>
      <div className="navbar fixed z-10 bg-opacity-30 max-w-screen-xl bg-black text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navOptions}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">Bistro Boss</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navOptions}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
