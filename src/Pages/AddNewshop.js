import React, { useState, useEffect } from "react";
import axios from "axios";
import { Row, Col, Form, Button } from "react-bootstrap";
import { FaShopify } from "react-icons/fa";
import { useParams } from "react-router-dom";
export default function AddnewShop() {
  const [editData, setEditData] = useState({});
  const [value, setValue] = useState(false);
  // const [value1, dispatch] = useReducer(reducerFunction, data1);
  const params = useParams();
  const conditionalRender = () => {
    console.log("no");
    axios
      .get(`http://localhost:9000/shopifystores/${params.shopify_Id}`)
      .then((response) => {
        setEditData(response.data);
        setValue(true);
      });
  };
  useEffect(() => {
    if (params.shopify_Id === "newData") {
      console.log("yes");
      return;
    }
    conditionalRender();
  }, []);
  const nameHandler = (event) => {
    setEditData((previous) => ({
      ...previous,
      name: event.target.value,
    }));
  };
  const IDHandler = (event) => {
    setEditData((previous) => ({
      ...previous,
      _id: event.target.value,
    }));
  };
  const secretHandler = (event) => {
    setEditData((previous) => ({
      ...previous,
      secret: event.target.value,
    }));
  };

  const onSaveHandler = () => {
    if (params.shopify_Id === "newData") {
      console.log("yesss");
      const data = [editData];
      axios.post("http://localhost:9000/shopifystores/", data);
    } else {
      const putData = {
        name: editData.name,
        id: editData._id,
        secret: editData.secret,
      };
      axios.put(
        `http://localhost:9000/shopifystores/${params.shopify_Id}`,
        putData
      );
    }
  };
  return (
    <div>
      <Row>
        <Col sm={3}></Col>
        <Col sm={9} style={{ marginTop: "-790px", marginLeft: "-11px" }}>
          <div
            className="addnewapp"
            style={{ width: "950px", backgroundColor: "white" }}
          >
            <h2 style={{ fontWeight: "normal" }}>
              <FaShopify
                color="#B6B6B6"
                fontSize="40px"
                style={{ marginRight: "20px", marginTop: "-8px" }}
              />
              Shopify Stores
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
                    color: "#C8C8C8",
                  }}
                >
                  Enter the name
                </span>
              </Form.Label>
              {value ? (
                <Form.Control
                  type="name"
                  value={editData.name}
                  onChange={nameHandler}
                />
              ) : (
                <Form.Control type="name" onChange={nameHandler} />
              )}
            </Form.Group>

            {/* <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>
                ID
                <span
                  style={{
                    marginLeft: "18px",
                    fontSize: "14px",
                    color: "#C8C8C8",
                  }}
                >
                  Enter the ID
                </span>
              </Form.Label>
              <Form.Control type="name" />
            </Form.Group> */}

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>
                Secret
                <span
                  style={{
                    marginLeft: "18px",
                    fontSize: "14px",
                    color: "#C8C8C8",
                  }}
                >
                  Enter the Secret
                </span>
              </Form.Label>
              {value ? (
                <Form.Control
                  type="name"
                  value={editData.secret}
                  onChange={secretHandler}
                />
              ) : (
                <Form.Control type="name" onChange={secretHandler} />
              )}
            </Form.Group>
          </Form>
          <div
            className="add-btn"
            style={{ display: "flex", backgroundColor: "white" }}
          >
            <div
              className="add-btn1"
              style={{ backgroundColor: "white", paddingLeft: "50%" }}
            >
              <Button variant="outline-secondary">
                <a
                  href="/Shopifystores"
                  style={{ color: "grey", textDecoration: "none" }}
                >
                  cancel
                </a>
              </Button>
            </div>
            <div
              className="add-btn2"
              style={{ backgroundColor: "white", paddingLeft: "4%" }}
            >
              <Button
                variant="info"
                className="add-btn21"
                onClick={onSaveHandler}
              >
                <a
                  href="/Shopifystores"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  Save
                </a>
              </Button>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}
