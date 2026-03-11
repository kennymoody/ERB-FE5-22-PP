import CountryCard from "./CountryCard";
import Title from "./Title";
import { countries } from "../../data";

const Country = () => {
  return (
    <section className="section country" id="country">
      <div className="country-container">
        <Title title="Discover" subTitle="the World" />
        <div className="country-card">
            {/* TODO: even odd different layout */}
          {countries.map((country) => {
            return <CountryCard {...country} key={country.id} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Country;
