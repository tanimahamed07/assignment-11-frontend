import React from "react";
import Banner from "./Banner";
import Loan from "../../components/Home/Loan";

const Home = () => {
  return (
    <div className="container mx-auto">
      <Banner></Banner>
      <Loan></Loan>
    </div>
  );
};

export default Home;
