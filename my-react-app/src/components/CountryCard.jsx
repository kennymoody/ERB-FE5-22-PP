const CountryCard = ({
  flag,
  title,
  info,
  countryimage1,
  countryimage2,
  countryimage3,
  countryimage4,
  countryimage5,
}) => {
  return (
    <>
      <div className="country-card-container">
        <div className="country-photo-grid">
          <div className="country-intro-flex">
            <div className="country-title">{flag} {title}</div>
            <div className="country-info">{info}</div>
          </div>
          <img src={countryimage1} alt="" />
          <img src={countryimage2} alt="" />
          <img src={countryimage3} alt="" />
          <img src={countryimage4} alt="" />
          <img src={countryimage5} alt="" />
        </div>
      </div>
    </>
  );
};

export default CountryCard;
