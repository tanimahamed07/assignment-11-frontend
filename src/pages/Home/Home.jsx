import React from "react";
import Banner from "./Banner";
import Loan from "../../components/Home/Loan";
import HowItWorks from "../../components/Home/HowItWorks";
import Feedback from "../../components/Home/Feedback";
import ExtraSections from "../../components/Home/ExtraSection";
import { StatsSection } from "../../components/Home/StatsSection";

const Home = () => {
  return (
    <div className="container mx-auto">
      <Banner></Banner>
      <StatsSection></StatsSection>
      <Loan></Loan>
      <HowItWorks></HowItWorks>
      <Feedback></Feedback>
      <ExtraSections></ExtraSections>
    </div>
  );
};

export default Home;
