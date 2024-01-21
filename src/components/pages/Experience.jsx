import { useState, useEffect, useMemo } from "react";
import Title from "../Title";
import Notification from "../effects/Notification";
import { IconContext } from "react-icons";

//icon
import {
  FaBriefcase,
  FaLaptopCode,
  FaCode,
  FaDatabase,
  FaTools,
  FaGraduationCap,
  FaAws,
} from "react-icons/fa";

function Experience() {
  const [fadeIn, setFadeIn] = useState(false);

  const size = 25;

  useEffect(() => {
    setFadeIn(true);
  }, []);

  const containerClasses = useMemo(() => {
    return `absolute mt-24 ml-[4.5rem] md:ml-[5.5rem] mr-1 md:mr-5 pb-14 pt-0 transition-opacity duration-1000 text-gray-800 md:w-[calc(100%-7rem)] w-[calc(100%-5rem)] ${
      fadeIn ? "opacity-100" : "opacity-0"
    }`;
  }, [fadeIn]);

  return (
    <>
      <Notification
        text="提示訊息"
        icon={() => (
          <IconContext.Provider value={{ className: "w-5 h-5" }}>
            <FaAws />
          </IconContext.Provider>
        )}
      />
    </>
  );
}

export default Experience;
