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
import classnames from "classnames";

// Styles
import "assets/css/black-dashboard-react.css";

// react plugin used to create charts
import {HorizontalBar} from "react-chartjs-2";
// Chart data and options setup
import {stackedChart} from "variables/charts.js";

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Navbar,
  Nav
} from "reactstrap";


class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapseOpen: false,
      modalSearch: false,
      color: "navbar-transparent"
    };
  }
  render() {
    return (
      <>

      <Navbar expand="lg">
        <Nav>
          <h2 class="title-properties">Net Worth Calculator</h2>
        </Nav>
      </Navbar>
        
    

        <div className="content">


          <Row>
            <Col xs="12">
              <Card className="card-chart">
                  <CardBody>
                    <CardHeader>
                      <Row md="2">
                        <Col className="text-left" sm="6">
                          <CardTitle tag="h2">Assets</CardTitle>
                        </Col>
                        <Col className="text-right" sm="6">
                          <CardTitle tag="h2">Liabilities</CardTitle>
                        </Col>
                      </Row>
                    </CardHeader>
                    <div className="chart-area">
                      <HorizontalBar
                        data={stackedChart.data}
                        options={stackedChart.options}
                      />
                    </div>
                  </CardBody>
                </Card>
            </Col>
          </Row>
          

          
          <Row md="3">
            <Col md="4">
              <Card>
                <CardBody>
                  <Row md="2">
                    <Col className="text-center" sm="6">
                      <Row><CardTitle tag="h1"></CardTitle></Row>
                      <Row><CardTitle tag="h1"></CardTitle></Row>
                      <Row><CardTitle tag="h1"></CardTitle></Row>
                      <Row><CardTitle tag="h1"></CardTitle></Row>
                      <CardTitle tag="h1">Total</CardTitle>
                      <CardTitle tag="h1">Assets</CardTitle>
                    </Col>
                    <Col>
                      <img
                      alt="..."
                      src={require("assets/img/green-arrow.png")}
                      />
                    </Col>
                  </Row>
                </CardBody>
                <CardTitle className="text-center" tag="h1">$1,234,567</CardTitle>
              </Card>
            </Col>

            <Col md="4">
              <Card>
                <CardBody>
                  <Row md="2">
                    <Col className="text-center" sm="6">
                      <Row><CardTitle tag="h1"></CardTitle></Row>
                      <Row><CardTitle tag="h1"></CardTitle></Row>
                      <Row><CardTitle tag="h1"></CardTitle></Row>
                      <Row><CardTitle tag="h1"></CardTitle></Row>
                      <CardTitle tag="h1">Net</CardTitle>
                      <CardTitle tag="h1">Worth</CardTitle>
                    </Col>
                    <Col>
                      <img
                      alt="..."
                      src={require("assets/img/money-bag.png")}
                      />
                    </Col>
                  </Row>
                </CardBody>
                <CardTitle className="text-center" tag="h1">$1,234,567</CardTitle>
              </Card>
            </Col>

            <Col md="4">
              <Card>
                <CardBody>
                  <Row md="2">
                    <Col className="text-center" sm="6">
                      <Row><CardTitle tag="h1"></CardTitle></Row>
                      <Row><CardTitle tag="h1"></CardTitle></Row>
                      <Row><CardTitle tag="h1"></CardTitle></Row>
                      <Row><CardTitle tag="h1"></CardTitle></Row>
                      <CardTitle tag="h1">Total</CardTitle>
                      <CardTitle tag="h1">Liabilities</CardTitle>
                    </Col>
                    <Col>
                      <img
                      alt="..."
                      src={require("assets/img/red-arrow.png")}
                      />
                    </Col>
                  </Row>
                </CardBody>
                <CardTitle className="text-center" tag="h1">$1,234,567</CardTitle>
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
                          <InputGroup className={classnames({"cash1": this.state.focus})}>
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>$</InputGroupText>
                            </InputGroupAddon>
                            <Input className="text-center" placeholder="0" min={0} max={9999999} type="number" step="100" onFocus={e => this.setState({ focus: true })} onBlur={e => this.setState({ focus: false })}/>
                          </InputGroup>
                        </td>
                      </tr>
                      <tr>
                        <td>Savings for Taxes</td>
                        <td>
                          <InputGroup className={classnames({"input-group-focus": this.state.focus})}>
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>$</InputGroupText>
                            </InputGroupAddon>
                            <Input className="text-center" placeholder="0" min={0} max={9999999} type="number" step="100" onFocus={e => this.setState({ focus: true })} onBlur={e => this.setState({ focus: false })}/>
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
