import { HiHome } from "react-icons/hi";
import { IoPerson } from "react-icons/io5";
import NavItem from "./NavItem";

const NavBars = ({ selected, setSelected }) => {
  const navSize = 17;
  return (
    <nav className="h-full w-fit bg-slate-950 p-[0.8rem] ">
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
    </nav>
  );
};

export default NavBars;
