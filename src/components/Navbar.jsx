import { Link } from "react-router-dom";
import logo from "../assets/cat.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
  return (
    <div
      style={{
        border: "2px solid rgba(255, 255, 255, 0.3)",
        borderRadius: "15px",
        padding: "5px 10px",
        margin: "30px auto",
        boxShadow: "0 8px 16px rgba(255, 255, 255, 0.2)", // shadow
      }}
    >
      <nav
        className="flex items-center justify-between"
        style={{
          backgroundColor: "#0a0a0a",
          borderRadius: "10px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div className="flex flex-shrink-0 items-center">
          <img
            className="mx-2 w-20"
            src={logo}
            alt="logo"
            style={{
              filter: "invert(100%) brightness(100%) contrast(100%)",
              marginTop: "-4px", // moving cat image up
            }}
          />
        </div>

        <div className="m-4 flex items-center justify-center gap-8 text-2xl">
          <Link
            to="/"
            className="text-cyan-400 hover:text-cyan-600 font-medium"
          >
            home
          </Link>
          <Link
            to="/experiment"
            className="text-cyan-400 hover:text-cyan-600 font-medium"
          >
            experiment
          </Link>
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
    </div>
  );
};

export default Navbar;
