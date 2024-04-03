import { NavLink } from "react-router-dom";
import userImg from "../../../assets/user.png";
const Navbar = () => {
  const navLink = (
    <>
      <h4>
        <NavLink to="/" className="text-[#706F6F] text-lg font-normal capitalize">
          home
        </NavLink>
      </h4>
      <h4>
        <NavLink to="about" className="text-[#706F6F] text-lg font-normal capitalize">
          About
        </NavLink>
      </h4>
      <h4>
        <NavLink to="career" className="text-[#706F6F] text-lg font-normal capitalize">
          Career
        </NavLink>
      </h4>
    </>
  );
  const userLink = (
    <>
      <li>
        <a>Name</a>
      </li>
      <li>
        <a>Logout</a>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 mb-11">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 gap-4"
          >
            {navLink}
          </ul>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-4">{navLink}</ul>
      </div>
      <div className="navbar-end gap-2">
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="m-1">
            <div className="avatar">
              <div className="w-10 h-10 rounded-full ring ring-black ring-offset-base-100 ring-offset-2">
                <img src={userImg} />
              </div>
            </div>
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            {userLink}
          </ul>
        </div>
        <NavLink to="/login" className="text-xl font-semibold text-white bg-[#403F3F] px-8 py-3 cursor-pointer">
          Login
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
