import { useState } from "react";
import SocialList from "./SocialList";
import MenuList from "./MenuList";
import logo from "../../src/assets/IMG/travel-svgrepo-com.svg";
const NavBar = () => {
  const [isToggled, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!isToggled);
  };
  return (
    <nav className="navbar">
      <div className="navbar-flex">
        <img src={logo} alt="" className="logo" />
        <ul className="main-menu-list">
          <MenuList />
        </ul>
        <ul className="social-menu-list">
          <SocialList />
        </ul>
        {/* // <!-- Mobile Menu --> */}
        <div className="mobile-menu">
          <div className="mobile-menu-toggle" onClick={handleToggle}>
            <i className="fa-solid fa-bars"></i>
          </div>
          <div className={`mobile-menu-items ${isToggled ? "active" : ""}`}>
            <ul className="mobile-menu-list">
              <MenuList onItemClick={handleToggle} />
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
