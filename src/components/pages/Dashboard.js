import React, { useState, useEffect } from "react";
import { Card, Table } from "react-bootstrap";
import LineChart from "../common/LineChart";

const Dashboard = () => {
  const [health, setHealth] = useState([]);
  const [error, setError] = useState(true);

  useEffect(() => {
    getDEXHealth();
  }, [error]);

  const getDEXHealth = async () => {
    const endpoint =
      "1/xy=k/uniswap_v2/health/?quote-currency=USD&format=JSON&key=" +
      process.env.KEY;
    const url = process.env.URL + endpoint;
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
          <div className="mb-4 col-xl-3 col-md-6">
            <Card className="h-100 bg-primary-light card">
              <Card.Body className="d-flex justify-content-center align-items-center card-body">
                <div>
                  <h6 className="text-center">Latest Block Height</h6>
                  <div className="d-flex justify-content-around">
                    <span className="mb-0 px-4 text-primary">
                    {health?.data?.items[0]?.latest_block_height.toLocaleString()}
                    </span>
                    <span className="mb-0 px-4 text-primary">
                    {health?.data?.items[0]?.latest_block_signed_at.replace("T"," ").replace("Z","")}
                    </span>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </div>
          <div className="mb-4 col-xl-3 col-md-6">
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
                      {health?.data?.items[0]?.synced_block_signed_at?.replace("T"," ").replace("Z","")}
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
                <h4 className="card-heading">TVL</h4>
              </div>
              <div className="card-body">
                <div className="chart-holder">
                  <LineChart className="w-100"></LineChart>
                </div>
              </div>
            </div>
          </div>
          <div className="mb-4 mb-lg-0 col-lg-6">
            <div className="h-auto card">
              <div className="card-header">
                <h4 className="card-heading">Volume 24H</h4>
              </div>
              <div className="card-body">
                <div className="chart-holder">
                  <LineChart className="w-100"></LineChart>
                </div>
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
                      <td>$8.17 USD</td>
                    </tr>
                  </tbody>
                  <thead className="table-dark text-light">
                    <tr className="text-center">
                      <td>Total Value Locked</td>
                    </tr>
                  </thead>
                  <tbody className="text-center">
                    <tr>
                      <td>$7,405,051,932 USD</td>
                    </tr>
                  </tbody>
                  <thead className="table-dark text-light">
                    <tr className="text-center">
                      <td>Market Cap Rank</td>
                    </tr>
                  </thead>
                  <tbody className="text-center">
                    <tr>
                      <td>36</td>
                    </tr>
                  </tbody>
                  <thead className="table-dark text-light">
                    <tr className="text-center">
                      <td>Liquidity Score</td>
                    </tr>
                  </thead>
                  <tbody className="text-center">
                    <tr>
                      <td>63,791</td>
                    </tr>
                  </tbody>
                  <thead className="table-dark text-light">
                    <tr className="text-center">
                      <td>Circulating Supply</td>
                    </tr>
                  </thead>
                  <tbody className="text-center">
                    <tr>
                      <td>456.489.583</td>
                    </tr>
                  </tbody>
                  <thead className="table-dark text-light">
                    <tr className="text-center">
                      <td>Total Supply</td>
                    </tr>
                  </thead>
                  <tbody className="text-center">
                    <tr>
                      <td>1.000.000.000</td>
                    </tr>
                  </tbody>
                  <thead className="table-dark text-light">
                    <tr className="text-center">
                      <td>Total Volume</td>
                    </tr>
                  </thead>
                  <tbody className="text-center">
                    <tr>
                      <td>$123,256,644 USD</td>
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
                      <span className="mb-0 px-4 text-primary"> 749</span>
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
                      <span className="mb-0 px-4 text-primary"> $1.3M </span>
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
                      <span className="mb-0 px-4 text-primary"> 19115</span>
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
