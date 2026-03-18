import MenuList from "./MenuListV2";
// import SocialList from "./SocialList";
const Footer = () => {
  return (
    <section className="section footercontent">
      <div className="footercontent-overlay">
        <div className="footercontent-container footercontent-flex">
          <div className="footercontent-left">
            <h2>WonderLand</h2>
          </div>
          <div className="footercontent-center footercontent-center-flex">
            <div>
              <p>Capturing the Spirit</p>
            </div>
            <div>
              <p>of the World</p>
            </div>
          </div>
          <div className="footercontent-menulists-flex footercontent-right nav-links">
            <MenuList />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
