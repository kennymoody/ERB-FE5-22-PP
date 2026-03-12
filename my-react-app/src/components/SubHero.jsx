import { heroData } from "../../dataV2";
const Hero = () => {
  const selectedId = 1;
  const data = heroData.find((item) => item.id === selectedId);
  return (
    <section className="section hero">
      <div className="hero-content">
        <h1>{data.title}</h1>
        <p>{data.detail}</p>
        <div>
          <a href="#locations" className="btn btn-online">
            explore more
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
