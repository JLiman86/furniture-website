import { Link } from "react-scroll";
import { navigation } from "../data";

const SideBar = ({isOpen}:{isOpen:boolean}) => {
  return (
    <nav
      className={`flex justify-center items-center md:hidden  absolute top-0 left-0 h-screen w-3/4 bg-white transition-all ${
        isOpen ? "" : "-translate-x-full"
      }`}
    >
      <ul className="space-y-5 ">
        {navigation.map((item, idx) => {
          return (
            <li className="text-center" key={idx}>
              <Link
                to={item.href}
                className="text-primary capitalize cursor-pointer border-b-2 border-transparent hover:border-b-primary py-1 px-4"
              >
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default SideBar;
