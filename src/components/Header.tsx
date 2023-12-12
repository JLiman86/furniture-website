import { useState, useEffect } from "react";

import Logo from "../assets/img/logo.svg";
import { IoMdClose } from "react-icons/io";
import { HiMenuAlt3 } from "react-icons/hi";
import { navigation } from "../data";
import { Link } from "react-scroll";
import SideBar from "./SideBar";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [bg, setBg] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 0 ? setBg(true) : setBg(false);
    });
  }, []);
  return (
    <header
      className={` ${
        bg ? "bg-primary" : "bg-transparent"
      } fixed top-0 left-0 w-screen z-10 transition-all`}
    >
      <div className="container mx-auto">
        <nav className="flex justify-between py-4">
          <img className="h-[30px]" src={Logo} alt="" />

          <ul className="md:flex justify-center items-center gap-5 hidden ">
            {navigation.map((item, idx) => {
              return (
                <li key={idx}>
                  <Link
                    to={item.href}
                    className="capitalize cursor-pointer border-b-2 border-transparent hover:border-b-white py-1 px-4"
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>

          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="md:hidden cursor-pointer"
          >
            {isOpen ? <IoMdClose size={25} /> : <HiMenuAlt3 size={25} />}
          </button>
        </nav>
      </div>

     <SideBar isOpen = {isOpen}/> 
    </header>
  );
};

export default Header;
