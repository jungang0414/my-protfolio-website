import { useState, useEffect, useMemo } from "react";
import Title from "../Title";
import ContactForm from "../ContactForm";
import Notification from "../effects/Notification";
import { IconContext } from "react-icons";
import { TfiEmail } from "react-icons/tfi";
import { LuMailWarning } from "react-icons/lu";

function ContactMe() {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true);
  }, []);

  const containerClasses = useMemo(() => {
    return `absolute mt-24 ml-[4.5rem] md:ml-[5.5rem] mr-1 md:mr-5 flex pb-14 transition-opacity duration-1000 md:w-[calc(100%-7rem)] w-[calc(100%-5rem)] ${
      fadeIn ? "opacity-100" : "opacity-0"
    }`;
  }, [fadeIn]);

  const mailIcon = useMemo(() => (
    <IconContext.Provider value={{ className: "w-5 h-5" }}>
      <LuMailWarning />
    </IconContext.Provider>
  ));

  return (
    <>
      <Notification text="我會盡快回復您" icon={() => mailIcon} />
      <Title title="Contact Me" />

      <div className={containerClasses}>
        <div className="bg-slate-300 rounded-lg shadow-md px-3 py-4 md:px-6 pb-10 w-full">
          <h2 className="text-3xl font-extrabold mb-4 text-gray-800 flex items-center">
            <TfiEmail className="inline-block mr-2" />
            Let's Connect!
          </h2>

          <p className="text-lg mb-4 text-gray-800 rounded bg-slate-50 px-3 py-2">
            感謝您，撥空參觀此網站。{" "}
            <span className="text-slate-50 bg-indigo-400 rounded px-1 py-1">
              dayr88520@gmail.com
            </span>{" "}
            或者使用其他方式與我聯繫
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              LinkedIn
            </a>
          </p>

          <ContactForm />
        </div>
      </div>
    </>
  );
}

export default ContactMe;
