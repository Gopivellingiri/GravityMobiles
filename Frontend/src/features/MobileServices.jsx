import React from "react";
import batteryReplacement from "../assets/battery-replacement.png";
import chargingIssue from "../assets/charging-repair.png";
import displayReplacement from "../assets/display-replacement.png";
import speaker from "../assets/speaker.png";
import touchAndDisplay from "../assets/touch & dispaly.png";
import waterDamage from "../assets/water-damage.png";
import { homePageData } from "../data/homePageData";

const MobileServices = () => {
  const { servicesSection } = homePageData;

  const serviceIconMap = {
    display: displayReplacement,
    charging: chargingIssue,
    battery: batteryReplacement,
    "speaker-mic": speaker,
    touch: touchAndDisplay,
    "water-damage": waterDamage,
  };

  return (
    <section id={servicesSection.id} className="mt-5xl">
      <div className="flex flex-col gap-sm">
        <h2 className="text-h2 font-bold text-brand-dark">
          {servicesSection.title}
        </h2>
        <p className="text-body-l text-neutral-400">
          {servicesSection.subtitle}
        </p>
      </div>

      <div className="mt-xl grid grid-cols-1 gap-lg sm:grid-cols-2 lg:grid-cols-3">
        {servicesSection.items.map((service) => (
          <article
            key={service.id}
            className="rounded-3xl bg-neutral-100 px-lg py-2xl text-center"
          >
            <img
              src={serviceIconMap[service.icon]}
              alt={service.title}
              className="mx-auto mb-md h-16 w-16 object-contain"
            />
            <h3 className="mb-sm text-title-l font-semibold text-brand-dark">
              {service.title}
            </h3>
            <p className="text-body-m text-neutral-400">
              {service.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default MobileServices;
