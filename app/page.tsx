import AboutMain from "@/components/LandingPage/AboutMain";
import FeatureProducts from "@/components/LandingPage/FeatureProducts";
import Footer from "@/components/LandingPage/Footer";
import ProductRange from "@/components/LandingPage/ProductRange";
import QuickEnquiry from "@/components/LandingPage/QuickEnquiry";
import React from "react";
import HeroSection from "@/components/LandingPage/HeroSection";
import OurServices from "@/components/LandingPage/OurServices";

export default function page() {
  return (
    <section>
      <HeroSection/>
      <AboutMain />
      <ProductRange />
      <FeatureProducts />
      <OurServices/>
      <QuickEnquiry />
      <Footer />
    </section>
  );
}
