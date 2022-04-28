import React from "react";
import Card from "react-bootstrap/Card";
import LineChart from "../common/LineChart";

const Dashboard = () => {
  return (
    <>
      <div className="page-header d-flex justify-content-between align-items-center">
        <h4 className="page-heading">Analytics</h4>
        <h6 className="page-heading">Dex Name: <span className="text-primary">Uniswap</span></h6>
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
    </>
  );
};

export default Dashboard;
