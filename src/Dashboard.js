/*!

=========================================================
* Black Dashboard React v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col
} from "reactstrap";

// core components
import {
  chartExample1,
  chartExample2,
  chartExample3
} from "variables/charts.js";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bigChartData: "data1"
    };
  }
  setBgChartData = name => {
    this.setState({
      bigChartData: name
    });
  };
  render() {
    return (
      <>
        <div className="content">

          <Row>
            <Col xs="12">
              <Card className="card-chart">
                <CardHeader>
                  <Row>
                    <Col className="text-left" sm="6">
                      <h5 className="card-category">Total Shipments</h5>
                      <CardTitle tag="h2">Performance</CardTitle>
                    </Col>
                  </Row>
                </CardHeader>
                <CardBody>
                  <div className="chart-area">
                    <Line
                      data={chartExample1[this.state.bigChartData]}
                      options={chartExample1.options}
                    />
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
          
          
          
          <Row>
            <Col lg="4">
              <Card className="card-chart">
                <CardHeader>
                  <h5 className="card-category">Total Shipments</h5>
                  <CardTitle tag="h3">
                    <i className="tim-icons icon-bell-55 text-info" />{" "}
                    763,215
                  </CardTitle>
                </CardHeader>
                <CardBody>
                  <div className="chart-area">
                    <Line
                      data={chartExample2.data}
                      options={chartExample2.options}
                    />
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col lg="4">
              <Card className="card-chart">
                <CardHeader>
                  <h5 className="card-category">Daily Sales</h5>
                  <CardTitle tag="h3">
                    <i className="tim-icons icon-delivery-fast text-primary" />{" "}
                    3,500€
                  </CardTitle>
                </CardHeader>
                <CardBody>
                  <div className="chart-area">
                    <Bar
                      data={chartExample3.data}
                      options={chartExample3.options}
                    />
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
          
          
          
          
          <Row>
            <Col lg="6" md="12">
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Assets</CardTitle>
                </CardHeader>
                <CardBody>
                  <Table className="tablesorter" responsive>
                    <thead className="text-primary">
                      <tr>
                        <th>Cash and Savings</th>
                        <th className="text-center">Amount</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Chequing</td>
                        <td className="text-center">$36,738</td>
                      </tr>
                      <tr>
                        <td>Savings for Taxes</td>
                        <td className="text-center">$98,615</td>
                      </tr>
                      <tr>
                        <td>Rainy Day Fund</td>
                        <td className="text-center">$98,615</td>
                      </tr>
                      <tr>
                        <td>Savings for Fun</td>
                        <td className="text-center">$98,615</td>
                      </tr>
                      <tr>
                        <td>Savings for Travel</td>
                        <td className="text-center">$98,615</td>
                      </tr>
                      <tr>
                        <td>Savings for Personal Development</td>
                        <td className="text-center">$98,615</td>
                      </tr>
                    </tbody>
                    <thead className="text-primary">
                      <tr>
                        <th>Investments</th>
                        <th className="text-center">Amount</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Investment 1</td>
                        <td className="text-center">$36,738</td>
                      </tr>
                      <tr>
                        <td>Investment 2</td>
                        <td className="text-center">$98,615</td>
                      </tr>
                      <tr>
                        <td>Investment 3</td>
                        <td className="text-center">$98,615</td>
                      </tr>
                      <tr>
                        <td>Investment 4</td>
                        <td className="text-center">$98,615</td>
                      </tr>
                    </tbody>
                    <thead className="text-primary">
                      <tr>
                        <th>Long Term Assets</th>
                        <th className="text-center">Amount</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Primary Home</td>
                        <td className="text-center">$36,738</td>
                      </tr>
                      <tr>
                        <td>Secondary Home</td>
                        <td className="text-center">$98,615</td>
                      </tr>
                      <tr>
                        <td>Other</td>
                        <td className="text-center">$98,615</td>
                      </tr>
                    </tbody>
                  </Table>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default Dashboard;
