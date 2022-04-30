import React from "react";
import { Row, Col, Button, Table } from "react-bootstrap";
import { IoIosLock } from "react-icons/io";
//import "../css/Authentication.css";
export default function Authentication() {
  return (
    <div style={{ backgroundColor: "white" }}>
      <Row>
        <Col sm={3} style={{ backgroundColor: "white" }}></Col>
        <Col
          sm={9}
          style={{
            marginTop: "-790px",
            marginLeft: "-11px",
            backgroundColor: "white",
          }}
        >
          <div className="authentication" style={{ backgroundColor: "white" }}>
            <h2 style={{ fontWeight: "normal" }}>
              <IoIosLock
                color="#B6B6B6"
                fontSize="40px"
                style={{
                  marginRight: "20px",
                  marginTop: "-7px",
                }}
              />
              Authentication Providers{" "}
              <Button variant="info" className="appbtn">
                Add New
              </Button>
              {/* <hr></hr> */}
            </h2>

            <hr></hr>
          </div>
          <Table
            style={{
              marginTop: "25px",
              width: "970px",
              backgroundColor: "white",
            }}
          >
            <thead>
              <tr>
                <th>Name</th>
                <th>ID</th>
                <th>Provider ID</th>
                <th>Client ID</th>
                <th>Client Secret</th>
                <th>App ID</th>
                <th>Global</th>
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
                <td>8891</td>
                <td>State</td>
                <td>True</td>
                <td>State</td>
                <td>
                  <Button variant="outline-secondary">
                    <a
                      href="/AddNew3"
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
                <td>8891</td>
                <td>State</td>
                <td>True</td>
                <td>State</td>
                <td>
                  <Button variant="outline-secondary">
                    <a
                      href="/AddNew3"
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
                <td>8891</td>
                <td>State</td>
                <td>True</td>
                <td>State</td>
                <td>
                  <Button variant="outline-secondary">
                    <a
                      href="/AddNew3"
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
                <td>8891</td>
                <td>State</td>
                <td>True</td>
                <td>State</td>
                <td>
                  <Button variant="outline-secondary">
                    <a
                      href="/AddNew3"
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
                <td>8891</td>
                <td>State</td>
                <td>True</td>
                <td>State</td>
                <td>
                  <Button variant="outline-secondary">
                    <a
                      href="/AddNew3"
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
                <td>8891</td>
                <td>State</td>
                <td>True</td>
                <td>State</td>
                <td>
                  <Button variant="outline-secondary">
                    <a
                      href="/AddNew3"
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
    </div>
  );
}
