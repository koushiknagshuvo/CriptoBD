import React from "react";
import { NavLink } from "react-router-dom";
import Carousel from "../components/Banner/Carousel";
import CoinsTable from "../components/CoinsTable";
import CryptoChart from "../components/CryptoChart";
import Footer from "../components/Footer";
import GetDetails from "../components/GetDetails";

const Homepage = () => {
  return (
    <>
      <div className="Hero_container">
        <div className=" Hero_info">
          <h1>
            Best cryptocurrency stack website <br /> in Bangladesh
          </h1>
          <p>
            "Explore the Latest Trends and Discover Top-Performing
            Cryptocurrencies on Our Exchange: Get Real-Time Data and Powerful
            Insights to Stay Ahead of the Crypto Market and Make Informed
            Investment Decisions, Along with Charts, Graphs, and Other Visual
            Aids to Help You Understand Market Trends and Spot Opportunities for
            Growth and Profit."
          </p>

          <NavLink to="/all-coins">
            Exploring Cryptocurrency
            <i className="fa-sharp fa-solid fa-arrow-right"></i>
          </NavLink>
        </div>
      </div>
      <Carousel />
      <CoinsTable />
      <CryptoChart />
      <GetDetails />
      <Footer />
    </>
  );
};

export default Homepage;
