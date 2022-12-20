import React from "react";
import Header from "../components/Header";
import Section from "../components/Section3";
import GiveAway from "../components/GiveAway";
import Adopt from "../components/Adopt";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <Adopt />
      <GiveAway />
      <Section />
      <Footer />
    </div>
  );
}
