import { HiHome } from "react-icons/hi";
import { IoPerson } from "react-icons/io5";
import NavItem from "./NavItem";

const NavBars = () => {
  const navSize = 17;
  return (
    <nav>
        {/* Home Page */}
      <NavItem title="Home">
        <HiHome size={navSize} />
      </NavItem>
      {/* About Page */}
      <NavItem>
        <IoPerson size={navSize} />
      </NavItem>
    </nav>
  );
};

export default NavBars;
