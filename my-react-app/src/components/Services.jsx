import Title from "./Title";
import ServiceCard from "./ServiceCard";
import { services } from "../../data";
const Services = () => {
  return (
    <section className="section services" id="services">
      <div className="services-container">
        <Title title="our" subTitle="services" />
        <div className="services-card-grid">
          {services.map((service) => {
            return (
              <ServiceCard
                icon={service.icon}
                info={service.info}
                text={service.text}
                key={service.id}
              />
            );
            // Faster way
            // return <ServiceCard {...services} key={services.id} />
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
