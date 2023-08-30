import  { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from '../../public/images/logo.svg'
import Close from "../../public/images/icon-close.svg"
import Hamburger from "../../public/images/icon-hamburger.svg"

function Navbar() {
  let [isMenuOpen, setIsMenuOpen] = useState(false);
  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isMenuOpen]);
  return (
    <header className="navbar relative z-50 w-full bg-transparent">
      <div className="lg:container flex items-center justify-between lg:mx-auto py-10 ">
        <Link to="/" className="flex items-center pl-6 lg:pl-14 shrink-0">
          <img
            className="max-w-[2.5rem] md:max-w-[3rem]"
            src= {Logo}
            alt="Logo"
          />
        </Link>
        <hr className="w-full h-[1px] bg-white opacity-25 ml-16 -mr-10 hidden lg:block z-10" />
        <nav className="backdrop-blur-3xl bg-white bg-opacity-5 px-12 lg:px-32 hidden md:block">
          <ul className="space-x-9 text-white  text-sm tracking-widest lg:text-base uppercase whitespace-nowrap">
            {["home", "destination", "crew", "technology"].map(
              (item, index) => {
                return (
                  <li className="inline-block" key={index}>
                    <NavLink
                      to={item === "home" ? "/" : `/${item}`}
                      className={({ isActive }) =>
                        isActive
                          ? "inline-block py-10 border-white hover:border-b-[3px] hover:border-opacity-50 border-b-[3px]"
                          : "inline-block py-10 "
                      }
                    >
                      <b className="font-bold mr-1">0{index} </b>
                      {item}
                    </NavLink>
                  </li>
                );
              }
            )}
          </ul>
        </nav>
        <div
          className={`fixed md:hidden top-0 right-0 h-screen w-96 backdrop-blur-3xl -bg--clr-light-gray text-white transition-transform duration-300 ease-in-out ${
            isMenuOpen
              ? "transform translate-x-0"
              : "transform translate-x-full overflow-hidden"
          }`}
        >
          <div className="flex flex-col justify-center text-left h-[600px] p-20">
            <button
              className="absolute top-12 right-7 text-gray-500 hover:text-gray-700 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <img
                src={Close}
                alt=""
                className="cursor-pointer"
              />
            </button>
            <div className="text-lg space-y-4">
              {["home", "destination", "crew", "technology"].map(
                (item, index) => {
                  return (
                    <Link
                      to={item === "home" ? "/" : `/${item}`}
                      className="uppercase block text-2xl group transition-all"
                      key={index}
                      onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                      <b className="font-bold mr-1">0{index} </b>
                      <span className="group-hover:underline">{item}</span>
                    </Link>
                  );
                }
              )}
            </div>
          </div>
        </div>
        <div className="burger md:hidden block pr-6 ">
          <img
            src={Hamburger}
            alt=""
            className="cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          />
        </div>
      </div>
    </header>
  );
}

export default Navbar;