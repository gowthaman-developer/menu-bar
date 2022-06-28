import React from "react";
import { Row, Col } from "react-bootstrap";
import { useLocation } from "react-router-dom";
// import "../css/ViewallAuth.css";
import { IoIosLock } from "react-icons/io";
export default function ViewAllAut() {
  const { state } = useLocation();
  console.log(state);
  return (
    <div>
      <Row>
        <Col sm={3}></Col>
        <Col
          sm={9}
          style={{
            marginTop: "-790px",
            marginLeft: "-11px",
            backgroundColor: "white",
          }}
        >
          <div
            className="addnewapp"
            style={{ width: "950px", backgroundColor: "white" }}
          >
            <h2 style={{ fontWeight: "normal" }}>
              <IoIosLock
                color="#B6B6B6"
                fontSize="40px"
                style={{
                  marginRight: "20px",
                  marginTop: "-7px",
                  backgroundColor: "white",
                }}
              />
              View Authentication Providers
            </h2>

            <hr></hr>
          </div>

          <Row style={{ marginTop: "30px", backgroundColor: "white" }}>
            <Col>
              <div className="au1">Name</div>
              <div className="au1-sub">
                <h5>{state.name}</h5>
              </div>
              <hr className="auhr"></hr>
            </Col>
            <Col>
              <div className="au2">ID</div>
              <div className="au2-sub">
                <h5>{state._id}</h5>
              </div>
              <hr className="auhr"></hr>
            </Col>
          </Row>
          <hr className="auhr"></hr>

          <Row style={{ marginTop: "30px", backgroundColor: "white" }}>
            <Col>
              <div className="au1">Provider ID</div>
              <div className="au1-sub">
                <h5>{state.provider_id}</h5>
              </div>
              <hr className="auhr"></hr>
            </Col>
            <Col>
              <div className="au2">Client ID</div>
              <div className="au2-sub">
                <h5>{state.client_id}</h5>
              </div>
              <hr className="auhr"></hr>
            </Col>
          </Row>
          {/* <hr className="auhr"></hr> */}

          <Row style={{ marginTop: "30px", backgroundColor: "white" }}>
            <Col>
              <div className="au1">Client Secret</div>
              <div className="au1-sub">
                <h5>{state.client_secret}</h5>
              </div>
              <hr className="auhr"></hr>
            </Col>
            <Col>
              <div className="au2">App ID</div>
              <div className="au2-sub">
                <h5>{state.app_id}</h5>
              </div>
              <hr className="auhr"></hr>
            </Col>
          </Row>
          <hr className="auhr"></hr>

          <Row style={{ marginTop: "30px", backgroundColor: "white" }}>
            <Col>
              <div className="au1">Global</div>
              <div className="au1-sub">
                <h5>{state.global.toString()}</h5>
              </div>
              <hr className="auhr"></hr>
            </Col>
            <Col>
              <div className="au2">State</div>
              <div className="au2-sub">
                <h5>{state.state}</h5>
              </div>
              <hr className="auhr"></hr>
            </Col>
          </Row>
          <hr className="auhr"></hr>
        </Col>
      </Row>
    </div>
  );
}
