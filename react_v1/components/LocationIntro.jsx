import { locations } from "../../dataV2";
const LocationIntro = () => {
      const url = new URL(window.location.href);
      const selectedId = url.pathname;
      const location = locations.find((item) => item.path === selectedId);
  return (
    <section>
      <h2>{location.introh1}</h2>
      <p>
        {location.introp}
      </p>
    </section>
  );
};

export default LocationIntro;
