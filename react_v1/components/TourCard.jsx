const TourCard = ({ image, date, title, info, location, days, price }) => {
  return (
    <div className="tour-card-container">
      <div className="tour-card-image">
        <img src={image} alt="" />
        <p className="tour-date">{date}</p>
      </div>
      <div className="tour-card-title">
        <h3>{title}</h3>
      </div>
      <div className="tour-card-info">
        <h3>{info}</h3>
      </div>
      <div className="tour-card-details-container">
        <span className="tour-card-details-logo">
          <i className="fa-regular fa-map"></i> {location}
        </span>
        <div className="tour-card-details-day">{days}</div>
        <div className="tour-card-details-price">{price}</div>
      </div>
    </div>
  );
};

export default TourCard;
