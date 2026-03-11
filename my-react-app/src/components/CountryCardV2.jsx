const CountryCard = ({ flag, title, detail, imagesrc, cardtag, path }) => {
  return (
    <>
      <a href={path} class="location-card">
        <img src={imagesrc} alt="Kyoto" />
        <div class="location-card-content">
          <span class="location-card-tag">{flag} {cardtag}</span>
          <h3>{title}</h3>
          <p>{detail}</p>
        </div>
      </a>
    </>
  );
};

export default CountryCard;
