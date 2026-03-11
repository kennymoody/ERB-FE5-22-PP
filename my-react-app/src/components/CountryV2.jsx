import CountryCard from "./CountryCardV2";
// import Title from "./Title";
import { locations } from "../../dataV2";

const Country = () => {
  return (
    <section className="section locations" id="locations">
        <div className="section-header">
          <h2>Featured Places</h2>
          <p>From ancient pyramids to serene Zen temples</p>
        </div>
        <div className="locations-grid">
          {locations.map((location) => {
            return <CountryCard {...location} key={location.id} />;
          })}
        </div>
    </section>
  );
};

export default Country;
