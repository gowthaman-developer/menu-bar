import React from "react";
import { Row, Col } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { FaShopify } from "react-icons/fa";
export default function ViewAsllShop() {
  const { state } = useLocation();
  return (
    <div>
      <Row>
        <Col sm={3}></Col>
        <Col sm={9} style={{ marginTop: "-790px", marginLeft: "-11px" }}>
          <div
            className="view-shop"
            style={{ width: "950px", backgroundColor: "white" }}
          >
            <h2 style={{ fontWeight: "normal" }}>
              <FaShopify
                color="#B6B6B6"
                fontSize="40px"
                style={{ marginRight: "20px" }}
              />
              View Shopify Stores
            </h2>

            <hr></hr>
          </div>

          <Row style={{ marginTop: "30px", backgroundColor: "white" }}>
            <Col>
              <div className="shop1">
                <h5
                  className="shop11"
                  style={{ fontWeight: "bold", backgroundColor: "white" }}
                >
                  Name
                </h5>
              </div>
              <div
                className="shop1-sub"
                style={{ color: "rgb(157, 160, 160)", marginTop: "10px" }}
              >
                <h5>{state.name}</h5>
              </div>
            </Col>
            <Col>
              <div className="shop2">
                <h5 className="shop21" style={{ fontWeight: "bold" }}>
                  ID
                </h5>
              </div>

              <div
                className="shop2-sub"
                style={{ color: "rgb(157, 160, 160)", marginTop: "10px" }}
              >
                <h5>{state._id}</h5>
              </div>
            </Col>
          </Row>
          <hr style={{ width: "89%", backgroundColor: "white" }}></hr>
          <Row style={{ fontWeight: "normal", backgroundColor: "white" }}>
            <Col>
              <div className="shop3">
                <h5 className="shop31" style={{ fontWeight: "bold" }}>
                  Secret
                </h5>
              </div>
              <div
                className="shop3-sub"
                style={{ color: "rgb(157, 160, 160)", marginTop: "10px" }}
              >
                <h5>{state.secret}</h5>
              </div>
            </Col>
          </Row>
          <hr style={{ width: "89%" }}></hr>
        </Col>
      </Row>
    </div>
  );
}
