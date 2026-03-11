import { useState, useEffect } from "react";
import MenuList from "./MenuListV2";
const NavBar = () => {
  const [isToggled, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const handleToggle = () => {
    setToggle(!isToggled);
  };
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={scrolled ? "nav-scrolled" : ""}>
      <div className="nav-container">
        <a href="/" className="logo">
          WonderLand
        </a>
        <div className="nav-links">
          <MenuList />
        </div>
        {/* // <!-- Mobile Menu --> */}
        <div className="mobile-menu-toggle" onClick={handleToggle}>
          <i className="fa-solid fa-bars"></i>
        </div>
        <div
          className={`menu-overlay ${isToggled ? "active" : ""}`}
          id="menuOverlay"
          onClick={handleToggle}
        ></div>
        <div
          className={`mobile-menu-items ${isToggled ? "active" : ""}`}
          onClick={handleToggle}
        >
          <MenuList onItemClick={handleToggle} />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
