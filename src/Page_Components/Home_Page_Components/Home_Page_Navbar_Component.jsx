import { useState } from "react";
import "../Page_Component_Css/Home_Page_Navbar_Component.css";
import logo from "./logo.png";
import Mobile_logo from "./Mobile_Logo.png";
import { MdMenuOpen } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";

function Home_Page_Navbar_Component() {
  const [isOpen, setIsOpen] = useState(false);

  const Nav_Menu = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  // Function to toggle the drawer
  const toggleDrawer_Open = (event) => {
    event.preventDefault();
    setIsOpen(isOpen === false);
  };
  // Function to toggle the drawer
  const toggleDrawer = (event) => {
    event.preventDefault();
    setIsOpen(isOpen === false);
  };

  return (
    <div>
      {/* Desktop Navbar */}
      <nav className="Nav1">
        <div className="logo">
          <img src={logo} alt="Site Logo" />
        </div>
        <ul>
          {Nav_Menu.map((link, index) => (
            <li key={index}>
              <a href={link.path}>{link.name}</a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Navbar Drawer */}
      <nav className="Nav2" style={{ display: isOpen ? "block" : "none" }}>
        <div className="Navbar_Drawer">
          <div className="Mobile_Logo">
            <img src={Mobile_logo} alt="Mobile Logo" />
          </div>
          <ul>
            {Nav_Menu.map((item, index) => (
              <li key={index}>
                <a href={item.path}>{item.name}</a>
              </li>
            ))}
          </ul>
          <div className="Toggle_box_For_Cross">
            <a href="#" onClick={toggleDrawer_Open}>
              <RxCross2 size={30} color="white" />
            </a>
          </div>
        </div>
      </nav>

      {/* Mobile Navbar Header */}
      <nav className="Nav3">
        <div className="Mobile_Logo2">
          <img src={Mobile_logo} alt="Mobile Logo 2" />
        </div>
        <div className="Toggle_Box">
          <a href="#" onClick={toggleDrawer}>
            <MdMenuOpen size={30} color="white" />
          </a>
        </div>
      </nav>
    </div>
  );
}

export default Home_Page_Navbar_Component;
