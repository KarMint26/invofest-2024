import React from "react";
import Logo from "/assets/nav-logo.png";
import { Link, useLocation } from "react-router-dom";
import { FaMicrophoneAlt } from "react-icons/fa";
import { FaTrophy } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { MdCoPresent } from "react-icons/md";
import { FaWrench } from "react-icons/fa";

const Navbar = () => {
  const location = useLocation();
  const activeLink = location.pathname.split("/").pop();
  const [openMenu, setOpenMenu] = React.useState<boolean>(false);

  return (
    <React.Fragment>
      <nav className="bg-white border-gray-200 fixed top-0 w-full">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src={Logo} className="w-48" alt="Invofest Logo" />
          </a>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-default"
            aria-expanded={`${openMenu ? true : false}`}
            onClick={() => setOpenMenu(!openMenu)}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            className={`${!openMenu && "hidden"} w-full lg:block lg:w-auto`}
            id="navbar-default"
          >
            <ul className="font-medium flex flex-col p-4 lg:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 lg:flex-row lg:space-x-8 rtl:space-x-reverse lg:mt-0 lg:border-0 lg:bg-white">
              <li>
                <Link
                  to={"/"}
                  className={`block py-2 px-3 ${
                    activeLink === ""
                      ? "text-white bg-invofest rounded lg:bg-transparent lg:text-invofest"
                      : "text-slate-600 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-invofest"
                  } lg:p-0 flex items-center gap-2`}
                  aria-current="page"
                  onClick={() => setOpenMenu(false)}
                >
                  <FaHome />
                  Beranda
                </Link>
              </li>
              <li>
                <Link
                  to={"/seminar"}
                  className={`block py-2 px-3 ${
                    activeLink === "seminar"
                      ? "text-white bg-invofest rounded lg:bg-transparent lg:text-invofest"
                      : "text-slate-600 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-invofest"
                  } lg:p-0 flex items-center gap-2`}
                  aria-current="page"
                  onClick={() => setOpenMenu(false)}
                >
                  <MdCoPresent />
                  Seminar
                </Link>
              </li>
              <li>
                <Link
                  to={"/competition"}
                  className={`block py-2 px-3 ${
                    activeLink === "competition"
                      ? "text-white bg-invofest rounded lg:bg-transparent lg:text-invofest"
                      : "text-slate-600 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-invofest"
                  } lg:p-0 flex items-center gap-2`}
                  aria-current="page"
                  onClick={() => setOpenMenu(false)}
                >
                  <FaTrophy />
                  Kompetisi
                </Link>
              </li>
              <li>
                <Link
                  to={"/workshop"}
                  className={`block py-2 px-3 ${
                    activeLink === "workshop"
                      ? "text-white bg-invofest rounded lg:bg-transparent lg:text-invofest"
                      : "text-slate-600 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-invofest"
                  } lg:p-0 flex items-center gap-2`}
                  aria-current="page"
                  onClick={() => setOpenMenu(false)}
                >
                  <FaWrench />
                  Workshop
                </Link>
              </li>
              <li>
                <Link
                  to={"/talkshow"}
                  className={`block py-2 px-3 ${
                    activeLink === "talkshow"
                      ? "text-white bg-invofest rounded lg:bg-transparent lg:text-invofest"
                      : "text-slate-600 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-invofest"
                  } lg:p-0 flex items-center gap-2`}
                  aria-current="page"
                  onClick={() => setOpenMenu(false)}
                >
                  <FaMicrophoneAlt />
                  Talkshow
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
