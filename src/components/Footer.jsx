import { IconContext } from "react-icons";
import { SiGithub } from "react-icons/si";

const Footer = () => {
  //日期
  const currentYear = new Date().getFullYear();

  return (
    <footer className="fixed bottom-1 md:right-5 right-1 md:scale-100 scale-95 max-w-md mx-auto bg-slate-950 rounded-md px-3 py-1 w-auto">
      <p className="text-slate-100">
        <span className="flex">
          &copy; {currentYear} 李俊鋼
          <a
            href="https://github.com/jungang0414"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center mx-4 md:hover:underline transition duration-300"
          >
            <IconContext.Provider value={{ className: "w-5 h-5 mr-1" }}>
              <SiGithub />
            </IconContext.Provider>
            Github
          </a>
        </span>
      </p>
    </footer>
  );
};

export default Footer;
