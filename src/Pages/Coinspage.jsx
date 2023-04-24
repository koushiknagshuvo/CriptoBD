import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CryptoState } from "../Context/CriptoContext";
import Coininfo from "../components/Coininfo";
import { SingleCoin } from "../config/api";
const Coinspage = () => {
  const { id } = useParams();
  const [coin, setCoin] = useState();
  const { currency, symbol } = CryptoState();

  const fetchCoin = async () => {
    try {
      const { data } = await axios.get(SingleCoin(id));
      setCoin(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCoin();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <div className="container px-4 my-md-5 py-md-3 ">
        <div className="row gx-5">
          <div className="col-md-4">
            <div className="p-3">
              <img
                src={coin?.image?.large}
                alt={coin?.name}
                height="100"
                style={{ marginBottom: 20 }}
              />
              <h4> {coin?.name}</h4>
              <p>{coin?.description.en.split(". ")[0]}.</p>

              <h5>Rank : {coin?.market_cap_rank}</h5>
              <h5>
                Current Price : {symbol} &nbsp;
                {coin?.market_data.current_price[currency.toLowerCase()]}
              </h5>
              <h5>
                Market Cap : {symbol} &nbsp;
                {coin?.market_data.market_cap[currency.toLowerCase()]}
              </h5>
            </div>
          </div>
          <div className="col-md-8">
            <div className="p-3">
              <Coininfo />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Coinspage;
