import Title from "./Title";
import TourCard from "./TourCard";
import { tours } from "../../data";

const Tours = () => {
  return (
    <section className="section tours" id="tours">
      <div className="tours-container">
        <Title title="featured" subTitle="tours" />
        <div className="tour-card-grid">
          {tours.map((tour) => {
            return <TourCard {...tour} key={tour.id} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Tours;
