import { useEffect, useState } from "react";
import NavBars from "./NavBar/NavBars";
import AnimatedCursor from "react-animated-cursor";
//Page
import HomePage from "./pages/HomePage.jsx";
import AboutMe from "./pages/AboutMe.jsx";
import ContactMe from "./pages/ContactMe.jsx";
import Experience from "./pages/Experience.jsx";
import Footer from "./Footer.jsx";
import Modal from "./effects/Modal.jsx";

const App = () => {
  //選取的判斷
  const [selected, setSelected] = useState(0);
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
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [selected]);

  const renderSelectedComponent = () => {
    switch (selected) {
      case 0:
        return <HomePage />;
      case 1:
        return <AboutMe />;
      case 2:
        return <Experience />;
      case 3:
        return <ContactMe />;
      default:
        return null;
    }
  };

  return (
    <div className="text-slate-100 flex">
      {!isMobile && (
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
      <Modal />
      {renderSelectedComponent()}
      <NavBars selected={selected} setSelected={setSelected} />
      <Footer />
    </div>
  );
};

export default App;
