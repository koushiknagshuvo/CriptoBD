import axios from "axios";
import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { useNavigate } from "react-router-dom";
import { CryptoState } from "../Context/CriptoContext";
import { CoinList } from "../config/api";

const CoinsTable = () => {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");
  const { currency, symbol } = CryptoState();
  const [pageNumber, setPageNumber] = useState(0);
  const Navigate = useNavigate();

  const userPerPage = 5;
  const pegesVisited = pageNumber * userPerPage;
  const pageCount = Math.ceil(coins.length / userPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  const fetchCoins = async () => {
    const { data } = await axios.get(CoinList(currency));
    setCoins(data);
  };

  useEffect(() => {
    fetchCoins();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currency]);

  const keys = ["name", "symbol"];
  const handleSearch = () => {
    return coins.filter((coin) =>
      // coin.name.toLowerCase().includes(search) ||
      // coin.symbol.toLowerCase().includes(search)
      keys.some((key) => coin[key].toLowerCase().includes(search))
    );
  };

  return (
    <>
      <div className="container">
        <h1 className="text-center mt-5 pt-5">
          Cryptocurrency price by <br /> market cap
        </h1>

        <input
          type="text"
          className="form-control Search_function"
          id="floatingInput"
          placeholder="Search your Favorite Cryptocurrency .... "
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />

        <div>
          {!coins?.length ? (
            <>
              <div className="d-flex justify-content-center pt-4">
                <div className="spinner-border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            </>
          ) : (
            <>
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Coin</th>
                    <th scope="col">Price</th>
                    <th scope="col">24h Changes</th>
                    <th scope="col">Market Cap</th>
                  </tr>
                </thead>
                <tbody>
                  {handleSearch()
                    ?.slice(pegesVisited, pegesVisited + userPerPage)
                    .map((row) => {
                      let profit = row?.price_change_percentage_24h >= 0;

                      return (
                        <tr
                          className="tr_class"
                          onClick={() => Navigate(`/coins/${row?.id}`)}
                          key={row.id}
                        >
                          <td className="d-flex justify-content-between">
                            <img className="Coin_img" src={row?.image} alt="" />
                            <div className="d-flex flex-column align-items-end">
                              <span className="Coin_symble"> {row.name}</span>
                              <span className="coin_info">
                                {row?.symbol} &nbsp;
                                <span
                                  style={{
                                    color:
                                      profit > 0 ? "rgb(14, 203, 129)" : "red",
                                    fontWeight: 500,
                                  }}
                                >
                                  {profit && "+"}
                                  {row?.price_change_percentage_24h?.toFixed(2)}
                                  %
                                </span>
                              </span>
                            </div>
                          </td>
                          <td>
                            {symbol} {row?.current_price}
                          </td>
                          <td
                            style={{
                              color: profit > 0 ? "rgb(14, 203, 129)" : "red",
                              fontWeight: 500,
                            }}
                          >
                            {profit && "+"}
                            {row?.price_change_percentage_24h?.toFixed(2)}%
                          </td>
                          <td>
                            {symbol} &nbsp;
                            {row.market_cap.toString().slice(0, -6)} M
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
              <ReactPaginate
                previousLabel={"Previous"}
                nextLabel={"Next"}
                pageCount={pageCount}
                onPageChange={changePage}
                containerClassName={"paginationBttns"}
                previousClassName={"previousBttn"}
                nextLinkClassName={"nextBttn"}
                disabledClassName={"paginationDisabled"}
                activeClassName={"pagenationActive"}
              />
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default CoinsTable;
