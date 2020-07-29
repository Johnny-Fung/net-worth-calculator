/*!

=========================================================
*                 Net Worth Calculator
=========================================================

*/
import React from "react";
import ReactDOM from "react-dom";
import classnames from "classnames";
import "assets/css/net-worth-calculator.css";

import {HorizontalBar} from "react-chartjs-2";
import {stackedChart} from "variables/charts.js";

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

//Currency input format library
import NumberFormat from 'react-number-format';

class Mainpage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      RESTresponse: []
    };
  }

// To update chart data upon input:
  async updateChart(){
    chartData = {
      datasets: [
        { label: ' Cash and Savings',
          data: [-1*this.state.RESTresponse.cash] },
        { label: ' Investments',
          data: [-1*this.state.RESTresponse.investments] },
        {label: ' Long Term Assets',
          data: [-1*this.state.RESTresponse.longtermassets] },
        { label: ' Separator',
          data: [0.015*(this.state.RESTresponse.cash+this.state.RESTresponse.investments+this.state.RESTresponse.longtermassets+this.state.RESTresponse.longtermdebt+this.state.RESTresponse.shorttermdebt)] },
        { label: ' Long Term Debt',
          data: [this.state.RESTresponse.longtermdebt] },
        { label: ' Short Term Liabilities',
          data: [this.state.RESTresponse.shorttermdebt] }]
    }
  }

