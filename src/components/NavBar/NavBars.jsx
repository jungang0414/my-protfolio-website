import { HiHome } from "react-icons/hi";
import { IoPerson } from "react-icons/io5";
import { MdOutlineWork } from "react-icons/md";
import { FaAddressCard } from "react-icons/fa6";
import mainIcon from "../../assets/images/portfolio.png";
import NavItem from "./NavItem";

const NavBars = ({ selected, setSelected }) => {
  const navSize = 17;
  return (
    <nav className="h-full w-fit bg-slate-950 p-[0.8rem] flex flex-col items-center gap-[0.6rem] fixed">
      {/* Main header Icon */}
      <img src={mainIcon} alt="Main Icon" className="w-10 h-10 my-3" />
      {/* Home Page */}
      <NavItem
        title="Home Page"
        selected={selected === 0}
        id={0}
        setSelected={setSelected}
      >
        <HiHome size={navSize} />
      </NavItem>
      {/* About Page */}
      <NavItem
        title="About Me"
        selected={selected === 1}
        id={1}
        setSelected={setSelected}
      >
        <IoPerson size={navSize} />
      </NavItem>
      {/* Experience Page */}
      <NavItem
        title="Experience"
        selected={selected === 2}
        id={2}
        setSelected={setSelected}
      >
        <MdOutlineWork size={navSize} />
      </NavItem>
      {/* contact Page */}
      <NavItem
        title="Contact Me"
        selected={selected === 3}
        id={3}
        setSelected={setSelected}
      >
        <FaAddressCard size={navSize} />
      </NavItem>
    </nav>
  );
};

export default NavBars;
