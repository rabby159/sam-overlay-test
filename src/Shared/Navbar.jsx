import "./navbarLogo.css";
import navbarLogoMP4 from "../assets/Animation - 1704187235903.webm";
import { NavLink } from "react-router-dom";
import './Navbar.css';

const Navbar = () => {
  const navLink = (
    <>
      <li>
        <NavLink className={'drop-filter'} to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/services"}>Services</NavLink>
      </li>
      <li>
        <NavLink to={"/portfolio"}>Portfolio</NavLink>
      </li>
      <li>
        <NavLink to={"/tos"}>Tos</NavLink>
      </li>
      <li>
        <NavLink to={"/contact"}>Contact</NavLink>
      </li>
    </>
  );

  return (
    <div>
      <div className="navbar pr-10 font-bold">
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
          <div className="video-logo-container">
            <video autoPlay muted loop>
              <source src={navbarLogoMP4} type="video/webm" />
            </video>
          </div>
        </div>
        <div className="navbar-end hidden lg:flex uppercase">
          <ul className=" flex gap-10 px-1 text-xl ">{navLink}</ul>
          <div className="ml-16">
            <p className="text-center">Comms: <span className="text-red-600">closed</span></p>
            <a className="btn  text-xl">Come Back Later</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
