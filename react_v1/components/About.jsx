import Title from "./Title";
const About = () => {
  return (
    <section className="section about" id="about">
      <div className="about-container">
        <Title title="about" subTitle="us" />
        <div className="about-grid">
          <div className="about-left">
            <div className="about-image">
              <img
                src="https://loremflickr.com/1200/600/parrot?random=3"
                alt=""
              />
            </div>
          </div>
          <div className="about-info">
            <h3>explore the difference</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Corporis,Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Vo
            </p>
            <button className="btn about-btn">
              <a href="#services">read more</a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
