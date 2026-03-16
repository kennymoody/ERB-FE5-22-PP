import { locationAttractionCards } from "../../dataV2";
import LocationAttractionCard from "./LocationAttractionCard";
const LocationAttraction = () => {
  const url = new URL(window.location.href);
  const selectedId = url.pathname;
  //   const location = locations.find((item) => item.path === selectedId);
  return (
    <section>
      <h2>Must-Visit Attractions</h2>
      <div className="attractions">
        {/* need to specific location , if false , will not show */}
        {locationAttractionCards.map((locationattr) => {
          return (
            <LocationAttractionCard key={locationattr.id} {...locationattr} />
          );
        })}
      </div>
    </section>
  );
};

export default LocationAttraction;
