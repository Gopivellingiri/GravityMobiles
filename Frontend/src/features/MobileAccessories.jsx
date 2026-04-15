import temperedGlass from "../assets/temper-glass.png";
import backCover from "../assets/back-cover.png";
import earphones from "../assets/earphone.png";
import powerBank from "../assets/power-bank.png";
import chargers from "../assets/charger-adapter.png";
import usbCables from "../assets/USB.png";
import { ArrowRight } from "lucide-react";
import { homePageData } from "../data/homePageData";

const MobileAccessories = () => {
  const { accessoriesSection, contactSection } = homePageData;

  const accessoryImageMap = {
    "back-covers": backCover,
    "tempered-glass": temperedGlass,
    "chargers-adapters": chargers,
    "usb-cables": usbCables,
    "earphones-earbuds": earphones,
    "power-banks": powerBank,
  };

  const handleCheckAvailability = (itemName) => {
    const message = `Hi, I want to check availability for ${itemName}.`;
    const whatsappUrl = `${contactSection.whatsapp.href}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section id={accessoriesSection.id} className="mt-5xl">
      <div className="flex flex-col gap-sm">
        <h2 className="text-h2 font-bold text-brand-dark">
          {accessoriesSection.title}
        </h2>
        <p className="text-body-l text-neutral-400">
          {accessoriesSection.subtitle}
        </p>
      </div>

      <div className="mt-xl grid grid-cols-1 gap-lg sm:grid-cols-2 lg:grid-cols-3">
        {accessoriesSection.items.map((item) => (
          <article
            key={item.id}
            className="rounded-3xl bg-neutral-100 px-lg py-2xl text-center"
          >
            <img
              src={accessoryImageMap[item.id]}
              alt={item.name}
              className="mx-auto mb-md h-28 w-28 object-contain"
            />
            <h3 className="mb-sm text-title-l font-semibold text-brand-dark">
              {item.name}
            </h3>
            <p className="mb-lg text-body-m text-neutral-400">
              {item.description}
            </p>

            <button
              type="button"
              onClick={() => handleCheckAvailability(item.name)}
              className="inline-flex items-center gap-2 rounded-lg bg-brand-dark px-md py-sm text-label-l font-semibold text-neutral-100 hover:bg-brand-dark/90 transition cursor-pointer"
            >
              {accessoriesSection.ctaLabel}
              <ArrowRight size={16} />
            </button>
          </article>
        ))}
      </div>
    </section>
  );
};

export default MobileAccessories;