// Called when an input is edited, and set the var's state to input value
async onTodoChange(event){
  // const val = event.target.value.replace(",","");      // for less than 1M limit
  const val = event.target.value.replace(/,/g,"");  // for a 2.1B integer limit
  if (val < 0 || val > 9999999) {
    alert("Please enter an appropriate range of numbers! ($0 to $9,999,999)")
  }
  else {
    // ... allows state to dynamically defines "own" properties so the response only updates specific key of the JSON object, 
    //  otherwise editting a different input will reset all other previous inputs from its response
    let updateJSON = {...this.state.RESTresponse, 
      [event.target.name] : val}
    // Tells POST what to send:
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updateJSON)
    };
    const response = await fetch('/api/calculate', requestOptions);
    if (response.status === 400){
      alert("Please enter an appropriate range of numbers! ($0 to $9,999,999)")
    }
    else{
    //Store the POST response:
    const body = await response.json();
    this.setState({RESTresponse : body });
    this.updateChart();
    }
  }
}

  render() {
    return (
      <>
{/* Header */}
      <Navbar expand="lg">
        <Nav>
          <h2 className="title-properties">Net Worth Calculator</h2>
        </Nav>
      </Navbar>
        
{/* Chart Area */}
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
                        data={chartData}
                        options={stackedChart.options}
                      />
                    </div>
                  </CardBody>
                </Card>
            </Col>
          </Row>

{/* 3 Cards for Totals Section*/}
          <Row md="3">
            <Col md="4">
              <Card>
                <CardBody>
                  <Row md="1">
                    <Col className="text-center" sm="6">
                      <Row><CardTitle tag="h1"></CardTitle></Row>
                      <Row><CardTitle tag="h1"></CardTitle></Row>
                      <CardTitle tag="h2">Total<br/>Assets</CardTitle>
                      <Row><CardTitle tag="h1"></CardTitle></Row>
                      <Row><CardTitle tag="h1"></CardTitle></Row>
                    </Col>
                    <Col><img alt="..." src={require("assets/img/green-arrow.png")}/>
                    </Col>
                  </Row>
                  <CardTitle className="text-center" tag="h1">
                    <NumberFormat thousandSeparator={true} prefix={'$'} displayType="text" value={this.state.RESTresponse.totalassets}/>
                  </CardTitle>
                </CardBody>
              </Card>
            </Col>

            <Col md="4">
              <Card>
                <CardBody>
                  <Row md="1">
                    <Col className="text-center" sm="6">
                      <Row><CardTitle tag="h1"></CardTitle></Row>
                      <Row><CardTitle tag="h1"></CardTitle></Row>
                      <CardTitle tag="h2">Net<br/>Worth</CardTitle>
                      <Row><CardTitle tag="h1"></CardTitle></Row>
                      <Row><CardTitle tag="h1"></CardTitle></Row>
                    </Col>
                    <Col><img alt="..." src={require("assets/img/wallet.png")}/>
                    </Col>
                  </Row>
                  <CardTitle className="text-center" tag="h1">
                    <NumberFormat thousandSeparator={true} prefix={'$'} displayType="text" value={this.state.RESTresponse.networth}/>
                  </CardTitle>
                </CardBody>
              </Card>
            </Col>

            <Col md="4">
              <Card>
                <CardBody>
                  <Row md="1">
                    <Col className="text-center" sm="6">
                      <Row><CardTitle tag="h1"></CardTitle></Row>
                      <Row><CardTitle tag="h1"></CardTitle></Row>
                      <CardTitle tag="h2">Total<br/>Liabilities</CardTitle>
                      <Row><CardTitle tag="h1"></CardTitle></Row>
                      <Row><CardTitle tag="h1"></CardTitle></Row>
                    </Col>
                    <Col><img alt="..." src={require("assets/img/red-arrow.png")}/>
                    </Col>
                  </Row>
                  <CardTitle className="text-center" tag="h1">
                    <NumberFormat thousandSeparator={true} prefix={'$'} displayType="text" value={this.state.RESTresponse.totalliabilities}/>
                  </CardTitle>
                </CardBody>
              </Card>
            </Col>
          </Row>


{/* Input Tables */}

{/* Variable mapping:
13 totalassets, 9 totalliabilities;
assets - cash:6, investments:4, long term assets: 3
cash = a[1-6], investments= a[7-10], longtermassets = a[11-13]
liab - shorttermdebt: 3, longtermdebt: 6
shorttermdebt = l[1-3], longtermdebt= l[4-9]
31 lines in total */}
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
                            <NumberFormat className="text-center form-control" 
                                thousandSeparator={true} placeholder="0" min={0} max={99999999} decimalSeparator={false} type="tel"     // Number Formatting options
                                onFocus={e => this.setState({ focus1: true })} onBlur={e => this.setState({ focus1: false })}           // Mouse interaction styling
                                name="a1" value={this.state.RESTresponse.a1} onChange={e => this.onTodoChange(e)}                       // Rest Call options, set value
                                />
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
                            <NumberFormat className="text-center form-control" 
                                thousandSeparator={true} placeholder="0" min={0} max={99999999} decimalSeparator={false} type="tel" 
                                onFocus={e => this.setState({ focus2: true })} onBlur={e => this.setState({ focus2: false })}
                                name="a2" value={this.state.RESTresponse.a2} onChange={e => this.onTodoChange(e)}
                                />
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
                            <NumberFormat className="text-center form-control" 
                                thousandSeparator={true} placeholder="0" min={0} max={99999999} decimalSeparator={false} type="tel" 
                                onFocus={e => this.setState({ focus3: true })} onBlur={e => this.setState({ focus3: false })}
                                name="a3" value={this.state.RESTresponse.a3} onChange={e => this.onTodoChange(e)}
                                />
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
                              <NumberFormat className="text-center form-control" 
                                thousandSeparator={true} placeholder="0" min={0} max={99999999} decimalSeparator={false} type="tel" 
                                onFocus={e => this.setState({ focus4: true })} onBlur={e => this.setState({ focus4: false })}
                                name="a4" value={this.state.RESTresponse.a4} onChange={e => this.onTodoChange(e)}
                                />
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
                              <NumberFormat className="text-center form-control" 
                                thousandSeparator={true} placeholder="0" min={0} max={9999999} decimalSeparator={false} type="tel"
                                onFocus={e => this.setState({ focus5: true })} onBlur={e => this.setState({ focus5: false })}
                                name="a5" value={this.state.RESTresponse.a5} onChange={e => this.onTodoChange(e)}
                                />
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
                              <NumberFormat className="text-center form-control" 
                                thousandSeparator={true} placeholder="0" min={0} max={99999999} decimalSeparator={false} type="tel" 
                                onFocus={e => this.setState({ focus6: true })} onBlur={e => this.setState({ focus6: false })}
                                name="a6" value={this.state.RESTresponse.a6} onChange={e => this.onTodoChange(e)}
                                />
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
                            <NumberFormat className="text-center form-control" 
                                thousandSeparator={true} placeholder="0" min={0} max={99999999} decimalSeparator={false} type="tel" 
                                onFocus={e => this.setState({ focus7: true })} onBlur={e => this.setState({ focus7: false })}
                                name="a7" value={this.state.RESTresponse.a7} onChange={e => this.onTodoChange(e)}
                                />
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
                            <NumberFormat className="text-center form-control" 
                                thousandSeparator={true} placeholder="0" min={0} max={9999999} decimalSeparator={false} type="tel" 
                                onFocus={e => this.setState({ focus8: true })} onBlur={e => this.setState({ focus8: false })}
                                name="a8" value={this.state.RESTresponse.a8} onChange={e => this.onTodoChange(e)}
                                />
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
                            <NumberFormat className="text-center form-control" 
                                thousandSeparator={true} placeholder="0" min={0} max={99999999} decimalSeparator={false} type="tel" 
                                onFocus={e => this.setState({ focus9: true })} onBlur={e => this.setState({ focus9: false })}
                                name="a9" value={this.state.RESTresponse.a9} onChange={e => this.onTodoChange(e)}
                                />
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
                            <NumberFormat className="text-center form-control" 
                                thousandSeparator={true} placeholder="0" min={0} max={9999999} decimalSeparator={false} type="tel" 
                                onFocus={e => this.setState({ focus10: true })} onBlur={e => this.setState({ focus10: false })}
                                name="a10" value={this.state.RESTresponse.a10} onChange={e => this.onTodoChange(e)}
                                />
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
                            <NumberFormat className="text-center form-control" 
                                thousandSeparator={true} placeholder="0" min={0} max={99999999} decimalSeparator={false} type="tel" 
                                onFocus={e => this.setState({ focus11: true })} onBlur={e => this.setState({ focus11: false })}
                                name="a11" value={this.state.RESTresponse.a11} onChange={e => this.onTodoChange(e)}
                                />
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
                            <NumberFormat className="text-center form-control" 
                                thousandSeparator={true} placeholder="0" min={0} max={9999999} decimalSeparator={false} type="tel" 
                                onFocus={e => this.setState({ focus12: true })} onBlur={e => this.setState({ focus12: false })}
                                name="a12" value={this.state.RESTresponse.a12} onChange={e => this.onTodoChange(e)}
                                />
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
                            <NumberFormat className="text-center form-control" 
                                thousandSeparator={true} placeholder="0" min={0} max={9999999} decimalSeparator={false} type="tel" 
                                onFocus={e => this.setState({ focus13: true })} onBlur={e => this.setState({ focus13: false })}
                                name="a13" value={this.state.RESTresponse.a13} onChange={e => this.onTodoChange(e)}
                                />
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
                            <NumberFormat className="text-center form-control" 
                                thousandSeparator={true} placeholder="0" min={0} max={99999999} decimalSeparator={false} type="tel" 
                                onFocus={e => this.setState({ focus14: true })} onBlur={e => this.setState({ focus14: false })}
                                name="l1" value={this.state.RESTresponse.l1} onChange={e => this.onTodoChange(e)}
                                />
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
                            <NumberFormat className="text-center form-control" 
                                thousandSeparator={true} placeholder="0" min={0} max={9999999} decimalSeparator={false} type="tel" 
                                onFocus={e => this.setState({ focus15: true })} onBlur={e => this.setState({ focus15: false })}
                                name="l2" value={this.state.RESTresponse.l2} onChange={e => this.onTodoChange(e)}
                                />
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
                            <NumberFormat className="text-center form-control" 
                                thousandSeparator={true} placeholder="0" min={0} max={99999999} decimalSeparator={false} type="tel" 
                                onFocus={e => this.setState({ focus16: true })} onBlur={e => this.setState({ focus16: false })}
                                name="l3" value={this.state.RESTresponse.l3} onChange={e => this.onTodoChange(e)}
                                />
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
                            <NumberFormat className="text-center form-control" 
                                thousandSeparator={true} placeholder="0" min={0} max={99999999} decimalSeparator={false} type="tel" 
                                onFocus={e => this.setState({ focus17: true })} onBlur={e => this.setState({ focus17: false })}
                                name="l4" value={this.state.RESTresponse.l4} onChange={e => this.onTodoChange(e)}
                                />
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
                            <NumberFormat className="text-center form-control" 
                                thousandSeparator={true} placeholder="0" min={0} max={99999999} decimalSeparator={false} type="tel" 
                                onFocus={e => this.setState({ focus18: true })} onBlur={e => this.setState({ focus18: false })}
                                name="l5" value={this.state.RESTresponse.l5} onChange={e => this.onTodoChange(e)}
                                />
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
                            <NumberFormat className="text-center form-control" 
                                thousandSeparator={true} placeholder="0" min={0} max={99999999} decimalSeparator={false} type="tel" 
                                onFocus={e => this.setState({ focus19: true })} onBlur={e => this.setState({ focus19: false })}
                                name="l6" value={this.state.RESTresponse.l6} onChange={e => this.onTodoChange(e)}
                                />
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
                            <NumberFormat className="text-center form-control" 
                                thousandSeparator={true} placeholder="0" min={0} max={99999999} decimalSeparator={false} type="tel" 
                                onFocus={e => this.setState({ focus20: true })} onBlur={e => this.setState({ focus20: false })}
                                name="l7" value={this.state.RESTresponse.l7} onChange={e => this.onTodoChange(e)}
                                />
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
                            <NumberFormat className="text-center form-control" 
                                thousandSeparator={true} placeholder="0" min={0} max={99999999} decimalSeparator={false} type="tel" 
                                onFocus={e => this.setState({ focus21: true })} onBlur={e => this.setState({ focus21: false })}
                                name="l8" value={this.state.RESTresponse.l8} onChange={e => this.onTodoChange(e)}
                                />
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
                            <NumberFormat className="text-center form-control" 
                                thousandSeparator={true} placeholder="0" min={0} max={99999999} decimalSeparator={false} type="tel" 
                                onFocus={e => this.setState({ focus22: true })} onBlur={e => this.setState({ focus22: false })}
                                name="l9" value={this.state.RESTresponse.l9} onChange={e => this.onTodoChange(e)}
                                />
                          </InputGroup>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </CardBody>
              </Card>
            </Col>
          </Row>

          <Row>
            <h1> </h1>
            <h1> </h1>
          </Row>

        </div>
      </>
    );
  }
}
// Initial chart data
let chartData = {
  datasets: [
    {
      label: ' Cash and Savings',
      data: [-10],
      backgroundColor: '#C4D156'
    },
    {
      label: ' Investments',
      data: [-18.5],
      backgroundColor: '#68A03F'
    },
    {
      label: ' Long Term Assets',
      data: [-40],
      backgroundColor: '#2F9138'
    },
    {
      label: ' Separator',
      data: [1.5],
      backgroundColor: '#242c45'
    },
    {
      label: ' Long Term Debt',
      data: [23],
      backgroundColor: '#940D22'
    },
    {
      label: ' Short Term Liabilities',
      data: [7],
      backgroundColor: '#D1692E'
    }
  ]
}

ReactDOM.render(
  <Mainpage />,
  document.getElementById("root")
);
