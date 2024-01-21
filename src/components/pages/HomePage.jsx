import { useState, useEffect, useMemo, lazy, Suspense } from "react";
const GitHubCalendar = lazy(() => import("react-github-calendar"));
import { IconContext } from "react-icons";
import { MdOutlineWavingHand } from "react-icons/md";
import { BiAlarmExclamation } from "react-icons/bi";
import { motion } from "framer-motion";
import Notification from "../effects/Notification";
import HomeIcon1 from "../../assets/images/pexels-francesco-ungaro-998641.jpg";
import HomeIcon2 from "../../assets/images/pexels-jakub-novacek-924824.jpg";
import HomeIcon3 from "../../assets/images/pexels-pixabay-207529.jpg";

function HomePage() {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true);
  }, []);
  //這邊使用useMemo 防止畫面渲染造成不必要的計算
  const containerClasses = useMemo(() => {
    return `absolute md:mt-4 mt-2 md:ml-[5.5rem] md:mr-5 ml-[4.5rem] mr-1 pb-14 transition-opacity duration-1000 md:w-[calc(100%-7rem)] w-[calc(100%-5rem)] ${
      fadeIn ? "opacity-100" : "opacity-0"
    }`;
  }, [fadeIn]);

  //通知圖示
  const iconProvider = useMemo(
    () => (
      <IconContext.Provider value={{ className: "w-5 h-5" }}>
        <BiAlarmExclamation />
      </IconContext.Provider>
    ),
    []
  );

  //共用theme樣式
  const theme = {
    light: [
      "rgba(57,56,61,0.35)",
      "rgba(106,91,205,0.7)",
      "rgba(106,91,205,0.8)",
      "rgba(106,91,205,0.9)",
      "rgba(106,91,205,1)",
    ],
    dark: [
      "rgba(57,56,61,0.35)",
      "rgba(106,91,205,0.7)",
      "rgba(106,91,205,0.8)",
      "rgba(106,91,205,0.9)",
      "rgba(106,91,205,1)",
    ],
  };

  return (
    <>
      <Notification text="歡迎" icon={() => iconProvider} />

      <div className={containerClasses}>
        <div className="bg-slate-300 px-3 py-4 md:px-6 rounded-lg shadow-md text-gray-800 h-full">
          <h1 className="text-3xl mb-4 font-semibold">
            歡迎
            <span className="inlien-block ml-3">
              <motion.span
                className="inline-block animate-waving-hand"
                initial={{ rotate: 0 }}
                animate={{ rotate: [0, -40, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <MdOutlineWavingHand />
              </motion.span>
            </span>
          </h1>
          <p className="mb-6 rounded bg-slate-50 px-3 py-2">{/* 說明文字 */}</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="w-full">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <img
                  src={HomeIcon1}
                  alt=""
                  loading="lazy"
                  className="w-full h-auto rounded-lg shadow-md"
                />
              </a>
            </div>
            <img
              src={HomeIcon2}
              alt=""
              loading="lazy"
              className="w-full h-auto rounded-lg shadow-md"
            />
            <img
              src={HomeIcon3}
              alt=""
              loading="lazy"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
          <div className="flex align-center justify-center mt-5">
            <div className="rounded-lg bg-slate-50 p-4 max-w-full overflow-hidden">
              <Suspense fallback={<div>Loading Calendar...</div>}>
                <GitHubCalendar
                  username="jungang0414"
                  fontSize={16}
                  blockSize={14}
                  blockMargin={2}
                  blockRadius={0}
                  theme={theme}
                />
              </Suspense>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
