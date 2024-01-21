import { useEffect, useState } from "react";
import NavBars from "./NavBar/NavBars";
import AnimatedCursor from "react-animated-cursor";

const App = () => {
  //選取的判斷
  const [selected, setSelected] = useState(0);
  //視窗大小的判斷 <= 768
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleBlur = () => {
      if (!isMobile) {
        document.title = "Thank You For Visiting! - 李俊鋼";
      }
    };

    const handleFocus = () => {
      if (!isMobile) {
        document.title = "李俊鋼";
      }
    };

    window.addEventListener("blur", handleBlur);
    window.addEventListener("focus", handleFocus);

    return () => {
      window.removeEventListener("blur", handleBlur);
      window.removeEventListener("focus", handleFocus);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [selected]);

  const renderSelectedComponent = () => {
    switch (selected) {
      case 0:
        return <div>Home</div>;
      case 1:
        return <div>About</div>;
      default:
        return null;
    }
  };

  return (
    <div className="text-slate-100 flex">
      {isMobile && (
        <AnimatedCursor
          innerSize={8}
          outerSize={30}
          innerScale={1}
          outerScale={1.5}
          outerAlpha={0}
          trailingSpeed={7}
          innerStyle={{
            backgroundColor: "rgb(79, 70, 229)",
          }}
          outerStyle={{
            border: "3px solid rgb(79, 70, 229)",
          }}
        />
      )}
      {renderSelectedComponent()}
      <NavBars selected={selected} setSelected={setSelected} />
    </div>
  );
};

export default App;
