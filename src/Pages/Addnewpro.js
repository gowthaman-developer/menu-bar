import React, { useState, useEffect, useReducer } from "react";
import axios from "axios";
import { Row, Col, Form, Button } from "react-bootstrap";
import { AiOutlineLogout } from "react-icons/ai";
import { useParams } from "react-router-dom";
export default function AddnewPro() {
  const [editData, setEditData] = useState({});
  const [value, setValue] = useState(false);
  // const [value1, dispatch] = useReducer(reducerFunction, data1);
  const params = useParams();
  const conditionalRender = () => {
    axios
      .get(`http://localhost:9000/Providers/${params.provider_Id}`)
      .then((response) => {
        setEditData(response.data);
        setValue(true);
      });
  };
  useEffect(() => {
    if (params.provider_Id === "newData") {
      return;
    }
    conditionalRender();
  }, []);
  const nameHandler = (event) => {
    console.log(editData);
    setEditData((previous) => ({
      ...previous,
      username: event.target.value,
    }));
  };
  const providerHandler = (event) => {
    setEditData((previous) => ({
      ...previous,
      provider_id: event.target.value,
    }));
  };
  const onSaveHandler = () => {
    if (params.provider_Id === "newData") {
      const data = [editData];
      axios.post("http://localhost:9000/Providers", data);
    } else {
      const putData = {
        username: editData.username,
        provider_Id: editData.provider_Id,
      };
      axios.put(
        `http://localhost:9000/Providers/${params.provider_Id}`,
        editData
      );
    }
  };
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
                    color: "#C8C8C8",
                  }}
                >
                  Enter the name
                </span>
              </Form.Label>
              {value ? (
                <Form.Control
                  type="name"
                  value={editData.username}
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
                Provider ID
                <span
                  style={{
                    marginLeft: "18px",
                    fontSize: "14px",
                    color: "#C8C8C8",
                  }}
                >
                  Enter the Provider ID
                </span>
              </Form.Label>
              {value ? (
                <Form.Control
                  type="id"
                  value={editData.provider_id}
                  onChange={providerHandler}
                />
              ) : (
                <Form.Control type="id" onChange={providerHandler} />
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
                  href="/AuthenticationProvider"
                  style={{ color: "grey", textDecoration: "none" }}
                >
                  cancel
                </a>
              </Button>
            </div>
            <div
              className="add-btn2"
              style={{ backgroundColor: "white", paddingLeft: "5%" }}
            >
              <Button
                variant="info"
                className="add-btn21"
                onClick={onSaveHandler}
              >
                <a
                  href="/Providers"
                  style={{
                    backgroundColor: "sky blue",
                    textDecoration: "none",
                    color: "black",
                  }}
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
