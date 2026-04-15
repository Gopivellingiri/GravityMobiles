import React from "react";
import Home from "../features/Home";
import Header from "../shared/Header";
import heroImage from "../assets/hero.png";
import BookServiceModal from "../features/BookServiceModal";
import MobileServices from "../features/MobileServices";
import Layout from "../shared/Layout";
import MobileAccessories from "../features/MobileAccessories";
import WhyChooseUs from "../features/WhyChooseUs";
import Reviews from "../features/Reviews";
import Contact from "../features/Contact";
import Map from "../features/Map";
import Footer from "../features/Footer";

const AllPage = () => {
  return (
    <div>
      <div
        id="home"
        className="min-h-screen w-full bg-cover bg-center px-5 pb-5 pt-20 md:px-10 md:pb-8 md:pt-24"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      >
        <Header />
        <Home />
      </div>
      <Layout>
        <MobileServices />
        <MobileAccessories />
        <WhyChooseUs />
        <Reviews />
        <Contact />
        <Map />
      </Layout>
      <Footer />
    </div>
  );
};

export default AllPage;
