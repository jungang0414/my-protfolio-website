import { useState } from "react";
import NavBars from "./NavBar/NavBars";

const App = () => {
  //選取的判斷
  const [selected, setSelected] = useState(0);
  //視窗大小的判斷 <= 768
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const renderSelectedComponent = () => {
    switch (selected) {
        case 0:
            return <div>Home</div>;
        case 1:
            return <div>About</div>;
        default:
            return null;
    }
  }

  return (
    <div className="text-slate-100 flex">
        <NavBars />
    </div>
  );
};

export default App;
