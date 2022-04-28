import React from "react";
import { Card, Table } from "react-bootstrap";
import LineChart from "../common/LineChart";

const Dashboard = () => {
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
                    <span className="mb-0 px-4 text-primary"> 14.670.186</span>
                    <span className="mb-0 px-4 text-primary">
                      2022-04-28 02:18:16
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
                        14.670.092
                      </span>
                      <span className="mb-0 px-4 text-primary">
                        2022-04-27 23:55:26.171
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
                      <div>
                        <strong>Current Price</strong>
                      </div>
                    </tr>
                  </thead>
                  <tbody className="text-center">
                    <div>$8.17 USD</div>
                  </tbody>
                  <thead className="table-dark text-light">
                    <tr className="text-center">
                      <div>
                        <strong>Total Value Locked</strong>
                      </div>
                    </tr>
                  </thead>
                  <tbody className="text-center">
                    <div>$7,405,051,932 USD</div>
                  </tbody>
                  <thead className="table-dark text-light">
                    <tr className="text-center">
                      <div>
                        <strong>Market Cap Rank</strong>
                      </div>
                    </tr>
                  </thead>
                  <tbody className="text-center">
                    <div>36</div>
                  </tbody>
                  <thead className="table-dark text-light">
                    <tr className="text-center">
                      <div>
                        <strong>Liquidity Score</strong>
                      </div>
                    </tr>
                  </thead>
                  <tbody className="text-center">
                    <div>63,791</div>
                  </tbody>
                  <thead className="table-dark text-light">
                    <tr className="text-center">
                      <div>
                        <strong>Circulating Supply</strong>
                      </div>
                    </tr>
                  </thead>
                  <tbody className="text-center">
                    <div>456.489.583</div>
                  </tbody>
                  <thead className="table-dark text-light">
                    <tr className="text-center">
                      <div>
                        <strong>Total Supply</strong>
                      </div>
                    </tr>
                  </thead>
                  <tbody className="text-center">
                    <div>1.000.000.000</div>
                  </tbody>
                  <thead className="table-dark text-light">
                    <tr className="text-center">
                      <div>
                        <strong>Total Volume</strong>
                      </div>
                    </tr>
                  </thead>
                  <tbody className="text-center">
                    <div>$123,256,644 USD</div>
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
