import MenuList from "./MenuListV2";
// import SocialList from "./SocialList";
const Footer = () => {
  return (
    <section className="section footercontent">
      <div className="footercontent-overlay">
        <div className="footercontent-container footercontent-flex">
          <div className="foortercontent-left">
            <h2>WonderLand</h2>
            <p>Capturing the Spirit of the World</p>
          </div>
          <div className="footercon tent-center footercontent-center-flex">
            <div>
              <p>About Me</p>
            </div>
            <div>
              <p>Follow Me</p>
            </div>
          </div>
          <div className="footercontent-menulists footercontent-menulists-flex footercontent-right nav-links">
            <MenuList />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
