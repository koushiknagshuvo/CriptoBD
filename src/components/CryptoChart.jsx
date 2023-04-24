import React from 'react';

const CryptoChart = () => {
  return (
    <>
      <div className="container px-4 CryptoChart">
        <div className="row gx-5 CryptoChart_row ">
          <div className="col-md-6">
            <div className="p-3">
              <h1>
                Invest, trade, and manage all your digital assets in one place.
              </h1>
              <p>
                Investing, trading, and managing digital assets can be a complex
                and time-consuming process, requiring access to multiple
                platforms and tools. However, with our website, you can
                streamline the process and access everything you need in one
                place. Our platform allows you to invest in the top
                cryptocurrencies, trade digital assets with ease, and manage
                your portfolio efficiently. With a user-friendly interface, 24/7
                customer support, and state-of-the-art security features, our
                website is the ultimate solution for anyone looking to navigate
                the exciting world of digital assets.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="p-3">
              <img className="img-fluid" src="./image/cryptocart2.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CryptoChart;
