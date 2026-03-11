const ServiceCard = ({icon,info,text}) => {
  return (
    <div className="services-card-flex">
      <span className="services-icon">
        <i className={icon}></i>
      </span>
      <div className="services-info">
        <h4>{info}</h4>
      </div>
      <div className="services-text">
        <p>{text}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
