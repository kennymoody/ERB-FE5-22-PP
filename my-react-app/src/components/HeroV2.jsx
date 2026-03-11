import { heroData } from "../../dataV2";
const Hero = () => {
  const selectedId = 1;
  const data = heroData.find((item) => item.id === selectedId);
  return (
    <section className="section hero">
      <div class="video-background">
        <iframe
          src="https://www.youtube.com/embed/9ZfN87gSjvI?autoplay=1&mute=1&controls=0&loop=1&playlist=9ZfN87gSjvI&rel=0&showinfo=0&iv_load_policy=3&enablejsapi=1&origin=https://ais-dev-xwfevo4cdvgsy5hcied6cs-55107015959.asia-northeast1.run.app"
          frameborder="0"
          allow="autoplay; encrypted-media"
          allowfullscreen
        ></iframe>
        <div class="video-overlay"></div>
      </div>
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
