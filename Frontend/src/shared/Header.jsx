import React, { useEffect, useState } from "react";
import Logo from "../assets/Logo.png";
import Layout from "./Layout";
import { Menu } from "lucide-react";
import LogoBlack from "../assets/logo-black.png";

const Header = ({ onBookService }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "Accessories", href: "#accessories" },
    { label: "Contact", href: "#contact" },
  ];

  const [activeHref, setActiveHref] = useState("#home");

  useEffect(() => {
    const syncActiveWithHash = () => {
      const hash = window.location.hash || "#home";
      setActiveHref(hash);
    };

    syncActiveWithHash();
    window.addEventListener("hashchange", syncActiveWithHash);

    return () => {
      window.removeEventListener("hashchange", syncActiveWithHash);
    };
  }, []);

  useEffect(() => {
    const sectionIds = ["home", "services", "accessories", "contact"];

    const syncActiveWithScroll = () => {
      const headerOffset = 120;
      let currentHref = "#home";

      sectionIds.forEach((id) => {
        const section = document.getElementById(id);
        if (!section) return;

        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop - headerOffset <= 0) {
          currentHref = `#${id}`;
        }
      });

      setActiveHref(currentHref);
    };

    syncActiveWithScroll();
    window.addEventListener("scroll", syncActiveWithScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", syncActiveWithScroll);
    };
  }, []);

  const handleNavClick = (href) => {
    setActiveHref(href || "#home");
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <div className="fixed inset-x-0 top-0 z-40 border-b border-neutral-300/70 bg-neutral-100/90 backdrop-blur">
        <Layout className="py-sm md:py-md">
          <header className="flex flex-wrap items-start justify-between gap-4 md:items-center">
            <div className="">
              <img
                src={Logo}
                alt="Gravity Mobiles Logo"
                className=" w-37.5 inline-block mr-2"
              />
            </div>
            <nav className="hidden md:block">
              <ul className="flex flex-wrap items-center gap-4 text-sm text-neutral-500 md:gap-6 md:text-base">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={() => handleNavClick(link.href)}
                      className={`font-medium transition ${
                        activeHref === link.href
                          ? "text-brand-primary"
                          : "hover:text-brand-primary"
                      }`}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <button
              className="hidden md:inline-block rounded-lg bg-brand-primary px-4 py-2 text-sm font-semibold text-neutral-100 transition hover:brightness-95"
              type="button"
              onClick={onBookService}
            >
              Book Service
            </button>
            <div>
              {/* Mobile Menu Button */}
              <button
                className="md:hidden cursor-pointer text-brand-dark"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle mobile menu"
              >
                <span className="sr-only">Open main menu</span>
                <Menu size={20} />
              </button>
            </div>
          </header>
        </Layout>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed inset-0 z-60 bg-brand-dark/40 transition-opacity duration-300 md:hidden ${
          isMobileMenuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
        role="presentation"
      >
        <aside
          className={`h-full bg-brand-primary px-6 py-7 text-neutral-500 transition-transform duration-300 ease-out ${
            isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
          style={{ width: "270px" }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="mb-9">
            <img src={LogoBlack} alt="Gravity Mobiles Logo" className="w-36" />
          </div>

          <nav>
            <ul className="flex flex-col gap-4 text-title-m font-medium text-neutral-100">
              {navLinks.map((link) => {
                const isActive = activeHref === link.href;
                return (
                  <li
                    key={`mobile-${link.href}`}
                    className={
                      isActive ? "border-l-2 border-neutral-100 pl-4" : "pl-5"
                    }
                  >
                    <a
                      href={link.href}
                      onClick={() => handleNavClick(link.href)}
                    >
                      {link.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          <button
            className="mt-10 rounded-lg bg-brand-dark px-5 py-2 text-title-m font-medium text-neutral-100"
            type="button"
            onClick={() => {
              setIsMobileMenuOpen(false);
              onBookService?.();
            }}
          >
            Book Service
          </button>
        </aside>
      </div>
    </>
  );
};

export default Header;
