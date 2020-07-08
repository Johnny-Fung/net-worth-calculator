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
import ReactDOM from "react-dom";

import "assets/scss/black-dashboard-react.scss";
import "assets/css/nucleo-icons.css";

// react plugin used to create charts
import {Bar} from "react-chartjs-2";

// reactstrap components
import {
  Card,
  CardGroup,
  CardHeader,
  CardBody,
  CardTitle,
  CardImg,
  CardSubtitle,
  CardText,
  Table,
  Row,
  Col,
  Input,
  InputGroup,
  InputGroupAddon
} from "reactstrap";

// core components
import {
  chartExample3
} from "variables/charts.js";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }
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
                      <Bar
                        data={chartExample3.data}
                        options={chartExample3.options}
                      />
                    </div>
                  </CardBody>
                </Card>
            </Col>
          </Row>
          
          
          
          <Row md="3">
            <Col md="4">
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
                    <Bar
                      data={chartExample3.data}
                      options={chartExample3.options}
                    />
                  </div>
                </CardBody>
              </Card>
            </Col>


            <Col md="4">
              <Card>
                <CardBody>
                  <CardTitle tag="h2">Net Worth</CardTitle>
                  <img
                  alt="..."
                  // className="avatar"
                  src={require("assets/img/money-bag.png")}
                  />
                  <CardTitle tag="h2">$1,234,567</CardTitle>
                </CardBody>
              </Card>
            </Col>

            <Col md="4">
              <Card>
                <CardBody>
                  <CardTitle tag="h3" className="text-info">Total Liabilities</CardTitle>
                  <img
                  alt="..."
                  // className="avatar"
                  src={require("assets/img/red-arrow.png")}
                  />
                  <CardTitle tag="h3" className="text-info">$1,234,567</CardTitle>
                </CardBody>
              </Card>
            </Col>

          </Row>
          
          
          
          
          <Row>
            {/* Assets Table */}
            <Col md="6">
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
                        <td>
                        <InputGroup>
                          <InputGroupAddon addonType="prepend">$</InputGroupAddon>
                          <Input className="text-center tr-padding" placeholder="0" min={0} max={9999999} type="number" step="10" />
                        </InputGroup>
                      </td>
                      </tr>
                      <tr>
                        <td>Savings for Taxes</td>
                        <td><InputGroup>
                          <InputGroupAddon addonType="prepend">$</InputGroupAddon>
                          <Input className="text-center" placeholder="0" min={0} max={9999999} type="number" step="10" />
                        </InputGroup>
                        </td>
                      </tr>
                      <tr>
                        <td>Rainy Day Fund</td>
                        <td>
                        <InputGroup>
                          <InputGroupAddon addonType="prepend">$</InputGroupAddon>
                          <Input className="text-center" placeholder="0" min={0} max={9999999} type="number" step="10" />
                        </InputGroup>
                      </td>
                      </tr>
                      <tr>
                        <td>Savings for Fun</td>
                        <td>
                        <InputGroup>
                          <InputGroupAddon addonType="prepend">$</InputGroupAddon>
                          <Input className="text-center" placeholder="0" min={0} max={9999999} type="number" step="10" />
                        </InputGroup>
                      </td>
                      </tr>
                      <tr>
                        <td>Savings for Travel</td>
                        <td>
                        <InputGroup>
                          <InputGroupAddon addonType="prepend">$</InputGroupAddon>
                          <Input className="text-center" placeholder="0" min={0} max={9999999} type="number" step="10" />
                        </InputGroup>
                      </td>
                      </tr>
                      <tr>
                        <td>Savings for Personal Development</td>
                        <td>
                        <InputGroup>
                          <InputGroupAddon addonType="prepend">$</InputGroupAddon>
                          <Input className="text-center" placeholder="0" min={0} max={9999999} type="number" step="10" />
                        </InputGroup>
                      </td>
                      </tr>
                    </tbody>
                    <thead className="text-primary">
                      <tr>
                        <th>Investments</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Investment 1</td>
                        <td>
                        <InputGroup>
                          <InputGroupAddon addonType="prepend">$</InputGroupAddon>
                          <Input className="text-center" placeholder="0" min={0} max={9999999} type="number" step="10" />
                        </InputGroup>
                      </td>
                      </tr>
                      <tr>
                        <td>Investment 2</td>
                        <td>
                        <InputGroup>
                          <InputGroupAddon addonType="prepend">$</InputGroupAddon>
                          <Input className="text-center" placeholder="0" min={0} max={9999999} type="number" step="10" />
                        </InputGroup>
                      </td>
                      </tr>
                      <tr>
                        <td>Investment 3</td>
                        <td>
                        <InputGroup>
                          <InputGroupAddon addonType="prepend">$</InputGroupAddon>
                          <Input className="text-center" placeholder="0" min={0} max={9999999} type="number" step="10" />
                        </InputGroup>
                      </td>
                      </tr>
                      <tr>
                        <td>Investment 4</td>
                        <td>
                        <InputGroup>
                          <InputGroupAddon addonType="prepend">$</InputGroupAddon>
                          <Input className="text-center" placeholder="0" min={0} max={9999999} type="number" step="10" />
                        </InputGroup>
                      </td>
                      </tr>
                    </tbody>
                    <thead className="text-primary">
                      <tr>
                        <th>Long Term Assets</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Primary Home</td>
                        <td>
                        <InputGroup>
                          <InputGroupAddon addonType="prepend">$</InputGroupAddon>
                          <Input className="text-center" placeholder="0" min={0} max={9999999} type="number" step="10" />
                        </InputGroup>
                      </td>
                      </tr>
                      <tr>
                        <td>Secondary Home</td>
                        <td>
                        <InputGroup>
                          <InputGroupAddon addonType="prepend">$</InputGroupAddon>
                          <Input className="text-center" placeholder="0" min={0} max={9999999} type="number" step="10" />
                        </InputGroup>
                      </td>
                      </tr>
                      <tr>
                        <td>Other</td>
                        <td>
                        <InputGroup>
                          <InputGroupAddon addonType="prepend">$</InputGroupAddon>
                          <Input className="text-center" placeholder="0" min={0} max={9999999} type="number" step="10" />
                        </InputGroup>
                      </td>
                      </tr>
                    </tbody>
                  </Table>
                </CardBody>
              </Card>
            </Col>

            {/* Liabilities Table */}
            <Col md="6">
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Liabilities</CardTitle>
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
                        <td>
                        <InputGroup>
                          <InputGroupAddon addonType="prepend">$</InputGroupAddon>
                          <Input className="text-center tr-padding" placeholder="0" min={0} max={9999999} type="number" step="10" />
                        </InputGroup>
                      </td>
                      </tr>
                      <tr>
                        <td>Savings for Taxes</td>
                        <td><InputGroup>
                          <InputGroupAddon addonType="prepend">$</InputGroupAddon>
                          <Input className="text-center" placeholder="0" min={0} max={9999999} type="number" step="10" />
                        </InputGroup>
                        </td>
                      </tr>
                      <tr>
                        <td>Rainy Day Fund</td>
                        <td>
                        <InputGroup>
                          <InputGroupAddon addonType="prepend">$</InputGroupAddon>
                          <Input className="text-center" placeholder="0" min={0} max={9999999} type="number" step="10" />
                        </InputGroup>
                      </td>
                      </tr>
                      <tr>
                        <td>Savings for Fun</td>
                        <td>
                        <InputGroup>
                          <InputGroupAddon addonType="prepend">$</InputGroupAddon>
                          <Input className="text-center" placeholder="0" min={0} max={9999999} type="number" step="10" />
                        </InputGroup>
                      </td>
                      </tr>
                      <tr>
                        <td>Savings for Travel</td>
                        <td>
                        <InputGroup>
                          <InputGroupAddon addonType="prepend">$</InputGroupAddon>
                          <Input className="text-center" placeholder="0" min={0} max={9999999} type="number" step="10" />
                        </InputGroup>
                      </td>
                      </tr>
                      <tr>
                        <td>Savings for Personal Development</td>
                        <td>
                        <InputGroup>
                          <InputGroupAddon addonType="prepend">$</InputGroupAddon>
                          <Input className="text-center" placeholder="0" min={0} max={9999999} type="number" step="10" />
                        </InputGroup>
                      </td>
                      </tr>
                    </tbody>
                    <thead className="text-primary">
                      <tr>
                        <th>Investments</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Investment 1</td>
                        <td>
                        <InputGroup>
                          <InputGroupAddon addonType="prepend">$</InputGroupAddon>
                          <Input className="text-center" placeholder="0" min={0} max={9999999} type="number" step="10" />
                        </InputGroup>
                      </td>
                      </tr>
                      <tr>
                        <td>Investment 2</td>
                        <td>
                        <InputGroup>
                          <InputGroupAddon addonType="prepend">$</InputGroupAddon>
                          <Input className="text-center" placeholder="0" min={0} max={9999999} type="number" step="10" />
                        </InputGroup>
                      </td>
                      </tr>
                      <tr>
                        <td>Investment 3</td>
                        <td>
                        <InputGroup>
                          <InputGroupAddon addonType="prepend">$</InputGroupAddon>
                          <Input className="text-center" placeholder="0" min={0} max={9999999} type="number" step="10" />
                        </InputGroup>
                      </td>
                      </tr>
                      <tr>
                        <td>Investment 4</td>
                        <td>
                        <InputGroup>
                          <InputGroupAddon addonType="prepend">$</InputGroupAddon>
                          <Input className="text-center" placeholder="0" min={0} max={9999999} type="number" step="10" />
                        </InputGroup>
                      </td>
                      </tr>
                    </tbody>
                    <thead className="text-primary">
                      <tr>
                        <th>Long Term Assets</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Primary Home</td>
                        <td>
                        <InputGroup>
                          <InputGroupAddon addonType="prepend">$</InputGroupAddon>
                          <Input className="text-center" placeholder="0" min={0} max={9999999} type="number" step="10" />
                        </InputGroup>
                      </td>
                      </tr>
                      <tr>
                        <td>Secondary Home</td>
                        <td>
                        <InputGroup>
                          <InputGroupAddon addonType="prepend">$</InputGroupAddon>
                          <Input className="text-center" placeholder="0" min={0} max={9999999} type="number" step="10" />
                        </InputGroup>
                      </td>
                      </tr>
                      <tr>
                        <td>Other</td>
                        <td>
                        <InputGroup>
                          <InputGroupAddon addonType="prepend">$</InputGroupAddon>
                          <Input className="text-center" placeholder="0" min={0} max={9999999} type="number" step="10" />
                        </InputGroup>
                      </td>
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


ReactDOM.render(
  <Dashboard />,
  document.getElementById("root")
);
