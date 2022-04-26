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
import { Row, Col, Button, Container } from "react-bootstrap";
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
              marginLeft: "-50px",
              marginTop: "-830px",
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
                    <div className="head11">
                      <h5>Applications - Recent</h5>

                      <div className="button1">
                        <Button variant="info" className="but1">
                          View All
                        </Button>
                        {/* <div class="container">
                        <h1 style="text-align:center"></h1> */}
                      </div>
                    </div>
                    <hr></hr>
                    <div className="head12">
                      <h6>Application Name</h6>
                      <div className="button2">
                        <Button variant="outline-secondary" className="but2">
                          Edit
                        </Button>
                      </div>
                    </div>
                    <hr></hr>
                    <div className="head12">
                      <h6>Application Name</h6>
                      <div className="button3">
                        <Button variant="outline-secondary" className="but3">
                          Edit
                        </Button>
                      </div>
                    </div>
                    <hr></hr>
                    <div className="head13">
                      <h6>Application Name</h6>
                      <div className="button4">
                        <Button variant="outline-secondary" className="but4">
                          Edit
                        </Button>
                      </div>
                    </div>
                    <hr></hr>
                  </div>
                </div>

                <div className="right2">
                  <div className="head1">
                    <div className="head11">
                      <h5>Authentication Providers - Recent</h5>
                      <div className="button1">
                        <Button variant="info" className="but1">
                          View All
                        </Button>
                      </div>
                    </div>
                    <hr></hr>
                    <div className="head12">
                      <h6>Authentication Provider Name</h6>
                      <div className="button2">
                        <Button variant="outline-secondary" className="but2">
                          Edit
                        </Button>
                      </div>
                    </div>
                    <hr></hr>
                    <div className="head12">
                      <h6>Authentication Provider Name</h6>
                      <div className="button3">
                        <Button variant="outline-secondary" className="but3">
                          Edit
                        </Button>
                      </div>
                    </div>
                    <hr></hr>
                    <div className="head13">
                      <h6>Authentication Provider Name</h6>
                      <div className="button4">
                        <Button variant="outline-secondary" className="but4">
                          Edit
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
                    <div className="head21">
                      <h5>Shopify Stores - Recent</h5>
                      <div className="button5">
                        <Button variant="info" className="but5">
                          View All
                        </Button>
                      </div>
                    </div>
                    <hr></hr>
                    <div className="head22">
                      <h6>Store Name</h6>
                      <div className="button6">
                        <Button variant="outline-secondary" className="but6">
                          Edit
                        </Button>
                      </div>
                    </div>
                    <hr></hr>
                    <div className="head23">
                      <h6>Store Name</h6>
                      <div className="button7">
                        <Button variant="outline-secondary" className="but7">
                          Edit
                        </Button>
                      </div>
                    </div>
                    <hr></hr>
                    <div className="head24">
                      <h6>Store Name</h6>
                      <div className="button8">
                        <Button variant="outline-secondary" className="but8">
                          Edit
                        </Button>
                      </div>
                    </div>
                    <hr></hr>
                  </div>
                </div>

                <div className="right4">
                  <div className="head2">
                    <div className="head21">
                      <h5>Providers - Recent</h5>
                      <div className="button5">
                        <Button variant="info" className="but5">
                          View All
                        </Button>
                      </div>
                    </div>
                    <hr></hr>
                    <div className="head22">
                      <h6>Provider Name</h6>
                      <div className="button6">
                        <Button variant="outline-secondary" className="but6">
                          Edit
                        </Button>
                      </div>
                    </div>
                    <hr></hr>
                    <div className="head23">
                      <h6>Provider Name</h6>
                      <div className="button7">
                        <Button variant="outline-secondary" className="but7">
                          Edit
                        </Button>
                      </div>
                    </div>
                    <hr></hr>
                    <div className="head24">
                      <h6>Provider Name</h6>
                      <div className="button8">
                        <Button variant="outline-secondary" className="but8">
                          Edit
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
