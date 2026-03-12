const CountryCard = ({ flagIcon, title, detail, imagesrc, cardtag, path }) => {
  return (
    <a href={path} className="location-card">
      <img src={imagesrc} alt={title} />
      <div className="location-card-content">
        <span className="location-card-tag">
          {flagIcon} {cardtag}
        </span>
        <h3>{title}</h3>
        <p>{detail}</p>
      </div>
    </a>
  );
};

export default CountryCard;