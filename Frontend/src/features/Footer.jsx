import { MapPin, Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";
import logoWhite from "../assets/logo-white.png";
import { homePageData } from "../data/homePageData";
import Layout from "../shared/Layout";

const Footer = () => {
  const { footer, contactSection } = homePageData;

  return (
    <footer className="bg-brand-dark">
      <Layout className="mt-5xl  px-lg py-2xl md:px-3xl md:py-3xl">
        <div className="grid gap-2xl md:grid-cols-[1.2fr_0.8fr_1fr]">
          <div className="min-w-0 flex flex-col gap-md">
            <img
              src={logoWhite}
              alt="Gravity Mobiles"
              className="h-auto w-44 object-contain"
            />
            <p className="w-full max-w-80 text-body-m leading-relaxed text-neutral-100">
              {contactSection.subtitle}
            </p>
          </div>

          <nav>
            <ul className="flex flex-col gap-md">
              {footer.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-body-l text-neutral-100 transition hover:text-brand-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex flex-col gap-lg">
            <a
              href={`tel:${footer.phone.replace(/\s/g, "")}`}
              className="flex items-start gap-sm text-body-l text-neutral-100"
            >
              <Phone size={18} className="mt-xs shrink-0" />
              <span>{footer.phone}</span>
            </a>

            <p className="flex items-start gap-sm text-body-l text-neutral-100">
              <MapPin size={18} className="mt-xs shrink-0" />
              <span>{footer.address}</span>
            </p>

            <a
              href={footer.whatsapp.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-fit items-center gap-sm rounded-lg bg-brand-primary px-lg py-sm text-label-l font-semibold text-neutral-100 transition hover:brightness-110"
            >
              <FaWhatsapp size={16} />
              {footer.whatsapp.label}
            </a>
          </div>
        </div>

        <div className="mt-2xl border-t border-neutral-300/30 pt-xl text-center">
          <p className="text-body-m text-neutral-100">{footer.copyright}</p>
        </div>
      </Layout>
    </footer>
  );
};

export default Footer;
