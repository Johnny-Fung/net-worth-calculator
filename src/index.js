/*!

=========================================================
*                 Net Worth Calculator
=========================================================

*/
import React from "react";
import ReactDOM from "react-dom";
import classnames from "classnames";

// Styles based on the reactstrap library
import "assets/css/net-worth-calculator.css";

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
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Navbar,
  Nav
} from "reactstrap";

//Currency input format
import NumberFormat from 'react-number-format';

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
                        <th className="text-center">&emsp;&emsp;Amount</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Chequing</td>
                        <td>
                          <InputGroup className={classnames({"input-group-focus": this.state.focus1})}>
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>$</InputGroupText>
                            </InputGroupAddon>
                            <NumberFormat className="text-center form-control" thousandSeparator={true} placeholder="0" min={0} max={9999999} 
                                decimalScale="2" allowNegative="false" type="tel" onFocus={e => this.setState({ focus1: true })} onBlur={e => this.setState({ focus1: false })}/>
                          </InputGroup>
                        </td>
                      </tr>
                      <tr>
                        <td>Savings for Taxes</td>
                        <td>
                          <InputGroup className={classnames({"input-group-focus": this.state.focus2})}>
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>$</InputGroupText>
                            </InputGroupAddon>
                            <NumberFormat className="text-center form-control" thousandSeparator={true} placeholder="0" min={0} max={9999999} 
                                decimalScale="2" allowNegative="false" type="tel" onFocus={e => this.setState({ focus2: true })} onBlur={e => this.setState({ focus2: false })}/>
                          </InputGroup>
                        </td>
                      </tr>
                      <tr>
                        <td>Rainy Day Fund</td>
                        <td>
                          <InputGroup className={classnames({"input-group-focus": this.state.focus3})}>
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>$</InputGroupText>
                            </InputGroupAddon>
                            <NumberFormat className="text-center form-control" thousandSeparator={true} placeholder="0" min={0} max={9999999} 
                                decimalScale="2" allowNegative="false" type="tel" onFocus={e => this.setState({ focus3: true })} onBlur={e => this.setState({ focus3: false })}/>
                          </InputGroup>
                        </td>
                      </tr>
                      <tr>
                        <td>Savings for Fun</td>
                        <td>
                          <InputGroup className={classnames({"input-group-focus": this.state.focus4})}>
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>$</InputGroupText>
                              </InputGroupAddon>
                            <NumberFormat className="text-center form-control" thousandSeparator={true} placeholder="0" min={0} max={9999999} 
                                decimalScale="2" allowNegative="false" type="tel" onFocus={e => this.setState({ focus4: true })} onBlur={e => this.setState({ focus4: false })}/>
                          </InputGroup>
                        </td>
                      </tr>
                      <tr>
                        <td>Savings for Travel</td>
                        <td>
                          <InputGroup className={classnames({"input-group-focus": this.state.focus5})}>
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>$</InputGroupText>
                              </InputGroupAddon>
                            <NumberFormat className="text-center form-control" thousandSeparator={true} placeholder="0" min={0} max={9999999} 
                                decimalScale="2" allowNegative="false" type="tel" onFocus={e => this.setState({ focus5: true })} onBlur={e => this.setState({ focus5: false })}/>
                          </InputGroup>
                        </td>
                      </tr>
                      <tr>
                        <td>Savings for Personal Development</td>
                        <td>
                          <InputGroup className={classnames({"input-group-focus": this.state.focus6})}>
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>$</InputGroupText>
                              </InputGroupAddon>
                            <NumberFormat className="text-center form-control" thousandSeparator={true} placeholder="0" min={0} max={9999999} 
                                decimalScale="2" allowNegative="false" type="tel" onFocus={e => this.setState({ focus6: true })} onBlur={e => this.setState({ focus6: false })}/>
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
                          <InputGroup className={classnames({"input-group-focus": this.state.focus7})}>
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>$</InputGroupText>
                            </InputGroupAddon>
                            <NumberFormat className="text-center form-control" thousandSeparator={true} placeholder="0" min={0} max={9999999} 
                                decimalScale="2" allowNegative="false" type="tel" onFocus={e => this.setState({ focus7: true })} onBlur={e => this.setState({ focus7: false })}/>
                          </InputGroup>
                        </td>
                      </tr>
                      <tr>
                        <td>Investment 2</td>
                        <td>
                          <InputGroup className={classnames({"input-group-focus": this.state.focus8})}>
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>$</InputGroupText>
                            </InputGroupAddon>
                            <NumberFormat className="text-center form-control" thousandSeparator={true} placeholder="0" min={0} max={9999999} 
                                decimalScale="2" allowNegative="false" type="tel" onFocus={e => this.setState({ focus8: true })} onBlur={e => this.setState({ focus8: false })}/>
                          </InputGroup>
                        </td>
                      </tr>
                      <tr>
                        <td>Investment 3</td>
                        <td>
                          <InputGroup className={classnames({"input-group-focus": this.state.focus9})}>
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>$</InputGroupText>
                            </InputGroupAddon>
                            <NumberFormat className="text-center form-control" thousandSeparator={true} placeholder="0" min={0} max={9999999} 
                                decimalScale="2" allowNegative="false" type="tel" onFocus={e => this.setState({ focus9: true })} onBlur={e => this.setState({ focus9: false })}/>
                          </InputGroup>
                        </td>
                      </tr>
                      <tr>
                        <td>Investment 4</td>
                        <td>
                          <InputGroup className={classnames({"input-group-focus": this.state.focus10})}>
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>$</InputGroupText>
                            </InputGroupAddon>
                            <NumberFormat className="text-center form-control" thousandSeparator={true} placeholder="0" min={0} max={9999999} 
                                decimalScale="2" allowNegative="false" type="tel" onFocus={e => this.setState({ focus10: true })} onBlur={e => this.setState({ focus10: false })}/>
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
                          <InputGroup className={classnames({"input-group-focus": this.state.focus11})}>
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>$</InputGroupText>
                            </InputGroupAddon>
                            <NumberFormat className="text-center form-control" thousandSeparator={true} placeholder="0" min={0} max={9999999} 
                                decimalScale="2" allowNegative="false" type="tel" onFocus={e => this.setState({ focus11: true })} onBlur={e => this.setState({ focus11: false })}/>
                          </InputGroup>
                        </td>
                      </tr>
                      <tr>
                        <td>Secondary Home</td>
                        <td>
                          <InputGroup className={classnames({"input-group-focus": this.state.focus12})}>
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>$</InputGroupText>
                            </InputGroupAddon>
                            <NumberFormat className="text-center form-control" thousandSeparator={true} placeholder="0" min={0} max={9999999} 
                                decimalScale="2" allowNegative="false" type="tel" onFocus={e => this.setState({ focus12: true })} onBlur={e => this.setState({ focus12: false })}/>
                          </InputGroup>
                        </td>
                      </tr>
                      <tr>
                        <td>Other</td>
                        <td>
                          <InputGroup className={classnames({"input-group-focus": this.state.focus13})}>
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>$</InputGroupText>
                            </InputGroupAddon>
                            <NumberFormat className="text-center form-control" thousandSeparator={true} placeholder="0" min={0} max={9999999} 
                                decimalScale="2" allowNegative="false" type="tel" onFocus={e => this.setState({ focus13: true })} onBlur={e => this.setState({ focus13: false })}/>
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
                        <th>Short Term Liabilities</th>
                        <th className="text-center">&emsp;&emsp;Amount</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Credit Card 1</td>
                        <td>
                          <InputGroup className={classnames({"input-group-focus": this.state.focus14})}>
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>$</InputGroupText>
                            </InputGroupAddon>
                            <NumberFormat className="text-center form-control" thousandSeparator={true} placeholder="0" min={0} max={9999999} 
                                decimalScale="2" allowNegative="false" type="tel" onFocus={e => this.setState({ focus14: true })} onBlur={e => this.setState({ focus14: false })}/>
                          </InputGroup>
                        </td>
                      </tr>
                      <tr>
                        <td>Credit Card 2</td>
                        <td>
                          <InputGroup className={classnames({"input-group-focus": this.state.focus15})}>
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>$</InputGroupText>
                            </InputGroupAddon>
                            <NumberFormat className="text-center form-control" thousandSeparator={true} placeholder="0" min={0} max={9999999} 
                                decimalScale="2" allowNegative="false" type="tel" onFocus={e => this.setState({ focus15: true })} onBlur={e => this.setState({ focus15: false })}/>
                          </InputGroup>
                        </td>
                      </tr>
                      <tr>
                        <td>Other</td>
                        <td>
                          <InputGroup className={classnames({"input-group-focus": this.state.focus16})}>
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>$</InputGroupText>
                            </InputGroupAddon>
                            <NumberFormat className="text-center form-control" thousandSeparator={true} placeholder="0" min={0} max={9999999} 
                                decimalScale="2" allowNegative="false" type="tel" onFocus={e => this.setState({ focus16: true })} onBlur={e => this.setState({ focus16: false })}/>
                          </InputGroup>
                        </td>
                      </tr>
                    </tbody>
                    <thead className="text-primary">
                      <tr>
                        <th>Long Term Debt</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Mortgage 1</td>
                        <td>
                          <InputGroup className={classnames({"input-group-focus": this.state.focus17})}>
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>$</InputGroupText>
                            </InputGroupAddon>
                            <NumberFormat className="text-center form-control" thousandSeparator={true} placeholder="0" min={0} max={9999999} 
                                decimalScale="2" allowNegative="false" type="tel" onFocus={e => this.setState({ focus17: true })} onBlur={e => this.setState({ focus17: false })}/>
                          </InputGroup>
                        </td>
                      </tr>
                      <tr>
                        <td>Mortgage 2</td>
                        <td>
                          <InputGroup className={classnames({"input-group-focus": this.state.focus18})}>
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>$</InputGroupText>
                            </InputGroupAddon>
                            <NumberFormat className="text-center form-control" thousandSeparator={true} placeholder="0" min={0} max={9999999} 
                                decimalScale="2" allowNegative="false" type="tel" onFocus={e => this.setState({ focus18: true })} onBlur={e => this.setState({ focus18: false })}/>
                          </InputGroup>
                        </td>
                      </tr>
                      <tr>
                        <td>Line of Credit</td>
                        <td>
                          <InputGroup className={classnames({"input-group-focus": this.state.focus19})}>
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>$</InputGroupText>
                            </InputGroupAddon>
                            <NumberFormat className="text-center form-control" thousandSeparator={true} placeholder="0" min={0} max={9999999} 
                                decimalScale="2" allowNegative="false" type="tel" onFocus={e => this.setState({ focus19: true })} onBlur={e => this.setState({ focus19: false })}/>
                          </InputGroup>
                        </td>
                      </tr>
                      <tr>
                        <td>Investment Loan</td>
                        <td>
                          <InputGroup className={classnames({"input-group-focus": this.state.focus20})}>
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>$</InputGroupText>
                            </InputGroupAddon>
                            <NumberFormat className="text-center form-control" thousandSeparator={true} placeholder="0" min={0} max={9999999} 
                                decimalScale="2" allowNegative="false" type="tel" onFocus={e => this.setState({ focus20: true })} onBlur={e => this.setState({ focus20: false })}/>
                          </InputGroup>
                        </td>
                      </tr>
                      <tr>
                        <td>Student Loan</td>
                        <td>
                          <InputGroup className={classnames({"input-group-focus": this.state.focus21})}>
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>$</InputGroupText>
                            </InputGroupAddon>
                            <NumberFormat className="text-center form-control" thousandSeparator={true} placeholder="0" min={0} max={9999999} 
                                decimalScale="2" allowNegative="false" type="tel" onFocus={e => this.setState({ focus21: true })} onBlur={e => this.setState({ focus21: false })}/>
                          </InputGroup>
                        </td>
                      </tr>
                      <tr>
                        <td>Car Loan</td>
                        <td>
                          <InputGroup className={classnames({"input-group-focus": this.state.focus22})}>
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>$</InputGroupText>
                            </InputGroupAddon>
                            <NumberFormat className="text-center form-control" thousandSeparator={true} placeholder="0" min={0} max={9999999} 
                                decimalScale="2" allowNegative="false" type="tel" onFocus={e => this.setState({ focus22: true })} onBlur={e => this.setState({ focus22: false })}/>
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
