import React from "react";
import { useLocation } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
export default function ViewAllApp() {
  const { state } = useLocation();
  console.log(state);
  return (
    <div>
      <Row>
        <Col sm={3}></Col>
        <Col sm={9} style={{ marginTop: "-790px", marginLeft: "-10px" }}>
          <div
            className="addnewapp"
            style={{ width: "950px", backgroundColor: "white" }}
          >
            <h2 style={{ fontWeight: "normal" }}>
              <img
                src={require("file:///Users/gowthamganesan/Downloads/Group%20203.png")}
                style={{ marginRight: "20px" }}
              />
              View Applications
            </h2>

            <hr></hr>
          </div>
          <Row style={{ marginTop: "20px", backgroundColor: "white" }}>
            <Col>
              <div className="v1">Name</div>
              <div className="v1-sub">
                <h5>{state.name}</h5>
              </div>
              <hr className="hr"></hr>
              <br></br>

              <div className="v11">Client ID</div>
              <div className="v11-sub">
                <h5>{state.client_id}</h5>
              </div>
              <hr className="hr"></hr>

              <br></br>

              <div className="v12">Redirect URLs</div>
              <div className="v12-sub">
                <h5>{state.RedirectURLs}</h5>
              </div>
              <hr className="hr"></hr>
            </Col>
            <Col>
              <div className="v2">ID</div>
              <div className="v2-sub">
                <h5>{state._id}</h5>
              </div>
              <hr className="hr2"></hr>
              <br></br>
              <div className="v21">Client Secret</div>
              <div className="v21-sub">
                <h5>{state.client_secret}</h5>
              </div>
              <hr className="hr2"></hr>
              <br></br>

              <div className="v22">State</div>
              <div className="v22-sub">
                <h5>{state.state}</h5>
              </div>
              <hr className="hr2"></hr>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}
