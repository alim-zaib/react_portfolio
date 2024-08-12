import logo from "../assets/cat.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img
          className="mx-2 w-20"
          src={logo}
          alt="logo"
          style={{
            filter: "invert(100%) brightness(100%) contrast(100%)",
          }}
        />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          href="https://www.linkedin.com/in/alim-zaib/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="text-cyan-400 hover:text-cyan-600" />
        </a>
        <a
          href="https://github.com/alim-zaib"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="text-cyan-400 hover:text-cyan-600" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
