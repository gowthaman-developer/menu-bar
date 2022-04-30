// import React from "react";
// import "./Pages.css";
// import { DropdownButton, Dropdown } from "react-bootstrap";
// function Applications() {
//   return (
//     <div>
//       <h1> Applications page</h1>
//     </div>
//   );
// }

// export default Applications;

// import React from "react";

// export const Applications = () => {
//   return (
//     <div className="applications">
//       <h1>Applications</h1>
//     </div>
//   );
// };

// export const AllApplications = () => {
//   return (
//     <div className="all-applications">
//       <h1>All Applications</h1>
//     </div>
//   );
// };

// export const AddNewApp = () => {
//   return (
//     <div className="add-new-app">
//       <h1>Add New</h1>
//     </div>
//   );
// };

import React from "react";
import { Row, Col, Container, Table, Button, Form } from "react-bootstrap";
// import Sidebar from "./Sidebar";
// import "../js/Applications.js";
export default function Applications() {
  return (
    <div>
      <Container>
        <Row>
          <Col sm={3}></Col>
          <Col
            sm={9}
            style={{
              marginTop: "-800px",
              marginLeft: "-50px",
              backgroundColor: "white",
            }}
          >
            <div
              className="applications"
              style={{
                marginTop: "10px",
                marginLeft: "-10px",
                marginBottom: "20px",
              }}
            >
              <h2 style={{ fontWeight: "normal" }}>
                <img
                  src={require("file:///Users/gowthamganesan/Downloads/Group%20203.png")}
                  style={{ marginRight: "20px" }}
                />
                Applications{"  "}
                <Button variant="info" className="appbtn">
                  Add New
                </Button>
              </h2>
            </div>
            <hr></hr>
            <Table
              responsive="lg"
              style={{ marginTop: "25px", width: "970px" }}
            >
              <thead>
                <tr>
                  <th>Name</th>
                  <th>ID</th>
                  <th>Client ID</th>
                  <th>Client Secret</th>
                  <th>Redirect URLs</th>
                  <th>State</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Application Name</td>
                  <td>8891</td>
                  <td>8891</td>
                  <td>8891</td>
                  <td>https://www.universalmusic.com</td>
                  <td>State</td>
                  <td>
                    <Button variant="outline-secondary">
                      <a
                        href="/AddNew1"
                        style={{ color: "grey", textDecoration: "none" }}
                      >
                        Edit
                      </a>
                    </Button>
                  </td>
                </tr>
                <tr>
                  <td>Application Name</td>
                  <td>8891</td>
                  <td>8891</td>
                  <td>8891</td>
                  <td>https://www.universalmusic.com</td>
                  <td>State</td>
                  <td>
                    <Button variant="outline-secondary">
                      <a
                        href="/AddNew1"
                        style={{ color: "grey", textDecoration: "none" }}
                      >
                        Edit
                      </a>
                    </Button>
                  </td>
                </tr>
                <tr>
                  <td>Application Name</td>
                  <td>8891</td>
                  <td>8891</td>
                  <td>8891</td>
                  <td>https://www.universalmusic.com</td>
                  <td>State</td>
                  <td>
                    <Button variant="outline-secondary">
                      <a
                        href="/AddNew1"
                        style={{ color: "grey", textDecoration: "none" }}
                      >
                        Edit
                      </a>
                    </Button>
                  </td>
                </tr>
                <tr>
                  <td>Application Name</td>
                  <td>8891</td>
                  <td>8891</td>
                  <td>8891</td>
                  <td>https://www.universalmusic.com</td>
                  <td>State</td>
                  <td>
                    <Button variant="outline-secondary">
                      <a
                        href="/AddNew1"
                        style={{ color: "grey", textDecoration: "none" }}
                      >
                        Edit
                      </a>
                    </Button>
                  </td>
                </tr>
                <tr>
                  <td>Application Name</td>
                  <td>8891</td>
                  <td>8891</td>
                  <td>8891</td>
                  <td>https://www.universalmusic.com</td>
                  <td>State</td>
                  <td>
                    <Button variant="outline-secondary">
                      <a
                        href="/AddNew1"
                        style={{ color: "grey", textDecoration: "none" }}
                      >
                        Edit
                      </a>
                    </Button>
                  </td>
                </tr>
                <tr>
                  <td>Application Name</td>
                  <td>8891</td>
                  <td>8891</td>
                  <td>8891</td>
                  <td>https://www.universalmusic.com</td>
                  <td>State</td>
                  <td>
                    <Button variant="outline-secondary">
                      <a
                        href="/AddNew1"
                        style={{ color: "grey", textDecoration: "none" }}
                      >
                        Edit
                      </a>
                    </Button>
                  </td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
