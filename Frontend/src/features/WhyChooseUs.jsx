import React from "react";
import sameDayRepair from "../assets/same-day-repair.png";
import qualityAccessories from "../assets/quality-accessories.png";
import customerSupport from "../assets/customer-support.png";
import { homePageData } from "../data/homePageData";

const iconMap = {
  "same-day": sameDayRepair,
  support: customerSupport,
  quality: qualityAccessories,
};

const WhyChooseUs = () => {
  const { whyChooseSection } = homePageData;

  return (
    <section className="mt-5xl">
      <div className="flex flex-col gap-sm">
        <h2 className="text-h2 font-bold text-brand-dark">
          {whyChooseSection.title}
        </h2>
        <p className="text-body-l text-neutral-400">
          {whyChooseSection.subtitle}
        </p>
      </div>

      <div className="mt-xl grid grid-cols-1 gap-lg sm:grid-cols-2 lg:grid-cols-3">
        {whyChooseSection.points.map((point) => (
          <article
            key={point.id}
            className="rounded-3xl bg-neutral-100 px-lg py-2xl text-center"
          >
            <img
              src={iconMap[point.icon]}
              alt={point.title}
              className="mx-auto mb-md h-28 w-28 object-contain"
            />
            <h3 className="mb-sm text-title-l font-semibold text-brand-dark">
              {point.title}
            </h3>
            <p className="text-body-m text-neutral-400">{point.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
