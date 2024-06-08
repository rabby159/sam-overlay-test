import "./navbarLogo.css";
import navbarLogoMP4 from "../assets/logo.webm";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const navLink = (
    <>
      <li className="ease-in-out duration-300 drop-filter">
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li className="ease-in-out duration-300 drop-filter">
        <NavLink to={"/services"}>Services</NavLink>
      </li>
      <li className="ease-in-out duration-300 drop-filter">
        <NavLink to={"/portfolio"}>Portfolio</NavLink>
      </li>
      <li className=" ease-in-out duration-300 drop-filter">
        <NavLink to={"/tos"}>Tos</NavLink>
      </li>
      <li className="ease-in-out duration-300 drop-filter">
        <NavLink to={"/contact"}>Contact</NavLink>
      </li>
    </>
  );

  return (
    <>
      <div className="absolute z-10 h-24 md:h-48 w-full overflow-hidden">
        <div className="navbar font-extrabold">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
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
                className="menu menu-xs dropdown-content rounded-box text-white bg-slate-700"
              >
                {navLink}
              </ul>
            </div>
            <div className="w-[20rem] xl:w-[30rem]">
              <video autoPlay muted loop>
                <source src={navbarLogoMP4} type="video/webm" />
              </video>
            </div>
          </div>
          <div className="navbar-end hidden lg:flex uppercase">
            <ul className="flex gap-1 lg:gap-8 lg:px-1 text-white text-xl tracking-[.2rem] xl:tracking-[.4rem] cursor-pointer">
              {navLink}
            </ul>
            <div className="lg:pl-3 hidden xl:block ">
              <p className="text-center text-white mb-3">
                Comms: <span className="text-red-600">Open!</span>
              </p>
              <p className="text-l bg-sky-400 p-3 rounded-md">Order Here</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
