import CountryCard from "./CountryCardV2";
// import Title from "./Title";
import { locations } from "../../dataV2";
// Fix Flags disappear issue in Windows Environment
import Flags from "country-flag-icons/react/3x2";

const Country = () => {
  return (
    <section className="section locations" id="locations">
      <div className="section-header">
        <h2>Featured Places</h2>
        <p>From ancient pyramids to serene Zen temples</p>
      </div>
      <div className="locations-grid">
        {locations.map((location) => {
          const FlagComponent = Flags[location.flag];
          return (
            <CountryCard
              key={location.id}
              {...location}
              flagIcon={
                FlagComponent ? (
                  <FlagComponent style={{ width: "1.2em" }} />
                ) : null
              }
            />
          );
        })}
      </div>
    </section>
  );
};

export default Country;
