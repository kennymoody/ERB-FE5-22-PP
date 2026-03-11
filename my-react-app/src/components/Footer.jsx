const date = new Date().getFullYear();
import MenuList from "./MenuList";
import SocialList from "./SocialList";
const Footer = () => {
  return (
    <section className="section footer">
      <div className="footer-menu-items">
        <ul className="footer-menu-list">
          <MenuList />
        </ul>
        <ul className="footer-social-menu-list">
          <SocialList />
        </ul>
        <p className="copyright">&copy; {date} Demo Travel Page</p>
      </div>
    </section>
  );
};

export default Footer;
