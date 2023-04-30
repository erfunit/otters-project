import React, { useContext } from "react";
import { LoginContext } from "../../contexts/loginContext";
import { Link, NavLink } from "react-router-dom";

import { navbarItems } from "./navbarItems";
import logo from "../../assets/logo.svg";
import { MdOutlineArticle } from "react-icons/md";
import { BiUser } from "react-icons/bi";

const Navbar = () => {
  const [login] = useContext(LoginContext);

  return (
    <header className="z-40 relative bg-white text-xl font-Vazir shadow-md w-screen ">
      <div id="navbar-top" className="w-full shadow-sm">
        <div className=" container px-8 flex justify-between mx-auto">
          <button
            className="px-6 active:scale-95  py-3 bg-white rounded-lg hover:shadow-lg border transition-all hover:scale-105
           my-4 flex group items-center gap-2"
          >
            <MdOutlineArticle
              className="group-hover:text-[#1D9299] text-black/30 transition-all"
              size={20}
            />
            <span className="group-hover:text-[#1D9299] transition-all">
              بلاگ
            </span>
          </button>
          <div className="overflow-hidden h-20 flex relative items-center">
            <img
              src={logo}
              draggable="false"
              width={100}
              className="mt-5 select-none"
              alt=""
            />
          </div>
          {!login ? (
            <Link to="login">
              <button
                className=" active:scale-95 px-6 py-3 bg-white rounded-lg hover:shadow-lg border transition-all hover:scale-105
           my-4 flex group flex-row items-center gap-2"
              >
                <BiUser className="group-hover:text-[#1D9299] text-black/30 transition-all" />
                <span className="group-hover:text-[#1D9299] transition-all">
                  ورود / عضویت
                </span>
              </button>
            </Link>
          ) : (
            <Link to="updatePassword">
              <button
                className=" active:scale-95 px-6 py-3 bg-white rounded-lg hover:shadow-lg border transition-all hover:scale-105
           my-4 flex group flex-row items-center gap-2"
              >
                <BiUser className="group-hover:text-[#1D9299] text-black/30 transition-all" />
                <span className="group-hover:text-[#1D9299] transition-all">
                  حساب کاربری
                </span>
              </button>
            </Link>
          )}
        </div>
      </div>
      <div id="navbar-bottom" className="py-3">
        <div className="container px-8 mx-auto">
          <nav>
            <ul className="flex gap-7 text-lg">
              {navbarItems.map((item) => (
                <NavLink
                  key={item.id}
                  className="transition-all"
                  to={item.route}
                >
                  <li className="flex cursor-pointer hover:text-[#1D9299]  transition-all items-center gap-2">
                    <item.icon />
                    <span>{item.text}</span>
                  </li>
                </NavLink>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
