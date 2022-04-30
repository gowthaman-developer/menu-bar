// import React from "react";

// function Dashboard() {
//   return (
//     <div className="dashboard">
//       <p style={{ fontSize: "35px" }}>
//         <img
//           src={require("file:///Users/gowthamganesan/Downloads/Group%20197.png")}
//           style={{ margintop: "-1700px", width: "35px", padding: "4px" }}
//         />
//         Dashboard
//       </p>
//     </div>
//   );
// }

// export default Dashboard;

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Button, Container, Nav } from "react-bootstrap";
import "../App.css";

export default function Dashboard() {
  return (
    <div>
      <Container>
        <Row>
          <Col sm={3} style={{ backgroundColor: "white" }}></Col>
          <Col
            sm={9}
            style={{
              marginLeft: "-70px",
              marginTop: "-810px",
              backgroundColor: "white",
            }}
          >
            <div className="dash" style={{ marginTop: "20px" }}>
              <h2 style={{ fontWeight: "normal" }}>
                <img
                  src={require("file:///Users/gowthamganesan/Downloads/Group%20197.png")}
                  style={{ marginRight: "20px" }}
                />
                Dashboard
              </h2>
              <hr></hr>
            </div>
            <Row style={{ backgroundColor: "white" }} xs={3} md={2} lg={8}>
              <Col>
                <div className="right1">
                  <div className="head1">
                    <div className="head11" style={{ display: "flex" }}>
                      <h5>Applications - Recent</h5>

                      <div className="button1" style={{ display: "flex" }}>
                        <Button
                          variant="info"
                          s
                          style={{ marginLeft: "200px" }}
                        >
                          <Nav.Link href="/Applications">ViewAll</Nav.Link>
                          {/* View All */}
                        </Button>
                        {/* <div class="container">
                        <h1 style="text-align:center"></h1> */}
                      </div>
                    </div>
                    <hr></hr>
                    <div className="head12" style={{ display: "flex" }}>
                      <h6>Application Name</h6>
                      <div className="button2" style={{ marginLeft: "260px" }}>
                        <Button
                          variant="outline-secondary"
                          className="but2"
                          style={{ paddingLeft: "20px", paddingRight: "25px" }}
                        >
                          <a
                            href="/AddNew1"
                            style={{ color: "grey", textDecoration: "none" }}
                          >
                            Edit
                          </a>
                        </Button>
                      </div>
                    </div>
                    <hr></hr>
                    <div className="head12" style={{ display: "flex" }}>
                      <h6>Application Name</h6>
                      <div className="button3" style={{ marginLeft: "260px" }}>
                        <Button
                          variant="outline-secondary"
                          className="but3"
                          style={{ paddingLeft: "20px", paddingRight: "25px" }}
                        >
                          <a
                            href="/AddNew1"
                            style={{ color: "grey", textDecoration: "none" }}
                          >
                            Edit
                          </a>
                        </Button>
                      </div>
                    </div>
                    <hr></hr>
                    <div className="head13" style={{ display: "flex" }}>
                      <h6>Application Name</h6>
                      <div className="button4" style={{ marginLeft: "260px" }}>
                        <Button
                          variant="outline-secondary"
                          className="but4"
                          style={{ paddingLeft: "20px", paddingRight: "25px" }}
                        >
                          <a
                            href="/AddNew1"
                            style={{ color: "grey", textDecoration: "none" }}
                          >
                            Edit
                          </a>
                        </Button>
                      </div>
                    </div>
                    <hr></hr>
                  </div>
                </div>

                <div className="right2">
                  <div className="head1">
                    <div className="head11" style={{ display: "flex" }}>
                      <h5>Authentication Providers - Recent</h5>
                      <div className="button1">
                        <Button
                          variant="info"
                          className="but1"
                          style={{ marginLeft: "85px" }}
                        >
                          <Nav.Link href="/AuthenticationProviders">
                            ViewAll
                          </Nav.Link>
                        </Button>
                      </div>
                    </div>
                    <hr></hr>
                    <div className="head12" style={{ display: "flex" }}>
                      <h6>Authentication Provider Name</h6>
                      <div className="button2" style={{ marginLeft: "180px" }}>
                        <Button
                          variant="outline-secondary"
                          className="but2"
                          style={{ paddingLeft: "20px", paddingRight: "25px" }}
                        >
                          <a
                            href="/AddNew3"
                            style={{
                              textDecoration: "none",
                              color: "grey",
                            }}
                          >
                            Edit
                          </a>
                        </Button>
                      </div>
                    </div>
                    <hr></hr>
                    <div className="head12" style={{ display: "flex" }}>
                      <h6>Authentication Provider Name</h6>
                      <div className="button3" style={{ marginLeft: "180px" }}>
                        <Button
                          variant="outline-secondary"
                          className="but3"
                          style={{ paddingLeft: "20px", paddingRight: "25px" }}
                        >
                          <a
                            href="/AddNew3"
                            style={{ color: "grey", textDecoration: "none" }}
                          >
                            Edit
                          </a>
                        </Button>
                      </div>
                    </div>
                    <hr></hr>
                    <div className="head13" style={{ display: "flex" }}>
                      <h6>Authentication Provider Name</h6>
                      <div className="button4" style={{ marginLeft: "180px" }}>
                        <Button
                          variant="outline-secondary"
                          className="but4"
                          style={{ paddingLeft: "20px", paddingRight: "25px" }}
                        >
                          <a
                            href="/AddNew3"
                            style={{ color: "grey", textDecoration: "none" }}
                          >
                            Edit
                          </a>
                        </Button>
                      </div>
                    </div>
                    <hr></hr>
                  </div>
                </div>
              </Col>
              <Col>
                <div className="right3">
                  <div className="head2">
                    <div className="head21" style={{ display: "flex" }}>
                      <h5>Shopify Stores - Recent</h5>
                      <div className="button5">
                        <Button
                          variant="info"
                          className="but5"
                          style={{ marginLeft: "170px" }}
                        >
                          <Nav.Link href="/Shopifystores">ViewAll</Nav.Link>
                        </Button>
                      </div>
                    </div>
                    <hr></hr>
                    <div className="head22" style={{ display: "flex" }}>
                      <h6>Store Name</h6>
                      <div className="button6" style={{ marginLeft: "300px" }}>
                        <Button
                          variant="outline-secondary"
                          className="but6"
                          style={{ paddingLeft: "20px", paddingRight: "25px" }}
                        >
                          <a
                            href="/AddNew2"
                            style={{ color: "grey", textDecoration: "none" }}
                          >
                            Edit
                          </a>
                        </Button>
                      </div>
                    </div>
                    <hr></hr>
                    <div className="head23" style={{ display: "flex" }}>
                      <h6>Store Name</h6>
                      <div className="button7" style={{ marginLeft: "300px" }}>
                        <Button
                          variant="outline-secondary"
                          className="but7"
                          style={{ paddingLeft: "20px", paddingRight: "25px" }}
                        >
                          <a
                            href="/AddNew2"
                            style={{ color: "grey", textDecoration: "none" }}
                          >
                            Edit
                          </a>
                        </Button>
                      </div>
                    </div>
                    <hr></hr>
                    <div className="head24" style={{ display: "flex" }}>
                      <h6>Store Name</h6>
                      <div className="button8" style={{ marginLeft: "300px" }}>
                        <Button
                          variant="outline-secondary"
                          className="but8"
                          style={{ paddingLeft: "20px", paddingRight: "25px" }}
                        >
                          <a
                            href="/AddNew2"
                            style={{ color: "grey", textDecoration: "none" }}
                          >
                            Edit
                          </a>
                        </Button>
                      </div>
                    </div>
                    <hr></hr>
                  </div>
                </div>

                <div className="right4">
                  <div className="head2">
                    <div className="head21" style={{ display: "flex" }}>
                      <h5>Providers - Recent</h5>
                      <div className="button5">
                        <Button
                          variant="info"
                          className="but5"
                          style={{ marginLeft: "220px" }}
                        >
                          <Nav.Link href="/Providers">ViewAll</Nav.Link>
                        </Button>
                      </div>
                    </div>
                    <hr></hr>
                    <div className="head22" style={{ display: "flex" }}>
                      <h6>Provider Name</h6>
                      <div className="button6" style={{ marginLeft: "280px" }}>
                        <Button
                          variant="outline-secondary"
                          className="but9"
                          style={{ paddingLeft: "20px", paddingRight: "25px" }}
                        >
                          <a
                            href="/AddNew4"
                            style={{ color: "grey", textDecoration: "none" }}
                          >
                            Edit
                          </a>
                        </Button>
                      </div>
                    </div>
                    <hr></hr>
                    <div className="head23" style={{ display: "flex" }}>
                      <h6>Provider Name</h6>
                      <div className="button10" style={{ marginLeft: "280px" }}>
                        <Button
                          variant="outline-secondary"
                          className="but7"
                          style={{ paddingLeft: "20px", paddingRight: "25px" }}
                        >
                          <a
                            href="/AddNew4"
                            style={{ color: "grey", textDecoration: "none" }}
                          >
                            Edit
                          </a>
                        </Button>
                      </div>
                    </div>
                    <hr></hr>
                    <div className="head24" style={{ display: "flex" }}>
                      <h6>Provider Name</h6>
                      <div className="button11" style={{ marginLeft: "280px" }}>
                        <Button
                          variant="outline-secondary"
                          className="but8"
                          style={{ paddingLeft: "20px", paddingRight: "25px" }}
                        >
                          <a
                            href="/AddNew4"
                            style={{ color: "grey", textDecoration: "none" }}
                          >
                            Edit
                          </a>
                        </Button>
                      </div>
                    </div>
                    <hr></hr>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
