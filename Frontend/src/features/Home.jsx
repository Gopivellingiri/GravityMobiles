import Layout from "../shared/Layout";
import { homePageData } from "../data/homePageData";
import { MousePointerClick } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";
import MobileServices from "./MobileServices";
import MobileAccessories from "./MobileAccessories";

const Home = ({ onBookService }) => {
  const { hero } = homePageData;

  return (
    <Layout>
      {/* Hero Section */}
      <div className="mb-lg w-full max-w-144 text-left md:mb-2xl md:max-w-168 h-screen flex flex-col items-start justify-center">
        <h1 className="mb-sm text-h2 font-bold text-brand-primary md:text-display-l">
          {hero.title}
        </h1>
        <p className="mb-lg text-body-l text-neutral-400">{hero.description}</p>
        <div className="flex flex-wrap items-center gap-sm md:gap-md">
          <div className="flex flex-wrap items-center gap-sm md:gap-md">
            {hero.actions.map((action) =>
              action.id === "book-service" ? (
                <button
                  key={action.id}
                  type="button"
                  onClick={onBookService}
                  className={`rounded-lg px-md py-sm text-label-l font-semibold text-neutral-100 transition hover:brightness-95 flex items-center gap-2 cursor-pointer ${
                    action.variant === "primary"
                      ? "bg-brand-primary"
                      : "bg-brand-dark"
                  }`}
                >
                  <MousePointerClick size={20} />
                  {action.label}
                </button>
              ) : (
                <a
                  key={action.id}
                  href={action.href}
                  target="_blank"
                  rel="noreferrer"
                  className={`rounded-lg px-md py-sm text-label-l font-semibold text-neutral-100 transition hover:brightness-95 flex items-center gap-2 ${
                    action.variant === "primary"
                      ? "bg-brand-primary"
                      : "bg-brand-dark"
                  }`}
                >
                  <FaWhatsapp size={20} />
                  {action.label}
                </a>
              ),
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
