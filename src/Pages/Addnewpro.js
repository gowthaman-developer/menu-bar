import React from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import { AiOutlineLogout } from "react-icons/ai";
export default function AddnewPro() {
  return (
    <div>
      <Row>
        <Col sm={3}></Col>
        <Col sm={9} style={{ marginTop: "-790px", marginLeft: "-11px" }}>
          <div
            className="addnewpro"
            style={{ width: "950px", backgroundColor: "white" }}
          >
            <h2 style={{ fontWeight: "normal" }}>
              <AiOutlineLogout
                color="#B6B6B6"
                fontSize="40px"
                style={{ marginRight: "20px", marginTop: "-8px" }}
              />
              Edit Providers
            </h2>

            <hr></hr>
          </div>
          <Form
            style={{ width: "50%", marginLeft: "180px", marginTop: "30px" }}
          >
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>
                Name
                <span
                  style={{
                    marginLeft: "18px",
                    fontSize: "14px",
                    color: "green",
                  }}
                >
                  Enter the name
                </span>
              </Form.Label>
              <Form.Control type="name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>
                ID
                <span
                  style={{
                    marginLeft: "18px",
                    fontSize: "14px",
                    color: "green",
                  }}
                >
                  Enter the ID
                </span>
              </Form.Label>
              <Form.Control type="name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>
                Provider ID
                <span
                  style={{
                    marginLeft: "18px",
                    fontSize: "14px",
                    color: "green",
                  }}
                >
                  Enter the Provider ID
                </span>
              </Form.Label>
              <Form.Control type="name" />
            </Form.Group>
          </Form>
          {/* <div className="add-btn">
            <div className="add-btn1">
              <Button variant="outline-secondary">Cancel</Button>
            </div>
            <div className="add-btn2">
              <Button variant="info" className="add-btn21">
                Save
              </Button>
            </div>
          </div> */}
        </Col>
      </Row>
    </div>
  );
}