import React, { useState, useEffect } from "react";
import { Card, Table } from "react-bootstrap";
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Dashboard = () => {
  const [health, setHealth] = useState([]);
  const [vol, setVol] = useState([]);
  const [histPrice, setHistPrice] = useState([]);
  const [gecko, setGecko] = useState([]);
  const [error, setError] = useState(true);

  const data = vol?.data?.items[0].volume_chart_30d.map(
    ({ dt, volume_quote }) => ({
      date: dt.replace("T", " ").replace("Z", ""),
      volumen: volume_quote,
    })
  );
  const data3 = histPrice?.data?.prices.map(({ date, price }) => ({
    name: date,
    ticker: price,
  }));
  // Format the price dollar currency
  let formatter = Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    notation: "compact",
    compactDisplay: "short",
    useGrouping: true,
    maximumSignificantDigits: 3,
  });

  useEffect(() => {
    getDEXHealth();
    getVol();
    getHistPrice();
    getGecko();
  }, [error]);

  const getVol = async () => {
    const endpoint2 =
      "1/xy=k/uniswap_v2/ecosystem/?quote-currency=USD&format=JSON&key=" +
      process.env.REACT_APP_API_KEY;
    const url2 = process.env.REACT_APP_API_URL + endpoint2;
    try {
      const res = await fetch(url2);
      const datas = await res.json();
      setVol(datas);
    } catch (error) {
      console.log(error);
    }
  };
  const getHistPrice = async () => {
    const endpoint3 =
      "pricing/historical/USD/UNI/?quote-currency=USD&format=JSON&from=2021-05-05&to=2022-04-25&prices-at-asc=asc&key=" +
      process.env.REACT_APP_API_KEY;
    const url3 = process.env.REACT_APP_API_URL + endpoint3;
    try {
      const res = await fetch(url3);
      const datas2 = await res.json();
      setHistPrice(datas2);
    } catch (error) {
      console.log(error);
    }
  };

  const getDEXHealth = async () => {
    const endpoint =
      "1/xy=k/uniswap_v2/health/?quote-currency=USD&format=JSON&key=" +
      process.env.REACT_APP_API_KEY;
    const url = process.env.REACT_APP_API_URL + endpoint;
    try {
      const res = await fetch(url);
      const data = await res.json();
      setHealth(data);
      setError(false);
      localStorage.setItem("health", JSON.stringify(data));
    } catch (error) {
      console.log(error);
      setError(true);
    }
  };

  const getGecko = async () => {
    let endpoint = "coins/uniswap";
    const url5 = "https://api.coingecko.com/api/v3/" + endpoint;
    try {
      fetch(url5)
        .then((res) => res.json())
        .then((data4) => {
          setGecko(data4);
        });
    } catch (error) {
      console.log(error);
      setError(true);
    }
  };
  // const market = gecko.market_data || null;
  console.log();
  return (
    <>
      <div className="page-header d-flex justify-content-between align-items-center">
        <h4 className="page-heading">Analytics</h4>
        <h6 className="page-heading">
          Dex Name: <span className="text-primary">Uniswap</span>
        </h6>
      </div>
      <section className="mb-2 mb-lg-3">
        <div className="row">
          <div className="mb-4 col-xl-6 col-md-6">
            <Card className="h-100 bg-primary-light card">
              <Card.Body className="d-flex justify-content-center align-items-center card-body">
                <div>
                  <h6 className="text-center">Latest Block Height</h6>
                  <div className="d-flex justify-content-around">
                    <span className="mb-0 px-4 text-primary">
                      {health?.data?.items[0]?.latest_block_height.toLocaleString()}
                    </span>
                    <span className="mb-0 px-4 text-primary">
                      {health?.data?.items[0]?.latest_block_signed_at
                        .replace("T", " ")
                        .replace("Z", "")}
                    </span>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </div>
          <div className="mb-4 col-xl-6 col-md-6">
            <div className="h-100 bg-green-light card">
              <Card className="h-100 bg-primary-light card">
                <Card.Body className="d-flex justify-content-center align-items-center card-body">
                  <div>
                    <h6 className="text-center">Synced Blocked Height</h6>
                    <div className="d-flex justify-content-around">
                      <span className="mb-0 px-4 text-primary">
                        {" "}
                        {health?.data?.items[0]?.synced_block_height?.toLocaleString()}
                      </span>
                      <span className="mb-0 px-4 text-primary">
                        {health?.data?.items[0]?.synced_block_signed_at
                          ?.replace("T", " ")
                          .replace("Z", "")}
                      </span>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </section>
      <section className="my-4 my-lg-4">
        <div className="row">
          <div className="mb-4 mb-lg-0 col-lg-6">
            <div className="h-auto card">
              <div className="card-header">
                <h4 className="card-heading">Token Historical Price</h4>
              </div>
              <div className="card-body">
                <div className="chart-holder">
                  <ResponsiveContainer width="100%" aspect={3}>
                    <AreaChart
                      width={500}
                      height={400}
                      data={data3}
                      margin={{
                        top: 10,
                        right: 30,
                        left: 0,
                        bottom: 0,
                      }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Area
                        type="monotone"
                        dataKey="ticker"
                        stroke="#8884d8"
                        fill="#8884d8"
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </div>
          <div className="mb-4 mb-lg-0 col-lg-6">
            <div className="h-auto card">
              <div className="card-header">
                <h4 className="card-heading">Volume 30d</h4>
              </div>
              <div className="card-body">
                <ResponsiveContainer width="100%" aspect={3}>
                  <BarChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                      top: 5,
                      right: 30,
                      left: 20,
                      bottom: 5,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="volumen" fill="#8884d8" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="my-4 my-lg-4">
        <div className="row">
          <div className="mb-5 pb-5 mb-lg-0 col-lg-6">
            <div className="h-auto card">
              <Card className="card-table">
                <Table
                  className="mb-1 table-borderless table-hover table-light table-striped w-100"
                  responsive
                >
                  <thead className="table-dark text-light">
                    <tr className="text-center">
                      <td>Current Price</td>
                    </tr>
                  </thead>
                  <tbody className="text-center">
                    <tr>
                      <td>
                        {!gecko || typeof gecko.market_data === "undefined"
                          ? null
                          : formatter.format(
                              gecko.market_data.current_price.usd
                            )}{" "}
                        USD
                      </td>
                    </tr>
                  </tbody>
                  <thead className="table-dark text-light">
                    <tr className="text-center">
                      <td>Total Value Locked</td>
                    </tr>
                  </thead>
                  <tbody className="text-center">
                    <tr>
                      <td>
                        {!gecko || typeof gecko.market_data === "undefined"
                          ? null
                          : formatter.format(
                              gecko.market_data.total_value_locked.usd
                            )}{" "}
                        USD
                      </td>
                    </tr>
                  </tbody>
                  <thead className="table-dark text-light">
                    <tr className="text-center">
                      <td>Market Cap Rank</td>
                    </tr>
                  </thead>
                  <tbody className="text-center">
                    <tr>
                      <td>
                        {!gecko || typeof gecko.market_data === "undefined"
                          ? null
                          : gecko.market_cap_rank.toLocaleString()}
                      </td>
                    </tr>
                  </tbody>
                  <thead className="table-dark text-light">
                    <tr className="text-center">
                      <td>Liquidity Score</td>
                    </tr>
                  </thead>
                  <tbody className="text-center">
                    <tr>
                      <td>
                        {!gecko || typeof gecko.market_data === "undefined"
                          ? null
                          : gecko.liquidity_score
                              .toLocaleString()
                              .split(".")[0]}
                      </td>
                    </tr>
                  </tbody>
                  <thead className="table-dark text-light">
                    <tr className="text-center">
                      <td>Circulating Supply</td>
                    </tr>
                  </thead>
                  <tbody className="text-center">
                    <tr>
                      <td>
                        {!gecko || typeof gecko.market_data === "undefined"
                          ? null
                          : Math.round(
                              gecko.market_data.circulating_supply
                            ).toLocaleString()}
                      </td>
                    </tr>
                  </tbody>
                  <thead className="table-dark text-light">
                    <tr className="text-center">
                      <td>Total Supply</td>
                    </tr>
                  </thead>
                  <tbody className="text-center">
                    <tr>
                      <td>
                        {!gecko || typeof gecko.market_data === "undefined"
                          ? null
                          : Math.round(
                              gecko.market_data.total_supply
                            ).toLocaleString()}
                      </td>
                    </tr>
                  </tbody>
                  <thead className="table-dark text-light">
                    <tr className="text-center">
                      <td>Total Volume</td>
                    </tr>
                  </thead>
                  <tbody className="text-center">
                    <tr>
                      <td>
                        {!gecko || typeof gecko.market_data === "undefined"
                          ? null
                          : formatter
                              .format(gecko.market_data.total_volume.usd)
                              .split(".")[0]}{" "}
                        USD
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </Card>
            </div>
          </div>
          <div className="mb-4 mb-lg-0 col-lg-6">
            <div className="h-auto card mb-3">
              <Card className="h-100 bg-primary-light card">
                <Card.Body className="d-flex justify-content-center align-items-center card-body">
                  <div>
                    <h6 className="text-center">Total Active Pair (7d)</h6>
                    <div className="d-flex justify-content-around">
                      <span className="mb-0 px-4 text-primary">{vol?.data?.items[0]?.total_active_pairs_7d}</span>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </div>
            <div className="h-auto card mb-3">
              <Card className="h-100 bg-primary-light card">
                <Card.Body className="d-flex justify-content-center align-items-center card-body">
                  <div>
                    <h6 className="text-center">Total Fess (24hs)</h6>
                    <div className="d-flex justify-content-around">
                      <span className="mb-0 px-4 text-primary"> {formatter.format(vol?.data?.items[0]?.total_active_pairs_7d)} </span>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </div>
            <div className="h-auto card mb-3">
              <Card className="h-100 bg-primary-light card">
                <Card.Body className="d-flex justify-content-center align-items-center card-body">
                  <div>
                    <h6 className="text-center">Total Swaps (24hs)</h6>
                    <div className="d-flex justify-content-around">
                      <span className="mb-0 px-4 text-primary">{vol?.data?.items[0]?.total_swaps_24h}</span>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
