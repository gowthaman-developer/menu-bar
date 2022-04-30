import React from "react";
import { Row, Col, Button, Table } from "react-bootstrap";
import { AiOutlineLogout } from "react-icons/ai";

export default function Providers() {
  return (
    <div>
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
            className="dash"
            style={{
              backgroundColor: "white",
              marginLeft: "-11px",
            }}
          >
            <h2 style={{ fontWeight: "normal" }}>
              <AiOutlineLogout
                color="#B6B6B6"
                fontSize="40px"
                style={{ marginRight: "20px", marginTop: "-7px" }}
              />
              Providers{" "}
              <Button variant="info" className="appbtn">
                Add New
              </Button>
              <hr></hr>
            </h2>
          </div>

          <Table
            // responsive="lg"
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
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Provider Name</td>
                <td>8891</td>
                <td>Secret</td>
                <td>
                  <Button variant="outline-secondary">
                    <a
                      href="/AddNew4"
                      style={{ color: "grey", textDecoration: "none" }}
                    >
                      Edit
                    </a>
                  </Button>
                </td>
              </tr>
              <tr>
                <td>Provider Name</td>
                <td>8891</td>
                <td>Secret</td>
                <td>
                  <Button variant="outline-secondary">
                    <a
                      href="/AddNew4"
                      style={{ color: "grey", textDecoration: "none" }}
                    >
                      Edit
                    </a>
                  </Button>
                </td>
              </tr>
              <tr>
                <td>Provider Name</td>
                <td>8891</td>
                <td>Secret</td>
                <td>
                  <Button variant="outline-secondary">
                    <a
                      href="/AddNew4"
                      style={{ color: "grey", textDecoration: "none" }}
                    >
                      Edit
                    </a>
                  </Button>
                </td>
              </tr>
              <tr>
                <td>Provider Name</td>
                <td>8891</td>
                <td>Secret</td>
                <td>
                  <Button variant="outline-secondary">
                    <a
                      href="/AddNew4"
                      style={{ color: "grey", textDecoration: "none" }}
                    >
                      Edit
                    </a>
                  </Button>
                </td>
              </tr>
              <tr>
                <td>Provider Name</td>
                <td>8891</td>
                <td>Secret</td>
                <td>
                  <Button variant="outline-secondary">
                    <a
                      href="/AddNew4"
                      style={{ color: "grey", textDecoration: "none" }}
                    >
                      Edit
                    </a>
                  </Button>
                </td>
              </tr>
              <tr>
                <td>Provider Name</td>
                <td>8891</td>
                <td>Secret</td>
                <td>
                  <Button variant="outline-secondary">
                    <a
                      href="/AddNew4"
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

// import React from "react";

// export default function Providers() {
//   return <div>Providers</div>;
// }
