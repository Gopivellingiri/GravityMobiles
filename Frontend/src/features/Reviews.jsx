import { useState } from "react";
import { AnimatePresence, motion as Motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { homePageData } from "../data/homePageData";

const Reviews = () => {
  const { testimonialsSection } = homePageData;
  const items = testimonialsSection.items;
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);
  const activeItem = items[activeIndex];

  const getInitials = (name) =>
    name
      .split(" ")
      .map((part) => part[0])
      .join("")
      .slice(0, 2);

  const renderCardContent = (item) => (
    <>
      <div className="mb-md flex items-start justify-between gap-sm">
        <div className="flex min-w-0 items-center gap-sm">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-primary text-label-l font-bold text-neutral-100">
            {getInitials(item.name)}
          </div>
          <span className="truncate text-title-m font-semibold text-brand-dark">
            {item.name}
          </span>
        </div>

        <div className="flex shrink-0 items-center gap-xs">
          {Array.from({ length: item.rating }).map((_, i) => (
            <Star
              key={i}
              size={16}
              className="fill-yellow-400 text-yellow-400"
            />
          ))}
        </div>
      </div>

      <p className="text-body-m leading-relaxed text-neutral-400">
        {item.quote}
      </p>
    </>
  );

  const next = () => {
    if (isAnimating) return;
    setDirection(1);
    setIsAnimating(true);
    setActiveIndex((prev) => (prev + 1) % items.length);
  };

  const prev = () => {
    if (isAnimating) return;
    setDirection(-1);
    setIsAnimating(true);
    setActiveIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  return (
    <section className="mt-5xl overflow-x-clip">
      <div className="mb-xl flex flex-col items-center gap-sm text-center">
        <h2 className="text-h2 font-bold text-brand-dark">
          {testimonialsSection.title}
        </h2>
        <p className="text-body-l text-neutral-400">
          {testimonialsSection.subtitle}
        </p>
      </div>

      <div className="relative mx-auto mt-xl w-full max-w-224 px-md md:px-3xl">
        <div className="relative mx-auto w-full max-w-192 pb-md md:pb-xl">
          {/* Desktop deck background layers */}
          <div className="pointer-events-none absolute inset-x-0 top-0 hidden md:block">
            <div className="mx-auto h-44 w-[88%] -translate-y-4 rounded-3xl border border-neutral-300/70 bg-neutral-100/90 shadow-sm" />
            <div className="mx-auto -mt-40 h-44 w-[94%] -translate-y-2 rounded-3xl border border-neutral-300/70 bg-neutral-100/95 shadow-sm" />
          </div>

          <article className="relative z-10 w-full overflow-hidden rounded-3xl border border-neutral-300/70 bg-neutral-100 shadow-sm">
            <AnimatePresence mode="wait" initial={false}>
              <Motion.div
                key={activeItem.id}
                initial={{ x: direction > 0 ? 56 : -56, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: direction > 0 ? -56 : 56, opacity: 0 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                onAnimationComplete={() => setIsAnimating(false)}
                className="w-full px-lg py-xl md:min-h-56 md:px-2xl"
                style={{ width: "100%" }}
              >
                {renderCardContent(activeItem)}
              </Motion.div>
            </AnimatePresence>
          </article>
        </div>

        {/* Desktop arrows */}
        <button
          type="button"
          onClick={prev}
          disabled={isAnimating}
          className="absolute left-md top-[42%] z-20 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-brand-primary text-neutral-100 shadow-md transition hover:brightness-95 disabled:cursor-not-allowed disabled:opacity-70 md:flex"
          aria-label="Previous review"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          type="button"
          onClick={next}
          disabled={isAnimating}
          className="absolute right-md top-[42%] z-20 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-brand-primary text-neutral-100 shadow-md transition hover:brightness-95 disabled:cursor-not-allowed disabled:opacity-70 md:flex"
          aria-label="Next review"
        >
          <ChevronRight size={20} />
        </button>

        {/* Mobile arrows */}
        <div className="mt-md flex items-center justify-center gap-md md:hidden">
          <button
            type="button"
            onClick={prev}
            disabled={isAnimating}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-primary text-neutral-100 shadow-md transition hover:brightness-95 disabled:cursor-not-allowed disabled:opacity-70"
            aria-label="Previous review"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            type="button"
            onClick={next}
            disabled={isAnimating}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-primary text-neutral-100 shadow-md transition hover:brightness-95 disabled:cursor-not-allowed disabled:opacity-70"
            aria-label="Next review"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
