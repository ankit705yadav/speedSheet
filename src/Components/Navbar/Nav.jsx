import "./nav.css";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
// import { FaSquareXTwitter } from "react-icons/fa6";

export default function App() {
  return (
    <div className="navContainer">
      <div className="nav">
        <div>
          <img
            src="https://avatars.githubusercontent.com/u/90278910?s=400&u=ce61478eacc736b6d023dafe715dba9598652510&v=4"
            alt="logo"
          />
        </div>
        <div>
          <div className="navItems">
            <ul className="navLinks">
              <li>
                <a href="#">Home</a>
              </li>
              <li>Hero</li>
              <li>About</li>
              <li>Contact</li>
            </ul>

            <div className="btn">
              <button>
                <FaGithub size={25} />
              </button>
              <button>
                <FaLinkedin size={25} />
              </button>
              <button>
                <FaTwitterSquare size={25} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
