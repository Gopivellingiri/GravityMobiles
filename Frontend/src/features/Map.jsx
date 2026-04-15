import { homePageData } from "../data/homePageData";

const { contactSection } = homePageData;

const Map = () => {
  return (
    <section className="mt-5xl">
      <div className="relative overflow-hidden rounded-3xl shadow-sm">
        <iframe
          title="Gravity Mobiles Location"
          src={contactSection.mapEmbedUrl}
          width="100%"
          height="420"
          style={{ border: 0, display: "block" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        {/* Tap anywhere to open Google Maps directions */}
        <a
          href={contactSection.mapDirectionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open directions in Google Maps"
          className="absolute inset-0"
        />
      </div>
    </section>
  );
};

export default Map;
