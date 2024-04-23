import "./navbarLogo.css";
import navbarLogoMP4 from "../assets/logo.webm";
import { NavLink } from "react-router-dom";
import './Navbar.css';

const Navbar = () => {
  const navLink = (
    <>
      <li className="navigation-item filter-transition drop-filter">
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li className="navigation-item filter-transition drop-filter">
        <NavLink to={"/services"}>Services</NavLink>
      </li>
      <li className="navigation-item filter-transition drop-filter">
        <NavLink to={"/portfolio"}>Portfolio</NavLink>
      </li>
      <li className="navigation-item filter-transition drop-filter">
        <NavLink to={"/tos"}>Tos</NavLink>
      </li>
      <li className="navigation-item filter-transition drop-filter">
        <NavLink to={"/contact"}>Contact</NavLink>
      </li>
    </>
  );

  return (

    <>
    <div className="px-20 navbar-gradient">
      <div className="navbar  font-extrabold">
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
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 rounded-box w-52"
            >
              {navLink}
            </ul>
          </div>
          {/* <div>
            <p>Hello</p>
          </div> */}
          <div className="w-[30rem]">
            <video autoPlay muted loop >
              <source src={navbarLogoMP4} type="video/webm" />
            </video>
          </div>
        </div>
        <div className="navbar-end hidden lg:flex uppercase">
          <ul className="flex gap-10 px-1 text-white">
            {navLink}
            </ul>
          <div className="pl-5">
            <p className="text-center text-white mb-3">Comms: <span className="text-red-600">Open!</span></p>
            <a className="text-l bg-sky-400 p-3 rounded-md">Order Here</a>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Navbar;