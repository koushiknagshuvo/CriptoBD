import axios from 'axios';
import React, { useEffect, useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import { Link } from 'react-router-dom';
import { TrendingCoins } from '../../config/api';
import { CryptoState } from '../../Context/CriptoContext';

const Carousel = () => {
  const [trending, setTrending] = useState([]);
  const { currency, symbol } = CryptoState();

  const fetchTrendingCoins = async () => {
    const { data } = await axios.get(TrendingCoins(currency));

    console.log(data);
    setTrending(data);
  };

  useEffect(() => {
    fetchTrendingCoins();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currency]);

  const items = trending.map((coin) => {
    let profit = coin?.price_change_percentage_24h >= 0;

    return (
      <div className="coin_carasol container  ">
        <Link className="Coins" to={`/coins/${coin.id}`}>
          <img src={coin?.image} alt={coin.name} />
          <span className="coin_Symbol">
            {coin?.symbol} &nbsp;
            <span
              style={{
                color: profit > 0 ? 'rgb(14, 203, 129)' : 'red',
                fontWeight: 500,
              }}
            >
              {profit && '+'}
              {coin?.price_change_percentage_24h?.toFixed(2)}%
            </span>
          </span>

          <span className="coni_Paice">
            {symbol} {coin?.current_price}
          </span>
        </Link>
      </div>
    );
  });

  const responsive = {
    0: {
      items: 2,
    },
    512: {
      items: 5,
    },
  };
  return (
    <>
      <AliceCarousel
        mouseTracking
        infinite
        autoPlayInterval={1000}
        animationDuration={1500}
        disableDotsControls
        disableButtonsControls
        responsive={responsive}
        items={items}
        autoPlay
      />
    </>
  );
};

export default Carousel;
